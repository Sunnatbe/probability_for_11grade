# 15. Kvadrat tenglamalarga kirish

*SAT bo'limi:* Advanced Math

## Bu bobda

9-bobda faqat chiziqli tenglamalarni yechdik va "$x^2 = 9$ kabi tenglamalar 15-bobda keladi" degan edik. 14-bobda ko'phadlarni ko'paytuvchilarga ajratishni o'rgandik. Endi ikkalasini birlashtiramiz. Bu bobda:

- kvadrat tenglama va uning standart ko'rinishini;
- $x^2 = k$ ko'rinishidagi tenglamalarni;
- ko'paytmaning nolga tengligi xossasini va tenglamani ko'paytuvchilarga ajratib yechishni;
- ildizlar formulasi va diskriminantni;
- kvadrat funksiyaning grafigi — parabolani: uning uchi va o'qlar bilan kesishish nuqtalarini o'rganamiz.

**SAT'da qayerda kerak?** Kvadrat tenglamalar SAT Advanced Math bo'limining markazida turadi: "What is the positive solution to the equation...?", "How many distinct real solutions does the equation have?", "The graph of $y = ...$ intersects the x-axis at..." kabi savollar har bir testda bor. Bu bob shu mavzuga kirish: asosiy usullarni puxta o'rganib olsangiz, murakkabroq savollar ham shularga keltiriladi.

## Yangi so'zlar

| O'zbekcha | English |
|---|---|
| kvadrat tenglama | quadratic equation |
| tenglamaning ildizi | root of an equation |
| ko'paytmaning nolga tengligi xossasi | zero product property |
| ildizlar formulasi | quadratic formula |
| diskriminant | discriminant |
| kvadrat funksiya | quadratic function |
| parabola | parabola |
| parabolaning uchi | vertex of a parabola |
| simmetriya o'qi | axis of symmetry |

## Tushuntirish

### Kvadrat tenglama

Ushbu ko'rinishdagi tenglama *kvadrat tenglama (quadratic equation)* deyiladi:

$$ax^2 + bx + c = 0.$$

Bu yerda $a \neq 0$. Bu yozuv kvadrat tenglamaning standart ko'rinishi (14-bob): chap tomonda ko'phad darajasi kamayish tartibida, o'ng tomonda $0$. $a$, $b$, $c$ — sonlar, $a$ nolga teng emas (aks holda $x^2$ yo'qolib, 9-bobdagi chiziqli tenglama qoladi). Masalan:

- $2x^2 + 3x - 2 = 0$: $a = 2$, $b = 3$, $c = -2$;
- $x^2 - 9 = 0$: $a = 1$, $b = 0$, $c = -9$;
- $x^2 + x = 12$ hali standart ko'rinishda emas: $12$ ni chapga o'tkazamiz, $x^2 + x - 12 = 0$.

Kvadrat tenglamaning yechimlari uning *ildizlari (roots)* deb ham ataladi. Chiziqli tenglamaning bitta yechimi bo'lsa, kvadrat tenglamaning ikkita, bitta ildizi bo'lishi yoki birorta ham ildizi bo'lmasligi mumkin.

### $x^2 = k$ ko'rinishidagi tenglamalar

Qaysi sonning kvadrati $9$ ga teng? $3^2 = 9$, lekin $(-3)^2 = 9$ ham (7-bob). Demak, $x^2 = 9$ tenglamasining ikkita ildizi bor: $x = 3$ va $x = -3$. Ikkalasini birga $x = \pm 3$ deb yozamiz ($\pm$ belgisi "plyus-minus" deb o'qiladi).

Umuman, $x^2 = k$ tenglamasida:

- $k$ musbat bo'lsa, ikkita ildiz bor: $x = \sqrt{k}$ va $x = -\sqrt{k}$, ya'ni $x = \pm\sqrt{k}$; masalan, $x^2 = 7$ dan $x = \pm\sqrt{7}$;
- $k = 0$ bo'lsa, bitta ildiz bor: $x = 0$;
- $k$ manfiy bo'lsa, ildiz yo'q, chunki hech bir sonning kvadrati manfiy emas.

Tenglama $(x + 1)^2 = 49$ ko'rinishida bo'lsa ham shu usul ishlaydi: qavs ichidagi ifoda $7$ yoki $-7$ ga teng bo'lishi kerak.

::: {.misol}
Yeching: a) $x^2 = 9$; b) $2x^2 - 50 = 0$; c) $(x + 1)^2 = 49$; d) $x^2 + 5 = 1$.

