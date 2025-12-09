# Customer Journey Map: Организатор мероприятия

```mermaid
journey
    title Customer Journey: Организатор мероприятия
    section Осведомленность
      Поиск в Google: 3: Организатор
      Рекомендация коллеги: 4: Организатор
      SEO/Реклама: 3: Организатор
    section Рассмотрение
      Посещение сайта: 3: Организатор
      Просмотр видео: 5: Организатор
      Оценка стиля: 4: Организатор
      Нет видео (Pain Point): 1: Организатор
    section Решение
      Проверка доступности: 4: Организатор
      Запрос КП: 3: Организатор
      Нет цен (Pain Point): 2: Организатор
      Непонятное бронирование: 2: Организатор
    section Бронирование
      Согласование деталей: 4: Организатор
      Подписание договора: 5: Организатор
      Автоматизация (Opportunity): 5: Организатор
    section После мероприятия
      Обратная связь: 4: Организатор
      Повторное бронирование: 5: Организатор
      Программа лояльности (Opportunity): 5: Организатор
```

## Детальная диаграмма с touchpoints

```mermaid
flowchart TD
    Start([Организатор мероприятия]) --> Awareness[Этап 1: Осведомленность]
    
    Awareness --> A1[Поиск в Google<br/>funk band Estonia]
    Awareness --> A2[Рекомендация коллеги]
    Awareness --> A3[Touchpoint:<br/>SEO, реклама, сарафанное радио]
    
    A1 --> Consideration[Этап 2: Рассмотрение]
    A2 --> Consideration
    A3 --> Consideration
    
    Consideration --> C1[Посещение сайта]
    Consideration --> C2[Просмотр видео выступлений]
    Consideration --> C3[Оценка стиля музыки]
    Consideration --> C4[Touchpoint:<br/>Главная, видеогалерея, Repertoire]
    Consideration --> C5[⚠️ Pain Point:<br/>Нет видео, сложно оценить уровень]
    
    C1 --> Decision[Этап 3: Решение]
    C2 --> Decision
    C3 --> Decision
    C4 --> Decision
    C5 --> Decision
    
    Decision --> D1[Проверка доступности]
    Decision --> D2[Запрос коммерческого предложения]
    Decision --> D3[Touchpoint:<br/>Форма бронирования, контакты]
    Decision --> D4[⚠️ Pain Point:<br/>Нет цен, непонятно как забронировать]
    
    D1 --> Booking[Этап 4: Бронирование]
    D2 --> Booking
    D3 --> Booking
    D4 --> Booking
    
    Booking --> B1[Согласование деталей]
    Booking --> B2[Подписание договора]
    Booking --> B3[Touchpoint:<br/>Email, телефон]
    Booking --> B4[✨ Opportunity:<br/>Автоматизация через онлайн-форму]
    
    B1 --> After[Этап 5: После мероприятия]
    B2 --> After
    B3 --> After
    B4 --> After
    
    After --> AF1[Обратная связь]
    After --> AF2[Повторное бронирование]
    After --> AF3[Touchpoint:<br/>Follow-up email, отзывы]
    After --> AF4[✨ Opportunity:<br/>Программа лояльности]
    
    AF1 --> End([Завершение цикла])
    AF2 --> End
    AF3 --> End
    AF4 --> End
    
    style Awareness fill:#e1f5ff
    style Consideration fill:#fff4e1
    style Decision fill:#ffe1f5
    style Booking fill:#e1ffe1
    style After fill:#f5e1ff
    style C5 fill:#ffcccc
    style D4 fill:#ffcccc
    style B4 fill:#ccffcc
    style AF4 fill:#ccffcc
```

## Временная шкала Customer Journey

```mermaid
gantt
    title Customer Journey Timeline: Организатор мероприятия
    dateFormat X
    axisFormat %s
    
    section Осведомленность
    Поиск в Google / Рекомендация     :0, 1
    section Рассмотрение
    Посещение сайта                    :1, 2
    Просмотр видео / Оценка            :2, 3
    section Решение
    Проверка доступности               :3, 1
    Запрос КП                          :4, 2
    section Бронирование
    Согласование деталей               :6, 3
    Подписание договора                :9, 2
    section После мероприятия
    Обратная связь                     :11, 2
    Повторное бронирование             :13, 1
```

