# 12. Koordinatalar tekisligi va chiziqli funksiya

*SAT bo'limi:* Algebra

## Bu bobda

9-bobda "chiziqli tenglamaning grafigi to'g'ri chiziq, buni 12-bobda ko'ramiz" degan edik. Vaqti keldi. Endi tenglamani nafaqat yechamiz, balki uni chizma sifatida ham ko'ramiz. Bu bobda:

- koordinatalar tekisligida nuqtani belgilash va nuqtaning koordinatalarini o'qishni;
- to'g'ri chiziqning burchak koeffitsiyentini ikki nuqtadan va grafikdan topishni;
- $y = mx + b$ tenglamasini va $f(x)$ yozuvini;
- to'g'ri chiziqning o'qlar bilan kesishish nuqtalarini topishni;
- parallel to'g'ri chiziqlarni;
- hayotiy masaladagi chiziqli modelni o'qishni (burchak koeffitsiyenti — o'zgarish tezligi, ozod had — boshlang'ich qiymat) o'rganamiz.

**SAT'da qayerda kerak?** SAT Algebra bo'limida chiziqli funksiya va uning grafigi eng ko'p uchraydigan mavzulardan biri. "What is the slope of the line...?", "The graph of $y = ...$ intersects the x-axis at...", "What is the best interpretation of $45$ in this context?" kabi savollar har bir testda bor. 13-bobdagi tenglamalar sistemasi ham shu bobdagi grafiklarga tayanadi.

## Yangi so'zlar

| O'zbekcha | English |
|---|---|
| koordinatalar tekisligi | coordinate plane |
| x o'qi | x-axis |
| y o'qi | y-axis |
| koordinatalar boshi | origin |
| koordinata | coordinate |
| tartiblangan juftlik | ordered pair |
| chorak | quadrant |
| to'g'ri chiziq | line |
| grafik | graph |
| funksiya | function |
| chiziqli funksiya | linear function |
| burchak koeffitsiyenti | slope |
| y o'qi bilan kesishish nuqtasi | y-intercept |
| x o'qi bilan kesishish nuqtasi | x-intercept |
| parallel to'g'ri chiziqlar | parallel lines |
| o'zgarish tezligi | rate of change |
| boshlang'ich qiymat | initial value |

## Tushuntirish

### Koordinatalar tekisligi

1-bobdagi son o'qini eslang. Endi ikkita son o'qini olamiz: biri gorizontal (yotiq), ikkinchisi vertikal (tik), va ularni $0$ nuqtalarida to'g'ri burchak ostida kesishtiramiz. Hosil bo'lgan tekislik *koordinatalar tekisligi (coordinate plane)* deyiladi.

- Gorizontal o'q *$x$ o'qi (x-axis)*: unda o'ngga musbat, chapga manfiy sonlar.
- Vertikal o'q *$y$ o'qi (y-axis)*: unda yuqoriga musbat, pastga manfiy sonlar.
- O'qlar kesishgan nuqta *koordinatalar boshi (origin)* deyiladi va $O$ harfi bilan belgilanadi.

Tekislikdagi har bir nuqtaning o'rni ikkita son bilan aniqlanadi. Ular nuqtaning *koordinatalari (coordinates)* deyiladi va qavs ichida yoziladi: $A(3, 2)$. Birinchi son — $x$ koordinata: koordinatalar boshidan qancha o'ngga (musbat bo'lsa) yoki chapga (manfiy bo'lsa) yurish kerak. Ikkinchi son — $y$ koordinata: keyin qancha yuqoriga yoki pastga yurish kerak. Tartib muhim: $(3, 2)$ va $(2, 3)$ — har xil nuqtalar. Shuning uchun $(x, y)$ yozuvi *tartiblangan juftlik (ordered pair)* deyiladi. Koordinatalar boshi $O(0, 0)$.

O'qlar tekislikni to'rt qismga ajratadi. Ular *choraklar (quadrants)* deyiladi va rim raqamlari bilan, yuqori o'ngdan boshlab soat strelkasiga teskari yo'nalishda raqamlanadi:

- I chorak: $x$ musbat, $y$ musbat;
- II chorak: $x$ manfiy, $y$ musbat;
- III chorak: $x$ manfiy, $y$ manfiy;
- IV chorak: $x$ musbat, $y$ manfiy.

