#!/usr/bin/env bash
# Zips finished lessons of one module:  scripts/pack-module.sh M1 3 4 5 6 7 8 9 10
set -euo pipefail
cd "$(dirname "$0")/.."
MOD=$1; shift
NAME=$(npx tsx -e "import {CATALOG} from './src/course/catalog'; console.log(CATALOG.find(c=>c.module==='$MOD')!.moduleName.replace(/ /g,'_'))")
mkdir -p out/zip
ZIP="out/zip/SAT_Math_${MOD}_${NAME}.zip"
rm -f "$ZIP"
for n in "$@"; do
  N=$(printf "%02d" "$n")
  test -s "out/course/Dars$N/Dars${N}_video.mp4" || { echo "Missing video for Dars$N" >&2; exit 1; }
done
(cd out/course && zip -q -r -0 "../../$ZIP" $(for n in "$@"; do printf "Dars%02d " "$n"; done))
ls -la "$ZIP"
