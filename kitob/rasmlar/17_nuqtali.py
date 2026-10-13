"""17-bob chizmasi: nuqtali diagramma — tayyorgarlik vaqti va test bali, eng mos to'g'ri chiziq bilan.

Ma'lumot 17_malumotlar.py dan olinadi (javoblar/17.py ham o'shandan hisoblaydi).
"""
import runpy
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt

papka = Path(__file__).parent
chiqish = papka / "chiqish"
chiqish.mkdir(exist_ok=True)
m = runpy.run_path(str(papka / "17_malumotlar.py"))

KOK = "#1f6feb"
QIZIL = "#d1242f"
XMAX, YMIN, YMAX = 11, 40, 110

fig, ax = plt.subplots(figsize=(6.2, 4.8))
for k in range(YMIN, YMAX + 1, 5):
    ax.axhline(k, color="#d0d0d0" if k % 10 else "#a8a8a8", lw=0.6, zorder=0)
for k in range(0, XMAX + 1):
    ax.axvline(k, color="#d0d0d0", lw=0.6, zorder=0)

xs = [0, XMAX]
ax.plot(xs, [m["bashorat"](t) for t in xs], color=QIZIL, lw=2, ls="--", zorder=2,
        label="eng mos to'g'ri chiziq: $y = 5x + 45$")
ax.plot([x for x, _ in m["NUQTALAR"]], [y for _, y in m["NUQTALAR"]], "o", markersize=8,
        color=KOK, markeredgecolor="black", markeredgewidth=1.2, zorder=3,
        label="bitta o'quvchi")
ax.legend(loc="upper left", fontsize=10, framealpha=1, edgecolor="#a8a8a8")
ax.set_xlim(0, XMAX)
ax.set_ylim(YMIN, YMAX)
ax.set_xticks(range(0, XMAX + 1))
ax.set_yticks(range(YMIN, YMAX + 1, 10))
ax.set_xlabel("Tayyorgarlik vaqti (soat)", fontsize=11)
ax.set_ylabel("Test bali", fontsize=11)
ax.tick_params(axis="both", labelsize=10)
for s in ("top", "right"):
    ax.spines[s].set_visible(False)
fig.savefig(chiqish / "17_nuqtali.png", dpi=200, bbox_inches="tight")
