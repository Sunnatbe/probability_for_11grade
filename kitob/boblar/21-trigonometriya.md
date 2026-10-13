# 21. Trigonometriyaga kirish

*SAT bo'limi:* Geometry and Trigonometry

## Bu bobda

19-bobda to'g'ri burchakli uchburchakning tomonlarini Pifagor teoremasi bilan topdik. Lekin ko'pincha bitta tomon va bitta burchak ma'lum bo'ladi: narvon uzunligi va uning yer bilan hosil qilgan burchagi, binoga qarash burchagi va binogacha masofa. Bunday masalalarni *trigonometriya (trigonometry)* yechadi. Bu bobda:

- to'g'ri burchakli uchburchak tomonlarini o'tkir burchakka nisbatan nomlashni;
- sinus, kosinus va tangensni tomonlar nisbati sifatida topishni;
- $30^\circ$, $45^\circ$, $60^\circ$ burchaklar uchun aniq qiymatlarni;
- $\sin x^\circ = \cos (90 - x)^\circ$ bog'lanishini;
- bitta nisbatdan qolganlarini va noma'lum tomonni topishni;
- tangens va burchak koeffitsiyenti (12-bob) orasidagi bog'lanishni;
- narvon, pandus va balandlikka oid hayotiy masalalarni o'rganamiz.

**SAT'da qayerda kerak?** Geometry and Trigonometry bo'limida "In triangle ABC, angle C is a right angle. If sin A = ..., what is cos B?", "What is the value of tan P?", "A ladder leans against a wall..." kabi savollar bor. SAT'da trigonometriya asosan shu bobdagi to'g'ri burchakli uchburchak nisbatlari bilan ishlaydi. Bu bob 19-bobdagi Pifagor teoremasi, maxsus uchburchaklar va o'xshash uchburchaklarga, 3-bobdagi kasrlarga va 12-bobdagi burchak koeffitsiyentiga tayanadi. Bu bobda burchaklar faqat gradusda o'lchanadi.

## Yangi so'zlar

| O'zbekcha | English |
|---|---|
| trigonometriya | trigonometry |
| qarshi katet | opposite leg (opposite side) |
| yopishgan katet | adjacent leg (adjacent side) |
| trigonometrik nisbat | trigonometric ratio |
| sinus | sine |
| kosinus | cosine |
| tangens | tangent |
| ko'tarilish burchagi | angle of elevation |
| pandus | ramp |

## Tushuntirish

### Tomonlarni burchakka nisbatan nomlash

$\triangle ABC$ da $\angle C = 90^\circ$ bo'lsin. Gipotenuza $AB$ har doim to'g'ri burchak qarshisida. Katetlar esa qaysi o'tkir burchakka qarashimizga qarab nomlanadi (21.1-rasm). $A$ burchakka nisbatan:

- *qarshi katet (opposite leg)* — $A$ burchak qarshisidagi katet, ya'ni $BC$; u $A$ uchiga tegmaydi;
- *yopishgan katet (adjacent leg)* — $A$ burchakning tomoni bo'lgan katet, ya'ni $AC$.

![21.1-rasm. A burchakka nisbatan tomonlar nomi](rasmlar/chiqish/21_tomonlar.png){width=60%}

$B$ burchakka nisbatan esa rollar almashadi: $AC$ — qarshi katet, $BC$ — yopishgan katet. Gipotenuza ikkala burchak uchun ham $AB$.

### Sinus, kosinus, tangens

O'tkir burchak $A$ uchun uchta *trigonometrik nisbat (trigonometric ratio)* bor; ular qisqacha sin, cos va tan deb yoziladi (21.1-rasmdagi belgilarda):

- *sinus (sine):* $\sin A = \frac{BC}{AB}$ — qarshi katetning gipotenuzaga nisbati;
- *kosinus (cosine):* $\cos A = \frac{AC}{AB}$ — yopishgan katetning gipotenuzaga nisbati;
- *tangens (tangent):* $\tan A = \frac{BC}{AC}$ — qarshi katetning yopishgan katetga nisbati.

