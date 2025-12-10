# Siim Aimla Funk Band - React Website

React + Vite веб-сайт для Siim Aimla Funk Band.

🌐 **Live Demo**: [https://visualgravitysense.github.io/SAFB/](https://visualgravitysense.github.io/SAFB/)

## Установка

Установите зависимости:

```bash
npm install
```

## Запуск

Запустите dev сервер:

```bash
npm run dev
```

Сайт будет доступен по адресу `http://localhost:5173`

## Сборка

Для production сборки:

```bash
npm run build
```

Готовые файлы будут в папке `dist`.

## Деплой на GitHub Pages

Проект автоматически деплоится на GitHub Pages при каждом push в ветку `main` через GitHub Actions.

### Настройка GitHub Pages:

1. Перейдите в **Settings** → **Pages** вашего репозитория
2. В разделе "Build and deployment":
   - **Source**: выберите **"GitHub Actions"** (не "Deploy from a branch")
3. После первого push в ветку `main` GitHub Actions автоматически соберет и задеплоит проект
4. Сайт будет доступен по адресу: `https://visualgravitysense.github.io/SAFB/`

### Manual запуск деплоя:

Вы можете вручную запустить деплой через вкладку **Actions** → **Deploy to GitHub Pages** → **Run workflow**

## Технологии

* React 18
* Vite 5
* Material-UI (MUI)
* CSS3
* EmailJS (для форм)

## Структура проекта

```
src/
  ├── components/     # React компоненты
  │   ├── Navigation.jsx
  │   ├── Hero.jsx
  │   ├── Stats.jsx
  │   ├── Events.jsx
  │   ├── Music.jsx
  │   ├── About.jsx
  │   ├── Testimonials.jsx
  │   ├── Booking.jsx
  │   ├── Gallery.jsx
  │   └── Footer.jsx
  ├── styles/        # CSS стили
  ├── img/           # Изображения
  ├── config/        # Конфигурационные файлы
  ├── App.jsx        # Главный компонент
  ├── main.jsx       # Точка входа
  └── theme.js       # MUI тема
```
