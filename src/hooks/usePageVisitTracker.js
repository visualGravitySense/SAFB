import { useEffect } from 'react'
import { TelegramService } from '../services/telegramService'

const SESSION_KEY = 'saf_page_visit_sent'

/**
 * Отправка уведомления в Telegram при посещении сайта (загрузка страницы).
 * Один раз за сессию (чтобы не спамить при обновлении страницы).
 */
export function usePageVisitTracker() {
  useEffect(() => {
    if (typeof sessionStorage === 'undefined') return

    if (sessionStorage.getItem(SESSION_KEY)) return
    sessionStorage.setItem(SESSION_KEY, '1')

    TelegramService.notifyPageVisit({
      path: window.location.pathname || '/',
      referrer: document.referrer || undefined,
    })
  }, [])
}