O'qlarda yotgan nuqtalar hech qaysi chorakka tegishli emas. $x$ o'qidagi nuqtaning $y$ koordinatasi $0$ ga, $y$ o'qidagi nuqtaning $x$ koordinatasi $0$ ga teng.

![Koordinatalar tekisligi va choraklar](rasmlar/chiqish/12_koordinatalar.png){width=65%}

::: {.misol}
Rasmdagi $A$, $B$, $C$, $D$ va $E$ nuqtalarning koordinatalarini yozing. Har bir nuqta qaysi chorakda yotadi?

*Yechish.* Har bir nuqtadan $x$ o'qiga va $y$ o'qiga qaraymiz.

- $A$: $3$ birlik o'ngda, $2$ birlik yuqorida, demak $A(3, 2)$. Ikkala koordinata musbat: I chorak.
- $B$: $4$ birlik chapda, $1$ birlik yuqorida, demak $B(-4, 1)$. II chorak.
- $C$: $2$ birlik chapda, $3$ birlik pastda, demak $C(-2, -3)$. III chorak.
- $D$: $4$ birlik o'ngda, $2$ birlik pastda, demak $D(4, -2)$. IV chorak.
- $E$: $5$ birlik chapda va $x$ o'qining ustida, demak $E(-5, 0)$. U hech qaysi chorakda emas, $x$ o'qida yotadi.

*Javob:* $A(3, 2)$ — I; $B(-4, 1)$ — II; $C(-2, -3)$ — III; $D(4, -2)$ — IV; $E(-5, 0)$ — $x$ o'qida.
:::

### Tenglamaning grafigi

$y = 2x - 1$ tenglamasini olaylik. $x$ ga bir nechta qiymat berib, $y$ ni hisoblaymiz:

| $x$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|
| $y$ | $-3$ | $-1$ | $1$ | $3$ |

Har bir ustun bitta nuqta beradi: $(-1, -3)$, $(0, -1)$, $(1, 1)$, $(2, 3)$. Bu nuqtalarni koordinatalar tekisligida belgilasak, ular bitta *to'g'ri chiziq (line)* ustida yotadi. Tenglamani to'g'ri tenglikka aylantiradigan barcha $(x, y)$ nuqtalar to'plami tenglamaning *grafigi (graph)* deyiladi. $y = mx + b$ ko'rinishidagi har bir tenglamaning grafigi to'g'ri chiziq; 9-bobda chiziqli tenglama deb nom qo'yganimizning sababi ham shu.

Demak, nuqta to'g'ri chiziqda yotishini tekshirish uchun uning koordinatalarini tenglamaga qo'yamiz: tenglik to'g'ri chiqsa, nuqta chiziqda yotadi.

**Funksiya.** $y = 2x - 1$ tenglamasida har bir $x$ ga bitta $y$ mos keladi. Shunday qoida *funksiya (function)* deyiladi. Funksiyani harf bilan nomlab, $f(x) = 2x - 1$ deb yozish mumkin; $f(x)$ "ef iks" deb o'qiladi va "$x$ dagi qiymat" degani. Masalan, $f(3)$ — $x = 3$ bo'lganda $y$ ning qiymati: $f(3) = 2 \cdot 3 - 1 = 5$. E'tibor bering: bu yerdagi qavs ko'paytirishni bildirmaydi, $f(3)$ — "$f$ ning $3$ dagi qiymati". $f(x) = mx + b$ ko'rinishidagi funksiya *chiziqli funksiya (linear function)* deyiladi, uning grafigi to'g'ri chiziq.

::: {.misol}
a) $(4, 7)$ va $(-2, -4)$ nuqtalar $y = 2x - 1$ to'g'ri chizig'ida yotadimi?

b) $f(x) = -3x + 5$ bo'lsin. $f(-2)$ ni toping. $a$ ning qanday qiymatida $f(a) = -7$ bo'ladi?

*Yechish.*

a) $(4, 7)$: $x = 4$ ni qo'yamiz: $2 \cdot 4 - 1 = 7$. Bu nuqtaning $y$ koordinatasiga teng, demak nuqta chiziqda yotadi.

$(-2, -4)$: $2 \cdot (-2) - 1 = -5$, lekin $-5 \neq -4$. Nuqta chiziqda yotmaydi.

