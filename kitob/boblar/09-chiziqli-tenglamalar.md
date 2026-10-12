# 09. Chiziqli tenglamalar

*SAT bo'limi:* Algebra

## Bu bobda

5-bobda proporsiyaning noma'lum hadini topgan edik va "harfli tenglamalarni 9-bobda batafsil yechamiz" degan edik. Endi 8-bobdagi ifodalar bilan ishlash ko'nikmasi tayyor, demak tenglamalarga o'tish vaqti keldi. Bu bobda:

- tenglama va uning yechimi nima ekanini;
- tenglamani "tarozi qoidasi" bilan yechishni;
- ikki tomonida ham o'zgaruvchi bo'lgan, qavsli va kasrli tenglamalarni;
- yechimi yo'q va cheksiz ko'p yechimli tenglamalarni ajratishni;
- formuladan bir harfni boshqalari orqali ifodalashni o'rganamiz.

**SAT'da qayerda kerak?** Chiziqli tenglamalar SAT Algebra bo'limining yuragi. "What is the solution to the equation ...?", "For what value of $k$ does the equation have no solution?", "Which equation gives $y$ in terms of $x$?" kabi savollar har bir testda bir necha marta uchraydi. 11-bobda matnli masalalarni ham aynan shu tenglamalarga aylantirib yechamiz.

## Yangi so'zlar

| O'zbekcha | English |
|---|---|
| tenglama | equation |
| noma'lum | unknown |
| tenglamaning yechimi | solution of an equation |
| chiziqli tenglama | linear equation |
| teng kuchli tenglamalar | equivalent equations |
| teskari amal | inverse operation |
| yechimi yo'q | no solution |
| cheksiz ko'p yechim | infinitely many solutions |
| ayniyat | identity |
| formula | formula |
| harfli tenglama | literal equation |

## Tushuntirish

### Tenglama va uning yechimi

Ichida harf bo'lgan tenglik *tenglama (equation)* deyiladi. Masalan, $2x + 5 = 17$. Tenglik belgisidan chapdagi qism tenglamaning chap tomoni, o'ngdagi qism o'ng tomoni deyiladi. Qiymatini topish kerak bo'lgan harf *noma'lum (unknown)* deyiladi.

Tenglamani to'g'ri tenglikka aylantiradigan son *tenglamaning yechimi (solution of an equation)* deyiladi. $x = 6$ ni qo'yib ko'ramiz: $2 \cdot 6 + 5 = 17$, to'g'ri. Demak, $6$ — yechim. $x = 5$ esa yechim emas: $2 \cdot 5 + 5 = 15$, $15 \neq 17$. Tenglamani yechish — uning barcha yechimlarini topish yoki yechim yo'qligini ko'rsatish demak.

Bu bobda noma'lum faqat birinchi darajada qatnashadigan tenglamalarni yechamiz: unda $x^2$, $\frac{1}{x}$ yoki $\sqrt{x}$ yo'q. Bunday tenglama *chiziqli tenglama (linear equation)* deyiladi, chunki (12-bobda ko'ramiz) uning grafigi to'g'ri chiziq. $x^2 = 9$ kabi tenglamalar 15-bobda keladi.

### Tarozi qoidasi

Tenglamani muvozanatdagi tarozi deb tasavvur qiling: chap palla va o'ng palla teng. Ikkala pallaga bir xil ish qilsak, muvozanat buzilmaydi. Shundan ikkita qoida kelib chiqadi:

1. Tenglamaning ikkala tomoniga bir xil son (yoki ifoda) qo'shish yoki ikkala tomonidan bir xil son ayirish mumkin.
2. Tenglamaning ikkala tomonini **noldan farqli** bir xil songa ko'paytirish yoki bo'lish mumkin.

Bu amallar tenglamani *teng kuchli tenglama (equivalent equation)* ga, ya'ni yechimlari aynan o'sha bo'lgan, lekin soddaroq tenglamaga aylantiradi.

$x$ ga nima qilingan bo'lsa, uni *teskari amal (inverse operation)* bilan bekor qilamiz: $5$ qo'shilgan bo'lsa $5$ ayiramiz, $3$ ga ko'paytirilgan bo'lsa $3$ ga bo'lamiz. Odatda avval qo'shish va ayirishni, keyin ko'paytirish va bo'lishni bekor qilamiz.

**Hadni boshqa tomonga o'tkazish.** $x + 9 = 4$ da ikkala tomondan $9$ ni ayirsak, $x = 4 - 9$ chiqadi. Natijada $+9$ chap tomondan yo'qolib, o'ng tomonda $-9$ bo'lib paydo bo'ldi. Shuning uchun qisqa qoida: **had tenglamaning bir tomonidan ikkinchisiga ishorasini almashtirib o'tadi.** Bu 1-qoidaning qisqa yozuvi, xolos.

::: {.misol}
Yeching: a) $x + 9 = 4$; b) $-6x = 21$; c) $\frac{x}{3} - 4 = 2$.

