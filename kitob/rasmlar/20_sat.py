"""20-bob chizmasi (S20.2): to'g'ri to'rtburchak ichida ikki doira; doiralardan tashqari qism bo'yalgan."""
import runpy
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Circle, Rectangle

papka = Path(__file__).parent
chiqish = papka / "chiqish"
chiqish.mkdir(exist_ok=True)
m = runpy.run_path(str(papka / "20_malumotlar.py"))
W, H, r = m["SAT_ENI"], m["SAT_BOYI"], m["SAT_RADIUS"]

fig, ax = plt.subplots(figsize=(5.6, 3.2))
ax.add_patch(Rectangle((0, 0), W, H, facecolor="#cccccc", edgecolor="black", hatch="//", lw=2))
for cx in (r, 3 * r):
    ax.add_patch(Circle((cx, r), r, facecolor="white", edgecolor="black", lw=2))
ax.text(W / 2, -1.0, f"${W}$", fontsize=13, ha="center", va="center")
ax.text(W + 0.8, H / 2, f"${H}$", fontsize=13, ha="center", va="center")
ax.set_xlim(-0.6, W + 1.6)
ax.set_ylim(-1.8, H + 0.6)
ax.set_aspect("equal")
ax.axis("off")
fig.savefig(chiqish / "20_sat.png", dpi=200, bbox_inches="tight")