*Yechish.*

a) $x = \pm 3$, ya'ni $x = -3$ yoki $x = 3$.

b) $2x^2 = 50$, ikkala tomonni $2$ ga bo'lamiz: $x^2 = 25$. Demak, $x = \pm 5$.

c) $x + 1 = 7$ yoki $x + 1 = -7$. Birinchisidan $x = 6$, ikkinchisidan $x = -8$.

*Tekshirish:* $(6 + 1)^2 = 49$ va $(-8 + 1)^2 = (-7)^2 = 49$.

d) $x^2 = 1 - 5 = -4$. Kvadrat manfiy bo'la olmaydi, demak tenglamaning yechimi yo'q.

*Javob:* a) $x = -3$; $x = 3$. b) $x = -5$; $x = 5$. c) $x = -8$; $x = 6$. d) yechimi yo'q.
:::

### Ko'paytmaning nolga tengligi xossasi

Ikki sonning ko'paytmasi nolga teng bo'lsa, ulardan kamida bittasi nolga teng: $A \cdot B = 0$ bo'lsa, $A = 0$ yoki $B = 0$. Haqiqatan, ikkalasi ham noldan farqli bo'lsa, ko'paytma ham noldan farqli bo'lardi. Bu *ko'paytmaning nolga tengligi xossasi (zero product property)*.

Masalan, $(x - 4)(x + 6) = 0$ bo'lsa, $x - 4 = 0$ yoki $x + 6 = 0$, ya'ni $x = 4$ yoki $x = -6$.

Diqqat: xossa faqat o'ng tomonda **nol** turganda ishlaydi. $A \cdot B = 4$ dan $A = 4$ yoki $B = 4$ degan xulosa chiqmaydi.

### Ko'paytuvchilarga ajratib yechish

1. Hamma hadlarni chap tomonga o'tkazamiz: o'ng tomonda $0$ qolsin.
2. Chap tomonni ko'paytuvchilarga ajratamiz (14-bob).
3. Har bir ko'paytuvchini nolga tenglab, chiziqli tenglamalarni yechamiz.
4. Ildizlarni dastlabki tenglamaga qo'yib tekshiramiz.

::: {.misol}
Yeching: a) $x^2 + x = 12$; b) $2x^2 = 10x$.

*Yechish.*

a) 1-qadam: $x^2 + x - 12 = 0$.

2-qadam: ko'paytmasi $-12$, yig'indisi $1$ bo'lgan sonlar $4$ va $-3$: $(x - 3)(x + 4) = 0$.

3-qadam: $x - 3 = 0$ yoki $x + 4 = 0$, ya'ni $x = 3$ yoki $x = -4$.

4-qadam: $3^2 + 3 = 12$ va $(-4)^2 + (-4) = 16 - 4 = 12$. Ikkalasi ham to'g'ri.

b) $2x^2 - 10x = 0$. Umumiy ko'paytuvchi $2x$: $2x(x - 5) = 0$. Demak, $2x = 0$ yoki $x - 5 = 0$, ya'ni $x = 0$ yoki $x = 5$.

Bu yerda ikkala tomonni $x$ ga bo'lib yubormang: $x = 0$ ham ildiz, bo'lsak u yo'qolib qoladi (nolga bo'lib bo'lmaydi).

*Javob:* a) $x = -4$; $x = 3$. b) $x = 0$; $x = 5$.
:::

### Ildizlar formulasi

Har qanday kvadrat tenglamani ko'paytuvchilarga oson ajratib bo'lmaydi. Lekin har qanday $ax^2 + bx + c = 0$ tenglamaning ildizlarini quyidagi *ildizlar formulasi (quadratic formula)* bilan topish mumkin:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}.$$