*Yechish.*

a) Ikkala tomondan $9$ ni ayiramiz: $x = 4 - 9 = -5$.

b) Ikkala tomonni $-6$ ga bo'lamiz: $x = \frac{21}{-6} = -\frac{7}{2}$.

c) Avval ikkala tomonga $4$ ni qo'shamiz: $\frac{x}{3} = 6$. Keyin ikkala tomonni $3$ ga ko'paytiramiz: $x = 18$.

*Tekshirish.* a) $-5 + 9 = 4$. b) $-6 \cdot \left(-\frac{7}{2}\right) = 21$. c) $\frac{18}{3} - 4 = 6 - 4 = 2$. Hammasi to'g'ri.

*Javob:* a) $x = -5$; b) $x = -\frac{7}{2}$; c) $x = 18$.
:::

### Ikki tomonida o'zgaruvchi bo'lgan tenglamalar

Murakkabroq tenglamani quyidagi tartibda yechamiz:

1. Har bir tomonda qavslarni ochib, o'xshash hadlarni birlashtiramiz (8-bob).
2. $x$ li hadlarni bir tomonga, sonlarni ikkinchi tomonga o'tkazamiz.
3. Ikkala tomonni $x$ ning koeffitsiyentiga bo'lamiz.
4. Javobni dastlabki tenglamaga qo'yib tekshiramiz.

::: {.misol}
Yeching: a) $7x - 5 = 3x + 11$; b) $3(2x - 5) + 4 = 2(x + 7) - 5$.

*Yechish.*

a) $x$ li hadlarni chapga, sonlarni o'ngga o'tkazamiz: $7x - 3x = 11 + 5$, ya'ni $4x = 16$. Ikkala tomonni $4$ ga bo'lamiz: $x = 4$.

*Tekshirish:* chap tomon $7 \cdot 4 - 5 = 23$, o'ng tomon $3 \cdot 4 + 11 = 23$.

b) 1-qadam (qavslar): chap tomon $6x - 15 + 4 = 6x - 11$, o'ng tomon $2x + 14 - 5 = 2x + 9$. Tenglama: $6x - 11 = 2x + 9$.

2-qadam: $6x - 2x = 9 + 11$, ya'ni $4x = 20$.

3-qadam: $x = 5$.

*Tekshirish:* chap tomon $3(10 - 5) + 4 = 19$, o'ng tomon $2(5 + 7) - 5 = 19$.

*Javob:* a) $x = 4$; b) $x = 5$.
:::

### Kasrli tenglamalar va proporsiyalar

Tenglamada kasrlar bo'lsa, ikkala tomonni maxrajlarning EKUKiga (2-bob) ko'paytiramiz. Shunda kasrlar yo'qoladi. Diqqat: **har bir** had ko'paytiriladi, kasrsiz hadlar ham. Kasrning surati ko'phad bo'lsa, uni qavsga olamiz, chunki kasr chizig'i qavs vazifasini bajaradi.

Tenglama $\frac{a}{b} = \frac{c}{d}$ ko'rinishidagi proporsiya bo'lsa, 5-bobdagi ayqash ko'paytirishdan foydalanamiz: $a \cdot d = b \cdot c$.

O'nli kasrli koeffitsiyentlar bo'lsa, ikkala tomonni $10$ ga (yoki $100$ ga) ko'paytirib, butun koeffitsiyentlarga o'tish qulay.

::: {.misol}
Yeching: a) $\frac{x}{3} - \frac{x - 4}{5} = 2$; b) $\frac{x + 2}{5} = \frac{x - 1}{2}$.

*Yechish.*

a) $3$ va $5$ ning EKUKi $15$. Ikkala tomonni $15$ ga ko'paytiramiz: $15 \cdot \frac{x}{3} = 5x$, $15 \cdot \frac{x - 4}{5} = 3(x - 4)$, $15 \cdot 2 = 30$. Tenglama:

$$5x - 3(x - 4) = 30.$$

Qavsni ochamiz (minus oldidagi qavs!): $5x - 3x + 12 = 30$, ya'ni $2x + 12 = 30$. Bundan $2x = 18$, $x = 9$.

