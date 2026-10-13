"""19-bob chizmasi: to'g'ri burchakli uchburchak — katetlar a, b va gipotenuza c."""
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt

chiqish = Path(__file__).parent / "chiqish"
chiqish.mkdir(exist_ok=True)

C, A, B = (0.0, 0.0), (4.0, 0.0), (0.0, 3.0)   # to'g'ri burchak C da

fig, ax = plt.subplots(figsize=(5.4, 3.6))
ax.plot([C[0], A[0], B[0], C[0]], [C[1], A[1], B[1], C[1]], color="black", lw=2)
k = 0.3
ax.plot([k, k, 0], [0, k, k], color="black", lw=1.3)

ax.text(2.0, -0.32, "$b$  (katet)", fontsize=14, ha="center", va="center")
ax.text(-0.35, 1.5, "$a$\n(katet)", fontsize=14, ha="right", va="center")
ax.text(2.25, 1.85, "$c$  (gipotenuza)", fontsize=14, ha="left", va="center", rotation=-36.87,
        rotation_mode="anchor")
for nom, (x, y), (dx, dy) in (("C", C, (-0.2, -0.2)), ("A", A, (0.25, -0.15)),
                              ("B", B, (0.0, 0.28))):
    ax.text(x + dx, y + dy, f"${nom}$", fontsize=14, ha="center", va="center")
ax.text(2.0, -0.85, r"$a^2 + b^2 = c^2$", fontsize=15, ha="center", va="center")

ax.set_xlim(-1.5, 5.2)
ax.set_ylim(-1.1, 3.5)
ax.set_aspect("equal")
ax.axis("off")
fig.savefig(chiqish / "19_pifagor.png", dpi=200, bbox_inches="tight")