Formula qanday keltirib chiqarilishini bu kitobda ko'rsatmaymiz; hozir uni to'g'ri qo'llashni o'rganamiz:

1. Tenglamani standart ko'rinishga keltirib, $a$, $b$, $c$ ni **ishoralari bilan** yozib olamiz.
2. Ildiz ostidagi sonni, $b^2 - 4ac$ ni hisoblaymiz.
3. Formulaga qo'yamiz. "$\pm$" ikkita ildiz beradi: biri plyus bilan, biri minus bilan. Kasr chizig'i butun suratga tegishli.

::: {.misol}
Ildizlar formulasi bilan yeching: a) $x^2 - 4x + 1 = 0$; b) $2x^2 + 3x - 2 = 0$.

*Yechish.*

a) $a = 1$, $b = -4$, $c = 1$. Ildiz ostidagi son: $(-4)^2 - 4 \cdot 1 \cdot 1 = 16 - 4 = 12$. $\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt{3}$ (7-bob). Demak:

$$x = \frac{4 \pm 2\sqrt{3}}{2} = 2 \pm \sqrt{3}.$$

(Suratning **ikkala** hadi $2$ ga bo'lindi.) Taxminan: $\sqrt{3} \approx 1.73$, demak $x \approx 0.27$ yoki $x \approx 3.73$.

b) $a = 2$, $b = 3$, $c = -2$. Ildiz ostidagi son: $3^2 - 4 \cdot 2 \cdot (-2) = 9 + 16 = 25$, $\sqrt{25} = 5$.

$$x = \frac{-3 \pm 5}{4}.$$

Plyus bilan: $x = \frac{2}{4} = \frac{1}{2}$. Minus bilan: $x = \frac{-8}{4} = -2$.

*Tekshirish* (b): $2 \cdot \frac{1}{4} + \frac{3}{2} - 2 = \frac{1}{2} + \frac{3}{2} - 2 = 0$ va $2 \cdot 4 - 6 - 2 = 0$.

*Javob:* a) $x = 2 - \sqrt{3}$; $x = 2 + \sqrt{3}$. b) $x = -2$; $x = \frac{1}{2}$.
:::

### Diskriminant

Ildizlar formulasidagi $b^2 - 4ac$ soni *diskriminant (discriminant)* deyiladi va $D$ harfi bilan belgilanadi: $D = b^2 - 4ac$. Tenglamani yechmasdan turib, diskriminantdan ildizlar sonini bilish mumkin:

- $D$ musbat bo'lsa — ikkita har xil ildiz bor;
- $D = 0$ bo'lsa — bitta ildiz bor: $x = \frac{-b}{2a}$ (plyus ham, minus ham bir xil natija beradi);
- $D$ manfiy bo'lsa — ildiz yo'q, chunki manfiy sondan kvadrat ildiz olinmaydi (7-bob).

::: {.misol}
a) $x^2 - 6x + 9 = 0$ va b) $2x^2 + x + 3 = 0$ tenglamalari nechtadan ildizga ega? c) $c$ ning qanday qiymatida $x^2 + 8x + c = 0$ tenglamaning faqat bitta ildizi bor?

*Yechish.*

a) $D = (-6)^2 - 4 \cdot 1 \cdot 9 = 36 - 36 = 0$. Bitta ildiz: $x = \frac{6}{2} = 3$. (Haqiqatan, $x^2 - 6x + 9 = (x - 3)^2$.)

b) $D = 1^2 - 4 \cdot 2 \cdot 3 = 1 - 24 = -23$. Diskriminant manfiy, ildiz yo'q.

c) Bitta ildiz uchun $D = 0$ bo'lishi kerak: $8^2 - 4 \cdot 1 \cdot c = 0$, ya'ni $64 - 4c = 0$, $c = 16$.

*Javob:* a) bitta; b) ildiz yo'q; c) $c = 16$.
:::

### Parabola