*Tekshirish:* $\frac{9}{3} - \frac{9 - 4}{5} = 3 - 1 = 2$.

b) Ayqash ko'paytiramiz: $2(x + 2) = 5(x - 1)$, ya'ni $2x + 4 = 5x - 5$. $x$ li hadlarni o'ngga yig'amiz (koeffitsiyent musbat bo'lsin): $4 + 5 = 5x - 2x$, ya'ni $9 = 3x$, $x = 3$.

*Tekshirish:* $\frac{3 + 2}{5} = 1$ va $\frac{3 - 1}{2} = 1$.

*Javob:* a) $x = 9$; b) $x = 3$.
:::

### Yechimi yo'q yoki cheksiz ko'p yechim

Ba'zan soddalashtirish jarayonida $x$ butunlay yo'qolib ketadi. Ikki hol bo'lishi mumkin.

- $2(x + 3) = 2x + 1$. Qavsni ochamiz: $2x + 6 = 2x + 1$. Ikkala tomondan $2x$ ni ayirsak, $6 = 1$ chiqadi. Bu noto'g'ri tenglik, va $x$ ning hech bir qiymati uni to'g'ri qila olmaydi. Demak, tenglamaning **yechimi yo'q (no solution)**.
- $3(x - 2) + x = 4x - 6$. Chap tomon: $3x - 6 + x = 4x - 6$. Tenglama $4x - 6 = 4x - 6$ ga aylandi: ikkala tomon bir xil ifoda. U $x$ ning har qanday qiymatida to'g'ri, demak tenglamaning **cheksiz ko'p yechimi (infinitely many solutions)** bor. $x$ ning har qanday qiymatida to'g'ri bo'ladigan tenglik *ayniyat (identity)* deyiladi.

Umumiy qoida: tenglama soddalashtirilib $ax + b = cx + d$ ko'rinishiga keltirilgan bo'lsin.

- $a \neq c$ (koeffitsiyentlar har xil) bo'lsa, **bitta** yechim bor;
- $a = c$ va $b \neq d$ bo'lsa, yechim **yo'q**;
- $a = c$ va $b = d$ bo'lsa, yechim **cheksiz ko'p**.

::: {.misol}
a) $5x - 2(x + 4) = 3x + 1$ tenglamani yeching.

b) $k$ ning qanday qiymatida $2(4x - 1) = kx + 5$ tenglamaning yechimi yo'q?

*Yechish.*

a) Chap tomon: $5x - 2x - 8 = 3x - 8$. Tenglama $3x - 8 = 3x + 1$. $x$ li hadlar bir xil ($3x$), ozod hadlar har xil ($-8 \neq 1$). Ikkala tomondan $3x$ ni ayirsak, $-8 = 1$ chiqadi, bu noto'g'ri.

b) Chap tomon: $8x - 2$. Tenglama: $8x - 2 = kx + 5$. Yechim bo'lmasligi uchun $x$ ning koeffitsiyentlari teng bo'lishi kerak: $k = 8$. Bunda ozod hadlar har xil ($-2 \neq 5$), demak yechim haqiqatan yo'q. ($k$ boshqa son bo'lsa, koeffitsiyentlar har xil va bitta yechim bor.)

*Javob:* a) yechimi yo'q; b) $k = 8$.
:::

### Formulalar: bir harfni boshqalari orqali ifodalash

*Formula (formula)* — miqdorlar orasidagi bog'lanishning harflar bilan yozilgan tengligi. Masalan, 5-bobda ko'rganimizdek, masofa tezlik bilan vaqtning ko'paytmasiga teng; masofani $d$, tezlikni $v$, vaqtni $t$ bilan belgilasak, $d = vt$ formulasi hosil bo'ladi. Bir nechta harf qatnashgan bunday tenglama *harfli tenglama (literal equation)* deyiladi.

Ko'pincha formuladan boshqa harfni topish kerak bo'ladi. Buning uchun o'sha harfni noma'lum deb, qolgan harflarni oddiy son deb qaraymiz va tarozi qoidasini qo'llaymiz.

::: {.misol}
a) To'g'ri to'rtburchakning perimetri $P = 2a + 2b$ formula bilan topiladi, bu yerda $a$ va $b$ — tomonlari. Formulani $b$ ga nisbatan yeching va $P = 30$, $a = 9$ bo'lganda $b$ ni toping.

b) $d = vt$ formulani $t$ ga nisbatan yeching va $d = 270$ km, $v = 90$ km/soat bo'lganda $t$ ni toping.

