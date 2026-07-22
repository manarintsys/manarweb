-- Drop OLD conflicting trigger from previous attempts
DROP TRIGGER IF EXISTS notify_on_application ON public.applications;
DROP FUNCTION IF EXISTS public.notify_on_application();

-- Drop our new trigger too so we can recreate with correct signature
DROP TRIGGER IF EXISTS on_new_application ON public.applications;
DROP FUNCTION IF EXISTS public.handle_new_application();

-- Recreate with correct pg_net signature
-- net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds int)
CREATE OR REPLACE FUNCTION public.handle_new_application()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://pvjsfxlqhypklbhrnbgj.supabase.co/functions/v1/notify-application',
    body := jsonb_build_object('record', row_to_json(NEW)),
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2anNmeGxxaHlwa2xiaHJuYmdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0NzU0OTksImV4cCI6MjEwMDA1MTQ5OX0.kG_Z_mU6y24-7kEY-j-zrfymh5ytpVSBEKiIS8jp-OI'
    )
  );
  RETURN NEW;
EXCEPTION WHEN others THEN
  -- Log error but don't block the insert
  RAISE LOG 'notify_application failed: %', SQLERRM;
  RETURN NEW;
END;
$$;

-- Create trigger
CREATE TRIGGER on_new_application
  AFTER INSERT ON public.applications
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_application();

-- Verify
SELECT trigger_name, event_manipulation FROM information_schema.triggers 
WHERE event_object_table = 'applications' ORDER BY trigger_name;
