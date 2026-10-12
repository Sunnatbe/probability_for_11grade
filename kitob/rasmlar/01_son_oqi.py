"""01-bob chizmasi: son o'qi, -4 va 3 nuqtalari hamda ularning 0 gacha masofasi."""
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt

chiqish = Path(__file__).parent / "chiqish"
chiqish.mkdir(exist_ok=True)

KOK = "#1f6feb"
QIZIL = "#d1242f"

fig, ax = plt.subplots(figsize=(7.5, 2.0))

# o'q va ikki tomondagi strelkalar
ax.annotate("", xy=(6.8, 0), xytext=(-6.8, 0),
            arrowprops=dict(arrowstyle="<|-|>", color="black", lw=1.2))
for x in range(-6, 7):
    ax.plot([x, x], [-0.12, 0.12], color="black", lw=1)
    ax.text(x, -0.42, f"${x}$", ha="center", va="center", fontsize=11,
            fontweight="bold" if x == 0 else "normal")

# nuqtalar
ax.plot([-4], [0], "o", color=QIZIL, markersize=9, zorder=3)
ax.plot([3], [0], "o", color=KOK, markersize=9, zorder=3)

# 0 gacha masofa (absolyut qiymat)
for x, rang, matn in ((-4, QIZIL, r"$|{-4}| = 4$"), (3, KOK, r"$|3| = 3$")):
    ax.annotate("", xy=(0, 0.45), xytext=(x, 0.45),
                arrowprops=dict(arrowstyle="<->", color=rang, lw=1.3))
    ax.text(x / 2, 0.72, matn, ha="center", va="center", color=rang, fontsize=11)

ax.text(-3.5, -0.9, "manfiy sonlar", ha="center", va="center", fontsize=10, color="#555555")
ax.text(3.5, -0.9, "musbat sonlar", ha="center", va="center", fontsize=10, color="#555555")

ax.set_xlim(-7, 7)
ax.set_ylim(-1.15, 1.0)
ax.axis("off")
fig.savefig(chiqish / "01_son_oqi.png", dpi=200, bbox_inches="tight")
