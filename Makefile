# ---------- config ----------
SHELL := /bin/sh
.SHELLFLAGS := -eu -c
.ONESHELL:

UNAME_S := $(shell uname -s 2>/dev/null | tr A-Z a-z)
IS_WINDOWS := $(or $(filter Windows_NT,$(OS)),\
                 $(findstring mingw,$(UNAME_S)),\
                 $(findstring msys,$(UNAME_S)))


ifeq ($(IS_WINDOWS),)
  APP_USER ?= $(if $(SUDO_USER),$(SUDO_USER),$(shell id -un))
  HOME_DIR := $(shell getent passwd $(APP_USER) | cut -d: -f6)
endif

# Пути
COMPOSE_DIR := docker

COMPOSE_BASE := $(COMPOSE_DIR)/docker-compose.yml
COMPOSE_DEV  := $(COMPOSE_DIR)/docker-compose.dev.yml
COMPOSE_PROD := $(COMPOSE_DIR)/docker-compose.prod.yml

ENV_DEV   := config/.env.development
ENV_PROD  := $(HOME_DIR)/env/yamal-bistro-site/.env.production

# docker compose команды с нужным --env-file
DC      := docker compose
DC_DEV  := $(DC) --env-file $(ENV_DEV)  -f $(COMPOSE_BASE) -f $(COMPOSE_DEV)
DC_PROD := $(DC) --env-file $(ENV_PROD) -f $(COMPOSE_BASE) -f $(COMPOSE_PROD)

# Токен для on-demand revalidation (берём из прод-окружения)
REVALIDATE_TOKEN ?= $(shell grep -E '^REVALIDATE_TOKEN=' $(ENV_PROD) 2>/dev/null | cut -d= -f2-)

# ---------- help ----------
.PHONY: help
help:
	@$(info Makefile targets:)
	@$(info   dev-up            - start dev (hot-reload, web:3000))
	@$(info   dev-down          - stop dev)
	@$(info   dev-logs          - tail web logs (dev))
	@$(info   dev-ps            - list containers (dev))
	@$(info   dev-rebuild       - rebuild & restart dev)
	@$(info   migrate-dev       - prisma migrate dev (dev))
	@$(info   prisma-generate   - run prisma generate inside web (dev))
	@$(info   prisma-db-push    - prisma db push (dev) )
	@$(info   prisma-studio     - open Prisma Studio (dev))
	@$(info   prod-build        - build prod images)
	@$(info   prod-rebuild      - build prod --no-cache & up)
	@$(info   prod-up           - start prod (web + caddy + db))
	@$(info   prod-down         - stop prod)
	@$(info   prod-logs         - tail caddy + web logs (prod))
	@$(info   prod-ps           - list containers (prod))
	@$(info   migrate-deploy    - prisma migrate deploy (prod))
	@$(info   db-shell          - bash into DB container (auto dev/prod))
	@$(info   db-psql-dev       - psql into DB (dev))
	@$(info   db-psql-prod      - psql into DB (prod))
	@$(info   web-sh            - shell into web (auto prod/dev))

# ---------- dev ----------
.PHONY: dev-up
dev-up:
	$(DC_DEV) up -d --build
	$(DC_DEV) ps

.PHONY: dev-down
dev-down:
	$(DC_DEV) down

.PHONY: dev-logs
dev-logs:
	$(DC_DEV) logs -f web

.PHONY: dev-ps
dev-ps:
	$(DC_DEV) ps

.PHONY: dev-rebuild
dev-rebuild:
	$(DC_DEV) build
	$(DC_DEV) up -d
	$(DC_DEV) exec web pnpm prisma generate
	$(DC_DEV) exec web pnpm prisma migrate dev
	$(DC_DEV) ps

.PHONY: dev-migrate
dev-migrate:
	$(DC_DEV) exec web pnpm prisma migrate dev

# Prisma utils (dev)
.PHONY: dev-generate
dev-generate:
	$(DC_DEV) exec web pnpm prisma generate

.PHONY: dev-db-push
dev-db-push:
	$(DC_DEV) exec web pnpm prisma db push

.PHONY: dev-prisma-studio
dev-prisma-studio:
	 $(DC_DEV) exec web pnpm prisma studio

# ---------- prod ----------
.PHONY: prod-build
prod-build:
	$(DC_PROD) build

.PHONY: prod-rebuild
prod-rebuild:
	$(DC_PROD) build --no-cache
	$(DC_PROD) up -d
	$(DC_PROD) ps

.PHONY: prod-up
prod-up:
	$(DC_PROD) up -d
	$(DC_PROD) ps

.PHONY: prod-down
prod-down:
	$(DC_PROD) down

.PHONY: prod-logs
prod-logs:
	$(info ---- Caddy logs ----)
	$(DC_PROD) logs -f caddy
	$(info ---- Web logs ----)
	$(DC_PROD) logs -f web

.PHONY: prod-ps
prod-ps:
	$(DC_PROD) ps

.PHONY: migrate-deploy
migrate-deploy:
	$(DC_PROD) exec web pnpm prisma migrate deploy

# ---------- handy ----------
.PHONY: db-shell
db-shell:
	# Сначала пробуем prod, затем dev
	$(DC_PROD) exec db bash 2>/dev/null || $(DC_DEV) exec db bash

.PHONY: db-psql-dev
db-psql-dev:
	U=$$(grep -E '^PG_USER=' $(ENV_DEV)  | cut -d= -f2-); \
	DB=$$(grep -E '^PG_DB='   $(ENV_DEV)  | cut -d= -f2-); \
	if [ -z "$$U" ] || [ -z "$$DB" ]; then echo "PG_USER/PG_DB not found in $(ENV_DEV)"; exit 1; fi; \
	$(DC_DEV) exec db psql -U $$U -d $$DB

.PHONY: db-psql-prod
db-psql-prod:
	U=$$(grep -E '^PG_USER=' $(ENV_PROD) | cut -d= -f2-); \
	DB=$$(grep -E '^PG_DB='   $(ENV_PROD) | cut -d= -f2-); \
	if [ -z "$$U" ] || [ -z "$$DB" ]; then echo "PG_USER/PG_DB not found in $(ENV_PROD)"; exit 1; fi; \
	$(DC_PROD) exec db psql -U $$U -d $$DB

.PHONY: web-sh
web-sh:
	# Сначала prod, затем dev
	$(DC_PROD) exec web sh 2>/dev/null || $(DC_DEV) exec web sh
