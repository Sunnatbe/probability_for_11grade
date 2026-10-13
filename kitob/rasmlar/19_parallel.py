"""19-bob chizmasi: ikki parallel to'g'ri chiziq (l, m), kesuvchi t va sakkizta burchak raqami."""
import math
import runpy
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt

papka = Path(__file__).parent
chiqish = papka / "chiqish"
chiqish.mkdir(exist_ok=True)
m = runpy.run_path(str(papka / "19_malumotlar.py"))

KOK = "#1f6feb"
theta = math.radians(m["KESUVCHI_QIYALIGI"])
YL, YM = 2.4, 0.0
# kesuvchi: (x0, YM) dan o'tadi
X0 = -0.6
XL = X0 + (YL - YM) / math.tan(theta)

fig, ax = plt.subplots(figsize=(6.0, 4.0))
for y, nom in ((YL, r"$\ell$"), (YM, "$m$")):
    ax.plot([-3.6, 3.6], [y, y], color="black", lw=1.8)
    ax.text(3.75, y, nom, fontsize=16, va="center", ha="left")
    # parallellik belgisi: chiziq ustida bir xil strelka
    ax.annotate("", xy=(2.75, y), xytext=(2.45, y),
                arrowprops=dict(arrowstyle="-|>", color="black", lw=1.4, mutation_scale=16))

t0, t1 = -0.95, 1.45   # kesuvchi parametri (YM dan pastga va YL dan yuqoriga chiqadi)
dx, dy = math.cos(theta), math.sin(theta)
uz = (YL - YM) / dy
xa, ya = X0 + t0 * uz * dx, YM + t0 * uz * dy
xb, yb = X0 + t1 * uz * dx, YM + t1 * uz * dy
ax.plot([xa, xb], [ya, yb], color=KOK, lw=2.2)
ax.text(xb + 0.12, yb, "$t$", fontsize=16, va="center", ha="left", color=KOK)

# burchak raqamlari: har bir kesishishda to'rtta burchak bissektrisasi yo'nalishida
yonalishlar = {
    "yuqori-chap": (math.pi + theta) / 2 + 0.0,
    "yuqori-ong": theta / 2,
    "pastki-chap": math.pi + theta / 2,
    "pastki-ong": (math.pi + theta) / 2 + math.pi,
}
joylar = [("yuqori-chap", 1), ("yuqori-ong", 2), ("pastki-chap", 3), ("pastki-ong", 4)]
for (cx, cy), qoshish in (((XL, YL), 0), ((X0, YM), 4)):
    ax.plot([cx], [cy], "o", color="black", markersize=4)
    for joy, n in joylar:
        a = yonalishlar[joy]
        r = 0.62 if (n + qoshish) in m["OTKIR"] else 0.45
        ax.text(cx + r * math.cos(a), cy + r * math.sin(a), f"${n + qoshish}$", fontsize=14,
                ha="center", va="center")

ax.set_xlim(-3.7, 4.1)
ax.set_ylim(-1.4, 3.9)
ax.set_aspect("equal")
ax.axis("off")
fig.savefig(chiqish / "19_parallel.png", dpi=200, bbox_inches="tight")
