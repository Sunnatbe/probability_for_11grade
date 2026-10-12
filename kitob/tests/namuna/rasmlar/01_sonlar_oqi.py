"""Namuna chizma: sonlar o'qi."""
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt

chiqish = Path(__file__).parent / "chiqish"
chiqish.mkdir(exist_ok=True)

fig, ax = plt.subplots(figsize=(6, 1.2))
ax.axhline(0, color="black", linewidth=1)
for x in range(0, 4):
    ax.plot([x, x], [-0.1, 0.1], color="black")
    ax.text(x, -0.35, str(x), ha="center")
ax.plot([0.5], [0], "o", color="#1f6feb")
ax.set_xlim(-0.5, 3.5)
ax.set_ylim(-0.6, 0.4)
ax.axis("off")
fig.savefig(chiqish / "01_sonlar_oqi.png", dpi=150, bbox_inches="tight")
