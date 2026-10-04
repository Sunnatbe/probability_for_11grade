#!/usr/bin/env bash
# One zip per finished lesson (small enough to send as a chat attachment):
#   scripts/pack-lessons.sh 1 2 3
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p out/zip
for n in "$@"; do
  N=$(printf "%02d" "$n")
  test -s "out/course/Dars$N/Dars${N}_video.mp4" || { echo "Missing video for Dars$N" >&2; exit 1; }
  M=$(npx tsx -e "import {CATALOG} from './src/course/catalog'; console.log(CATALOG[$n-1].module)")
  Z="out/zip/SAT_Math_${M}_Dars${N}.zip"
  rm -f "$Z"
  (cd out/course && zip -q -r -0 "../../$Z" "Dars$N")
  ls -la "$Z"
done