*Yechish.*

a) $2a$ ni chap tomonga o'tkazamiz: $P - 2a = 2b$. Ikkala tomonni $2$ ga bo'lamiz:

$$b = \frac{P - 2a}{2}.$$

$P = 30$, $a = 9$ da: $b = \frac{30 - 18}{2} = 6$.

b) Ikkala tomonni $v$ ga bo'lamiz ($v \neq 0$): $t = \frac{d}{v}$. Bundan $t = \frac{270}{90} = 3$ soat.

*Javob:* a) $b = \frac{P - 2a}{2}$, $b = 6$; b) $t = \frac{d}{v}$, $t = 3$ soat.
:::

## Ko'p uchraydigan xatolar

**1. Hadni o'tkazganda ishorasini almashtirmaslik.**

*Noto'g'ri:* $3x + 7 = 19$, demak $3x = 19 + 7 = 26$.

*To'g'ri:* $+7$ o'ng tomonga $-7$ bo'lib o'tadi: $3x = 19 - 7 = 12$, $x = 4$.

**2. EKUKga faqat kasrlarni ko'paytirish.**

*Noto'g'ri:* $\frac{x}{2} + 3 = 7$ ni $2$ ga ko'paytirib, $x + 3 = 14$, $x = 11$.

*To'g'ri:* **har bir** had ko'paytiriladi: $x + 6 = 14$, $x = 8$. Tekshirish: $\frac{8}{2} + 3 = 7$.

**3. Koeffitsiyentga bo'lishda adashish.**

*Noto'g'ri:* $-3x = 12$, demak $x = 4$; $4x = 2$, demak $x = 2$.

*To'g'ri:* ikkala tomon **koeffitsiyentga** bo'linadi, ishorasi bilan birga: $x = \frac{12}{-3} = -4$; $x = \frac{2}{4} = \frac{1}{2}$.

**4. $x$ yo'qolganda "$x = 0$" deb yozish.**

*Noto'g'ri:* $4x - 6 = 4x - 6$, demak $0 = 0$, javob $x = 0$.

*To'g'ri:* $0 = 0$ — har doim to'g'ri tenglik, demak tenglama cheksiz ko'p yechimga ega. Agar $6 = 1$ kabi noto'g'ri tenglik chiqsa, yechim yo'q. Ikkala holda ham javob "$x = 0$" emas.

**5. Kasr oldidagi minusni faqat birinchi hadga qo'llash.**

*Noto'g'ri:* $\frac{x}{3} - \frac{x - 4}{5} = 2$ ni $15$ ga ko'paytirib, $5x - 3x - 12 = 30$.

*To'g'ri:* surat qavsga olinadi: $5x - 3(x - 4) = 30$, ya'ni $5x - 3x + 12 = 30$.

## Mashqlar

Tenglamalarni yeching. Kasr javobni qisqarmas kasr ko'rinishida yozing. Tenglamaning yechimi bo'lmasa, javobga "yechimi yo'q", cheksiz ko'p yechimi bo'lsa, "cheksiz ko'p yechim" deb yozing. Formulani yechganda javobni bitta kasr ko'rinishida yozing (masalan, $a = \frac{c - 5b}{3}$).

### A daraja

