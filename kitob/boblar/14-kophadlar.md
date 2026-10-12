# 14. Ko'phadlar va ko'paytuvchilarga ajratish

*SAT bo'limi:* Advanced Math

## Bu bobda

8-bobda ifodalarni soddalashtirdik va umumiy ko'paytuvchini qavsdan chiqardik, "ko'paytuvchilarga ajratish haqida 14-bobda batafsil" degan edik. Bu bobda ana shu ishni oxiriga yetkazamiz. Bu bobda:

- birhad, ko'phad va ko'phadning darajasi nima ekanini;
- ko'phadlarni qo'shish, ayirish va ko'paytirishni;
- qisqa ko'paytirish formulalarini: $(a + b)^2$, $(a - b)^2$, $(a - b)(a + b)$;
- ko'phadni ko'paytuvchilarga ajratishni: umumiy ko'paytuvchi, $x^2 + bx + c$ uchhadi, sodda $ax^2 + bx + c$ uchhadi, kvadratlar ayirmasi;
- javobni qayta ko'paytirib tekshirishni o'rganamiz.

**SAT'da qayerda kerak?** SAT'ning Advanced Math bo'limida "Which of the following is equivalent to $(4x - 1)(x + 2)$?", "Which of the following is a factor of ...?" kabi savollar juda ko'p. 15-bobda kvadrat tenglamalarni aynan ko'paytuvchilarga ajratib yechamiz, shuning uchun bu bob keyingi bobning poydevori.

## Yangi so'zlar

| O'zbekcha | English |
|---|---|
| birhad | monomial |
| ko'phad | polynomial |
| ikkihad | binomial |
| uchhad | trinomial |
| ko'phadning darajasi | degree of a polynomial |
| standart ko'rinish | standard form |
| qisqa ko'paytirish formulalari | special products |
| ikkihadning kvadrati | square of a binomial |
| kvadratlar ayirmasi | difference of squares |
| to'liq kvadrat uchhad | perfect square trinomial |
| ko'paytuvchilarga ajratish | factoring |
| guruhlash usuli | factoring by grouping |

## Tushuntirish

### Birhad va ko'phad

Son, harf yoki ularning ko'paytmasi *birhad (monomial)* deyiladi; harflar faqat natural darajada (1, 2, 3, ...) qatnashadi. Masalan: $7$, $x$, $-4x^2$, $3xy$.

Bir nechta birhadning yig'indisi *ko'phad (polynomial)* deyiladi. Masalan, $5x^3 - 2x + 7$ — ko'phad, uning hadlari $5x^3$, $-2x$ va $7$ (8-bob). Ikki hadli ko'phad *ikkihad (binomial)*, masalan $x + 5$; uch hadli ko'phad *uchhad (trinomial)*, masalan $x^2 - 4x + 3$.

Bir harfli ko'phadda $x$ ning eng katta darajasi *ko'phadning darajasi (degree of a polynomial)* deyiladi. $5x^3 - 2x + 7$ ning darajasi $3$, $x^2 - 4x + 3$ ning darajasi $2$. Ozod hadning darajasi $0$ hisoblanadi.

O'xshash hadlari birlashtirilgan va hadlari darajasi kamayish tartibida yozilgan ko'phad *standart ko'rinish (standard form)* da deyiladi. 8-bobdan beri javoblarni aynan shunday yozib kelyapmiz: $-2x^4 + 3x^2 - x + 6$.

### Qo'shish va ayirish

Ko'phadlarni qo'shish va ayirish — 8-bobdagi ishning o'zi: qavslarni ochamiz va o'xshash hadlarni birlashtiramiz. Ayirishda minus oldidagi qavsning **har bir** hadi ishorasini almashtiradi.

::: {.misol}
$A = 3x^2 - 5x + 2$ va $B = x^2 - 4x - 6$ bo'lsin. Toping: a) $A + B$; b) $A - B$.

*Yechish.*

a) $(3x^2 - 5x + 2) + (x^2 - 4x - 6) = 3x^2 + x^2 - 5x - 4x + 2 - 6 = 4x^2 - 9x - 4$.