$y = ax^2 + bx + c$ ($a \neq 0$) ko'rinishidagi funksiya *kvadrat funksiya (quadratic function)* deyiladi. Uning grafigi to'g'ri chiziq emas, balki *parabola (parabola)* deb ataladigan egri chiziq. Quyidagi rasmda $y = x^2 - 2x - 3$ ning grafigi.

![Parabola: x o'qi bilan kesishish nuqtalari va uchi](rasmlar/chiqish/15_parabola.png){width=60%}

Parabolaning asosiy xossalari:

- $a$ musbat bo'lsa, parabolaning shoxlari yuqoriga qaragan; $a$ manfiy bo'lsa, pastga qaragan.
- Parabolaning eng pastki (shoxlari pastga qaragan bo'lsa, eng yuqori) nuqtasi *parabolaning uchi (vertex)* deyiladi. Uchining $x$ koordinatasi $x = \frac{-b}{2a}$ formula bilan topiladi, $y$ koordinatasini esa shu $x$ ni funksiyaga qo'yib topamiz.
- Uchidan o'tuvchi vertikal to'g'ri chiziq *simmetriya o'qi (axis of symmetry)* deyiladi: parabolaning chap va o'ng yarmi unga nisbatan oynadagi aksdek bir xil.
- $x$ o'qi bilan kesishish nuqtalarida $y = 0$, ya'ni ularning $x$ koordinatalari $ax^2 + bx + c = 0$ tenglamasining ildizlari. Ildiz nechta bo'lsa, kesishish nuqtasi shuncha: $D$ manfiy bo'lsa, parabola $x$ o'qini umuman kesmaydi.
- $y$ o'qi bilan kesishish nuqtasi $(0, c)$, chunki $x = 0$ da $y = c$.

::: {.misol}
$y = x^2 - 2x - 3$ parabolasi uchun toping: a) $x$ o'qi bilan kesishish nuqtalari; b) $y$ o'qi bilan kesishish nuqtasi; c) parabolaning uchi. Natijalarni rasm bilan solishtiring.

*Yechish.*

a) $x^2 - 2x - 3 = 0$. Ko'paytmasi $-3$, yig'indisi $-2$ bo'lgan sonlar $-3$ va $1$: $(x - 3)(x + 1) = 0$, $x = 3$ yoki $x = -1$. Nuqtalar: $(-1, 0)$ va $(3, 0)$.

b) $c = -3$, nuqta $(0, -3)$.

c) $a = 1$, $b = -2$: $x = \frac{-(-2)}{2 \cdot 1} = 1$. $y = 1^2 - 2 \cdot 1 - 3 = -4$. Uchi $(1, -4)$. E'tibor bering: $x = 1$ soni $-1$ va $3$ ning qoq o'rtasida, chunki parabola simmetriya o'qiga nisbatan simmetrik. $a$ musbat, shoxlar yuqoriga qaragan, demak uchi — eng pastki nuqta: funksiyaning eng kichik qiymati $-4$.

*Javob:* a) $(-1, 0)$; $(3, 0)$. b) $(0, -3)$. c) $(1, -4)$. Rasmdagi nuqtalar bilan mos.
:::

## Ko'p uchraydigan xatolar

**1. Manfiy ildizni yo'qotish.**

*Noto'g'ri:* $x^2 = 36$, demak $x = 6$.

*To'g'ri:* $(-6)^2 = 36$ ham. Javob: $x = -6$; $x = 6$.

**2. Tenglamani $x$ ga bo'lish.**

*Noto'g'ri:* $x^2 = 4x$, ikkala tomonni $x$ ga bo'lamiz: $x = 4$.

*To'g'ri:* $x^2 - 4x = 0$, $x(x - 4) = 0$. Javob: $x = 0$; $x = 4$.

**3. O'ng tomonda nol bo'lmasa ham ko'paytmani "bo'lish".**

*Noto'g'ri:* $(x - 2)(x + 1) = 4$, demak $x - 2 = 4$ yoki $x + 1 = 4$, ya'ni $x = 6$ yoki $x = 3$. (Tekshirsak: $(6 - 2)(6 + 1) = 28$, $4$ emas.)

