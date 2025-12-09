# Настройка EmailJS для формы бронирования

## Шаг 1: Регистрация на EmailJS

1. Перейдите на https://www.emailjs.com/
2. Зарегистрируйтесь или войдите в аккаунт
3. Перейдите в Dashboard

## Шаг 2: Создание Email Service

1. В Dashboard перейдите в раздел **Email Services**
2. Нажмите **Add New Service**
3. Выберите ваш email провайдер (Gmail, Outlook, и т.д.)
4. Следуйте инструкциям для подключения
5. Скопируйте **Service ID** (например: `service_xxxxxxx`)

## Шаг 3: Создание Email Template

1. Перейдите в раздел **Email Templates**
2. Нажмите **Create New Template**
3. Используйте следующий шаблон:

```
Тема: Uus broneeringu päring - {{eventType}}

Tere!

Teil on uus broneeringu päring Siim Aimla Funk Band jaoks.

Andmed:
- Ürituse tüüp: {{eventType}}
- Kuupäev: {{eventDate}}
- Asukoht: {{location}}
- Külaliste arv: {{guests}}
- Nimi: {{name}}
- E-mail: {{email}}
- Telefon: {{phone}}
- Lisainfo: {{message}}

Parimate soovidega,
Siim Aimla Funk Band veebisait
```

4. Скопируйте **Template ID** (например: `template_xxxxxxx`)

## Шаг 4: Получение Public Key

1. Перейдите в раздел **Account** → **General**
2. Найдите **Public Key**
3. Скопируйте его (например: `xxxxxxxxxxxxx`)

## Шаг 5: Настройка конфигурации

Откройте файл `src/config/emailjs.js` и замените значения:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'ваш_service_id',
  TEMPLATE_ID: 'ваш_template_id',
  PUBLIC_KEY: 'ваш_public_key',
}
```

## Проверка работы

1. Запустите проект: `npm run dev`
2. Заполните форму бронирования
3. Отправьте форму
4. Проверьте ваш email - должно прийти письмо с данными формы

## Примечания

- EmailJS предоставляет бесплатный тарифный план: 200 писем в месяц
- Все данные отправляются через EmailJS сервис
- Не храните чувствительные данные в коде