b) Minus oldidagi qavsni ochamiz: $-(x^2 - 4x - 6) = -x^2 + 4x + 6$. Demak:

$$3x^2 - 5x + 2 - x^2 + 4x + 6 = 2x^2 - x + 8.$$

*Tekshirish* ($x = 1$ da): $A = 3 - 5 + 2 = 0$, $B = 1 - 4 - 6 = -9$. a) $0 + (-9) = -9$ va $4 - 9 - 4 = -9$. b) $0 - (-9) = 9$ va $2 - 1 + 8 = 9$.

*Javob:* a) $4x^2 - 9x - 4$; b) $2x^2 - x + 8$.
:::

### Ko'paytirish

**Birhadni ko'phadga** ko'paytirishda taqsimot xossasi (8-bob) va darajalar xossasi (7-bob) ishlatiladi: $x^m \cdot x^n = x^{m+n}$. Masalan, $x^2 \cdot x^3 = x^5$, $4x \cdot 3x^2 = 12x^3$.

**Ko'phadni ko'phadga** ko'paytirishda birinchi ko'phadning **har bir** hadi ikkinchisining **har bir** hadiga ko'paytiriladi, keyin o'xshash hadlar birlashtiriladi:

$$(a + b)(c + d) = ac + ad + bc + bd.$$

Ikkihadni ikkihadga ko'paytirishda to'rtta ko'paytma chiqadi. Ularni unutmaslik uchun inglizcha FOIL so'zi yordam beradi: *First* (birinchilar), *Outer* (tashqilar), *Inner* (ichkilar), *Last* (oxirgilar). Ikkihadni uchhadga ko'paytirganda esa $2 \cdot 3 = 6$ ta ko'paytma chiqadi.

::: {.misol}
Ko'paytiring: a) $-2x(3x^2 - x + 4)$; b) $(2x + 3)(x - 4)$; c) $(x - 2)(x^2 + 3x - 1)$.

*Yechish.*

a) $-2x \cdot 3x^2 = -6x^3$, $-2x \cdot (-x) = 2x^2$, $-2x \cdot 4 = -8x$. Natija: $-6x^3 + 2x^2 - 8x$.

b) FOIL: birinchilar $2x \cdot x = 2x^2$; tashqilar $2x \cdot (-4) = -8x$; ichkilar $3 \cdot x = 3x$; oxirgilar $3 \cdot (-4) = -12$. Demak:

$$2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12.$$

c) Avval $x$ ni, keyin $-2$ ni uchhadning har bir hadiga ko'paytiramiz:

$$x^3 + 3x^2 - x - 2x^2 - 6x + 2 = x^3 + x^2 - 7x + 2.$$

*Tekshirish* ($x = 1$ da): b) $5 \cdot (-3) = -15$ va $2 - 5 - 12 = -15$; c) $(-1) \cdot 3 = -3$ va $1 + 1 - 7 + 2 = -3$.

*Javob:* a) $-6x^3 + 2x^2 - 8x$; b) $2x^2 - 5x - 12$; c) $x^3 + x^2 - 7x + 2$.
:::

### Qisqa ko'paytirish formulalari

Ba'zi ko'paytmalar shunchalik ko'p uchraydiki, ularni formula sifatida yodlab olgan ma'qul. Ular *qisqa ko'paytirish formulalari (special products)* deyiladi.

**Ikkihadning kvadrati** *(square of a binomial)*: $(a + b)^2 = (a + b)(a + b) = a^2 + ab + ab + b^2$, ya'ni

$$(a + b)^2 = a^2 + 2ab + b^2,$$

$$(a - b)^2 = a^2 - 2ab + b^2.$$

So'z bilan: birinchisining kvadrati, plyus (yoki minus) ikkalasi ko'paytmasining ikki baravari, plyus ikkinchisining kvadrati. O'rtadagi $2ab$ hadini unutmang: $(a + b)^2$ ifodasi $a^2 + b^2$ ga teng emas ($a$ yoki $b$ nolga teng bo'lgan hollar bundan mustasno).

**Kvadratlar ayirmasi** *(difference of squares)*: $(a - b)(a + b) = a^2 + ab - ab - b^2$, ya'ni

