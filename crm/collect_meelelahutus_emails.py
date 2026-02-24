"""
Скрипт для сбора email-адресов провайдеров MEELELAHUTUS.
Адаптирован под базу neti_MEELELAHUTUS_links.csv
"""
import pandas as pd
import requests
import re
import time
from urllib.parse import urljoin, urlparse

# Конфигурация
INPUT_FILE = 'neti_MEELELAHUTUS_links.csv'
OUTPUT_FILE = 'neti_MEELELAHUTUS_with_emails.csv'
REQUEST_DELAY = 2  # секунд между запросами (защита от блокировки)
TIMEOUT = 10

# Паттерны страниц контактов для проверки, если на главной не найдено
CONTACT_PATHS = ['/kontakt', '/contact', '/kontaktid', '/about', '/meist', '/about-us']


def find_emails_in_text(text):
    """Извлекает email-адреса из текста."""
    emails = re.findall(
        r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}',
        text
    )
    # Убираем мусор (картинки, иконки и т.д.)
    valid = [
        e for e in set(emails)
        if not e.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.woff', '.woff2'))
    ]
    return valid


def fetch_page(url):
    """Загружает страницу с заголовками браузера."""
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
    try:
        response = requests.get(url, timeout=TIMEOUT, headers=headers)
        response.raise_for_status()
        return response.text
    except Exception as e:
        return None


def find_emails(url):
    """
    Ищет email на главной странице, при необходимости — на странице контактов.
    """
    # Пропускаем Facebook — там email обычно недоступен через простой GET
    if 'facebook.com' in url.lower():
        return "Facebook (пропущено)"

    base_url = url.rstrip('/')
    all_emails = []

    # 1. Проверяем главную страницу
    html = fetch_page(base_url)
    if html:
        all_emails.extend(find_emails_in_text(html))

    # 2. Если на главной не нашли — пробуем страницы контактов
    if not all_emails:
        parsed = urlparse(base_url)
        base = f"{parsed.scheme}://{parsed.netloc}"
        for path in CONTACT_PATHS:
            contact_url = urljoin(base, path)
            html = fetch_page(contact_url)
            if html:
                found = find_emails_in_text(html)
                if found:
                    all_emails.extend(found)
                    break
            time.sleep(1)  # небольшая пауза между подстраницами

    if all_emails:
        return ", ".join(sorted(set(all_emails)))
    return "Не найдено"


def main():
    print(f"Загружаю {INPUT_FILE}...")
    df = pd.read_csv(INPUT_FILE, sep=';', encoding='utf-8-sig')

    # Проверяем наличие колонки URL
    if 'URL' not in df.columns:
        raise ValueError("В CSV должна быть колонка 'URL'")

    total = len(df)
    print(f"Найдено {total} записей. Начинаю сбор email...\n")

    results = []
    for i, row in df.iterrows():
        url = row['URL']
        name = row.get('Name', '')
        print(f"[{i+1}/{total}] {name[:40]}...")
        emails = find_emails(url)
        results.append(emails)
        time.sleep(REQUEST_DELAY)

    df['Emails'] = results

    df.to_csv(OUTPUT_FILE, index=False, sep=';', encoding='utf-8-sig')
    print(f"\nГотово! Результаты сохранены в {OUTPUT_FILE}")


if __name__ == '__main__':
    main()
