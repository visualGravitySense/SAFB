// Сервис отправки уведомлений в Telegram
// Использует Vercel Serverless Function — токен бота остаётся на сервере

const ADMIN_CHAT_ID = import.meta.env.VITE_TELEGRAM_ADMIN_CHAT_ID || ''
const DEBUG_MODE = import.meta.env.VITE_TELEGRAM_DEBUG === 'true'
// Для GitHub Pages: URL Vercel API (напр. https://safunkband.vercel.app). На Vercel — пусто (same origin).
const API_BASE = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')

export class TelegramService {
  /**
   * Отправка через API route Vercel.
   * При VITE_TELEGRAM_DEBUG=true запрос идёт на /api/telegram-notify,
   * Vite middleware логирует в терминал и возвращает success.
   */
  static async sendViaAPI(type, data) {
    if (DEBUG_MODE && !ADMIN_CHAT_ID) {
      // В debug без chatId — всё равно шлём на API (middleware залогирует)
    }

    if (!DEBUG_MODE && !ADMIN_CHAT_ID) {
      console.warn('Admin chat ID not configured, skipping Telegram notification')
      return { success: false, error: 'Chat ID not configured' }
    }

    const chatId = ADMIN_CHAT_ID || (DEBUG_MODE ? 'debug' : '')

    try {
      const apiUrl = API_BASE ? `${API_BASE}/api/telegram-notify` : '/api/telegram-notify'
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          chatId,
          data,
        }),
      })

      const text = await response.text()
      let result = {}
      try {
        result = text ? JSON.parse(text) : {}
      } catch {
        // API вернул не-JSON (404, HTML и т.д.) — скорее всего локальная разработка
        if (response.status === 404 || !response.ok) {
          return {
            success: false,
            error: 'API pole kättesaadav. Deploy Vercelile või käivita "vercel dev" lokaalselt.',
          }
        }
      }

      if (!response.ok) {
        console.error('Telegram API error:', result)
        return { success: false, error: result.error || 'Failed to send message' }
      }

      return { success: true }
    } catch (error) {
      console.error('Error sending Telegram message:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Võrgu viga. Palun proovige uuesti.',
      }
    }
  }

  /**
   * Уведомление о бронировании / контактной форме
   */
  static async notifyContactForm(formData) {
    const result = await this.sendViaAPI('contact_form', formData)
    if (!result.success) {
      throw new Error(result.error || 'Failed to send Telegram notification')
    }
  }

  /**
   * Уведомление о подписке на newsletter
   */
  static async notifyNewsletterSubscription(email) {
    const result = await this.sendViaAPI('newsletter_subscription', { email })
    if (!result.success) {
      throw new Error(result.error || 'Failed to send Telegram notification')
    }
  }

  /**
   * Контакт с сайта (плавающая кнопка — только email)
   */
  static async notifySiteContact(email) {
    const result = await this.sendViaAPI('site_contact', { email })
    if (!result.success) {
      throw new Error(result.error || 'Failed to send Telegram notification')
    }
  }

  /**
   * Уведомление о нажатии кнопки на сайте (fire-and-forget, не блокирует UI)
   */
  static notifyButtonClick(data) {
    this.sendViaAPI('button_click', data).catch((err) =>
      console.warn('Button click notification failed:', err)
    )
  }

  /**
   * Уведомление о посещении страницы (кто-то зашёл на сайт, ничего не нажал)
   */
  static notifyPageVisit(data = {}) {
    this.sendViaAPI('page_visit', data).catch((err) =>
      console.warn('Page visit notification failed:', err)
    )
  }
}
