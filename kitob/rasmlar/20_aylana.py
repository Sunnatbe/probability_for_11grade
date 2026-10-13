"""20-bob chizmasi: a) aylana qismlari (markaz, radius, diametr, vatar); b) yoy, markaziy burchak, sektor."""
import math
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Arc, Circle, Wedge

chiqish = Path(__file__).parent / "chiqish"
chiqish.mkdir(exist_ok=True)


def nuqta(burchak, r=1.0):
    a = math.radians(burchak)
    return r * math.cos(a), r * math.sin(a)


fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(8.6, 4.2))

# a) qismlar
ax1.add_patch(Circle((0, 0), 1, fill=False, lw=2))
ax1.plot([0], [0], "o", color="black", markersize=5)
ax1.text(0.1, -0.12, "$O$", fontsize=14, ha="left", va="top")
B, C = nuqta(200), nuqta(20)
ax1.plot([B[0], C[0]], [B[1], C[1]], color="black", lw=1.6)              # diametr
R = nuqta(115)
ax1.plot([0, R[0]], [0, R[1]], color="black", lw=1.6, ls="--")            # radius
D, E = nuqta(250), nuqta(320)
ax1.plot([D[0], E[0]], [D[1], E[1]], color="black", lw=1.6)              # vatar
for nom, p, d in (("B", B, (-0.12, -0.02)), ("C", C, (0.12, 0.03)), ("D", D, (-0.06, -0.12)),
                  ("E", E, (0.1, -0.08))):
    ax1.plot([p[0]], [p[1]], "o", color="black", markersize=4)
    ax1.text(p[0] + d[0], p[1] + d[1], f"${nom}$", fontsize=14, ha="center", va="center")
ax1.text(-0.42, 0.42, "$r$", fontsize=15, ha="center", va="center")
ax1.annotate("radius", xy=(-0.2, 0.42), xytext=(-1.05, 1.08), fontsize=11, ha="center",
             arrowprops=dict(arrowstyle="->", lw=0.9))
ax1.annotate("diametr $BC$", xy=(0.55, 0.2), xytext=(0.95, 0.95), fontsize=11, ha="center",
             arrowprops=dict(arrowstyle="->", lw=0.9))
ax1.annotate("vatar $DE$", xy=(0.15, -0.79), xytext=(0.95, -1.12), fontsize=11, ha="center",
             arrowprops=dict(arrowstyle="->", lw=0.9))
ax1.set_title("a)", fontsize=13, loc="left")

# b) yoy va sektor
t1, t2 = 30, 100
ax2.add_patch(Circle((0, 0), 1, fill=False, lw=1.4, color="#555555"))
ax2.add_patch(Wedge((0, 0), 1, t1, t2, facecolor="#dddddd", edgecolor="black", hatch="//", lw=1.4))
ax2.add_patch(Arc((0, 0), 2, 2, theta1=t1, theta2=t2, lw=4, color="black"))
ax2.add_patch(Arc((0, 0), 0.5, 0.5, theta1=t1, theta2=t2, lw=1.2))
P, Q = nuqta(t1), nuqta(t2)
ax2.plot([0], [0], "o", color="black", markersize=5)
ax2.text(-0.05, -0.13, "$O$", fontsize=14, ha="right", va="top")
for nom, p, d in (("P", P, (0.12, 0.02)), ("Q", Q, (-0.08, 0.1))):
    ax2.text(p[0] + d[0], p[1] + d[1], f"${nom}$", fontsize=14, ha="center", va="center")
ax2.text(*nuqta((t1 + t2) / 2, 0.38), r"$\theta$", fontsize=13, ha="center", va="center")
ax2.annotate("yoy $PQ$", xy=nuqta(80, 1.02), xytext=(0.95, 1.15), fontsize=11, ha="center",
             arrowprops=dict(arrowstyle="->", lw=0.9))
ax2.annotate("sektor", xy=nuqta(60, 0.7), xytext=(1.05, 0.2), fontsize=11, ha="center",
             arrowprops=dict(arrowstyle="->", lw=0.9))
ax2.annotate("markaziy burchak", xy=nuqta(70, 0.25), xytext=(-0.6, -0.55), fontsize=11, ha="center",
             arrowprops=dict(arrowstyle="->", lw=0.9))
ax2.set_title("b)", fontsize=13, loc="left")

for ax in (ax1, ax2):
    ax.set_xlim(-1.45, 1.5)
    ax.set_ylim(-1.3, 1.3)
    ax.set_aspect("equal")
    ax.axis("off")
fig.savefig(chiqish / "20_aylana.png", dpi=200, bbox_inches="tight")