---

# Customer Journey Map: Поклонник музыки

```mermaid
journey
    title Customer Journey: Поклонник музыки
    section Открытие
      Реклама концерта: 3: Поклонник
      Видео в соцсетях: 4: Поклонник
      Рекомендация друга: 5: Поклонник
    section Интерес
      Прослушивание музыки: 5: Поклонник
      Чтение о группе: 4: Поклонник
      Нет возможности послушать на сайте (Pain Point): 2: Поклонник
    section Вовлечение
      Подписка на новости: 4: Поклонник
      Покупка билета: 5: Поклонник
      Email-маркетинг (Opportunity): 5: Поклонник
    section Посещение концерта
      Живое выступление: 5: Поклонник
      Покупка мерча: 4: Поклонник
    section Лояльность
      Повторные визиты: 5: Поклонник
      Покупка альбомов: 4: Поклонник
      Распространение информации: 5: Поклонник
      Fan club (Opportunity): 5: Поклонник
```

## Детальная диаграмма с touchpoints

```mermaid
flowchart TD
    Start([Поклонник музыки]) --> Discovery[Этап 1: Открытие]
    
    Discovery --> D1[Реклама концерта]
    Discovery --> D2[Видео в социальных сетях]
    Discovery --> D3[Рекомендация друга]
    Discovery --> D4[Touchpoint:<br/>Instagram, Facebook, Spotify]
    
    D1 --> Interest[Этап 2: Интерес]
    D2 --> Interest
    D3 --> Interest
    D4 --> Interest
    
    Interest --> I1[Прослушивание музыки]
    Interest --> I2[Чтение о группе]
    Interest --> I3[Touchpoint:<br/>Сайт, стриминговые платформы]
    Interest --> I4[⚠️ Pain Point:<br/>Нет возможности послушать на сайте]
    
    I1 --> Engagement[Этап 3: Вовлечение]
    I2 --> Engagement
    I3 --> Engagement
    I4 --> Engagement
    
    Engagement --> E1[Подписка на новости]
    Engagement --> E2[Покупка билета на концерт]
    Engagement --> E3[Touchpoint:<br/>Newsletter signup, билетная система]
    Engagement --> E4[✨ Opportunity:<br/>Email-маркетинг с анонсами]
    
    E1 --> Concert[Этап 4: Посещение концерта]
    E2 --> Concert
    E3 --> Concert
    E4 --> Concert
    
    Concert --> C1[Живое выступление]
    Concert --> C2[Покупка мерча]
    Concert --> C3[Touchpoint:<br/>Концертная площадка]
    
    C1 --> Loyalty[Этап 5: Лояльность]
    C2 --> Loyalty
    C3 --> Loyalty
    
    Loyalty --> L1[Повторные визиты]
    Loyalty --> L2[Покупка альбомов]
    Loyalty --> L3[Распространение информации]
    Loyalty --> L4[Touchpoint:<br/>Социальные сети, сайт группы]
    Loyalty --> L5[✨ Opportunity:<br/>Fan club, эксклюзивный контент]
    
    L1 --> End([Завершение цикла])
    L2 --> End
    L3 --> End
    L4 --> End
    L5 --> End
    
    style Discovery fill:#e1f5ff
    style Interest fill:#fff4e1
    style Engagement fill:#ffe1f5
    style Concert fill:#e1ffe1
    style Loyalty fill:#f5e1ff
    style I4 fill:#ffcccc
    style E4 fill:#ccffcc
    style L5 fill:#ccffcc
```

## Временная шкала Customer Journey

```mermaid
gantt
    title Customer Journey Timeline: Поклонник музыки
    dateFormat X
    axisFormat %s
    
    section Открытие
    Реклама / Видео / Рекомендация    :0, 1
    section Интерес
    Прослушивание музыки              :1, 2
    Чтение о группе                   :2, 1
    section Вовлечение
    Подписка на новости               :3, 1
    Покупка билета                    :4, 1
    section Посещение концерта
    Живое выступление                 :5, 2
    Покупка мерча                     :6, 1
    section Лояльность
    Повторные визиты                  :7, 2
    Покупка альбомов                  :8, 1
    Распространение информации        :9, 1
```

