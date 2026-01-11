# Руководство по интеграции с Dashboard

## Обзор

React сайт теперь интегрирован с Dashboard API и автоматически загружает контент из Dashboard.

## Что было сделано

### 1. Создан API клиент
- Файл: `src/services/contentApi.js`
- Функции для загрузки контента из API
- Fallback на дефолтные данные при ошибках

### 2. Создан Content Context
- Файл: `src/context/ContentContext.jsx`
- React Context для глобального доступа к данным
- Автоматическая загрузка при старте приложения

### 3. Обновлены компоненты
- **Hero** - использует данные из API
- **Stats** - статистика из API
- **About** - информация о бэнде и участниках из API
- **Events** - события из API
- **Music** - видео и ссылки из API
- **Gallery** - изображения из API

### 4. Настроена работа с изображениями
- Функция `getImageUrl()` для правильного отображения загруженных изображений
- Поддержка локальных и удаленных изображений

## Настройка

### 1. Настройте URL API

Создайте файл `.env` в корне проекта `SAFunkBand`:

```env
VITE_API_URL=http://localhost:3000/api
```

Для production:
```env
VITE_API_URL=https://your-api-domain.com/api
```

### 2. Запустите Dashboard API

Убедитесь, что Dashboard API запущен:

```bash
cd dashboard
npm run dev:api
```

### 3. Запустите React сайт

```bash
cd SAFunkBand
npm run dev
```

## Как это работает

1. При загрузке приложения `ContentProvider` автоматически запрашивает данные из API
2. Если API недоступен, используются дефолтные данные (fallback)
3. Компоненты используют хук `useContent()` для доступа к данным
4. Изображения автоматически обрабатываются через `getImageUrl()`

## Структура данных

Данные загружаются в следующем формате:

```javascript
{
  hero: {
    title: '...',
    subtitle: '...',
    description: '...',
    ctaPrimary: '...',
    ctaSecondary: '...',
    stats: { ... }
  },
  about: {
    title: '...',
    description: '...',
    members: [ ... ]
  },
  events: [ ... ],
  music: {
    videos: [ ... ],
    albums: [ ... ],
    spotifyLink: '...',
    youtubeLink: '...'
  },
  gallery: [ ... ],
  stats: {
    events: 200,
    viewers: 50,
    years: 8,
    albums: 2
  },
  booking: { ... }
}
```

## Использование в компонентах

### Пример использования:

```jsx
import { useContent } from '../context/ContentContext'
import { getImageUrl } from '../config/api'

const MyComponent = () => {
  const { content, loading, error } = useContent()
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  
  const heroData = content?.hero || {}
  
  return (
    <div>
      <h1>{heroData.title}</h1>
      <img src={getImageUrl(heroData.image)} alt="Hero" />
    </div>
  )
}
```

## Fallback механизм

Если API недоступен:

1. Сначала пытается загрузить из localStorage (если есть)
2. Если нет, использует дефолтные данные из кода
3. Сайт продолжает работать с дефолтными данными

## Обновление контента

1. Откройте Dashboard: http://localhost:3001
2. Войдите в систему
3. Отредактируйте нужные секции
4. Сохраните изменения
5. Обновите страницу React сайта (F5) - данные загрузятся автоматически

## Production Deployment

### Вариант 1: Общий API

1. Разверните Dashboard API на сервере
2. Настройте `VITE_API_URL` на production URL
3. Соберите React сайт: `npm run build`
4. Задеплойте оба проекта

### Вариант 2: Статический экспорт

1. Экспортируйте данные из Dashboard в JSON
2. Импортируйте JSON в React приложение
3. Используйте данные напрямую без API

### Вариант 3: Build-time генерация

Создайте скрипт для генерации статических данных при сборке:

```javascript
// scripts/generate-content.js
import { loadContent } from '../src/services/contentApi.js'
import { writeFileSync } from 'fs'

const content = await loadContent()
writeFileSync('./src/data/content.json', JSON.stringify(content, null, 2))
```

Затем в компонентах:
```javascript
import contentData from './data/content.json'
```

## Проверка работы

1. Запустите Dashboard API: `npm run dev:api` (в папке dashboard)
2. Запустите React сайт: `npm run dev` (в папке SAFunkBand)
3. Откройте React сайт в браузере
4. Откройте консоль разработчика (F12)
5. Проверьте, что данные загружаются из API
6. Отредактируйте контент в Dashboard
7. Обновите страницу React сайта - изменения должны появиться

## Устранение проблем

### Данные не загружаются
- Убедитесь, что API запущен на порту 3000
- Проверьте `.env` файл с правильным `VITE_API_URL`
- Проверьте консоль браузера на ошибки CORS
- Сайт автоматически переключится на дефолтные данные

### Изображения не отображаются
- Убедитесь, что API сервер запущен
- Проверьте URL изображений в консоли
- Используйте функцию `getImageUrl()` для правильного форматирования URL

### CORS ошибки
- Убедитесь, что CORS настроен в API (уже настроен)
- Проверьте, что API доступен по указанному URL

## Следующие шаги

1. ✅ Интеграция с API завершена
2. ⏳ Настроить автоматическое обновление данных (polling или WebSocket)
3. ⏳ Добавить кэширование данных
4. ⏳ Настроить production deployment
