#!/usr/bin/env bash
# Renders course lessons and writes their scripts/texts into out/course/DarsNN/.
#   scripts/render-lessons.sh 3 4 5
set -euo pipefail
cd "$(dirname "$0")/.."
export REMOTION_BROWSER="${REMOTION_BROWSER:-/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell}"
npx tsx scripts/check.tsx >/dev/null || { npx tsx scripts/check.tsx; exit 1; }
BUNDLE=out/.bundle
npx remotion bundle src/index.ts --out-dir "$BUNDLE" --log=error >/dev/null
for n in "$@"; do
  N=$(printf "%02d" "$n")
  mkdir -p "out/course/Dars$N"
  npx tsx scripts/gen-docs.tsx out/course "$n"
  if [ ! -s "out/course/Dars$N/Dars${N}_video.mp4" ] || [ "${FORCE:-0}" = 1 ]; then
    npx remotion render "$BUNDLE" "SAT-Dars$N" "out/course/Dars$N/Dars${N}_video.mp4" \
      --muted --concurrency="$(nproc)" --log=error
  fi
  echo "DONE Dars$N"
done