*To'g'ri:* avval qavslarni ochib, hammasini chapga o'tkazamiz: $x^2 - x - 2 = 4$, $x^2 - x - 6 = 0$, $(x - 3)(x + 2) = 0$. Javob: $x = -2$; $x = 3$.

**4. Formulada $b$ ning ishorasida adashish.**

*Noto'g'ri:* $x^2 - 5x + 2 = 0$ da $-b = -5$ va $b^2 = -25$, demak $D = -25 - 8$ manfiy, yechim yo'q.

*To'g'ri:* $b = -5$, shuning uchun $-b = 5$ va $b^2 = (-5)^2 = 25$. $D = 25 - 8 = 17$, $x = \frac{5 \pm \sqrt{17}}{2}$.

**5. Suratning faqat bir qismini maxrajga bo'lish.**

*Noto'g'ri:* $\frac{4 \pm 2\sqrt{3}}{2} = 4 \pm \sqrt{3}$.

*To'g'ri:* kasr chizig'i butun suratga tegishli, **ikkala** had bo'linadi: $\frac{4}{2} \pm \frac{2\sqrt{3}}{2} = 2 \pm \sqrt{3}$.

## Mashqlar

Boshqa savol berilmagan bo'lsa, tenglamani yeching. Ildizlarni o'sish tartibida, nuqtali vergul bilan ajratib yozing (masalan, $x = -9$; $x = 2$). Ildiz bitta bo'lsa, faqat uni yozing; ildiz bo'lmasa, "yechimi yo'q" deb yozing. Diskriminant to'liq kvadrat bo'lmasa, ildizlarni Misol 3 ning a) bandidagidek soddalashtirilgan ildiz bilan yozing. Nuqtani $(a, b)$ ko'rinishida yozing (masalan, $(-7, 12)$); bir nechta nuqtani $x$ koordinatasi o'sish tartibida yozing.

### A daraja