::: {.mashq #m9-1 daraja="A" javob="-7"}
$x + 13 = 6$.
:::

::: {.mashq #m9-2 daraja="A" javob="-3"}
$x - 8 = -11$.
:::

::: {.mashq #m9-3 daraja="A" javob="-6"}
$7x = -42$.
:::

::: {.mashq #m9-4 daraja="A" javob="-36"}
$\frac{x}{4} = -9$.
:::

::: {.mashq #m9-5 daraja="A" javob="8"}
$2x + 9 = 25$.
:::

::: {.mashq #m9-6 daraja="A" javob="3"}
$15 - 4x = 3$.
:::

::: {.mashq #m9-7 daraja="A" javob="-4"}
$-5x - 6 = 14$.
:::

::: {.mashq #m9-8 daraja="A" javob="3/4"}
$8x = 6$.
:::

### B daraja

::: {.mashq #m9-9 daraja="B" javob="13/2"}
$9x - 4 = 5x + 22$.
:::

::: {.mashq #m9-10 daraja="B" javob="4"}
$3 - 2x = 4x - 21$.
:::

::: {.mashq #m9-11 daraja="B" javob="11"}
$4(x - 3) = 2x + 10$.
:::

::: {.mashq #m9-12 daraja="B" javob="-2"}
$5(2x + 1) - 3(x - 4) = 3$.
:::

::: {.mashq #m9-13 daraja="B" javob="12"}
$\frac{2x}{3} - 1 = 7$.
:::

::: {.mashq #m9-14 daraja="B" javob="18"}
$\frac{x}{2} + \frac{x}{3} = 15$.
:::

::: {.mashq #m9-15 daraja="B" javob="13"}
$\frac{x - 3}{4} = \frac{x + 2}{6}$.
:::

::: {.mashq #m9-16 daraja="B" javob="5"}
$0.4x + 1.5 = 0.1x + 3$.
:::

::: {.mashq #m9-17 daraja="B" javob="yechimi yo'q"}
$3(x + 4) = 3x + 10$.
:::

### C daraja

::: {.mashq #m9-18 daraja="C" javob="cheksiz ko'p yechim"}
$2(3x - 1) - (x + 5) = 5x - 7$.
:::

::: {.mashq #m9-19 daraja="C" javob="22/5"}
$\frac{2x - 1}{3} - \frac{x + 2}{4} = 1$.
:::

::: {.mashq #m9-20 daraja="C" javob="4"}
$k$ ning qanday qiymatida $5x - 2(x - k) = 3x + 8$ tenglama cheksiz ko'p yechimga ega bo'ladi?
:::

::: {.mashq #m9-21 daraja="C" javob="2"}
$k$ ning qanday qiymatida $kx - 4 = 3(x + 2) - x$ tenglamaning yechimi yo'q?
:::

::: {.mashq #m9-22 daraja="C" javob="$x = \frac{y + 10}{4}$"}
$y = 4x - 10$ formulani $x$ ga nisbatan yeching.
:::

::: {.mashq #m9-23 daraja="C" javob="35"}
Selsiy gradusidagi harorat $C$ ni Farengeyt gradusidagi harorat $F$ ga aylantirish formulasi: $F = \frac{9C}{5} + 32$. Toshkentda yozda havo harorati $95$ gradus Farengeyt bo'ldi. Bu necha gradus Selsiy?
:::

::: {.mashq #m9-24 daraja="C" javob="9"}
Mobil aloqa tarifida oylik to'lov $25\,000$ so'm, bundan tashqari har bir gigabayt (GB) internet uchun $4000$ so'm olinadi. Sardor bir oyda jami $61\,000$ so'm to'ladi. U necha GB internet ishlatgan? Tenglama tuzib yeching.
:::

::: {.mashq #m9-25 daraja="C" javob="12"}
"Chempion" sport zalida a'zolik badali $120\,000$ so'm va har bir mashg'ulot $15\,000$ so'm. "Sog'lom" zalida a'zolik badali yo'q, lekin har bir mashg'ulot $25\,000$ so'm. Nechta mashg'ulotda ikkala zalda jami to'lov bir xil bo'ladi?
:::

::: {.mashq #m9-26 daraja="C" javob="$y = \frac{18 - 2x}{3}$"}
$2x + 3y = 18$ tenglikdan $y$ ni $x$ orqali ifodalang.
:::

## SAT ko'prigi

Quyidagi savollar SAT uslubida, inglizcha yozilgan. *In terms of* — "orqali", masalan "$m$ in terms of $C$ and $n$" — "$m$ ni $C$ va $n$ orqali". Javoblar kitob oxirida.

::: {.sat #s9-1 javob="8"}
What is the solution to the equation $5(x - 3) = 2x + 9$?
:::

::: {.sat #s9-2 javob="20"}
If $\frac{x}{2} + \frac{x}{5} = 14$, what is the value of $x$?
:::

::: {.sat #s9-3 javob="C"}
Which of the following equations has no solution?

A) $4x + 1 = 4x + 1$

B) $4x + 1 = 2x + 1$

C) $4x + 1 = 4(x + 1)$

D) $4x + 1 = 4(x - 1) + 5$
:::

::: {.sat #s9-4 javob="6"}
In the equation $ax - 7 = 3(2x + 1)$, $a$ is a constant. If the equation has no solution, what is the value of $a$?
:::

::: {.sat #s9-5 javob="A"}
The equation $C = 12n + 5m$ gives the total cost $C$, in dollars, of buying $n$ notebooks and $m$ pens at a school store. Which equation correctly expresses $m$ in terms of $C$ and $n$?

A) $m = \frac{C - 12n}{5}$

B) $m = \frac{C}{5} - 12n$

C) $m = \frac{C + 12n}{5}$

D) $m = 5(C - 12n)$
:::