$$(a - b)(a + b) = a^2 - b^2.$$

Bu yerda o'rtadagi hadlar bir-birini yo'qotadi.

::: {.misol}
a) $(x + 5)^2$; b) $(3x - 2)^2$; c) $(2x + 7)(2x - 7)$ ni ko'phad ko'rinishida yozing. d) $31 \cdot 29$ ni og'zaki hisoblang.

*Yechish.*

a) $a = x$, $b = 5$: $(x + 5)^2 = x^2 + 2 \cdot x \cdot 5 + 5^2 = x^2 + 10x + 25$.

b) $a = 3x$, $b = 2$: $(3x - 2)^2 = (3x)^2 - 2 \cdot 3x \cdot 2 + 2^2 = 9x^2 - 12x + 4$.

c) $a = 2x$, $b = 7$: $(2x + 7)(2x - 7) = (2x)^2 - 7^2 = 4x^2 - 49$.

d) $31 \cdot 29 = (30 + 1)(30 - 1) = 30^2 - 1^2 = 900 - 1 = 899$.

*Javob:* a) $x^2 + 10x + 25$; b) $9x^2 - 12x + 4$; c) $4x^2 - 49$; d) $899$.
:::

### Ko'paytuvchilarga ajratish

Ko'phadni bir nechta ko'phadning ko'paytmasi shaklida yozish *ko'paytuvchilarga ajratish (factoring)* deyiladi. Bu ko'paytirishning teskarisi: $(x + 2)(x + 3) = x^2 + 5x + 6$ bo'lgani uchun $x^2 + 5x + 6 = (x + 2)(x + 3)$. Javobni har doim qayta ko'paytirib tekshirish mumkin.

**1. Umumiy ko'paytuvchi.** Har doim birinchi qadam (8-bob): $4x^2 - 10x = 2x(2x - 5)$.

**2. $x^2 + bx + c$ uchhadi.** $(x + p)(x + q) = x^2 + (p + q)x + pq$. Demak, ko'paytmasi $c$ ga, yig'indisi $b$ ga teng bo'lgan ikki son $p$ va $q$ ni topamiz. Ishoralar bo'yicha maslahat:

- $c$ musbat bo'lsa, $p$ va $q$ bir xil ishorali — ikkalasi ham $b$ ning ishorasida;
- $c$ manfiy bo'lsa, $p$ va $q$ har xil ishorali va moduli kattasi $b$ ning ishorasida.

**3. Kvadratlar ayirmasi.** $a^2 - b^2 = (a - b)(a + b)$. Masalan, $x^2 - 81 = (x - 9)(x + 9)$. Kvadratlar **yig'indisi** esa, masalan $x^2 + 9$, bu kitobdagi sonlar bilan ko'paytuvchilarga ajralmaydi.

**4. To'liq kvadrat uchhad.** Birinchi va oxirgi hadlar kvadrat, o'rtadagi had esa ular asoslari ko'paytmasining ikki baravari bo'lsa, uchhad *to'liq kvadrat uchhad (perfect square trinomial)*: $a^2 + 2ab + b^2 = (a + b)^2$ va $a^2 - 2ab + b^2 = (a - b)^2$.

::: {.misol}
Ko'paytuvchilarga ajrating: a) $x^2 + 2x - 15$; b) $3x^2 - 12$; c) $x^2 - 10x + 25$.

*Yechish.*

a) Ko'paytmasi $-15$, yig'indisi $2$ bo'lgan ikki son kerak. $c$ manfiy, demak ishoralar har xil, moduli kattasi musbat. Juftliklar: $-1$ va $15$ (yig'indi $14$), $-3$ va $5$ (yig'indi $2$). Topildi: $x^2 + 2x - 15 = (x - 3)(x + 5)$.

*Tekshirish:* $(x - 3)(x + 5) = x^2 + 5x - 3x - 15 = x^2 + 2x - 15$.

b) Avval umumiy ko'paytuvchi: $3x^2 - 12 = 3(x^2 - 4)$. Qavs ichida kvadratlar ayirmasi: $x^2 - 4 = x^2 - 2^2 = (x - 2)(x + 2)$. Demak, $3x^2 - 12 = 3(x - 2)(x + 2)$.

