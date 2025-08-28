#!/usr/bin/env bash
set -e
pnpm playwright install chromium --with-deps
exec pnpm nx run "$@"
