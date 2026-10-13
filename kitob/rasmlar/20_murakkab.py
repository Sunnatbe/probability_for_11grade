"""20-bob chizmasi: a) L shaklidagi shakl (sm); b) sport maydonchasi (m). O'lchamlar 20_malumotlar.py dan."""
import runpy
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Arc, Polygon

papka = Path(__file__).parent
chiqish = papka / "chiqish"
chiqish.mkdir(exist_ok=True)
m = runpy.run_path(str(papka / "20_malumotlar.py"))

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(9.0, 3.9), gridspec_kw={"width_ratios": [1, 1.35]})

# a) L shakl
E, B = m["L_ENI"], m["L_BOYI"]
ke, kb = m["L_KESIK_ENI"], m["L_KESIK_BOYI"]
uch = [(0, 0), (E, 0), (E, B - kb), (E - ke, B - kb), (E - ke, B), (0, B)]
ax1.add_patch(Polygon(uch, closed=True, facecolor="#eeeeee", edgecolor="black", lw=2))
ax1.text(E / 2, -0.55, f"${E}$ sm", fontsize=12, ha="center", va="center")
ax1.text(-0.35, B / 2, f"${B}$ sm", fontsize=12, ha="right", va="center")
ax1.text((E - ke) / 2, B + 0.5, f"${m['L_YUQORI']}$ sm", fontsize=12, ha="center", va="center")
ax1.text(E - ke - 0.3, B - kb / 2, f"${kb}$ sm", fontsize=12, ha="right", va="center")
k = 0.45
for x, y, dx, dy in ((0, 0, 1, 1), (E, 0, -1, 1), (0, B, 1, -1), (E, B - kb, -1, -1),
                   (E - ke, B, -1, -1)):
    ax1.plot([x + dx * k, x + dx * k, x], [y, y + dy * k, y + dy * k], color="black", lw=1)
ax1.set_xlim(-2.4, E + 1.0)
ax1.set_ylim(-1.2, B + 1.1)
ax1.set_title("a)", fontsize=13, loc="left")

# b) sport maydonchasi
L, W = m["STADION_UZUNLIK"], m["STADION_ENI"]
r = W / 2
ax2.plot([0, L], [0, 0], color="black", lw=2)
ax2.plot([0, L], [W, W], color="black", lw=2)
ax2.add_patch(Arc((0, r), W, W, theta1=90, theta2=270, lw=2))
ax2.add_patch(Arc((L, r), W, W, theta1=-90, theta2=90, lw=2))
ax2.plot([0, 0], [0, W], color="black", lw=1, ls="--")
ax2.plot([L, L], [0, W], color="black", lw=1, ls="--")
ax2.annotate("", xy=(0, -2.2), xytext=(L, -2.2), arrowprops=dict(arrowstyle="<->", lw=1))
ax2.text(L / 2, -3.6, f"${L}$ m", fontsize=12, ha="center", va="center")
ax2.annotate("", xy=(L * 0.55, 0), xytext=(L * 0.55, W), arrowprops=dict(arrowstyle="<->", lw=1))
ax2.text(L * 0.55 + 1.0, W / 2, f"${W}$ m", fontsize=12, ha="left", va="center")
ax2.set_xlim(-r - 1.5, L + r + 1.5)
ax2.set_ylim(-5, W + 2.5)
ax2.set_title("b)", fontsize=13, loc="left")

for ax in (ax1, ax2):
    ax.set_aspect("equal")
    ax.axis("off")
fig.savefig(chiqish / "20_murakkab.png", dpi=200, bbox_inches="tight")
