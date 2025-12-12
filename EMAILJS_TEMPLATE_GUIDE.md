# Пошаговая инструкция: Создание Email Template в EmailJS

## Шаг 1: Войдите в EmailJS Dashboard

1. Перейдите на https://www.emailjs.com/
2. Войдите в свой аккаунт
3. Перейдите в **Dashboard**

## Шаг 2: Создайте новый Email Template

1. В левом меню выберите **"Email Templates"**
2. Нажмите кнопку **"Create New Template"** или **"+"**
3. Откроется редактор шаблона

## Шаг 3: Заполните информацию о шаблоне

### Настройки шаблона:
- **Template Name**: `Booking Form - Siim Aimla Funk Band`
- **Subject** (Тема письма): вставьте:

```
Uus broneering: {{eventType}}
```

## Шаг 4: Создайте тело письма

В поле **Content** (тело письма) вставьте следующий шаблон:

```
Tere!

Saite uue broneeringu tellimuse Siim Aimla Funk Band veebilehelt.

═══════════════════════════════════════
DETALJID:
═══════════════════════════════════════
Ürituse tüüp: {{eventType}}
Kuupäev: {{eventDate}}
Asukoht: {{location}}
Koosseisu formaat: {{format}}
═══════════════════════════════════════

═══════════════════════════════════════
KONTAKTANDMED:
═══════════════════════════════════════
Nimi: {{name}}
E-post: {{email}}
Telefon: {{phone}}
═══════════════════════════════════════

═══════════════════════════════════════
LISAINFO / SOOVID:
═══════════════════════════════════════
{{message}}

═══════════════════════════════════════
Küsimuste korral võtke ühendust:
info@safunkband.ee | +372 511 8528
═══════════════════════════════════════
```

## Шаг 5: Настройте переменные (опционально)

В редакторе EmailJS можно использовать переменные в формате `{{variableName}}`.

**Используемые переменные в форме:**
- `{{eventType}}` - Тип мероприятия (Korporatiiv, Pulmad, Festival, и т.д.)
- `{{eventDate}}` - Дата мероприятия (формат: ГГГГ-ММ-ДД)
- `{{location}}` - Местоположение мероприятия
- `{{format}}` - Формат состава:
  - `PREMIUM (7 muusikut)` 
  - `STANDARD (4-5 muusikut)`
  - `DUO (2 solisti)`
- `{{name}}` - Имя клиента
- `{{email}}` - Email клиента
- `{{phone}}` - Телефон клиента
- `{{message}}` - Дополнительная информация/пожелания

## Шаг 6: Сохраните шаблон

1. Нажмите кнопку **"Save"** внизу редактора
2. Скопируйте **Template ID** из URL или из настроек шаблона
   - Template ID выглядит так: `template_xxxxxxxxx`

## Шаг 7: Подключите шаблон к форме

1. Откройте файл `src/config/emailjs.js`
2. Вставьте ваш **Template ID** в поле `TEMPLATE_ID`:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'ваш_service_id',
  TEMPLATE_ID: 'template_xxxxxxxxx', // ← Вставьте сюда
  PUBLIC_KEY: 'ваш_public_key',
}
```

## Пример готового письма

После настройки, письмо будет выглядеть так:

```
Тема: Uus broneering: Pulmad

─────────────────────────────────────

Tere!

Saite uue broneeringu tellimuse Siim Aimla Funk Band veebilehelt.

═══════════════════════════════════════
DETALJID:
═══════════════════════════════════════
Ürituse tüüp: Pulmad
Kuupäev: 2025-06-15
Asukoht: Tallinn, Saku Suurhall
Koosseisu formaat: STANDARD (4-5 muusikut)
═══════════════════════════════════════

═══════════════════════════════════════
KONTAKTANDMED:
═══════════════════════════════════════
Nimi: Jaan Tamm
E-post: jaan@example.ee
Telefon: +372 555 1234
═══════════════════════════════════════

═══════════════════════════════════════
LISAINFO / SOOVID:
═══════════════════════════════════════
Sooviksime, et kontsert kestaks 2 tundi.
Oleme huvitatud funk klassikast.
═══════════════════════════════════════

Küsimuste korral võtke ühendust:
info@safunkband.ee | +372 511 8528
═══════════════════════════════════════
```

## Советы по оформлению шаблона

1. **HTML версия**: В EmailJS можно использовать HTML для красивого оформления:
   ```html
   <h2>DETALJID:</h2>
   <p><strong>Ürituse tüüp:</strong> {{eventType}}</p>
   <p><strong>Kuupäev:</strong> {{eventDate}}</p>
   ```

2. **Тестирование**: Используйте функцию "Test" в EmailJS для проверки шаблона

3. **Форматирование даты**: Если нужно изменить формат даты, можно использовать фильтры EmailJS или обработать на стороне формы

## Готово!

После сохранения Template ID в конфигурации, форма будет автоматически отправлять письма с данными заявки.

