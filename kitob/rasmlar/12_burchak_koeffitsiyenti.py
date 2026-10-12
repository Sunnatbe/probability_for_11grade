"""12-bob chizmasi: y = (2/3)x + 1 to'g'ri chizig'i, burchak koeffitsiyenti uchburchagi va
y o'qi bilan kesishish nuqtasi."""
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt

chiqish = Path(__file__).parent / "chiqish"
chiqish.mkdir(exist_ok=True)

KOK = "#1f6feb"
QIZIL = "#d1242f"

XMIN, XMAX, YMIN, YMAX = -3, 8, -2, 7

fig, ax = plt.subplots(figsize=(6.0, 4.4))

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
        ax.text(k, -0.4, f"${k}$", ha="center", va="center", fontsize=8.5)
for k in range(YMIN, YMAX + 1):
    if k:
        ax.text(-0.25, k, f"${k}$", ha="right", va="center", fontsize=8.5)
ax.text(-0.3, -0.4, "$O$", fontsize=11, ha="center", va="center")

# to'g'ri chiziq y = 2x/3 + 1
xs = [XMIN, XMAX]
ax.plot(xs, [2 * t / 3 + 1 for t in xs], color=KOK, lw=2.4, zorder=2)

# burchak koeffitsiyenti uchburchagi: (0, 1) -> (3, 1) -> (3, 3)
ax.plot([0, 3], [1, 1], color=QIZIL, lw=2, ls="--", zorder=2)
ax.plot([3, 3], [1, 3], color=QIZIL, lw=2, ls="--", zorder=2)
ax.text(1.5, 0.55, "o'ngga 3", ha="center", va="center", fontsize=11, color=QIZIL,
        bbox=dict(boxstyle="round,pad=0.15", fc="white", ec="none"))
ax.text(3.2, 2.0, "yuqoriga 2", ha="left", va="center", fontsize=11, color=QIZIL,
        bbox=dict(boxstyle="round,pad=0.15", fc="white", ec="none"))

for px, py in ((0, 1), (3, 3), (6, 5)):
    ax.plot([px], [py], "o", color="black", markersize=6, zorder=3)
ax.annotate("$(0, 1)$", xy=(0, 1), xytext=(-2.6, 2.6), fontsize=11,
            arrowprops=dict(arrowstyle="->", color="black", lw=0.9),
            bbox=dict(boxstyle="round,pad=0.15", fc="white", ec="none"))
ax.text(2.6, 3.5, "$(3, 3)$", ha="right", va="center", fontsize=11,
        bbox=dict(boxstyle="round,pad=0.1", fc="white", ec="none"))
ax.text(5.6, 5.5, "$(6, 5)$", ha="right", va="center", fontsize=11,
        bbox=dict(boxstyle="round,pad=0.1", fc="white", ec="none"))

ax.set_xlim(XMIN - 0.4, XMAX + 0.9)
ax.set_ylim(YMIN - 0.4, YMAX + 0.9)
ax.set_aspect("equal")
ax.axis("off")
fig.savefig(chiqish / "12_burchak_koeffitsiyenti.png", dpi=200, bbox_inches="tight")