Inglizcha eslab qolish usuli: **SOH-CAH-TOA** — **S**ine = **O**pposite / **H**ypotenuse, **C**osine = **A**djacent / **H**ypotenuse, **T**angent = **O**pposite / **A**djacent.

Nega bu nisbatlar faqat burchakka bog'liq, uchburchak kattaligiga emas? $A$ burchagi bir xil bo'lgan barcha to'g'ri burchakli uchburchaklarning burchaklari teng, demak ular o'xshash (19-bob). O'xshash uchburchaklarda mos tomonlar nisbati bir xil. Shuning uchun $\sin 30^\circ$ kichik uchburchakda ham, katta uchburchakda ham bir xil son.

Katetlar gipotenuzadan qisqa, shuning uchun o'tkir burchakning sinusi va kosinusi doim $0$ bilan $1$ orasida bo'ladi. Tangens esa $1$ dan katta ham bo'lishi mumkin.

::: {.misol}
$\triangle ABC$ da $\angle C = 90^\circ$, $BC = 5$, $AC = 12$. $\sin A$, $\cos A$, $\tan A$ va $\sin B$, $\cos B$, $\tan B$ ni toping.

*Yechish.* Avval gipotenuza: $AB = \sqrt{5^2 + 12^2} = \sqrt{25 + 144} = \sqrt{169} = 13$.

$A$ burchakka nisbatan: qarshi katet $BC = 5$, yopishgan katet $AC = 12$. Demak, $\sin A = \frac{5}{13}$, $\cos A = \frac{12}{13}$, $\tan A = \frac{5}{12}$.

$B$ burchakka nisbatan: qarshi katet $AC = 12$, yopishgan katet $BC = 5$. Demak, $\sin B = \frac{12}{13}$, $\cos B = \frac{5}{13}$, $\tan B = \frac{12}{5}$.

*Javob:* $\sin A = \frac{5}{13}$, $\cos A = \frac{12}{13}$, $\tan A = \frac{5}{12}$; $\sin B = \frac{12}{13}$, $\cos B = \frac{5}{13}$, $\tan B = \frac{12}{5}$.
:::

### Sinus va kosinus orasidagi bog'lanish

Misol 1 da $\sin A = \cos B$ va $\cos A = \sin B$ chiqdi. Bu tasodif emas: $A$ ning qarshi kateti — $B$ ning yopishgan kateti. To'g'ri burchakli uchburchakda $\angle A + \angle B = 90^\circ$, shuning uchun istalgan o'tkir burchak $x^\circ$ uchun:

$$\sin x^\circ = \cos (90 - x)^\circ$$

$$\cos x^\circ = \sin (90 - x)^\circ$$

Masalan, $\sin 30^\circ = \cos 60^\circ$. SAT'da bu ko'pincha teskari ko'rinishda keladi: ikkita o'tkir burchak uchun $\sin a^\circ = \cos b^\circ$ bo'lsa, $a + b = 90$.

::: {.misol}
$\sin (2x + 10)^\circ = \cos (3x - 20)^\circ$, ikkala burchak ham o'tkir. $x$ ni toping.

*Yechish.* Sinus kosinusga teng, demak burchaklar yig'indisi $90$: $(2x + 10) + (3x - 20) = 90$, ya'ni $5x - 10 = 90$, $5x = 100$, $x = 20$. Tekshirish: burchaklar $2 \cdot 20 + 10 = 50$ va $3 \cdot 20 - 20 = 40$ gradus, ikkalasi o'tkir va yig'indisi $90^\circ$.

*Javob:* $x = 20$.
:::

### Maxsus burchaklar

19-bobdagi maxsus uchburchaklardan (19.4-rasm) $30^\circ$, $45^\circ$, $60^\circ$ uchun aniq qiymatlarni olamiz. Masalan, $30^\circ$, $60^\circ$, $90^\circ$ uchburchakda tomonlar $x$, $x\sqrt{3}$, $2x$; $30^\circ$ qarshisida $x$ turadi, shuning uchun

