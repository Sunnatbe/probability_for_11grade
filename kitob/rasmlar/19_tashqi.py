"""19-bob chizmasi: ABC uchburchak, BC tomon C dan D gacha davom ettirilgan; ACD — tashqi burchak."""
import math
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Arc, Wedge

chiqish = Path(__file__).parent / "chiqish"
chiqish.mkdir(exist_ok=True)

A, B, C, D = (1.6, 3.0), (0.0, 0.0), (4.2, 0.0), (6.6, 0.0)


def burchak(p, q):
    return math.degrees(math.atan2(q[1] - p[1], q[0] - p[0]))


fig, ax = plt.subplots(figsize=(6.2, 3.4))
ax.plot([A[0], B[0], C[0], A[0]], [A[1], B[1], C[1], A[1]], color="black", lw=2)
ax.plot([C[0], D[0]], [C[1], D[1]], color="black", lw=2, ls="--")

# ichki A va B burchaklar: bitta va ikkita yoy
a1, a2 = burchak(A, B), burchak(A, C)
ax.add_patch(Arc(A, 0.9, 0.9, theta1=a1, theta2=a2, lw=1.4))
ax.add_patch(Arc(B, 1.0, 1.0, theta1=0, theta2=burchak(B, A), lw=1.4))
ax.add_patch(Arc(B, 1.2, 1.2, theta1=0, theta2=burchak(B, A), lw=1.4))
# tashqi burchak: shtrixlangan sektor
ax.add_patch(Wedge(C, 0.75, 0, burchak(C, A), facecolor="#dddddd", edgecolor="black",
                   hatch="///", lw=1.2))

for nom, (x, y), (dx, dy) in (("A", A, (0, 0.28)), ("B", B, (-0.25, -0.2)),
                              ("C", C, (0.0, -0.32)), ("D", D, (0.25, -0.2))):
    ax.text(x + dx, y + dy, f"${nom}$", fontsize=15, ha="center", va="center")
ax.annotate("tashqi burchak", xy=(C[0] + 0.45, 0.32), xytext=(5.3, 1.6), fontsize=11,
            ha="center", arrowprops=dict(arrowstyle="->", lw=0.9))

ax.set_xlim(-0.5, 7.0)
ax.set_ylim(-0.6, 3.5)
ax.set_aspect("equal")
ax.axis("off")
fig.savefig(chiqish / "19_tashqi.png", dpi=200, bbox_inches="tight")
