"""17-bob chizmasi: chiziqli grafik — bahor kunida havo harorati (har 2 soatda o'lchangan).

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
YMAX = 20

fig, ax = plt.subplots(figsize=(6.4, 4.2))
for k in range(0, YMAX + 1, 2):
    ax.axhline(k, color="#d0d0d0", lw=0.6, zorder=0)
for t in m["SOATLAR"]:
    ax.axvline(t, color="#d0d0d0", lw=0.6, zorder=0)
ax.plot(m["SOATLAR"], m["HARORAT"], color=KOK, lw=2.2, marker="o", markersize=8,
        markerfacecolor="white", markeredgecolor="black", markeredgewidth=1.8, zorder=3)
ax.set_xlim(5.4, 18.6)
ax.set_ylim(0, YMAX)
ax.set_xticks(m["SOATLAR"])
ax.set_xticklabels([f"{t}:00" for t in m["SOATLAR"]])
ax.set_yticks(range(0, YMAX + 1, 2))
ax.set_ylabel("Harorat (°C)", fontsize=11)
ax.set_xlabel("Vaqt (soat)", fontsize=11)
ax.tick_params(axis="both", labelsize=10)
for s in ("top", "right"):
    ax.spines[s].set_visible(False)
fig.savefig(chiqish / "17_chiziqli.png", dpi=200, bbox_inches="tight")