b) $f(-2) = -3 \cdot (-2) + 5 = 6 + 5 = 11$.

$f(a) = -7$ degani $-3a + 5 = -7$. Bu 9-bobdagi tenglama: $-3a = -12$, $a = 4$. Tekshirish: $f(4) = -12 + 5 = -7$.

*Javob:* a) $(4, 7)$ yotadi, $(-2, -4)$ yotmaydi; b) $f(-2) = 11$, $a = 4$.
:::

### Burchak koeffitsiyenti

To'g'ri chiziq qanchalik tik ko'tarilishini yoki tushishini bitta son bilan o'lchaymiz. Chiziqning ikkita nuqtasini olib, birinchisidan ikkinchisiga o'tamiz: $x$ qanchaga o'zgarganini ("yurish") va $y$ qanchaga o'zgarganini ("ko'tarilish") topamiz. Ularning nisbati *burchak koeffitsiyenti (slope)* deyiladi va $m$ harfi bilan belgilanadi:

$$m = \frac{y_2 - y_1}{x_2 - x_1}.$$

Bu yerda $(x_1, y_1)$ — birinchi nuqta, $(x_2, y_2)$ — ikkinchi nuqta; harf ostidagi kichik $1$ va $2$ faqat nuqtaning raqami ("$x$ bir", "$x$ ikki" deb o'qiladi).

Quyidagi rasmda to'g'ri chiziq $(0, 1)$ nuqtadan $(3, 3)$ nuqtaga o'tganda $3$ birlik o'ngga yuradi va $2$ birlik yuqoriga ko'tariladi. Demak, $m = \frac{2}{3}$. $(3, 3)$ dan $(6, 5)$ ga o'tganda ham xuddi shunday: o'ngga $3$, yuqoriga $2$. To'g'ri chiziqda burchak koeffitsiyenti qaysi ikki nuqtani olsak ham bir xil chiqadi.

![To'g'ri chiziq va burchak koeffitsiyenti uchburchagi](rasmlar/chiqish/12_burchak_koeffitsiyenti.png){width=70%}

Burchak koeffitsiyentining ishorasi chiziq qayoqqa ketishini aytadi (chapdan o'ngga qarab):

- $m$ musbat — chiziq ko'tariladi;
- $m$ manfiy — chiziq tushadi;
- $m = 0$ — chiziq gorizontal, masalan $y = 4$ (hamma nuqtalarida $y$ bir xil);
- vertikal chiziqda, masalan $x = -3$, hamma nuqtalarda $x$ bir xil, maxrajda $0$ chiqadi va burchak koeffitsiyenti *aniqlanmagan (undefined)*. Vertikal chiziqni $y = mx + b$ ko'rinishida yozib bo'lmaydi.

::: {.misol}
$(-1, 4)$ va $(3, -2)$ nuqtalardan o'tuvchi to'g'ri chiziqning burchak koeffitsiyentini toping. Chiziq ko'tariladimi yoki tushadimi?

*Yechish.* $(x_1, y_1) = (-1, 4)$ va $(x_2, y_2) = (3, -2)$ deb olamiz:

$$m = \frac{-2 - 4}{3 - (-1)} = \frac{-6}{4} = -\frac{3}{2}.$$

Nuqtalarni teskari tartibda olsak ham natija o'zgarmaydi: $\frac{4 - (-2)}{-1 - 3} = \frac{6}{-4} = -\frac{3}{2}$. Muhimi, suratda ham, maxrajda ham ayirish **bir xil tartibda** bo'lsin.

$m$ manfiy, demak chiziq chapdan o'ngga qarab tushadi: har $2$ birlik o'ngga yurganda $3$ birlik pastga tushadi.

*Javob:* $m = -\frac{3}{2}$, chiziq tushadi.
:::

### $y = mx + b$ tenglamasi

$y = mx + b$ tenglamasidagi ikkala son ham grafikda ko'rinadi:

- $m$ — burchak koeffitsiyenti: $x$ bir birlikka oshganda $y$ $m$ ga o'zgaradi;
- $b$ — chiziq $y$ o'qini kesib o'tadigan nuqtaning $y$ koordinatasi. Haqiqatan, $x = 0$ bo'lsa, $y = m \cdot 0 + b = b$. $(0, b)$ nuqta *$y$ o'qi bilan kesishish nuqtasi (y-intercept)* deyiladi.

Chiziqning $x$ o'qini kesib o'tadigan nuqtasi *$x$ o'qi bilan kesishish nuqtasi (x-intercept)* deyiladi. U yerda $y = 0$, shuning uchun uni topish uchun tenglamaga $y = 0$ qo'yib, $x$ ni topamiz.

To'g'ri chiziq tenglamasini yozish uchun $m$ va $b$ kerak:

1. $m$ ni topamiz (berilgan bo'lmasa, ikki nuqtadan formula bilan).
2. Chiziqdagi bitta nuqtaning koordinatalarini $y = mx + b$ ga qo'yamiz va $b$ ni topamiz.
3. Ikkinchi nuqta bilan tekshiramiz.

Tenglama $ax + by = c$ ko'rinishida berilsa (masalan, $3x + 2y = 8$), 9-bobdagidek uni $y$ ga nisbatan yechamiz va $m$ ni o'qiymiz.

**Parallel to'g'ri chiziqlar.** Hech qachon kesishmaydigan to'g'ri chiziqlar *parallel to'g'ri chiziqlar (parallel lines)* deyiladi. Ikki chiziq parallel bo'lishi uchun ularning burchak koeffitsiyentlari teng, $b$ lari esa har xil bo'lishi kerak. Masalan, $y = 3x - 2$ va $y = 3x + 5$ parallel. $m$ ham, $b$ ham bir xil bo'lsa, bu bitta chiziqning o'zi.

::: {.misol}
a) Rasmdagi to'g'ri chiziqning tenglamasini yozing.

b) $(2, 1)$ va $(6, -7)$ nuqtalardan o'tuvchi to'g'ri chiziq tenglamasini yozing va uning o'qlar bilan kesishish nuqtalarini toping.

c) $y = -4x + 1$ ga parallel va $(2, -3)$ nuqtadan o'tuvchi to'g'ri chiziq tenglamasini yozing.

