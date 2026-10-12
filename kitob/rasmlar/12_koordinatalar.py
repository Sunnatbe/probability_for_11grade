"""12-bob chizmasi: koordinatalar tekisligi, choraklar va A, B, C, D, E nuqtalari."""
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt

chiqish = Path(__file__).parent / "chiqish"
chiqish.mkdir(exist_ok=True)

KOK = "#1f6feb"
KULRANG = "#666666"

NUQTALAR = {"A": (3, 2), "B": (-4, 1), "C": (-2, -3), "D": (4, -2), "E": (-5, 0)}
CHEGARA = 6

fig, ax = plt.subplots(figsize=(5.6, 5.6))

# katak to'r
for k in range(-CHEGARA, CHEGARA + 1):
    ax.plot([k, k], [-CHEGARA, CHEGARA], color="#d0d0d0", lw=0.6, zorder=0)
    ax.plot([-CHEGARA, CHEGARA], [k, k], color="#d0d0d0", lw=0.6, zorder=0)

# o'qlar strelka bilan
ax.annotate("", xy=(CHEGARA + 0.7, 0), xytext=(-CHEGARA - 0.3, 0),
            arrowprops=dict(arrowstyle="-|>", color="black", lw=1.3))
ax.annotate("", xy=(0, CHEGARA + 0.7), xytext=(0, -CHEGARA - 0.3),
            arrowprops=dict(arrowstyle="-|>", color="black", lw=1.3))
ax.text(CHEGARA + 0.75, -0.45, "$x$", fontsize=14, ha="center", va="center")
ax.text(0.45, CHEGARA + 0.75, "$y$", fontsize=14, ha="center", va="center")
ax.text(-0.35, -0.4, "$O$", fontsize=12, ha="center", va="center")

# o'qlardagi sonlar
for k in range(-CHEGARA, CHEGARA + 1):
    if k == 0:
        continue
    ax.plot([k, k], [-0.1, 0.1], color="black", lw=1)
    ax.plot([-0.1, 0.1], [k, k], color="black", lw=1)
    ax.text(k, -0.42, f"${k}$", ha="center", va="center", fontsize=8.5)
    ax.text(-0.3, k, f"${k}$", ha="right", va="center", fontsize=8.5)

# choraklar
for matn, (cx, cy) in {"I chorak": (4.2, 5.2), "II chorak": (-4.2, 5.2),
                       "III chorak": (-4.2, -5.2), "IV chorak": (4.2, -5.2)}.items():
    ax.text(cx, cy, matn, ha="center", va="center", fontsize=11, color=KULRANG,
            bbox=dict(boxstyle="round,pad=0.25", fc="white", ec="none"))

# nuqtalar
for nom, (px, py) in NUQTALAR.items():
    ax.plot([px], [py], "o", color=KOK, markersize=8, markeredgecolor="black", zorder=3)
    dx = 0.35 if px >= 0 else -0.35
    ax.text(px + dx, py + 0.4, f"${nom}$", ha="center", va="center", fontsize=13,
            fontweight="bold",
            bbox=dict(boxstyle="round,pad=0.1", fc="white", ec="none", alpha=0.85))

ax.set_xlim(-CHEGARA - 0.6, CHEGARA + 1.1)
ax.set_ylim(-CHEGARA - 0.6, CHEGARA + 1.1)
ax.set_aspect("equal")
ax.axis("off")
fig.savefig(chiqish / "12_koordinatalar.png", dpi=200, bbox_inches="tight")
