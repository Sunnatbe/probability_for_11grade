"""20-bob chizmasi: to'g'ri burchakli parallelepiped (a, b, c) va silindr (r, h)."""
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Arc, Ellipse

chiqish = Path(__file__).parent / "chiqish"
chiqish.mkdir(exist_ok=True)

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(8.4, 3.9))

# parallelepiped: old yog' a x c, chuqurlik b (qiya)
a, c = 3.0, 2.0
sx, sy = 1.1, 0.7
old = [(0, 0), (a, 0), (a, c), (0, c), (0, 0)]
orqa = [(x + sx, y + sy) for x, y in old]
ax1.plot(*zip(*old), color="black", lw=2)
ax1.plot([a, a + sx, a + sx, sx, 0], [c, c + sy, sy, c + sy, c], color="black", lw=0)
for p, q in (((0, c), (sx, c + sy)), ((a, c), (a + sx, c + sy)), ((a, 0), (a + sx, sy)),
             ((sx, c + sy), (a + sx, c + sy)), ((a + sx, c + sy), (a + sx, sy))):
    ax1.plot([p[0], q[0]], [p[1], q[1]], color="black", lw=2)
for p, q in (((0, 0), (sx, sy)), ((sx, sy), (a + sx, sy)), ((sx, sy), (sx, c + sy))):
    ax1.plot([p[0], q[0]], [p[1], q[1]], color="black", lw=1.2, ls="--")
ax1.text(a / 2, -0.3, "$a$", fontsize=15, ha="center", va="center")
ax1.text(a + sx / 2 + 0.35, sy / 2 - 0.12, "$b$", fontsize=15, ha="center", va="center")
ax1.text(-0.3, c / 2, "$c$", fontsize=15, ha="center", va="center")
ax1.text((a + sx) / 2, -0.95, "$V = abc$", fontsize=14, ha="center", va="center")
ax1.set_xlim(-0.8, a + sx + 0.6)
ax1.set_ylim(-1.3, c + sy + 0.4)

# silindr
r, h, e = 1.2, 2.6, 0.45
ax2.add_patch(Ellipse((0, h), 2 * r, 2 * e, fill=False, lw=2))
ax2.add_patch(Arc((0, 0), 2 * r, 2 * e, theta1=180, theta2=360, lw=2))
ax2.add_patch(Arc((0, 0), 2 * r, 2 * e, theta1=0, theta2=180, lw=1.2, ls="--"))
ax2.plot([-r, -r], [0, h], color="black", lw=2)
ax2.plot([r, r], [0, h], color="black", lw=2)
ax2.plot([0, r], [h, h], color="black", lw=1.4)
ax2.plot([0], [h], "o", color="black", markersize=4)
ax2.text(r / 2, h + 0.17, "$r$", fontsize=15, ha="center", va="center")
ax2.annotate("", xy=(r + 0.35, 0), xytext=(r + 0.35, h), arrowprops=dict(arrowstyle="<->", lw=1))
ax2.text(r + 0.55, h / 2, "$h$", fontsize=15, ha="left", va="center")
ax2.text(0, -0.95, r"$V = \pi r^2 h$", fontsize=14, ha="center", va="center")
ax2.set_xlim(-r - 0.6, r + 1.1)
ax2.set_ylim(-1.3, h + 0.7)

for ax in (ax1, ax2):
    ax.set_aspect("equal")
    ax.axis("off")
fig.savefig(chiqish / "20_jismlar.png", dpi=200, bbox_inches="tight")