*Yechish.*

a) Chiziq $y$ o'qini $(0, 1)$ da kesadi, demak $b = 1$. Burchak koeffitsiyentini uchburchakdan topgan edik: $m = \frac{2}{3}$. Demak, $y = \frac{2}{3}x + 1$. Tekshirish: $(6, 5)$ nuqta uchun $\frac{2}{3} \cdot 6 + 1 = 5$.

b) 1-qadam: $m = \frac{-7 - 1}{6 - 2} = \frac{-8}{4} = -2$.

2-qadam: $(2, 1)$ ni $y = -2x + b$ ga qo'yamiz: $1 = -2 \cdot 2 + b$, ya'ni $1 = -4 + b$, $b = 5$. Tenglama: $y = -2x + 5$.

3-qadam: $(6, -7)$ uchun $-2 \cdot 6 + 5 = -7$. To'g'ri.

$y$ o'qi bilan kesishish nuqtasi: $(0, 5)$. $x$ o'qi bilan kesishish nuqtasi uchun $y = 0$: $0 = -2x + 5$, $2x = 5$, $x = \frac{5}{2}$. Nuqta: $\left(\frac{5}{2}, 0\right)$.

c) Parallel chiziqning burchak koeffitsiyenti ham $-4$. $(2, -3)$ ni qo'yamiz: $-3 = -4 \cdot 2 + b$, ya'ni $-3 = -8 + b$, $b = 5$. Tenglama: $y = -4x + 5$. U $y = -4x + 1$ bilan ustma-ust tushmaydi, chunki $5 \neq 1$.

*Javob:* a) $y = \frac{2}{3}x + 1$; b) $y = -2x + 5$, kesishish nuqtalari $(0, 5)$ va $\left(\frac{5}{2}, 0\right)$; c) $y = -4x + 5$.
:::

### Hayotiy masaladagi chiziqli model

Ko'p hayotiy miqdorlar bir tekis o'zgaradi: har soatda, har kilometrda yoki har haftada bir xil miqdorga. Bunday bog'lanish $y = mx + b$ ko'rinishidagi chiziqli funksiya bilan yoziladi, va uning ikkala soni ma'noga ega:

