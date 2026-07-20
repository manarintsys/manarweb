import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const RESEND_KEY     = Deno.env.get('RESEND_API_KEY')!
const WEBHOOK_SECRET = Deno.env.get('WEBHOOK_SECRET')!
const TO             = 'talent@manar.pk'
const FROM           = 'Manar Website <noreply@manar.pk>'
const SUPABASE_URL   = 'https://pvjsfxlqhypklbhrnbgj.supabase.co'

/** Strip all HTML tags and truncate to maxLen */
function safe(val: unknown, maxLen = 500): string {
  if (val === null || val === undefined) return ''
  return String(val)
    .replace(/[<>"'&]/g, c => ({'<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','&':'&amp;'}[c] ?? c))
    .slice(0, maxLen)
}

serve(async (req) => {
  // ── 1. Verify shared secret ──────────────────────────────────────────
  const authHeader = req.headers.get('x-webhook-secret')
  if (!authHeader || authHeader !== WEBHOOK_SECRET) {
    return new Response('Unauthorized', { status: 401 })
  }

  // ── 2. Only accept POST ──────────────────────────────────────────────
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  try {
    const payload = await req.json()
    const record  = payload?.record
    const table   = payload?.table

    if (!record || !table) {
      return new Response('Bad request', { status: 400 })
    }

    let subject: string
    let html: string

    if (table === 'applications') {
      const name    = safe(record.name, 200)
      const email   = safe(record.email, 254)
      const role    = safe(record.role, 200)
      const message = safe(record.message, 3000)
      const cvPath  = safe(record.cv_path, 500)
      const cvUrl   = cvPath ? `${SUPABASE_URL}/storage/v1/object/public/cvs/${cvPath}` : null
      const ts      = safe(record.created_at, 40)

      subject = `New Application — ${role}`
      html = `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#e8e8ee;padding:40px 32px;border-radius:4px">
          <div style="margin-bottom:28px;padding-bottom:20px;border-bottom:1px solid #222">
            <span style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9696a4">Manar · Job Application</span>
            <h1 style="margin:10px 0 0;font-size:22px;font-weight:700;color:#f0f0fa">${role}</h1>
          </div>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;color:#9696a4;font-size:13px;width:120px">Name</td><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;font-size:15px;color:#f0f0fa"><strong>${name}</strong></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;color:#9696a4;font-size:13px">Email</td><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;font-size:15px"><a href="mailto:${email}" style="color:#c9a84c;text-decoration:none">${email}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;color:#9696a4;font-size:13px">Role</td><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;font-size:15px;color:#c4c4ce">${role}</td></tr>
            ${message ? `<tr><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;color:#9696a4;font-size:13px;vertical-align:top">Message</td><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;font-size:15px;color:#c4c4ce;line-height:1.6">${message}</td></tr>` : ''}
          </table>
          ${cvUrl ? `<div style="margin-top:28px"><a href="${cvUrl}" style="display:inline-block;padding:12px 24px;background:#f0f0fa;color:#000;font-size:13px;font-weight:600;text-decoration:none;letter-spacing:.08em;text-transform:uppercase">Download CV</a></div>` : '<p style="margin-top:20px;color:#9696a4;font-size:13px">No CV attached.</p>'}
          <p style="margin-top:32px;font-size:12px;color:#686878;border-top:1px solid #1a1a1a;padding-top:20px">Received ${ts}</p>
        </div>`

    } else {
      const name     = safe(record.name, 200)
      const email    = safe(record.email, 254)
      const phone    = safe(record.phone, 30)
      const company  = safe(record.company, 200)
      const industry = safe(record.industry, 100)
      const message  = safe(record.message, 3000)
      const source   = safe(record.source, 100)
      const ts       = safe(record.created_at, 40)

      subject = `New Inquiry — ${name}`
      html = `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#e8e8ee;padding:40px 32px;border-radius:4px">
          <div style="margin-bottom:28px;padding-bottom:20px;border-bottom:1px solid #222">
            <span style="font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9696a4">Manar · Contact Inquiry</span>
            <h1 style="margin:10px 0 0;font-size:22px;font-weight:700;color:#f0f0fa">${name}</h1>
          </div>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;color:#9696a4;font-size:13px;width:120px">Email</td><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;font-size:15px"><a href="mailto:${email}" style="color:#c9a84c;text-decoration:none">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;color:#9696a4;font-size:13px">Phone</td><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;font-size:15px;color:#c4c4ce">${phone}</td></tr>` : ''}
            ${company ? `<tr><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;color:#9696a4;font-size:13px">Company</td><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;font-size:15px;color:#c4c4ce">${company}</td></tr>` : ''}
            ${industry ? `<tr><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;color:#9696a4;font-size:13px">Industry</td><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;font-size:15px;color:#c4c4ce">${industry}</td></tr>` : ''}
            ${message ? `<tr><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;color:#9696a4;font-size:13px;vertical-align:top">Message</td><td style="padding:10px 0;border-bottom:1px solid #1a1a1a;font-size:15px;color:#c4c4ce;line-height:1.6">${message}</td></tr>` : ''}
            ${source ? `<tr><td style="padding:10px 0;color:#9696a4;font-size:13px">Source</td><td style="padding:10px 0;font-size:13px;color:#686878">${source}</td></tr>` : ''}
          </table>
          <p style="margin-top:32px;font-size:12px;color:#686878;border-top:1px solid #1a1a1a;padding-top:20px">Received ${ts}</p>
        </div>`
    }

    const res  = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${RESEND_KEY}`, 'Content-Type': 'application/json' },
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