c) $x^2 = x \cdot x$, $25 = 5^2$, o'rtadagi had $10x = 2 \cdot x \cdot 5$, minus bilan. Demak, to'liq kvadrat: $x^2 - 10x + 25 = (x - 5)^2$.

*Javob:* a) $(x - 3)(x + 5)$; b) $3(x - 2)(x + 2)$; c) $(x - 5)^2$.
:::

### $ax^2 + bx + c$ uchhadi: guruhlash usuli

$x^2$ ning koeffitsiyenti $1$ dan farqli bo'lsa (va uni umumiy ko'paytuvchi sifatida chiqarib bo'lmasa), *guruhlash usuli (factoring by grouping)* ishlatiladi:

1. Ko'paytmasi $a \cdot c$ ga, yig'indisi $b$ ga teng bo'lgan ikki sonni topamiz.
2. O'rtadagi hadni shu ikki son yordamida ikki hadga ajratamiz.
3. Hadlarni juft-juft guruhlab, har bir juftdan umumiy ko'paytuvchini chiqaramiz. Qavslar bir xil chiqadi va uni yana umumiy ko'paytuvchi sifatida chiqaramiz.

Ko'paytuvchilarga ajratishning umumiy tartibi: avval umumiy ko'paytuvchi; keyin hadlar soniga qarab — ikki had bo'lsa kvadratlar ayirmasi, uch had bo'lsa uchhad usullari; oxirida har bir qavs yana ajraladimi, tekshiramiz.

::: {.misol}
Ko'paytuvchilarga ajrating: a) $2x^2 + 7x + 3$; b) $2x^3 - 8x^2 - 10x$.

*Yechish.*

a) $a \cdot c = 2 \cdot 3 = 6$. Ko'paytmasi $6$, yig'indisi $7$ bo'lgan sonlar: $1$ va $6$. O'rtadagi hadni ajratamiz: $7x = x + 6x$.

$$2x^2 + x + 6x + 3 = x(2x + 1) + 3(2x + 1) = (2x + 1)(x + 3).$$

*Tekshirish:* $(2x + 1)(x + 3) = 2x^2 + 6x + x + 3 = 2x^2 + 7x + 3$.

b) Umumiy ko'paytuvchi $2x$: $2x^3 - 8x^2 - 10x = 2x(x^2 - 4x - 5)$. Qavs ichida ko'paytmasi $-5$, yig'indisi $-4$ bo'lgan sonlar: $-5$ va $1$. Demak, $2x(x - 5)(x + 1)$.

*Tekshirish* ($x = 1$ da): $2 - 8 - 10 = -16$ va $2 \cdot 1 \cdot (-4) \cdot 2 = -16$.

*Javob:* a) $(2x + 1)(x + 3)$; b) $2x(x - 5)(x + 1)$.
:::

## Ko'p uchraydigan xatolar

**1. Ikkihadning kvadratida o'rtadagi hadni unutish.**

*Noto'g'ri:* $(x + 4)^2 = x^2 + 16$.

*To'g'ri:* $(x + 4)^2 = x^2 + 8x + 16$. Tekshiring: $x = 1$ da $(1 + 4)^2 = 25$, lekin $1 + 16 = 17$.

**2. Ayirishda faqat birinchi hadning ishorasini almashtirish.**

*Noto'g'ri:* $(4x^2 + x) - (x^2 - 3x) = 4x^2 + x - x^2 - 3x = 3x^2 - 2x$.

*To'g'ri:* $-(x^2 - 3x) = -x^2 + 3x$, demak natija $3x^2 + 4x$.

**3. Ko'paytirishda darajalarni ko'paytirish yoki $x$ ni unutish.**

*Noto'g'ri:* $x^2 \cdot x^3 = x^6$; $2x \cdot 3x = 6x$.

*To'g'ri:* daraja ko'rsatkichlari qo'shiladi (7-bob): $x^2 \cdot x^3 = x^5$; $2x \cdot 3x = 6x^2$.