- $m$ — *o'zgarish tezligi (rate of change)*: $x$ bir birlikka (bir soat, bir km, bir hafta) oshganda $y$ qanchaga o'zgaradi. U $y$ birligining $x$ birligiga nisbati bilan o'lchanadi, masalan "so'm/km" yoki "litr/soat" (5-bobdagi sur'at kabi).
- $b$ — *boshlang'ich qiymat (initial value)*: $x = 0$ bo'lgandagi $y$, ya'ni hisob boshidagi miqdor.

SAT'da "What is the best interpretation of ... in this context?" savoli aynan shuni so'raydi: son tezlikmi yoki boshlang'ich qiymatmi.

::: {.misol}
Telefon batareyasining zaryadi foydalanish vaqtining chiziqli funksiyasi. Foydalanish boshlanganidan $2$ soat keyin zaryad $71\%$, $5$ soat keyin $35\%$ bo'ldi.

a) Zaryad $z$ ni (foizda) vaqt $t$ (soatda) orqali ifodalovchi tenglama yozing.

b) Tenglamadagi ikkala son nimani bildiradi?

c) Necha soatdan keyin zaryad $23\%$ bo'ladi?

*Yechish.*

a) Nuqtalar: $(2, 71)$ va $(5, 35)$. Burchak koeffitsiyenti:

$$m = \frac{35 - 71}{5 - 2} = \frac{-36}{3} = -12.$$

$(2, 71)$ ni $z = -12t + b$ ga qo'yamiz: $71 = -24 + b$, $b = 95$. Demak, $z = -12t + 95$. Tekshirish: $t = 5$ da $-60 + 95 = 35$.

b) $-12$ — o'zgarish tezligi: har soatda zaryad $12$ foiz punktga (6-bob) kamayadi. $95$ — boshlang'ich qiymat: foydalanish boshida ($t = 0$) zaryad $95\%$ bo'lgan.

c) $-12t + 95 = 23$, $-12t = -72$, $t = 6$.

*Javob:* a) $z = -12t + 95$; b) har soatda $12$ foiz punkt kamayadi, boshida $95\%$ bo'lgan; c) $6$ soatdan keyin.
:::

## Ko'p uchraydigan xatolar

**1. Koordinatalar tartibini almashtirish.**

*Noto'g'ri:* $(3, -2)$ nuqtani belgilash uchun avval $3$ birlik yuqoriga, keyin $2$ birlik chapga yurish. Bu aslida $(-2, 3)$ nuqta.

*To'g'ri:* birinchi son har doim $x$: $3$ birlik o'ngga, keyin $2$ birlik pastga.

**2. Burchak koeffitsiyentida ayirish tartibini aralashtirish.**

*Noto'g'ri:* $(2, 1)$ va $(5, 10)$ uchun $m = \frac{10 - 1}{2 - 5} = \frac{9}{-3} = -3$.

*To'g'ri:* suratda ikkinchi nuqtadan birinchisi ayirilgan bo'lsa, maxrajda ham shunday: $m = \frac{10 - 1}{5 - 2} = \frac{9}{3} = 3$.

**3. $ax + by = c$ dan burchak koeffitsiyentini to'g'ridan-to'g'ri o'qish.**

*Noto'g'ri:* $2x + 3y = 6$ ning burchak koeffitsiyenti $2$.

*To'g'ri:* avval $y$ ga nisbatan yechamiz: $3y = -2x + 6$, $y = -\frac{2}{3}x + 2$. Demak, $m = -\frac{2}{3}$.

**4. Kesishish nuqtalarini adashtirish.**

*Noto'g'ri:* $y = 3x - 6$ ning $x$ o'qi bilan kesishish nuqtasini topish uchun $x = 0$ qo'yib, $(0, -6)$ deb yozish.

*To'g'ri:* $x$ o'qida $y = 0$: $3x - 6 = 0$, $x = 2$, nuqta $(2, 0)$. $(0, -6)$ esa $y$ o'qi bilan kesishish nuqtasi.

**5. Vertikal chiziqning burchak koeffitsiyentini $0$ deb aytish.**

*Noto'g'ri:* $x = 5$ chizig'ining burchak koeffitsiyenti $0$.

*To'g'ri:* $x = 5$ — vertikal chiziq, uning burchak koeffitsiyenti aniqlanmagan. Burchak koeffitsiyenti $0$ bo'lgan chiziq gorizontal bo'ladi, masalan $y = 5$.

## Mashqlar