$$\sin 30^\circ = \frac{x}{2x} = \frac{1}{2}$$

$$\tan 30^\circ = \frac{x}{x\sqrt{3}} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$$

(oxirgi qadamda 19-bobdagidek maxrajdagi ildizdan qutuldik).

$45^\circ$, $45^\circ$, $90^\circ$ uchburchakda tomonlar $x$, $x$, $x\sqrt{2}$: $\sin 45^\circ = \frac{x}{x\sqrt{2}} = \frac{\sqrt{2}}{2}$, $\tan 45^\circ = \frac{x}{x} = 1$. Qolganlarini ham shunday topamiz:

|  | $30^\circ$ | $45^\circ$ | $60^\circ$ |
|---|---|---|---|
| sin | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ |
| cos | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ |
| tan | $\frac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ |

Jadvalni yodlash shart emas: ikkita maxsus uchburchakni chiza olsangiz, istalgan qiymatni bir zumda topasiz. SAT'da kalkulyator bor, lekin javob ko'pincha ildizli aniq son ko'rinishida so'raladi, shuning uchun bu qiymatlarni bilish kerak.

### Noma'lum tomonni topish

Burchak va bitta tomon ma'lum bo'lsa, qaysi nisbat **ma'lum tomon va kerakli tomonni** bog'lashini tanlaymiz:

- gipotenuza ma'lum, qarshi katet kerak (yoki aksincha) — sinus;
- gipotenuza ma'lum, yopishgan katet kerak (yoki aksincha) — kosinus;
- ikki katetdan biri ma'lum, ikkinchisi kerak — tangens.

Yerdan biror narsaning tepasiga qaraganda ko'z chizig'i gorizontal bilan hosil qilgan burchak *ko'tarilish burchagi (angle of elevation)* deyiladi. Qiya yo'lak — *pandus (ramp)* — ham to'g'ri burchakli uchburchak hosil qiladi: gorizontal uzunlik, balandlik va qiya sirt.

![21.2-rasm. a) Devorga suyalgan narvon; b) pandus](rasmlar/chiqish/21_narvon.png){width=85%}

::: {.misol}
21.2-rasm a) da uzunligi $8$ m bo'lgan narvon devorga suyalgan va yer bilan $60^\circ$ burchak hosil qiladi. Narvonning pastki uchi devordan qancha uzoqda ($x$) va yuqori uchi qanday balandlikda ($h$)?

*Yechish.* Narvon — gipotenuza ($8$ m). $60^\circ$ burchakka nisbatan $x$ — yopishgan katet, $h$ — qarshi katet.

$\cos 60^\circ = \frac{x}{8}$, demak $x = 8 \cdot \frac{1}{2} = 4$ m.

$\sin 60^\circ = \frac{h}{8}$, demak $h = 8 \cdot \frac{\sqrt{3}}{2} = 4\sqrt{3}$ m, taxminan $6.9$ m.

Tekshirish (Pifagor): $4^2 + \left(4\sqrt{3}\right)^2 = 16 + 48 = 64 = 8^2$.

*Javob:* $x = 4$ m, $h = 4\sqrt{3}$ m.
:::

### Bitta nisbatdan qolganlarini topish

Bitta nisbat berilsa, uni tomonlar sifatida o'qib, to'g'ri burchakli uchburchak chizamiz, uchinchi tomonni Pifagor teoremasi bilan topamiz va qolgan nisbatlarni yozamiz. Uchburchakning haqiqiy o'lchami muhim emas — nisbatlar bir xil.

::: {.misol}
$A$ o'tkir burchak va $\cos A = 0.6$. $\sin A$ va $\tan A$ ni toping.

*Yechish.* $0.6 = \frac{3}{5}$. Yopishgan katet $3$, gipotenuza $5$ bo'lgan uchburchakni olamiz. Qarshi katet: $\sqrt{5^2 - 3^2} = \sqrt{25 - 9} = 4$. Demak, $\sin A = \frac{4}{5} = 0.8$, $\tan A = \frac{4}{3}$.