**4. Uchhadni ajratishda ishoralarni almashtirib yuborish.**

*Noto'g'ri:* $x^2 - 5x - 14 = (x - 2)(x + 7)$.

*To'g'ri:* bu ko'paytma $x^2 + 5x - 14$ ni beradi. Ko'paytmasi $-14$, yig'indisi $-5$ bo'lgan sonlar $-7$ va $2$: $x^2 - 5x - 14 = (x - 7)(x + 2)$.

**5. Oxirigacha ajratmaslik.**

*Noto'g'ri:* $2x^2 - 18 = 2(x^2 - 9)$, tamom.

*To'g'ri:* qavs ichida kvadratlar ayirmasi qoldi: $2x^2 - 18 = 2(x - 3)(x + 3)$. Lekin $x^2 + 9$ ni $(x + 3)(x - 3)$ deb yozib bo'lmaydi: $(x + 3)(x - 3) = x^2 - 9$.

## Mashqlar

Ko'phad javobni standart ko'rinishda yozing (masalan, $3x^3 - x^2 + 8$). Ko'paytuvchilarga oxirigacha ajrating va javobni bunday yozing: avval son yoki birhad ko'paytuvchi, keyin qavslar (ozod hadi kichikroq qavs oldin); bir xil qavslar kvadrat ko'rinishida yoziladi (masalan, $2x(x - 4)(x + 4)$ yoki $(x - 6)^2$).

### A daraja

