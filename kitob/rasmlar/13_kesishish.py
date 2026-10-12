"""13-bob chizmasi: y = x + 1 va y = -2x + 7 to'g'ri chiziqlari va ularning kesishish nuqtasi."""
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt

chiqish = Path(__file__).parent / "chiqish"
chiqish.mkdir(exist_ok=True)

KOK = "#1f6feb"
QIZIL = "#d1242f"

XMIN, XMAX, YMIN, YMAX = -3, 6, -3, 8

fig, ax = plt.subplots(figsize=(5.2, 5.6))

for k in range(XMIN, XMAX + 1):
    ax.plot([k, k], [YMIN, YMAX], color="#d0d0d0", lw=0.6, zorder=0)
for k in range(YMIN, YMAX + 1):
    ax.plot([XMIN, XMAX], [k, k], color="#d0d0d0", lw=0.6, zorder=0)

ax.annotate("", xy=(XMAX + 0.6, 0), xytext=(XMIN - 0.2, 0),
            arrowprops=dict(arrowstyle="-|>", color="black", lw=1.2))
ax.annotate("", xy=(0, YMAX + 0.6), xytext=(0, YMIN - 0.2),
            arrowprops=dict(arrowstyle="-|>", color="black", lw=1.2))
ax.text(XMAX + 0.6, -0.45, "$x$", fontsize=13, ha="center", va="center")
ax.text(0.4, YMAX + 0.6, "$y$", fontsize=13, ha="center", va="center")
for k in range(XMIN, XMAX + 1):
    if k:
        ax.text(k, -0.42, f"${k}$", ha="center", va="center", fontsize=8.5)
for k in range(YMIN, YMAX + 1):
    if k:
        ax.text(-0.25, k, f"${k}$", ha="right", va="center", fontsize=8.5)
ax.text(-0.3, -0.42, "$O$", fontsize=11, ha="center", va="center")

# 1-chiziq: y = x + 1 (tutash), 2-chiziq: y = -2x + 7 (punktir) — oq-qorada ham farqlanadi
ax.plot([XMIN, 6], [XMIN + 1, 7], color=KOK, lw=2.4, zorder=2)
ax.plot([0, 5], [7, -3], color=QIZIL, lw=2.4, ls="--", zorder=2)
ax.text(4.6, 6.3, "$y = x + 1$", fontsize=12, color=KOK, ha="right", va="center",
        bbox=dict(boxstyle="round,pad=0.15", fc="white", ec="none"))
ax.text(4.1, -1.6, "$y = -2x + 7$", fontsize=12, color=QIZIL, ha="left", va="center",
        bbox=dict(boxstyle="round,pad=0.15", fc="white", ec="none"))

# kesishish nuqtasi va o'qlarga tushirilgan yordamchi chiziqlar
ax.plot([2, 2], [0, 3], color="black", lw=1, ls=":", zorder=1)
ax.plot([0, 2], [3, 3], color="black", lw=1, ls=":", zorder=1)
ax.plot([2], [3], "o", markersize=10, markerfacecolor="white", markeredgecolor="black",
        markeredgewidth=2, zorder=4)
ax.annotate("kesishish nuqtasi", xy=(2.1, 3.1), xytext=(3.2, 1.6), fontsize=11,
            arrowprops=dict(arrowstyle="->", color="black", lw=0.9),
            bbox=dict(boxstyle="round,pad=0.15", fc="white", ec="none"))

ax.set_xlim(XMIN - 0.4, XMAX + 0.9)
ax.set_ylim(YMIN - 0.4, YMAX + 0.9)
ax.set_aspect("equal")
ax.axis("off")
fig.savefig(chiqish / "13_kesishish.png", dpi=200, bbox_inches="tight")