*Javob:* $\sin A = \frac{4}{5}$, $\tan A = \frac{4}{3}$.
:::

### Tangens va burchak koeffitsiyenti

12-bobda to'g'ri chiziqning burchak koeffitsiyentini "yuqoriga ko'tarilish / o'ngga siljish" deb topgan edik. Bu ikki son to'g'ri burchakli uchburchakning katetlari, chiziq esa uning gipotenuzasi. Agar chiziq ko'tariluvchi bo'lsa va $x$ o'qining musbat yo'nalishi bilan $\theta$ burchak hosil qilsa ($\theta$ — yunoncha "teta" harfi), unda $\theta$ burchakka nisbatan "yuqoriga ko'tarilish" — qarshi katet, "o'ngga siljish" — yopishgan katet. Demak, burchak koeffitsiyenti shu burchakning tangensiga teng:

$$m = \tan \theta.$$

Masalan, burchak koeffitsiyenti $1$ bo'lgan chiziq $x$ o'qi bilan $45^\circ$ burchak hosil qiladi, chunki $\tan 45^\circ = 1$.

::: {.misol}
To'g'ri chiziq $(1, -3)$ va $(9, 12)$ nuqtalardan o'tadi va $x$ o'qining musbat yo'nalishi bilan $\theta$ burchak hosil qiladi. $\tan \theta$, $\sin \theta$ va $\cos \theta$ ni toping.

*Yechish.* O'ngga siljish $9 - 1 = 8$, yuqoriga ko'tarilish $12 - (-3) = 15$. Demak, $\tan \theta = m = \frac{15}{8}$. Gipotenuza: $\sqrt{8^2 + 15^2} = \sqrt{289} = 17$. $\theta$ burchakka nisbatan qarshi katet $15$, yopishgan katet $8$: $\sin \theta = \frac{15}{17}$, $\cos \theta = \frac{8}{17}$.

*Javob:* $\tan \theta = \frac{15}{8}$, $\sin \theta = \frac{15}{17}$, $\cos \theta = \frac{8}{17}$.
:::

## Ko'p uchraydigan xatolar

**1. Tomonlarni boshqa burchakka nisbatan nomlash.**

*Noto'g'ri:* Misol 1 dagi uchburchakda $\sin B = \frac{BC}{AB} = \frac{5}{13}$.

*To'g'ri:* $BC$ — $A$ ning qarshi kateti, $B$ niki emas. $B$ burchak qarshisida $AC$ turadi: $\sin B = \frac{12}{13}$. Har safar avval "qaysi burchak haqida gapiryapmiz?" deb so'rang.

**2. Burchakni ko'paytirsa, sinus ham shuncha marta ko'payadi deb o'ylash.**

*Noto'g'ri:* $\sin 60^\circ = \sin (2 \cdot 30^\circ) = 2 \cdot \sin 30^\circ = 2 \cdot \frac{1}{2} = 1$.

*To'g'ri:* sinus burchakka proporsional emas. Jadvaldan $\sin 60^\circ = \frac{\sqrt{3}}{2}$, bu $1$ dan kichik. ($\sin x^\circ = 1$ faqat $x = 90$ da bo'ladi, o'tkir burchak uchun esa sinus doim $1$ dan kichik.)

**3. Tangensni teskari yozish.**

*Noto'g'ri:* Misol 1 da $\tan A = \frac{AC}{BC} = \frac{12}{5}$.

*To'g'ri:* tangens — **qarshi** katet **yopishgan** katetga: $\tan A = \frac{BC}{AC} = \frac{5}{12}$. $\frac{12}{5}$ — bu $\tan B$.

**4. Sinus yoki kosinusda gipotenuzani suratga qo'yish.**

*Noto'g'ri:* $\sin A = \frac{AB}{BC} = \frac{13}{5}$.

*To'g'ri:* gipotenuza har doim maxrajda: $\sin A = \frac{5}{13}$. Sinus yoki kosinus $1$ dan katta chiqsa, javob albatta xato.

## Mashqlar

