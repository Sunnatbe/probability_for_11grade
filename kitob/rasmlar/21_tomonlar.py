"""21-bob chizmasi: to'g'ri burchakli uchburchakda A burchakka nisbatan tomonlar nomi."""
import math
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Arc

chiqish = Path(__file__).parent / "chiqish"
chiqish.mkdir(exist_ok=True)

A, C, B = (0.0, 0.0), (4.8, 0.0), (4.8, 2.8)
fig, ax = plt.subplots(figsize=(6.2, 3.4))
ax.plot([A[0], C[0], B[0], A[0]], [A[1], C[1], B[1], A[1]], color="black", lw=2)
k = 0.28
ax.plot([C[0] - k, C[0] - k, C[0]], [0, k, k], color="black", lw=1.2)
burchak = math.degrees(math.atan2(B[1], B[0]))
ax.add_patch(Arc(A, 1.3, 1.3, theta1=0, theta2=burchak, lw=1.4))
ax.text(0.85, 0.22, "$A$ burchak", fontsize=11, ha="left", va="center")

for nom, (x, y), (dx, dy) in (("A", A, (-0.25, -0.1)), ("C", C, (0.25, -0.1)), ("B", B, (0.2, 0.15))):
    ax.text(x + dx, y + dy, f"${nom}$", fontsize=15, ha="center", va="center")

ax.text(C[0] / 2 + 0.3, -0.38, "yopishgan katet", fontsize=12, ha="center", va="center")
ax.text(C[0] + 0.25, B[1] / 2, "qarshi\nkatet", fontsize=12, ha="left", va="center")
ax.text(2.0, 1.55, "gipotenuza", fontsize=12, ha="center", va="center", rotation=burchak,
        rotation_mode="anchor")

ax.set_xlim(-0.6, 6.3)
ax.set_ylim(-0.7, 3.2)
ax.set_aspect("equal")
ax.axis("off")
fig.savefig(chiqish / "21_tomonlar.png", dpi=200, bbox_inches="tight")
