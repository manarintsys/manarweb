import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const RESEND_KEY = Deno.env.get('RESEND_API_KEY')!
const TO = 'talent@manar.pk'
const FROM = 'Manar Website <noreply@manar.pk>'
const SUPABASE_URL = 'https://pvjsfxlqhypklbhrnbgj.supabase.co'

serve(async (req) => {
  try {
    const payload = await req.json()
    const record = payload.record
    const table = payload.table

    let subject: string
    let html: string

    if (table === 'applications') {
      const cvUrl = record.cv_path
        ? `${SUPABASE_URL}/storage/v1/object/public/cvs/${record.cv_path}`
        : null

      subject = `New Application — ${record.role}`
      html = `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#e8e8ee;padding:40px 32px;border-radius:4px">
          <div style="margin-bottom:28px;padding-bottom:20px;border-bottom:1px solid #222">
            <span style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9696a4">Manar · Job Application</span>
            <h1 style="margin:10px 0 0;font-size:22px;font-weight:700;color:#f0f0fa">${record.role}</h1>
          </div>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;color:#9696a4;font-size:13px;width:120px">Name</td><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;font-size:15px;color:#f0f0fa"><strong>${record.name}</strong></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;color:#9696a4;font-size:13px">Email</td><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;font-size:15px"><a href="mailto:${record.email}" style="color:#c9a84c;text-decoration:none">${record.email}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;color:#9696a4;font-size:13px">Role</td><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;font-size:15px;color:#c4c4ce">${record.role}</td></tr>
            ${record.message ? `<tr><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;color:#9696a4;font-size:13px;vertical-align:top">Message</td><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;font-size:15px;color:#c4c4ce;line-height:1.6">${record.message}</td></tr>` : ''}
          </table>
          ${cvUrl ? `
          <div style="margin-top:28px">
            <a href="${cvUrl}" style="display:inline-block;padding:12px 24px;background:#f0f0fa;color:#000;font-size:13px;font-weight:600;text-decoration:none;letter-spacing:.08em;text-transform:uppercase">Download CV</a>
          </div>` : '<p style="margin-top:20px;color:#9696a4;font-size:13px">No CV attached.</p>'}
          <p style="margin-top:32px;font-size:12px;color:#686878;border-top:1px solid #1a1a1a;padding-top:20px">Received ${new Date(record.created_at).toUTCString()}</p>
        </div>
      `
    } else {
      subject = `New Inquiry — ${record.name}`
      html = `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#e8e8ee;padding:40px 32px;border-radius:4px">
          <div style="margin-bottom:28px;padding-bottom:20px;border-bottom:1px solid #222">
            <span style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9696a4">Manar · Contact Inquiry</span>
            <h1 style="margin:10px 0 0;font-size:22px;font-weight:700;color:#f0f0fa">${record.name}</h1>
          </div>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;color:#9696a4;font-size:13px;width:120px">Email</td><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;font-size:15px"><a href="mailto:${record.email}" style="color:#c9a84c;text-decoration:none">${record.email}</a></td></tr>
            ${record.phone ? `<tr><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;color:#9696a4;font-size:13px">Phone</td><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;font-size:15px;color:#c4c4ce">${record.phone}</td></tr>` : ''}
            ${record.company ? `<tr><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;color:#9696a4;font-size:13px">Company</td><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;font-size:15px;color:#c4c4ce">${record.company}</td></tr>` : ''}
            ${record.industry ? `<tr><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;color:#9696a4;font-size:13px">Industry</td><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;font-size:15px;color:#c4c4ce">${record.industry}</td></tr>` : ''}
            ${record.message ? `<tr><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;color:#9696a4;font-size:13px;vertical-align:top">Message</td><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;font-size:15px;color:#c4c4ce;line-height:1.6">${record.message}</td></tr>` : ''}
            ${record.source ? `<tr><td style="padding:10px 0;color:#9696a4;font-size:13px">Source</td><td style="padding:10px 0;font-size:13px;color:#686878">${record.source}</td></tr>` : ''}
          </table>
          <p style="margin-top:32px;font-size:12px;color:#686878;border-top:1px solid #1a1a1a;padding-top:20px">Received ${new Date(record.created_at).toUTCString()}</p>
        </div>
      `
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from: FROM, to: [TO], subject, html }),
    })

    const data = await res.json()
    if (!res.ok) {
      console.error('Resend error:', data)
      return new Response(JSON.stringify({ error: data }), { status: 500 })
    }

    return new Response(JSON.stringify({ ok: true, id: data.id }), { status: 200 })

  } catch (err) {
    console.error('Function error:', err)
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 })
  }
})
