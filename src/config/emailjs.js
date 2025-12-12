// EmailJS Configuration
// Получите эти значения после регистрации на https://www.emailjs.com/
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_vyq8jd9', // Замените на ваш Service ID
  TEMPLATE_ID: 'template_pg10qa8', // Замените на ваш Template ID
  PUBLIC_KEY: 'Eh9brBPBy44saBPau', // Замените на ваш Public Key
}

// ============================================
// ИНСТРУКЦИЯ ПО НАСТРОЙКЕ EMAILJS
// ============================================
//
// 1. ЗАРЕГИСТРИРУЙТЕСЬ
//    Перейдите на https://www.emailjs.com/ и создайте бесплатный аккаунт
//
// 2. СОЗДАЙТЕ EMAIL SERVICE
//    - Перейдите в раздел "Email Services"
//    - Нажмите "Add New Service"
//    - Выберите провайдера (Gmail, Outlook, и т.д.)
//    - Подключите свой email аккаунт
//    - Скопируйте SERVICE_ID из настроек сервиса
//
// 3. СОЗДАЙТЕ EMAIL TEMPLATE
//    - Перейдите в раздел "Email Templates"
//    - Нажмите "Create New Template"
//    - Вставьте следующий шаблон:
//
//    ТЕМА ПИСЬМА:
//    Uus broneering: {{eventType}}
//
//    ТЕЛО ПИСЬМА:
//    Tere!
//
//    Saite uue broneeringu tellimuse Siim Aimla Funk Band veebilehelt.
//
//    DETALJID:
//    ----------------------------
//    Ürituse tüüp: {{eventType}}
//    Kuupäev: {{eventDate}}
//    Asukoht: {{location}}
//    Koosseisu formaat: {{format}}
//    ----------------------------
//
//    KONTAKTANDMED:
//    Nimi: {{name}}
//    E-post: {{email}}
//    Telefon: {{phone}}
//    ----------------------------
//
//    LISAINFO:
//    {{message}}
//
//    ----------------------------
//    Küsimuste korral võtke ühendust: info@safunkband.ee
//
//    - Используйте следующие переменные в шаблоне:
//      {{eventType}}   - Тип мероприятия
//      {{eventDate}}   - Дата мероприятия
//      {{location}}    - Местоположение
//      {{format}}      - Формат состава (PREMIUM/STANDARD/DUO)
//      {{name}}        - Имя клиента
//      {{email}}       - Email клиента
//      {{phone}}       - Телефон клиента
//      {{message}}     - Дополнительная информация
//
//    - Скопируйте TEMPLATE_ID из настроек шаблона
//
// 4. ПОЛУЧИТЕ PUBLIC KEY
//    - Перейдите в раздел "Account" -> "General"
//    - Скопируйте "Public Key"
//
// 5. ОБНОВИТЕ КОНФИГУРАЦИЮ
//    Замените значения выше на ваши реальные ключи:
//    - SERVICE_ID: 'service_xxxxx'
//    - TEMPLATE_ID: 'template_xxxxx'
//    - PUBLIC_KEY: 'xxxxxxxxxxxxx'
//
// 6. ПРОВЕРЬТЕ РАБОТУ
//    После добавления ключей форма будет автоматически отправлять
//    письма на указанный в Email Service адрес
//
// ============================================

