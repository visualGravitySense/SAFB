import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiTarget = env.VITE_TELEGRAM_API_URL || 'http://127.0.0.1:3000'
  const telegramDebug = env.VITE_TELEGRAM_DEBUG === 'true'

  return {
    plugins: [
      react(),
      // Имитация Telegram — при VITE_TELEGRAM_DEBUG=true логируем в терминал
      telegramDebug && {
        name: 'telegram-debug',
        configureServer(server) {
          server.middlewares.use('/api/telegram-notify', (req, res, next) => {
            if (req.method !== 'POST') return next()
            let body = ''
            req.on('data', (chunk) => { body += chunk })
            req.on('end', () => {
              try {
                const { type, data } = JSON.parse(body || '{}')
                const time = new Date().toLocaleString('et-EE', { timeZone: 'Europe/Tallinn' })
                const sep = '─'.repeat(52)
                console.log(
                  `\n${sep}\n` +
                  `📱 [TELEGRAM MOCK] ${type || '?'}\n` +
                  `${sep}\n` +
                  `${JSON.stringify(data, null, 2)}\n` +
                  `⏰ ${time}\n` +
                  `${sep}\n`
                )
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ success: true }))
              } catch {
                next()
              }
            })
          })
        },
      },
    ].filter(Boolean),
    base: '/',
    server: {
      // При DEBUG не проксируем — middleware логирует в терминал
      proxy: env.VITE_TELEGRAM_API_URL && !telegramDebug
        ? { '/api': { target: apiTarget, changeOrigin: true } }
        : undefined,
    },
  }
})

