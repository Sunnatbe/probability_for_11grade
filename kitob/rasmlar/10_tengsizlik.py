"""10-bob chizmasi: son o'qida tengsizliklar — x > 2, x <= -1 va -2 < x <= 3."""
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt

chiqish = Path(__file__).parent / "chiqish"
chiqish.mkdir(exist_ok=True)

KOK = "#1f6feb"
QIZIL = "#d1242f"
YASHIL = "#1a7f37"

# (sarlavha, rang, chap uchi, o'ng uchi, chap uchi kiradimi, o'ng uchi kiradimi)
# uchi None bo'lsa — o'sha tomonga cheksiz (strelka)
QATORLAR = [
    (r"$x > 2$", KOK, 2, None, False, None),
    (r"$x \leq {-1}$", QIZIL, None, -1, None, True),
    (r"$-2 < x \leq 3$", YASHIL, -2, 3, False, True),
]

fig, axlar = plt.subplots(len(QATORLAR), 1, figsize=(7.5, 4.2))

for ax, (sarlavha, rang, chap, ong, chap_kiradi, ong_kiradi) in zip(axlar, QATORLAR):
    # son o'qi
    ax.annotate("", xy=(6.8, 0), xytext=(-6.8, 0),
                arrowprops=dict(arrowstyle="<|-|>", color="black", lw=1.0), zorder=1)
    for k in range(-6, 7):
        ax.plot([k, k], [-0.12, 0.12], color="black", lw=1, zorder=1)
        ax.text(k, -0.45, f"${k}$", ha="center", va="center", fontsize=10)

    # yechimlar to'plami: qalin chiziq
    boshi = chap if chap is not None else -6.6
    oxiri = ong if ong is not None else 6.6
    if chap is None:
        ax.annotate("", xy=(-6.7, 0), xytext=(oxiri, 0),
                    arrowprops=dict(arrowstyle="-|>", color=rang, lw=4, mutation_scale=18),
                    zorder=2)
    elif ong is None:
        ax.annotate("", xy=(6.7, 0), xytext=(boshi, 0),
                    arrowprops=dict(arrowstyle="-|>", color=rang, lw=4, mutation_scale=18),
                    zorder=2)
    else:
        ax.plot([boshi, oxiri], [0, 0], color=rang, lw=5, solid_capstyle="butt", zorder=2)

    # uchlaridagi doirachalar: bo'sh (kirmaydi) yoki bo'yalgan (kiradi)
    for nuqta, kiradi in ((chap, chap_kiradi), (ong, ong_kiradi)):
        if nuqta is None:
            continue
        ax.plot([nuqta], [0], "o", markersize=11, zorder=3,
                markerfacecolor=rang if kiradi else "white",
                markeredgecolor=rang, markeredgewidth=2)

    ax.text(-7.4, 0.0, sarlavha, ha="right", va="center", fontsize=13, color=rang)
    ax.set_xlim(-10, 7)
    ax.set_ylim(-0.8, 0.5)
    ax.axis("off")

fig.tight_layout()
fig.savefig(chiqish / "10_tengsizlik.png", dpi=200, bbox_inches="tight")
