#!/usr/bin/env bash
# Renders the given lessons with the fast renderer, writes their scripts/texts
# and a per-lesson zip.  Skips lessons whose video already exists.
#   scripts/render-all-fast.sh 4 5 6 ...
set -uo pipefail
cd "$(dirname "$0")/.."
export REMOTION_BROWSER="${REMOTION_BROWSER:-/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell}"
npx tsx scripts/check.tsx || exit 1
BUNDLE=out/.bundle-fast
npx remotion bundle src/index.ts --out-dir "$BUNDLE" --log=error >/dev/null 2>&1 || exit 1
for n in "$@"; do
  N=$(printf "%02d" "$n")
  mkdir -p "out/course/Dars$N"
  npx tsx scripts/gen-docs.tsx out/course "$n" >/dev/null
  V="out/course/Dars$N/Dars${N}_video.mp4"
  if [ ! -s "$V" ]; then
    if ! npx tsx scripts/render-fast.tsx "$BUNDLE" "$n" "$V.tmp.mp4"; then
      echo "FAILED Dars$N"; rm -f "$V.tmp.mp4"; continue
    fi
    mv "$V.tmp.mp4" "$V"
  fi
  scripts/pack-lessons.sh "$n" >/dev/null
  echo "DONE Dars$N $(date +%H:%M)"
done
echo "ALL DONE $(date +%H:%M)"