::: {.mashq #m14-1 daraja="A" javob="4"}
$5x^3 - 2x^4 + x - 7$ ko'phadining darajasini toping.
:::

::: {.mashq #m14-2 daraja="A" javob="$6x^{2} - 2x - 6$"}
Soddalashtiring: $(4x^2 + 3x - 7) + (2x^2 - 5x + 1)$.
:::

::: {.mashq #m14-3 daraja="A" javob="$3x^{2} - 4x + 10$"}
Soddalashtiring: $(5x^2 - x + 4) - (2x^2 + 3x - 6)$.
:::

::: {.mashq #m14-4 daraja="A" javob="$6x^{3} - 12x^{2} + 15x$"}
Qavsni oching: $3x(2x^2 - 4x + 5)$.
:::

::: {.mashq #m14-5 daraja="A" javob="$x^{2} + 8x + 12$"}
Ko'paytiring: $(x + 6)(x + 2)$.
:::

::: {.mashq #m14-6 daraja="A" javob="$x^{2} - 4x - 21$"}
Ko'paytiring: $(x - 7)(x + 3)$.
:::

::: {.mashq #m14-7 daraja="A" javob="$x^{2} - 18x + 81$"}
Qavsni oching: $(x - 9)^2$.
:::

::: {.mashq #m14-8 daraja="A" javob="$4x^{2}(2x - 3)$"}
Umumiy ko'paytuvchini qavsdan chiqaring: $8x^3 - 12x^2$.
:::

::: {.mashq #m14-9 daraja="A" javob="$(x + 2)(x + 5)$"}
Ko'paytuvchilarga ajrating: $x^2 + 7x + 10$.
:::

### B daraja

::: {.mashq #m14-10 daraja="B" javob="$6x^{2} + 7x - 20$"}
Ko'paytiring: $(3x - 4)(2x + 5)$.
:::

::: {.mashq #m14-11 daraja="B" javob="$4x^{2} + 12x + 9$"}
Qavsni oching: $(2x + 3)^2$.
:::

::: {.mashq #m14-12 daraja="B" javob="$25x^{2} - 1$"}
Ko'paytiring: $(5x - 1)(5x + 1)$.
:::

::: {.mashq #m14-13 daraja="B" javob="$x^{3} + x^{2} + x + 6$"}
Ko'paytiring: $(x + 2)(x^2 - x + 3)$.
:::

::: {.mashq #m14-14 daraja="B" javob="$(x - 5)(x - 4)$"}
Ko'paytuvchilarga ajrating: $x^2 - 9x + 20$.
:::

::: {.mashq #m14-15 daraja="B" javob="$(x - 4)(x + 7)$"}
Ko'paytuvchilarga ajrating: $x^2 + 3x - 28$.
:::

::: {.mashq #m14-16 daraja="B" javob="$(x - 8)(x + 8)$"}
Ko'paytuvchilarga ajrating: $x^2 - 64$.
:::

::: {.mashq #m14-17 daraja="B" javob="$(x + 7)^{2}$"}
Ko'paytuvchilarga ajrating: $x^2 + 14x + 49$.
:::

::: {.mashq #m14-18 daraja="B" javob="$2(x - 4)(x + 3)$"}
Ko'paytuvchilarga oxirigacha ajrating: $2x^2 - 2x - 24$.
:::

### C daraja

::: {.mashq #m14-19 daraja="C" javob="$(2x + 3)(x + 4)$"}
Ko'paytuvchilarga ajrating: $2x^2 + 11x + 12$.
:::

::: {.mashq #m14-20 daraja="C" javob="$(x - 4)(3x + 2)$"}
Ko'paytuvchilarga ajrating: $3x^2 - 10x - 8$.
:::

::: {.mashq #m14-21 daraja="C" javob="$5x(x - 3)(x + 3)$"}
Ko'paytuvchilarga oxirigacha ajrating: $5x^3 - 45x$.
:::

::: {.mashq #m14-22 daraja="C" javob="$12x$"}
Soddalashtiring: $(x + 3)^2 - (x - 3)^2$.
:::

::: {.mashq #m14-23 daraja="C" javob="$7x + 2$"}
Soddalashtiring: $(2x - 1)(x + 4) - 2(x^2 - 3)$.
:::

::: {.mashq #m14-24 daraja="C" javob="400"}
Kalkulyatorsiz hisoblang: $52^2 - 48^2$.
:::

::: {.mashq #m14-25 daraja="C" javob="$x^{2} + 3x - 18$"}
To'g'ri to'rtburchak shaklidagi bog'ning bo'yi $(x + 6)$ metr, eni $(x - 3)$ metr. Bog'ning yuzi bo'yi va enining ko'paytmasiga teng. Yuzni standart ko'rinishdagi ko'phad sifatida yozing.
:::

::: {.mashq #m14-26 daraja="C" javob="$6x + 9$"}
Kvadrat shaklidagi maydonning tomoni $x$ metr edi. Uning har bir tomoni $3$ metrga uzaytirildi. Maydonning yuzi necha kvadrat metrga oshdi? (Kvadratning yuzi tomonining kvadratiga teng.) Javobni $x$ orqali yozing.
:::

::: {.mashq #m14-27 daraja="C" javob="4"}
$x + y = 12$ va $x^2 - y^2 = 48$ bo'lsa, $x - y$ ning qiymatini toping.
:::

## SAT ko'prigi

Quyidagi savollar SAT uslubida, inglizcha yozilgan. *Equivalent to* — teng kuchli (har qanday $x$ da teng), *factor* — ko'paytuvchi, *for all values of $x$* — $x$ ning barcha qiymatlarida. Javoblar kitob oxirida.

::: {.sat #s14-1 javob="A"}
Which of the following is equivalent to $(3x + 2)(x - 5)$?

A) $3x^2 - 13x - 10$

B) $3x^2 - 10$

C) $3x^2 + 17x - 10$

D) $3x^2 - 15x - 10$
:::

::: {.sat #s14-2 javob="C"}
Which of the following is equivalent to $x^2 - 11x + 24$?

A) $(x - 4)(x - 6)$

B) $(x + 3)(x + 8)$

C) $(x - 3)(x - 8)$

D) $(x - 2)(x - 12)$
:::

::: {.sat #s14-3 javob="-14"}
If $(ax + 3)(2x - 5) = 8x^2 + bx - 15$ for all values of $x$, where $a$ and $b$ are constants, what is the value of $b$?
:::

::: {.sat #s14-4 javob="B"}
Which of the following is a factor of $4x^2 - 25$?

A) $4x - 5$

B) $2x - 5$

C) $2x - 25$

D) $x - 5$
:::

::: {.sat #s14-5 javob="13"}
If $x - y = 3$ and $x^2 - y^2 = 39$, what is the value of $x + y$?
:::
