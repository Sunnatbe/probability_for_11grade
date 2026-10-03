#!/usr/bin/env bash
# Renders every lesson clip to out/<id>.mp4 (1920x1080, 30 fps, H.264, no audio).
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p out
for id in $(npx remotion compositions src/index.ts --quiet); do
  npx remotion render src/index.ts "$id" "out/$id.mp4" --muted
done
