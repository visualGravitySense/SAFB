# Публикация SAFunkBand на Vercel

## 1. Установка Vercel CLI (если ещё нет)

```bash
npm i -g vercel
```

## 2. Деплой

```bash
cd c:\Users\Admin\Documents\cust\webs\SAF\SAFunkBand
vercel
```

При первом запуске:
- Войди в аккаунт Vercel (откроется браузер)
- Подтверди настройки проекта (Enter для принятия по умолчанию)
- Деплой создаст preview URL

Для продакшен-деплоя:
```bash
vercel --prod
```

## 3. Переменные окружения в Vercel

В [Vercel Dashboard](https://vercel.com/dashboard) → твой проект → **Settings** → **Environment Variables** добавь:

| Name | Value | Environment |
|------|-------|--------------|
| `VITE_TELEGRAM_ADMIN_CHAT_ID` | `5883625804` | Production, Preview |
| `TELEGRAM_BOT_TOKEN` | `6411093930:AAH0OcDhM_T8GlHvzJCNiTn9keokwX68BOk` | Production, Preview |
| `VITE_TELEGRAM_DEBUG` | `false` | Production, Preview |

После добавления переменных сделай **Redeploy** (Deployments → ⋮ → Redeploy).

## 4. Альтернатива: деплой через GitHub

1. Залей проект на GitHub
2. Зайди на [vercel.com](https://vercel.com) → **Add New** → **Project**
3. Импортируй репозиторий
4. Добавь переменные окружения
5. Нажми **Deploy**

## 5. GitHub Pages + Vercel API (фронт на GitHub, API на Vercel)

Если фронтенд на **GitHub Pages**, а API на **Vercel**:

1. **Vercel** — задеплой только API (или весь проект, API будет на том же домене).
2. **GitHub** → репозиторий → **Settings** → **Secrets and variables** → **Actions** → **Variables**:
   - `VITE_API_BASE_URL` = `https://твой-проект.vercel.app` (URL твоего Vercel)
   - `VITE_TELEGRAM_ADMIN_CHAT_ID` = `5883625804`
3. Запусти workflow (push в main или вручную) — билд подставит URL Vercel, запросы пойдут туда.

## 6. Что будет работать после деплоя

- ✅ Сайт (Vite + React)
- ✅ API `/api/telegram-notify` — отправка в Telegram
- ✅ Форма бронирования → уведомление в Telegram
- ✅ Newsletter → уведомление в Telegram
- ✅ Плавающая кнопка → форма контакта → Telegram
- ✅ Отслеживание кликов по кнопкам → Telegram
