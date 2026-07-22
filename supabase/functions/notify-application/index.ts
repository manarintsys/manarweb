// Supabase Edge Function: notify-application
// Triggered by Database Webhook on applications table INSERT
// Sends a branded Manar email via Resend API

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const TO_EMAIL = 'talent@manar.pk';
const FROM_EMAIL = 'Manar Careers <noreply@manar.pk>';

// Role → accent colour mapping (matches manar.pk job page badges)
function getRoleAccent(role: string): { color: string; border: string; label: string } {
  const r = role.toLowerCase();
  if (r.includes('nibras'))  return { color: '#64A0F0', border: '#64A0F0', label: 'NIBRAS' };
  if (r.includes('simah'))   return { color: '#C9A84C', border: '#C9A84C', label: 'SIMAH' };
  if (r.includes('sijill'))  return { color: '#78C8B4', border: '#78C8B4', label: 'SIJILL' };
  if (r.includes('fahm'))    return { color: '#C9A84C', border: '#C9A84C', label: 'FAHM' };
  return { color: '#9696A4', border: '#9696A4', label: 'MANAR' };
}

function buildHtml(record: {
  name: string;
  email: string;
  role: string;
  message?: string;
  cv_path?: string;
  created_at?: string;
}): string {
  const { name, email, role, message, cv_path, created_at } = record;
  const accent = getRoleAccent(role);
  const date = created_at
    ? new Date(created_at).toLocaleString('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit', timeZone: 'UTC'
      }) + ' UTC'
    : new Date().toISOString();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Application — ${role}</title>
</head>
<body style="margin:0;padding:0;background-color:#000000;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#000000;min-height:100vh;">
    <tr>
      <td align="center" style="padding:40px 16px;">

        <!-- Card -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;">

          <!-- Header -->
          <tr>
            <td style="padding-bottom:32px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <!-- Wordmark -->
                    <span style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#F0F0FA;">MANAR</span>
                  </td>
                  <td align="right">
                    <!-- Role badge -->
                    <span style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;padding:4px 10px;border:1px solid ${accent.border};color:${accent.color};">${accent.label}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="border-top:1px solid rgba(240,240,250,0.10);padding-bottom:28px;"></td>
          </tr>

          <!-- Title -->
          <tr>
            <td style="padding-bottom:6px;">
              <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#9696A4;">New Application</p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom:32px;">
              <h1 style="margin:0;font-size:28px;font-weight:800;letter-spacing:0.01em;text-transform:uppercase;color:#F0F0FA;line-height:1.1;">${role}</h1>
            </td>
          </tr>

          <!-- Applicant details block -->
          <tr>
            <td style="background:rgba(240,240,250,0.03);border:1px solid rgba(240,240,250,0.10);padding:24px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">

                <!-- Name -->
                <tr>
                  <td style="padding-bottom:16px;vertical-align:top;width:90px;">
                    <span style="font-size:10px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#9696A4;">Name</span>
                  </td>
                  <td style="padding-bottom:16px;vertical-align:top;">
                    <span style="font-size:15px;color:#F0F0FA;">${escapeHtml(name)}</span>
                  </td>
                </tr>

                <!-- Email -->
                <tr>
                  <td style="padding-bottom:16px;vertical-align:top;">
                    <span style="font-size:10px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#9696A4;">Email</span>
                  </td>
                  <td style="padding-bottom:16px;vertical-align:top;">
                    <a href="mailto:${email}" style="font-size:15px;color:${accent.color};text-decoration:none;">${escapeHtml(email)}</a>
                  </td>
                </tr>

                <!-- CV -->
                ${cv_path ? `
                <tr>
                  <td style="padding-bottom:16px;vertical-align:top;">
                    <span style="font-size:10px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#9696A4;">CV</span>
                  </td>
                  <td style="padding-bottom:16px;vertical-align:top;">
                    <span style="font-size:13px;font-family:'Courier New',Courier,monospace;color:#C4C4CE;">${escapeHtml(cv_path)}</span>
                  </td>
                </tr>` : ''}

                <!-- Submitted -->
                <tr>
                  <td style="vertical-align:top;">
                    <span style="font-size:10px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#9696A4;">Submitted</span>
                  </td>
                  <td style="vertical-align:top;">
                    <span style="font-size:13px;font-family:'Courier New',Courier,monospace;color:#9696A4;">${date}</span>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Message -->
          ${message && message.trim() ? `
          <tr>
            <td style="padding-top:1px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:rgba(240,240,250,0.02);border:1px solid rgba(240,240,250,0.10);border-top:none;padding:20px 24px;">
                    <p style="margin:0 0 8px 0;font-size:10px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#9696A4;">Message</p>
                    <p style="margin:0;font-size:15px;line-height:1.68;color:#C4C4CE;">${escapeHtml(message).replace(/\n/g, '<br>')}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>` : ''}

          <!-- Reply CTA -->
          <tr>
            <td style="padding-top:28px;padding-bottom:32px;">
              <a href="mailto:${email}?subject=Re: Your application for ${encodeURIComponent(role)} at Manar" 
                 style="display:inline-block;font-size:12px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#000000;background-color:#F0F0FA;text-decoration:none;padding:12px 24px;">
                Reply to Applicant &rarr;
              </a>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="border-top:1px solid rgba(240,240,250,0.08);padding-top:24px;">
              <p style="margin:0;font-size:11px;color:#9696A4;letter-spacing:0.04em;">
                This notification was generated automatically by manar.pk.<br>
                Manage applications at 
                <a href="https://supabase.com/dashboard/project/pvjsfxlqhypklbhrnbgj/editor" style="color:#9696A4;">Supabase</a>
                &nbsp;&middot;&nbsp;
                <a href="https://manar.pk/careers.html" style="color:#9696A4;">Careers page</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(str: string): string {
  return (str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

Deno.serve(async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const body = await req.json();
    const record = body.record ?? body;
    const { name, email, role, message, cv_path, created_at } = record;

    if (!name || !email || !role) {
      return new Response('Missing required fields', { status: 400 });
    }

    const html = buildHtml({ name, email, role, message, cv_path, created_at });

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `New Application: ${role} — ${name}`,
        html,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Resend error:', JSON.stringify(data));
      return new Response(JSON.stringify({ error: data }), { status: 500 });
    }

    console.log('Email sent:', data.id);
    return new Response(JSON.stringify({ success: true, id: data.id }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (err) {
    console.error('Function error:', err);
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
});