Nuqtani $(a, b)$ ko'rinishida yozing (masalan, $(-6, 11)$). Burchak koeffitsiyentini butun son yoki qisqarmas kasr ko'rinishida yozing. To'g'ri chiziq tenglamasini $y = mx + b$ ko'rinishida yozing (masalan, $y = -\frac{5}{4}x + 7$).

### A daraja

::: {.mashq #m12-1 daraja="A" javob="$(-5, 2)$"}
Nuqta koordinatalar boshidan $5$ birlik chapga va $2$ birlik yuqoriga joylashgan. Uning koordinatalarini yozing.
:::

::: {.mashq #m12-2 daraja="A" javob="$(-2, 6)$"}
Quyidagi nuqtalardan qaysi biri II chorakda yotadi: $(3, -5)$, $(-2, 6)$, $(-4, -1)$, $(0, 7)$?
:::

::: {.mashq #m12-3 daraja="A" javob="-11"}
$f(x) = 4x - 3$ bo'lsa, $f(-2)$ ni toping.
:::

::: {.mashq #m12-4 daraja="A" javob="2"}
$(1, 3)$ va $(5, 11)$ nuqtalardan o'tuvchi to'g'ri chiziqning burchak koeffitsiyentini toping.
:::

::: {.mashq #m12-5 daraja="A" javob="-1/2"}
$(-2, 5)$ va $(4, 2)$ nuqtalardan o'tuvchi to'g'ri chiziqning burchak koeffitsiyentini toping.
:::

::: {.mashq #m12-6 daraja="A" javob="$(0, 7)$"}
$y = -3x + 7$ to'g'ri chizig'i $y$ o'qini qaysi nuqtada kesib o'tadi?
:::

::: {.mashq #m12-7 daraja="A" javob="$(-1, 6)$"}
Quyidagi nuqtalardan qaysi biri $y = -2x + 4$ to'g'ri chizig'ida yotadi: $(1, 3)$, $(3, 2)$, $(-1, 6)$, $(2, 1)$?
:::

::: {.mashq #m12-8 daraja="A" javob="0"}
$(-3, 4)$ va $(5, 4)$ nuqtalardan o'tuvchi to'g'ri chiziqning burchak koeffitsiyentini toping.
:::

### B daraja

::: {.mashq #m12-9 daraja="B" javob="$y = 3x - 7$"}
Burchak koeffitsiyenti $3$ ga teng va $(2, -1)$ nuqtadan o'tuvchi to'g'ri chiziq tenglamasini yozing.
:::

::: {.mashq #m12-10 daraja="B" javob="$y = -3x + 3$"}
$(-1, 6)$ va $(2, -3)$ nuqtalardan o'tuvchi to'g'ri chiziq tenglamasini yozing.
:::

::: {.mashq #m12-11 daraja="B" javob="$(5, 0)$"}
$y = 2x - 10$ to'g'ri chizig'i $x$ o'qini qaysi nuqtada kesib o'tadi?
:::

::: {.mashq #m12-12 daraja="B" javob="-3/4"}
$3x + 4y = 12$ to'g'ri chizig'ining burchak koeffitsiyentini toping.
:::

::: {.mashq #m12-13 daraja="B" javob="$y = 5x + 4$"}
$y = 5x - 2$ to'g'ri chizig'iga parallel va $(1, 9)$ nuqtadan o'tuvchi to'g'ri chiziq tenglamasini yozing.
:::

::: {.mashq #m12-14 daraja="B" javob="$y = \frac{3}{4}x - 2$"}
$(0, -2)$ va $(8, 4)$ nuqtalardan o'tuvchi to'g'ri chiziq tenglamasini yozing.
:::

::: {.mashq #m12-15 daraja="B" javob="$(0, -4)$"}
$2x - 5y = 20$ to'g'ri chizig'i $y$ o'qini qaysi nuqtada kesib o'tadi?
:::

::: {.mashq #m12-16 daraja="B" javob="-8"}
$f(x) = \frac{1}{2}x + 3$ bo'lsin. $x$ ning qanday qiymatida $f(x) = -1$ bo'ladi?
:::

::: {.mashq #m12-17 daraja="B" javob="7"}
$(k, 16)$ nuqta $y = 3x - 5$ to'g'ri chizig'ida yotadi. $k$ ni toping.
:::

### C daraja

::: {.mashq #m12-18 daraja="C" javob="$y = 2x + 7$"}
$(-2, 3)$ nuqtadan o'tuvchi va $4x - 2y = 9$ to'g'ri chizig'iga parallel bo'lgan to'g'ri chiziq tenglamasini yozing.
:::

::: {.mashq #m12-19 daraja="C" javob="5"}
$k$ ning qanday qiymatida $y = (2k + 1)x + 4$ va $y = 11x - 3$ to'g'ri chiziqlari parallel bo'ladi?
:::

::: {.mashq #m12-20 daraja="C" javob="-7"}
$A(-1, 5)$, $B(2, -1)$ va $C(5, k)$ nuqtalar bitta to'g'ri chiziqda yotadi. $k$ ni toping.
:::

::: {.mashq #m12-21 daraja="C" javob="5000"}
Taksi narxi o'tirish narxi va har bir kilometr uchun bir xil haqdan iborat, ya'ni yo'l uzunligining chiziqli funksiyasi. $3$ km yo'l $14\,000$ so'm, $8$ km yo'l $29\,000$ so'm turadi. O'tirish narxi (yo'l uzunligi $0$ km bo'lgandagi narx) necha so'm?
:::

::: {.mashq #m12-22 daraja="C" javob="16"}
Uzunligi $24$ sm bo'lgan sham yoqildi. $t$ soatdan keyin shamning uzunligi $h = 24 - 1.5t$ santimetr bo'ladi. Sham necha soatda butunlay yonib bo'ladi?
:::

::: {.mashq #m12-23 daraja="C" javob="50"}
Sayohatda avtomobil bir xil tezlikda yurdi, shuning uchun bakdagi benzin miqdori yo'l vaqtining chiziqli funksiyasi bo'ldi. Yo'lga chiqqandan $2$ soat keyin bakda $38$ litr, $5$ soat keyin $20$ litr benzin qoldi. Yo'lga chiqishda bakda necha litr benzin bo'lgan?
:::

::: {.mashq #m12-24 daraja="C" javob="15"}
Dilnoza noutbuk olish uchun pul yig'moqda. $h$ haftadan keyin uning jamg'armasi $J = 40\,000h + 150\,000$ so'm bo'ladi. Necha haftadan keyin jamg'armasi $750\,000$ so'mga yetadi?
:::

::: {.mashq #m12-25 daraja="C" javob="$(0, 3)$"}
To'g'ri chiziq $(-4, 9)$ nuqtadan o'tadi va $x$ o'qini $(2, 0)$ nuqtada kesib o'tadi. U $y$ o'qini qaysi nuqtada kesib o'tadi?
:::

## SAT ko'prigi

Quyidagi savollar SAT uslubida, inglizcha yozilgan. *xy-plane* — koordinatalar tekisligi, *intersects* — kesib o'tadi, *constant* — o'zgarmas son, *fixed fee* — qat'iy (o'zgarmas) to'lov, *best interpretation* — eng to'g'ri izoh. Javoblar kitob oxirida.

::: {.sat #s12-1 javob="-4/3"}
In the xy-plane, a line passes through the points $(-2, 7)$ and $(4, -1)$. What is the slope of the line?
:::

::: {.sat #s12-2 javob="3"}
The graph of $y = 4x - 12$ in the xy-plane intersects the x-axis at the point $(a, 0)$. What is the value of $a$?
:::

::: {.sat #s12-3 javob="C"}
A line in the xy-plane is parallel to the line $y = -2x + 9$ and passes through the point $(3, 4)$. Which equation defines the line?

A) $y = 2x - 2$

B) $y = -2x + 9$

C) $y = -2x + 10$

D) $y = \frac{1}{2}x + \frac{5}{2}$
:::

::: {.sat #s12-4 javob="B"}
A plumber charges a fixed fee for each visit plus an amount for each hour of work. The total charge $C$, in dollars, for a visit with $h$ hours of work is given by $C = 45h + 60$. What is the best interpretation of $45$ in this context?

A) The fixed fee for each visit, in dollars

B) The charge for each hour of work, in dollars

C) The total charge for a visit with $1$ hour of work, in dollars

D) The number of hours of work for each visit
:::

::: {.sat #s12-5 javob="-12"}
The function $f$ is defined by $f(x) = ax - 7$, where $a$ is a constant. If $f(3) = 8$, what is the value of $f(-1)$?
:::
