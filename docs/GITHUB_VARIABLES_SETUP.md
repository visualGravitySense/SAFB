# Настройка переменных GitHub Actions

## Шаги

1. Открой **Settings** → **Secrets and variables** → **Actions**
2. Перейди на вкладку **Variables** (не Secrets)
3. Нажми **New repository variable**
4. Добавь две переменные:

| Name | Value |
|------|-------|
| `VITE_API_BASE_URL` | `https://твой-проект.vercel.app` |
| `VITE_TELEGRAM_ADMIN_CHAT_ID` | `5883625804` |

> **Важно:** замени `твой-проект.vercel.app` на реальный URL твоего Vercel (напр. `safb.vercel.app` или `safunkband-xxx.vercel.app`).

5. Сохрани каждую переменную кнопкой **Add variable**
6. Сделай push в `main` или запусти workflow вручную — билд подхватит переменные
