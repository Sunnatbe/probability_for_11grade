"""15-bob chizmasi: y = x^2 - 2x - 3 parabolasi, x o'qi bilan kesishish nuqtalari, uchi va
simmetriya o'qi."""
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt

chiqish = Path(__file__).parent / "chiqish"
chiqish.mkdir(exist_ok=True)

KOK = "#1f6feb"
QIZIL = "#d1242f"

XMIN, XMAX, YMIN, YMAX = -3, 5, -5, 6

fig, ax = plt.subplots(figsize=(5.2, 6.4))

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
    if k not in (0, -1, 3):
        ax.text(k, -0.42, f"${k}$", ha="center", va="center", fontsize=8.5)
for k in range(YMIN, YMAX + 1):
    if k not in (0, -3):
        ax.text(-0.25, k, f"${k}$", ha="right", va="center", fontsize=8.5)
ax.text(-0.3, -0.42, "$O$", fontsize=11, ha="center", va="center")

# parabola
n = 200
xs = [-2 + 6 * i / n for i in range(n + 1)]
ax.plot(xs, [t * t - 2 * t - 3 for t in xs], color=KOK, lw=2.4, zorder=2)
ax.text(1.6, 6.5, "$y = x^2 - 2x - 3$", fontsize=12, color=KOK, ha="left", va="center",
        bbox=dict(boxstyle="round,pad=0.15", fc="white", ec="none"))

# simmetriya o'qi x = 1
ax.plot([1, 1], [YMIN, YMAX], color="black", lw=1.2, ls="--", zorder=1)
ax.text(1.15, 5.4, "$x = 1$", fontsize=11, ha="left", va="center",
        bbox=dict(boxstyle="round,pad=0.1", fc="white", ec="none"))

# x o'qi bilan kesishish nuqtalari
for px in (-1, 3):
    ax.plot([px], [0], "o", color=QIZIL, markersize=9, markeredgecolor="black", zorder=4)
ax.text(-1.25, 0.55, "$(-1, 0)$", fontsize=11, ha="right", va="center",
        bbox=dict(boxstyle="round,pad=0.1", fc="white", ec="none"))
ax.text(3.25, 0.55, "$(3, 0)$", fontsize=11, ha="left", va="center",
        bbox=dict(boxstyle="round,pad=0.1", fc="white", ec="none"))

# y o'qi bilan kesishish nuqtasi
ax.plot([0], [-3], "o", color="white", markersize=8, markeredgecolor="black",
        markeredgewidth=1.8, zorder=4)
ax.text(-0.25, -3, "$(0, {-3})$", fontsize=11, ha="right", va="center",
        bbox=dict(boxstyle="round,pad=0.1", fc="white", ec="none"))

# uchi
ax.plot([1], [-4], "s", color="black", markersize=8, zorder=4)
ax.text(1.3, -4.35, "uchi $(1, {-4})$", fontsize=11, ha="left", va="center",
        bbox=dict(boxstyle="round,pad=0.1", fc="white", ec="none"))

ax.set_xlim(XMIN - 0.4, XMAX + 0.9)
ax.set_ylim(YMIN - 0.4, YMAX + 0.9)
ax.set_aspect("equal")
ax.axis("off")
fig.savefig(chiqish / "15_parabola.png", dpi=200, bbox_inches="tight")
