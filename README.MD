# Настройка CI/CD для автоматического деплоя

# 1. Настроить GitHub Secrets

В репозитории GitHub нужно открыть:

```text
Settings → Secrets and variables → Actions → New repository secret
```

Добавить следующие секреты:

```env
DOCKERHUB_USERNAME=твой_логин_dockerhub
DOCKERHUB_TOKEN=токен_dockerhub

SSH_HOST=ip_или_домен_сервера
SSH_PORT=порт_ssh_подключения
SSH_USER=имя_пользователя_на_сервере
SSH_PRIVATE_KEY=приватный_ssh_ключ
```

# 2. Создать env папки на сервере

```bash
mkdir -p ~/env/next-krot-site
nano ~/env/next-krot-site/.env.production
nano ~/env/next-krot-site/.env.local
```

## 3. Открыть порты и настроить DNS

Привязать DNS к IP у провайдера
На сервере нужно открыть порты:

```bash
sudo ufw allow 80
sudo ufw allow 443
sudo ufw allow 22
```

## 4. Проверить ошибки pnpm build