::: {.mashq #m15-1 daraja="A" javob="$x = -8$; $x = 8$"}
$x^2 = 64$.
:::

::: {.mashq #m15-2 daraja="A" javob="$x = -11$; $x = 11$"}
$x^2 - 121 = 0$.
:::

::: {.mashq #m15-3 daraja="A" javob="$x = -4$; $x = 4$"}
$5x^2 = 80$.
:::

::: {.mashq #m15-4 daraja="A" javob="$x = -8$; $x = 3$"}
$(x - 3)(x + 8) = 0$.
:::

::: {.mashq #m15-5 daraja="A" javob="$x = 0$; $x = 6$"}
$x(x - 6) = 0$.
:::

::: {.mashq #m15-6 daraja="A" javob="$x = -7$; $x = -2$"}
$x^2 + 9x + 14 = 0$.
:::

::: {.mashq #m15-7 daraja="A" javob="yechimi yo'q"}
$x^2 + 16 = 0$.
:::

::: {.mashq #m15-8 daraja="A" javob="49"}
$x^2 - 3x - 10 = 0$ tenglamaning diskriminantini toping.
:::

### B daraja

::: {.mashq #m15-9 daraja="B" javob="$x = -4$; $x = 7$"}
$x^2 - 3x = 28$.
:::

::: {.mashq #m15-10 daraja="B" javob="$x = -1$; $x = 11$"}
$(x - 5)^2 = 36$.
:::

::: {.mashq #m15-11 daraja="B" javob="$x = -4$; $x = 0$"}
$3x^2 + 12x = 0$.
:::

::: {.mashq #m15-12 daraja="B" javob="$x = \frac{1}{2}$; $x = 3$"}
$2x^2 - 7x + 3 = 0$.
:::

::: {.mashq #m15-13 daraja="B" javob="$x = 6$"}
$x^2 - 12x + 36 = 0$.
:::

::: {.mashq #m15-14 daraja="B" javob="$x = -1 - \sqrt{5}$; $x = -1 + \sqrt{5}$"}
$x^2 + 2x - 4 = 0$.
:::

::: {.mashq #m15-15 daraja="B" javob="0"}
$3x^2 - 5x + 4 = 0$ tenglama nechta ildizga ega?
:::

::: {.mashq #m15-16 daraja="B" javob="$(-2, -5)$"}
$y = x^2 + 4x - 1$ parabolasining uchini toping.
:::

::: {.mashq #m15-17 daraja="B" javob="$(-4, 0)$; $(5, 0)$"}
$y = x^2 - x - 20$ parabolasi $x$ o'qini qaysi nuqtalarda kesib o'tadi?
:::

### C daraja

::: {.mashq #m15-18 daraja="C" javob="$x = \frac{-3 - \sqrt{17}}{4}$; $x = \frac{-3 + \sqrt{17}}{4}$"}
$2x^2 + 3x - 1 = 0$.
:::

::: {.mashq #m15-19 daraja="C" javob="$x = -5$; $x = 6$"}
$(x + 2)(x - 3) = 24$.
:::

::: {.mashq #m15-20 daraja="C" javob="10"}
$k$ — musbat son. $k$ ning qanday qiymatida $x^2 - kx + 25 = 0$ tenglama faqat bitta ildizga ega bo'ladi?
:::

::: {.mashq #m15-21 daraja="C" javob="8"}
To'g'ri to'rtburchak shaklidagi gulzorning bo'yi enidan $4$ metr uzun, yuzi esa $96$ kvadrat metr (yuz bo'yi va enining ko'paytmasiga teng). Gulzorning eni necha metr?
:::

::: {.mashq #m15-22 daraja="C" javob="11"}
Ikki ketma-ket musbat butun sonning ko'paytmasi $132$ ga teng. Ularning kichigini toping.
:::

::: {.mashq #m15-23 daraja="C" javob="4"}
Futbolchi to'pni yerdan yuqoriga tepdi. $t$ soniyadan keyin to'pning yerdan balandligi $h = -5t^2 + 20t$ metr bo'ladi. To'p necha soniyadan keyin yerga qaytib tushadi?
:::

::: {.mashq #m15-24 daraja="C" javob="45"}
Maktab fizika to'garagida uchirilgan raketa modelining balandligi $t$ soniyadan keyin $h = -5t^2 + 30t$ metr bo'ladi. Raketa eng ko'pi bilan necha metr balandlikka ko'tariladi?
:::

::: {.mashq #m15-25 daraja="C" javob="-5"}
Sonning kvadratidan shu sonning uch baravari ayirilganda $40$ chiqdi. Bu shartni qanoatlantiradigan manfiy sonni toping.
:::

::: {.mashq #m15-26 daraja="C" javob="$(2, 9)$"}
$y = -x^2 + 4x + 5$ parabolasining uchini toping.
:::

## SAT ko'prigi

Quyidagi savollar SAT uslubida, inglizcha yozilgan. *Positive solution* — musbat yechim, *distinct real solutions* — har xil haqiqiy yechimlar (bu kitobdagi barcha sonlar haqiqiy sonlar), *minimum value* — eng kichik qiymat. Javoblar kitob oxirida.

::: {.sat #s15-1 javob="9"}
What is the positive solution to the equation $x^2 - 4x - 45 = 0$?
:::

::: {.sat #s15-2 javob="-2"}
The graph of $y = x^2 + 2x - 24$ in the xy-plane intersects the x-axis at the points $(a, 0)$ and $(b, 0)$. What is the value of $a + b$?
:::

::: {.sat #s15-3 javob="B"}
How many distinct real solutions does the equation $4x^2 - 12x + 9 = 0$ have?

A) Zero

B) Exactly one

C) Exactly two

D) Infinitely many
:::

::: {.sat #s15-4 javob="A"}
Which of the following gives the solutions to the equation $x^2 - 6x + 4 = 0$?

A) $x = 3 \pm \sqrt{5}$

B) $x = -3 \pm \sqrt{5}$

C) $x = 6 \pm \sqrt{5}$

D) $x = 3 \pm 2\sqrt{5}$
:::

::: {.sat #s15-5 javob="-5"}
The function $f$ is defined by $f(x) = 2x^2 - 8x + 3$. What is the minimum value of $f(x)$?
:::
