# Alpforce Site

Маркетинговый сайт компании по промышленному альпинизму, собранный на Next.js 15 с использованием нового App Router и Tailwind
CSS. Проект теперь включает полноценное подключение к PostgreSQL через Prisma, что позволит хранить контент (услуги, отзывы, се
рвисные блоки) в БД вместо статических файлов.

## Стек

- [Next.js](https://nextjs.org/) 15 (App Router)
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/) + PostgreSQL

## Подготовка окружения

1. Скопируйте переменные окружения и укажите свои значения:

    ```bash
    cp .env.example .env.local
    ```

2. Установите зависимости:

    ```bash
    pnpm install
    ```

3. Выполните миграции и сгенерируйте Prisma Client (создаст структуру БД):

    ```bash
    pnpm prisma migrate dev --name init
    pnpm prisma generate
    ```

    > Если миграции уже применены, можно ограничиться `pnpm prisma generate` для обновления клиента.

4. Запустите dev-сервер:

    ```bash
    pnpm dev
    ```

    После запуска приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000).

## Структура базы данных

Файл [`prisma/schema.prisma`](./prisma/schema.prisma) описывает сущности проекта. Основные таблицы:

- `NavigationLink` — ссылки хедера и футера с типом блока (header, услуги, компания, география).
- `Advantage` и `AdvantageCommitment` — карточки преимуществ и связанные списки обязательств.
- `ServiceCategory` и `Service` — иерархия категорий и детальные карточки услуг.
- `ServiceChecklistItem`, `ServiceMaterial`, `ServiceFaq`, `ServiceComparison` — состав пакета работ, используемые материалы, FAQ
  и блок до/после для каждой услуги.
- `ExampleWork` — витрина выполненных проектов, связанная с услугами.
- `Review` — отзывы клиентов.
- `ContactRequest` — заявки из формы обратной связи.
- `GeographyItem` — список городов/районов из футера.

Добавляя новые типы контента, расширяйте схему и запускайте `pnpm prisma migrate dev`, чтобы применить изменения.

## Логирование данных на сервере

Мы используем вспомогательный модуль `lib/logger.ts`, чтобы все сообщения логировались в едином формате и их было проще анализировать. В разделе [docs/server-logging.md](docs/server-logging.md) описано, как подключать логгер и какие уровни логирования доступны.

## Полезные команды

| Команда                   | Описание                                     |
| ------------------------- | -------------------------------------------- |
| `pnpm dev`                | Запуск dev-сервера Next.js                   |
| `pnpm build`              | Сборка проекта                               |
| `pnpm start`              | Запуск собранного приложения                 |
| `pnpm lint`               | Проверка линтером                            |
| `pnpm prisma studio`      | Визуальное управление данными в БД           |
| `pnpm prisma migrate dev` | Создание/применение миграций в dev-режиме    |
| `pnpm prisma db push`     | Применение схемы без фиксации миграции (dev) |

## Запуск в Docker

1. Скопируйте пример окружения в отдельный файл для Docker и задайте необходимые значения:

    ```bash
    cp .env.example .env.local
    ```

    В файле `.env.local` измените значения на свои

2. Соберите и запустите сервисы в фоне:

    ```bash
    docker compose up --build -d
    ```

    Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000).

3. Примените миграции после первого запуска (и при изменениях схемы):

    ```bash
    docker compose exec web npx prisma migrate deploy
    ```

    По необходимости можно выполнить сидирование данных: `docker compose exec web npx prisma db seed`.

4. Для просмотра логов используйте:

    ```bash
    docker compose logs -f web
    ```

5. Остановить и удалить контейнеры можно командой:

    ```bash
    docker compose down
    ```

Контейнер `db` использует образ `postgres:18` с примонтированным томом `postgres-data`, что сохраняет данные между перезапусками.
