// Vercel Serverless Function — отправка уведомлений в Telegram
// Токен бота хранится в переменных окружения Vercel

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '6411093930:AAH0OcDhM_T8GlHvzJCNiTn9keokwX68BOk'
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`

async function sendTelegramMessage(chatId, text, parseMode = 'HTML') {
  try {
    const response = await fetch(`${TELEGRAM_API_URL}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: parseMode,
      }),
    })

    const data = await response.json()

    if (!response.ok || !data.ok) {
      console.error('Telegram API error:', data)
      return { success: false, error: data.description || 'Failed to send message' }
    }

    return { success: true }
  } catch (error) {
    console.error('Error sending Telegram message:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

export default async function handler(req, res) {
  // CORS preflight
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { type, chatId, data } = req.body || {}

    if (!chatId) {
      return res.status(400).json({ error: 'Chat ID is required' })
    }

    let message = ''

    switch (type) {
      case 'website_registration':
        message = `
📝 <b>Registratsioon veebilehel</b>

👤 <b>Nimi:</b> ${data?.name ?? 'Puudub'}
📧 <b>Email:</b> ${data?.email ?? 'Puudub'}
📱 <b>Telefon:</b> ${data?.phone ?? 'Puudub'}

⏰ <b>Aeg:</b> ${new Date().toLocaleString('et-EE', { timeZone: 'Europe/Tallinn' })}
        `.trim()
        break

      case 'contact_form':
        message = `
📬 <b>Uus broneering / kontakt</b>

👤 <b>Nimi:</b> ${data?.name ?? 'Puudub'}
📧 <b>Email:</b> ${data?.email ?? 'Puudub'}
📱 <b>Telefon:</b> ${data?.phone ?? 'Puudub'}
📅 <b>Ürituse tüüp:</b> ${data?.eventType ?? 'Puudub'}
📆 <b>Kuupäev:</b> ${data?.eventDate ?? 'Puudub'}
📍 <b>Asukoht:</b> ${data?.location ?? 'Puudub'}
🎵 <b>Formaat:</b> ${data?.format ?? 'Puudub'}

💬 <b>Sõnum:</b>
${(data?.message || 'Puudub').substring(0, 500)}

⏰ <b>Saadetud:</b> ${new Date().toLocaleString('et-EE', { timeZone: 'Europe/Tallinn' })}
        `.trim()
        break

      case 'newsletter_subscription':
        message = `
📧 <b>Uus uudiskirja tellija</b>

📧 <b>Email:</b> ${data?.email ?? 'Puudub'}

⏰ <b>Aeg:</b> ${new Date().toLocaleString('et-EE', { timeZone: 'Europe/Tallinn' })}
        `.trim()
        break

      case 'site_contact':
        message = `
📬 <b>Kontakt veebilehelt</b> (ujuv nupp)

📧 <b>Email:</b> ${data?.email ?? 'Puudub'}

⏰ <b>Aeg:</b> ${new Date().toLocaleString('et-EE', { timeZone: 'Europe/Tallinn' })}
        `.trim()
        break

      case 'quote_request':
        message = `
📋 <b>Kuupäeva kontrollimine</b>

👤 <b>Nimi:</b> ${data?.name ?? 'Puudub'}
📧 <b>Email:</b> ${data?.email ?? 'Puudub'}
📱 <b>Telefon:</b> ${data?.phone ?? 'Puudub'}
💬 <b>Päring:</b> ${(data?.request || 'Kuupäeva kontrollimine').substring(0, 500)}

⏰ <b>Aeg:</b> ${new Date().toLocaleString('et-EE', { timeZone: 'Europe/Tallinn' })}
        `.trim()
        break

      case 'button_click':
        message = `
🖱️ <b>Nupp vajutati</b>

📌 <b>Tekst:</b> ${data?.label ?? '—'}
🔗 <b>Link:</b> ${data?.href ?? '—'}
📍 <b>Asukoht:</b> ${data?.section ?? '—'}

⏰ <b>Aeg:</b> ${new Date().toLocaleString('et-EE', { timeZone: 'Europe/Tallinn' })}
        `.trim()
        break

      case 'page_visit':
        message = `
👀 <b>Külastaja vaatas lehte</b>

📍 <b>Leht:</b> ${data?.path ?? '/'}
🔗 <b>Allikas:</b> ${data?.referrer ? (data.referrer.length > 80 ? data.referrer.slice(0, 80) + '…' : data.referrer) : 'Otseselt'}

⏰ <b>Aeg:</b> ${new Date().toLocaleString('et-EE', { timeZone: 'Europe/Tallinn' })}
        `.trim()
        break

      default:
        return res.status(400).json({ error: 'Invalid notification type' })
    }

    const result = await sendTelegramMessage(chatId, message, 'HTML')

    if (result.success) {
      return res.status(200).json({ success: true })
    } else {
      return res.status(500).json({ error: result.error || 'Failed to send notification' })
    }
  } catch (error) {
    console.error('Error in telegram-notify handler:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
