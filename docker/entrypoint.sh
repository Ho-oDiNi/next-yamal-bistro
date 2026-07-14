#!/bin/sh
set -eu

if [ -f "./node_modules/@prisma/client/package.json" ]; then
  v=$(node -p "require('./node_modules/@prisma/client/package.json').version" 2>/dev/null || :)
  [ -z "$v" ] || pnpm dlx "prisma@$v" migrate deploy
fi

exec "$@"