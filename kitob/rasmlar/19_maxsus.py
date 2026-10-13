"""19-bob chizmasi: maxsus to'g'ri burchakli uchburchaklar 45-45-90 va 30-60-90."""
import math
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Arc

chiqish = Path(__file__).parent / "chiqish"
chiqish.mkdir(exist_ok=True)

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(8.4, 3.6))


def kvadratcha(ax, p, k=0.22):
    x, y = p
    ax.plot([x + k, x + k, x], [y, y + k, y + k], color="black", lw=1.2)


# 45-45-90: katetlar 2.6
s = 2.6
ax1.plot([0, s, 0, 0], [0, 0, s, 0], color="black", lw=2)
kvadratcha(ax1, (0, 0))
ax1.add_patch(Arc((s, 0), 0.8, 0.8, theta1=135, theta2=180, lw=1.2))
ax1.add_patch(Arc((0, s), 0.8, 0.8, theta1=270, theta2=315, lw=1.2))
ax1.text(s - 0.62, 0.17, r"$45^\circ$", fontsize=12, ha="center", va="center")
ax1.text(0.1, s - 0.78, r"$45^\circ$", fontsize=12, ha="left", va="center")
ax1.text(s / 2, -0.3, "$x$", fontsize=15, ha="center", va="center")
ax1.text(-0.3, s / 2, "$x$", fontsize=15, ha="center", va="center")
ax1.text(s / 2 + 0.25, s / 2 + 0.25, r"$x\sqrt{2}$", fontsize=15, ha="left", va="bottom")
ax1.set_title("45°, 45°, 90°", fontsize=13)

# 30-60-90: qisqa katet 1.6 (30 qarshisida), uzun katet 1.6*sqrt3, gipotenuza 3.2
q = 1.6
u = q * math.sqrt(3)
ax2.plot([0, u, 0, 0], [0, 0, q, 0], color="black", lw=2)
kvadratcha(ax2, (0, 0))
ax2.add_patch(Arc((u, 0), 1.0, 1.0, theta1=150, theta2=180, lw=1.2))
ax2.add_patch(Arc((0, q), 0.6, 0.6, theta1=270, theta2=330, lw=1.2))
ax2.text(u - 0.78, 0.15, r"$30^\circ$", fontsize=12, ha="center", va="center")
ax2.text(0.12, q - 0.5, r"$60^\circ$", fontsize=12, ha="left", va="center")
ax2.text(u / 2, -0.3, r"$x\sqrt{3}$", fontsize=15, ha="center", va="center")
ax2.text(-0.3, q / 2, "$x$", fontsize=15, ha="center", va="center")
ax2.text(u / 2 + 0.15, q / 2 + 0.2, "$2x$", fontsize=15, ha="left", va="bottom")
ax2.set_title("30°, 60°, 90°", fontsize=13)

for ax in (ax1, ax2):
    ax.set_xlim(-0.6, 3.3)
    ax.set_ylim(-0.6, 3.0)
    ax.set_aspect("equal")
    ax.axis("off")
fig.savefig(chiqish / "19_maxsus.png", dpi=200, bbox_inches="tight")