Trigonometrik nisbatni qisqarmas kasr ko'rinishida yozing (masalan, $\frac{8}{39}$). Uzunlikni son yoki soddalashtirilgan ildiz bilan yozing (masalan, $6.5$ yoki $3\sqrt{7}$). Burchakni gradus belgisi bilan yozing (masalan, 72°); tenglamadan $x$ so'ralsa, uni son bilan yozing.

21.1–21.3-mashqlar uchun: $\triangle ABC$ da $\angle C = 90^\circ$, $BC = 20$, $AC = 21$, $AB = 29$.

### A daraja

::: {.mashq #m21-1 daraja="A" javob="20/29"}
$\sin A$ ni toping.
:::

::: {.mashq #m21-2 daraja="A" javob="21/29"}
$\cos A$ ni toping.
:::

::: {.mashq #m21-3 daraja="A" javob="21/20"}
$\tan B$ ni toping.
:::

::: {.mashq #m21-4 daraja="A" javob="7/25"}
21.2-rasm b) dagi pandus yer bilan $A$ burchak hosil qiladi. $\sin A$ ni toping.
:::

::: {.mashq #m21-5 daraja="A" javob="7/24"}
21.2-rasm b) dagi pandus uchun $\tan A$ ni toping.
:::

::: {.mashq #m21-6 daraja="A" javob="53"}
$\sin 37^\circ = \cos x^\circ$ va $x^\circ$ o'tkir burchak. $x$ ni toping.
:::

::: {.mashq #m21-7 daraja="A" javob="1/4"}
$\sin 30^\circ \cdot \cos 60^\circ$ ning qiymatini toping.
:::

::: {.mashq #m21-8 daraja="A" javob="23"}
To'g'ri burchakli uchburchakning gipotenuzasi $46$, o'tkir burchaklaridan biri $30^\circ$. Shu burchak qarshisidagi katetni toping.
:::

### B daraja

::: {.mashq #m21-9 daraja="B" javob="9/41"}
$A$ o'tkir burchak va $\tan A = \frac{9}{40}$. $\sin A$ ni toping.
:::

::: {.mashq #m21-10 daraja="B" javob="45/28"}
$A$ o'tkir burchak va $\cos A = \frac{28}{53}$. $\tan A$ ni toping.
:::

::: {.mashq #m21-11 daraja="B" javob="3.5"}
Uzunligi $7$ m bo'lgan narvon devorga suyalgan va yer bilan $60^\circ$ burchak hosil qiladi. Narvonning pastki uchi devordan necha metr uzoqda?
:::

::: {.mashq #m21-12 daraja="B" javob="15\sqrt{2}"}
Varrakning ipi tarang tortilgan, uzunligi $30$ m va yer bilan $45^\circ$ burchak hosil qiladi. Ipni ushlab turgan qo'l balandligini hisobga olmasdan, varrak yerdan qanday balandlikda?
:::

::: {.mashq #m21-13 daraja="B" javob="18"}
$\triangle ABC$ da $\angle C = 90^\circ$, $\angle A = 60^\circ$, $AC = 9$. Gipotenuza $AB$ ni toping.
:::

::: {.mashq #m21-14 daraja="B" javob="33"}
$\triangle ABC$ da $\angle C = 90^\circ$, $\sin A = \frac{3}{5}$, $AB = 55$. $BC$ ni toping.
:::

::: {.mashq #m21-15 daraja="B" javob="12/37"}
To'g'ri chiziq $(0, 0)$ va $(35, 12)$ nuqtalardan o'tadi va $x$ o'qining musbat yo'nalishi bilan $\theta$ burchak hosil qiladi. $\sin \theta$ ni toping.
:::

::: {.mashq #m21-16 daraja="B" javob="30°"}
To'g'ri burchakli uchburchakning katetlari $6$ va $6\sqrt{3}$. Uning eng kichik burchagini toping.
:::

::: {.mashq #m21-17 daraja="B" javob="28"}
$\sin (2x + 6)^\circ = \cos x^\circ$, ikkala burchak ham o'tkir. $x$ ni toping.
:::

### C daraja

::: {.mashq #m21-18 daraja="C" javob="7.2"}
Nogironlar aravachasi uchun pandus qoidasi: pandusning yer bilan hosil qilgan burchagi tangensi $\frac{1}{12}$ dan oshmasligi kerak. Balandligi $0.6$ m bo'lgan zinapoyaga pandus qurilmoqda. Pandusning gorizontal uzunligi kamida necha metr bo'lishi kerak?
:::

::: {.mashq #m21-19 daraja="C" javob="30\sqrt{3}"}
Binodan $30$ m uzoqlikda turgan kuzatuvchi bino tomiga $60^\circ$ ko'tarilish burchagi ostida qaraydi. Kuzatuvchining bo'yini hisobga olmasdan, binoning balandligini toping.
:::

::: {.mashq #m21-20 daraja="C" javob="60/61"}
Uzunligi $6.1$ m bo'lgan narvon tik devorga suyalgan, pastki uchi devordan $1.1$ m uzoqda. Narvon yer bilan $A$ burchak hosil qiladi. $\sin A$ ni toping.
:::

::: {.mashq #m21-21 daraja="C" javob="108"}
$\triangle ABC$ da $\angle C = 90^\circ$, $AB = 45$ va $\sin A = 0.6$. Uchburchakning perimetrini toping.
:::

::: {.mashq #m21-22 daraja="C" javob="10\sqrt{3}"}
Teng yonli uchburchakning yon tomonlari $10$ dan, asosidagi burchaklari $30^\circ$ dan. Uning asosini toping. (Ko'rsatma: asosga balandlik tushiring.)
:::

::: {.mashq #m21-23 daraja="C" javob="64\sqrt{3}"}
To'g'ri to'rtburchakning diagonali $16$ sm va u uzun tomon bilan $30^\circ$ burchak hosil qiladi. To'g'ri to'rtburchakning yuzini (sm²) toping.
:::

::: {.mashq #m21-24 daraja="C" javob="5\sqrt{3}"}
Quyosh nurlari yer bilan $30^\circ$ burchak hosil qilgan paytda balandligi $5$ m bo'lgan tik ustunning soyasi necha metr bo'ladi?
:::

::: {.mashq #m21-25 daraja="C" javob="24"}
Qiya yo'lakning uzunligi $51$ m, uning yer bilan hosil qilgan burchagi $A$ uchun $\tan A = \frac{8}{15}$. Yo'lakning yuqori uchi pastki uchidan necha metr baland?
:::

## SAT ko'prigi

Quyidagi savollar SAT uslubida, inglizcha yozilgan. *Acute* — o'tkir, *leans against* — suyalgan, *level ground* — tekis yer, *feet* — fut (uzunlik birligi; qiymati kerak emas). Kasr javobli grid-in savolda SAT'da javob $3/11$ kabi kiritiladi. Javoblar kitob oxirida.

::: {.sat #s21-1 javob="36/85"}
In triangle $ABC$, angle $B$ is a right angle. If $\sin A = \frac{36}{85}$, what is the value of $\cos C$?
:::

::: {.sat #s21-2 javob="27"}
If $\sin (2x + 7)^\circ = \cos (x + 2)^\circ$, where both angles are acute, what is the value of $x$?
:::

::: {.sat #s21-3 javob="C"}
The lengths of the legs of a right triangle are $48$ and $55$. What is the tangent of the angle opposite the leg of length $48$?

A) $\frac{48}{73}$

B) $\frac{55}{73}$

C) $\frac{48}{55}$

D) $\frac{55}{48}$
:::

::: {.sat #s21-4 javob="B"}
A $12$-foot ladder leans against a vertical wall and makes an angle of $60^\circ$ with the level ground. How high up the wall, in feet, does the top of the ladder reach?

A) $6$

B) $6\sqrt{3}$

C) $12$

D) $12\sqrt{3}$
:::

::: {.sat #s21-5 javob="75"}
In triangle $PQR$, angle $R$ is a right angle, $PQ = 85$, and $\cos P = \frac{8}{17}$. What is the length of $QR$?
:::
