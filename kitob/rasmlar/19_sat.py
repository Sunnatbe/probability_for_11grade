"""19-bob chizmasi (S19.1): l || m, P nuqta l da, Q va R nuqtalar m da; burchaklar 19_malumotlar.py dan."""
import math
import runpy
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Arc

papka = Path(__file__).parent
chiqish = papka / "chiqish"
chiqish.mkdir(exist_ok=True)
m = runpy.run_path(str(papka / "19_malumotlar.py"))
chap, tashqi = m["SAT_CHAP"], m["SAT_TASHQI"]

H = 3.0
P = (0.0, H)
Q = (-H / math.tan(math.radians(chap)), 0.0)            # PQ l bilan `chap` burchak hosil qiladi
R = (H / math.tan(math.radians(180 - tashqi)), 0.0)     # R dagi ichki burchak 180 - tashqi

fig, ax = plt.subplots(figsize=(6.0, 3.6))
for y, nom in ((H, r"$\ell$"), (0.0, "$m$")):
    ax.plot([-4.3, 3.6], [y, y], color="black", lw=1.6)
    ax.text(3.75, y, nom, fontsize=16, va="center", ha="left")
ax.plot([Q[0], P[0], R[0]], [Q[1], P[1], R[1]], color="black", lw=1.8)

ax.add_patch(Arc(P, 1.2, 1.2, theta1=180, theta2=180 + chap, lw=1.2))
ax.text(P[0] - 1.0, P[1] - 0.3, f"${chap}^\\circ$", fontsize=13, ha="center", va="center")
ax.add_patch(Arc(P, 0.8, 0.8, theta1=180 + chap, theta2=360 - (180 - tashqi), lw=1.2))
ax.text(P[0] + 0.02, P[1] - 0.8, r"$x^\circ$", fontsize=13, ha="center", va="center")
rp = math.degrees(math.atan2(P[1] - R[1], P[0] - R[0]))   # R -> P yo'nalishi
assert round(rp) == tashqi
ax.add_patch(Arc(R, 0.9, 0.9, theta1=0, theta2=rp, lw=1.2))
ax.text(R[0] + 0.75, 0.32, f"${tashqi}^\\circ$", fontsize=13, ha="left", va="center")

for nom, (x, y), (dx, dy) in (("P", P, (0.0, 0.28)), ("Q", Q, (-0.1, -0.3)), ("R", R, (0.0, -0.3))):
    ax.text(x + dx, y + dy, f"${nom}$", fontsize=14, ha="center", va="center")

ax.set_xlim(-4.4, 4.1)
ax.set_ylim(-0.6, 3.5)
ax.set_aspect("equal")
ax.axis("off")
fig.savefig(chiqish / "19_sat.png", dpi=200, bbox_inches="tight")
