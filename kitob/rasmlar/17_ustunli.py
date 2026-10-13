"""17-bob chizmasi: ustunli diagramma — kutubxonadan oylar bo'yicha berilgan kitoblar soni.

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

KOK = "#9ec5fe"
YMAX = 180

fig, ax = plt.subplots(figsize=(6.4, 4.2))
for k in range(0, YMAX + 1, 10):
    ax.axhline(k, color="#d0d0d0" if k % 20 else "#a8a8a8", lw=0.6, zorder=0)
ax.bar(m["OYLAR"], m["KITOBLAR"], width=0.62, color=KOK, edgecolor="black", hatch="//",
       linewidth=1.1, zorder=2)
ax.set_ylim(0, YMAX)
ax.set_yticks(range(0, YMAX + 1, 20))
ax.set_ylabel("Berilgan kitoblar soni", fontsize=11)
ax.set_xlabel("Oy", fontsize=11)
ax.tick_params(axis="both", labelsize=10)
for s in ("top", "right"):
    ax.spines[s].set_visible(False)
fig.savefig(chiqish / "17_ustunli.png", dpi=200, bbox_inches="tight")
