"""21-bob chizmasi: a) devorga suyalgan narvon; b) pandus. Qiymatlar 21_malumotlar.py dan."""
import math
import runpy
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Arc, Rectangle

papka = Path(__file__).parent
chiqish = papka / "chiqish"
chiqish.mkdir(exist_ok=True)
m = runpy.run_path(str(papka / "21_malumotlar.py"))

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(9.0, 4.0), gridspec_kw={"width_ratios": [1, 1.5]})

# a) narvon: chizmada uzunlik 4 birlik, burchak ma'lumotdan
L = 4.0
t = math.radians(m["NARVON_BURCHAGI"])
x, h = L * math.cos(t), L * math.sin(t)
ax1.add_patch(Rectangle((x, 0), 0.35, h + 0.6, facecolor="#cccccc", edgecolor="black", hatch="xx",
                        lw=1.2))
ax1.plot([-0.5, x + 0.35], [0, 0], color="black", lw=2)
for i in range(9):
    ax1.plot([-0.4 + i * 0.27, -0.55 + i * 0.27], [0, -0.15], color="black", lw=0.8)
ax1.plot([0, x], [0, h], color="black", lw=3)
for s in (0.2, 0.4, 0.6, 0.8):     # narvon pog'onalari
    px, py = s * x, s * h
    ax1.plot([px - 0.12, px + 0.12], [py + 0.07, py - 0.07], color="black", lw=1)
ax1.plot([x - 0.25, x - 0.25, x], [0, 0.25, 0.25], color="black", lw=1)
ax1.add_patch(Arc((0, 0), 1.0, 1.0, theta1=0, theta2=m["NARVON_BURCHAGI"], lw=1.3))
ax1.text(0.62, 0.22, f"${m['NARVON_BURCHAGI']}^\\circ$", fontsize=12, ha="left", va="center")
ax1.text(x / 2 - 0.45, h / 2 + 0.2, f"${m['NARVON_UZUNLIGI']}$ m", fontsize=12, ha="right",
         va="center")
ax1.annotate("", xy=(0, -0.45), xytext=(x, -0.45), arrowprops=dict(arrowstyle="<->", lw=1))
ax1.text(x / 2, -0.75, "$x$", fontsize=14, ha="center", va="center")
ax1.annotate("", xy=(x + 0.6, 0), xytext=(x + 0.6, h), arrowprops=dict(arrowstyle="<->", lw=1))
ax1.plot([x, x + 0.7], [h, h], color="black", lw=0.8, ls=":")
ax1.text(x + 0.75, h / 2, "$h$", fontsize=14, ha="left", va="center")
ax1.set_xlim(-0.7, x + 1.2)
ax1.set_ylim(-1.0, h + 0.8)
ax1.set_title("a)", fontsize=13, loc="left")

# b) pandus
g, b, u = (float(m[k]) for k in ("PANDUS_GORIZONTAL", "PANDUS_BALANDLIK", "PANDUS_UZUNLIK"))
ax2.fill([0, g, g], [0, 0, b], facecolor="#eeeeee", edgecolor="black", lw=2)
k = 0.1
ax2.plot([g - k, g - k, g], [0, k, k], color="black", lw=1)
burchak = math.degrees(math.atan2(b, g))
ax2.add_patch(Arc((0, 0), 0.9, 0.9, theta1=0, theta2=burchak, lw=1.3))
ax2.text(-0.06, 0.0, "$A$", fontsize=13, ha="right", va="center")
ax2.text(g / 2, -0.15, f"${m['PANDUS_GORIZONTAL']}$ m", fontsize=12, ha="center", va="center")
ax2.text(g + 0.06, b / 2, f"${m['PANDUS_BALANDLIK']}$ m", fontsize=12, ha="left", va="center")
ax2.text(g / 2 - 0.1, b / 2 + 0.15, f"${m['PANDUS_UZUNLIK']}$ m", fontsize=12, ha="center",
         va="center", rotation=burchak, rotation_mode="anchor")
ax2.set_xlim(-0.3, g + 0.6)
ax2.set_ylim(-0.35, b + 0.6)
ax2.set_title("b)", fontsize=13, loc="left")

for ax in (ax1, ax2):
    ax.set_aspect("equal")
    ax.axis("off")
fig.savefig(chiqish / "21_narvon.png", dpi=200, bbox_inches="tight")
