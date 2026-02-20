import { useEffect, useRef } from 'react'
import { TelegramService } from '../services/telegramService'

/**
 * Отслеживание кликов по кнопкам и ссылкам на сайте — отправка в Telegram
 */
export function useButtonClickTracker() {
  const lastSentRef = useRef(0)
  const THROTTLE_MS = 2000 // макс. 1 уведомление в 2 секунды

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('button, a[href], [role="button"], .nav-link, .phone-btn, .MuiButton-root, .MuiIconButton-root, .MuiChip-root')
      if (!target) return

      // Игнорируем клики внутри форм (submit обрабатывается отдельно)
      if (target.closest('form') && target.type === 'submit') return

      const now = Date.now()
      if (now - lastSentRef.current < THROTTLE_MS) return
      lastSentRef.current = now

      const label =
        target.getAttribute('aria-label') ||
        target.getAttribute('data-button-label') ||
        target.closest('[aria-label]')?.getAttribute('aria-label') ||
        (typeof target.textContent === 'string' ? target.textContent.trim().slice(0, 80) : '') ||
        target.closest('button, a')?.textContent?.trim().slice(0, 80) ||
        '—'

      const href = target.href || target.getAttribute('href') || target.closest('a')?.href || '—'
      const sectionEl = target.closest('[id="avaleht"], [id="broneeri"], [id="kontakt"], [id="galerii"], [id="meist"], [id="muusika"], [id="kontserdid"]') || target.closest('section[id]') || target.closest('[id]')
      const section = sectionEl?.id || '—'

      TelegramService.notifyButtonClick({
        label: label || 'Nupp',
        href: typeof href === 'string' ? href : '—',
        section: section || '—',
      })
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])
}
