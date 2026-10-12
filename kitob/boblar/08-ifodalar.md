# 08. Algebraik ifodalar

*SAT bo'limi:* Algebra

## Bu bobda

7-bobda darajalar qoidalarini harflar bilan yozgan edik: $a^m \cdot a^n = a^{m+n}$. O'shanda "harfli ifodalar haqida 8-bobda batafsil" degan edik. Mana shu bob. Shu bob bilan kitobning ikkinchi qismi — algebra boshlanadi. Bu bobda:

- o'zgaruvchi va algebraik ifoda nima ekanini va ularni yozish qoidalarini;
- o'zgaruvchi o'rniga son qo'yib, ifodaning qiymatini hisoblashni;
- had, koeffitsiyent va o'xshash hadlarni, o'xshash hadlarni birlashtirishni;
- taqsimot xossasi yordamida qavslarni ochishni;
- ifodalarni soddalashtirishni va umumiy ko'paytuvchini qavsdan chiqarishni o'rganamiz.

**SAT'da qayerda kerak?** Algebra SAT Math'ning eng katta ikki bo'limidan biri, va uning deyarli har bir savoli ifoda bilan ishlashdan boshlanadi. "Which of the following is equivalent to $2(x - 3) + 5x$?" kabi savollar to'g'ridan-to'g'ri shu bobga tayanadi. Keyingi boblardagi tenglama (9-bob), tengsizlik (10-bob) va tenglamalar sistemasi (13-bob) ham avval ikkala tomonni soddalashtirishni talab qiladi.

## Yangi so'zlar

| O'zbekcha | English |
|---|---|
| o'zgaruvchi | variable |
| algebraik ifoda | algebraic expression |
| ifodaning qiymati | value of an expression |
| o'rniga qo'yish | substitution |
| had | term |
| koeffitsiyent | coefficient |
| ozod had | constant term |
| o'xshash hadlar | like terms |
| taqsimot xossasi | distributive property |
| qavslarni ochish | expanding (removing parentheses) |
| ifodani soddalashtirish | simplifying an expression |
| teng kuchli ifodalar | equivalent expressions |
| umumiy ko'paytuvchini qavsdan chiqarish | factoring out a common factor |

## Tushuntirish

### O'zgaruvchi va algebraik ifoda

Bitta daftar $4000$ so'm turadi. $3$ ta daftar $3 \cdot 4000$ so'm, $5$ ta daftar $5 \cdot 4000$ so'm turadi. Har safar yangi son yozmaslik uchun daftarlar sonini $n$ harfi bilan belgilaymiz: $n$ ta daftar $4000 \cdot n$ so'm turadi.

Bu yerda $n$ — *o'zgaruvchi (variable)*: u qiymati o'zgarishi mumkin bo'lgan son o'rnida turadi. Sonlar, o'zgaruvchilar, amal belgilari va qavslardan tuzilgan yozuv *algebraik ifoda (algebraic expression)* deyiladi. Masalan:

$$4000n, \quad 2a + 7, \quad \frac{x}{3} - 1, \quad x^2 + 5y.$$

1-bobdagi sonli ifodadan farqi shuki, algebraik ifoda ichida harf bor. O'zgaruvchi uchun istalgan harfni olish mumkin, lekin ko'pincha $x$, $y$, $a$, $b$, $n$ ishlatiladi.

**Yozish qoidalari.**

- Son va harf orasidagi ko'paytirish belgisi tushirib qoldiriladi, son oldinga yoziladi: $3 \cdot x = 3x$, $x \cdot 5 = 5x$, $a \cdot b = ab$.
- $1$ ko'paytuvchi yozilmaydi: $1 \cdot x = x$, $-1 \cdot x = -x$.
- Ikki son orasidagi belgi tushirib qoldirilmaydi: $3 \cdot 4$ ni $34$ deb yozib bo'lmaydi. Shuning uchun $x = 4$ bo'lsa, $3x = 3 \cdot 4 = 12$.
- Bo'lish odatda kasr chizig'i bilan yoziladi: $x \div 2 = \frac{x}{2}$.
- Daraja faqat o'zi yonidagi harfga tegishli (7-bob): $3x^2 = 3 \cdot x \cdot x$, lekin $(3x)^2 = 3x \cdot 3x = 9x^2$.

### Ifodaning qiymati

O'zgaruvchi o'rniga son qo'yib, amallar tartibi (1-bob) bo'yicha hisoblasak, *ifodaning qiymati (value of an expression)* chiqadi. Bu ish *o'rniga qo'yish (substitution)* deyiladi. Masalan, $n = 6$ bo'lsa, $4000n = 4000 \cdot 6 = 24\,000$: olti daftar $24\,000$ so'm turadi.

**Muhim odat:** manfiy son yoki kasrni o'rniga qo'yganda uni qavsga oling. $x = -3$ bo'lsa:

- $x^2 = (-3)^2 = 9$;
- $-x^2 = -(-3)^2 = -9$ (avval daraja, keyin minus);
- $5x = 5 \cdot (-3) = -15$.

::: {.misol}
$a = -2$ va $b = 5$ bo'lsa, ifodalarning qiymatini toping: a) $3a + 2b$; b) $a^2 - ab$; c) $\frac{b - a}{a + 9}$.

*Yechish.* Har bir harf o'rniga sonni qavs ichida qo'yamiz.

a) $3a + 2b = 3 \cdot (-2) + 2 \cdot 5 = -6 + 10 = 4$.

b) $a^2 - ab = (-2)^2 - (-2) \cdot 5 = 4 - (-10) = 4 + 10 = 14$.

c) Kasr chizig'i qavs vazifasini bajaradi: surat va maxraj alohida hisoblanadi. Surat: $5 - (-2) = 7$. Maxraj: $-2 + 9 = 7$. Demak, $\frac{7}{7} = 1$.

*Javob:* a) $4$; b) $14$; c) $1$.
:::

### Had, koeffitsiyent, o'xshash hadlar

Ifodaning qo'shish va ayirish belgilari bilan ajratilgan qismlari *hadlar (terms)* deyiladi. $5x^2 - 3x + 7$ ifodasining hadlari: $5x^2$, $-3x$ va $7$. E'tibor bering: hadning oldidagi minus belgisi shu hadga tegishli.

Hadning harfli qismi oldidagi son uning *koeffitsiyenti (coefficient)* deyiladi:

- $5x^2$ ning koeffitsiyenti $5$;
- $-3x$ ning koeffitsiyenti $-3$;
- $x$ ning koeffitsiyenti $1$, $-x$ ning koeffitsiyenti esa $-1$ (yozilmaydi, lekin bor).

Harfsiz had (bu yerda $7$) *ozod had (constant term)* deyiladi.

Harfli qismi bir xil bo'lgan hadlar *o'xshash hadlar (like terms)* deyiladi. "Bir xil" degani: harflar ham, ularning darajalari ham bir xil.

- O'xshash: $4x$ va $-9x$; $3x^2$ va $x^2$; $2ab$ va $ba$ (chunki $ba = ab$); $6$ va $-1$ (ikkalasi ham ozod had).
- O'xshash emas: $3x$ va $3x^2$ (darajasi har xil); $2x$ va $2y$ (harfi har xil); $5$ va $5x$.

**O'xshash hadlarni birlashtirish:** koeffitsiyentlar qo'shiladi, harfli qism o'zgarmaydi. $4x + 7x = 11x$, xuddi $4$ ta olma va $7$ ta olma $11$ ta olma bo'lgani kabi. 7-bobdagi $5\sqrt{2} + 3\sqrt{2} = 8\sqrt{2}$ ham aynan shu qoida edi. O'xshash bo'lmagan hadlarni birlashtirib bo'lmaydi: $3x + 2$ ifodasini bundan soddaroq yozib bo'lmaydi.

::: {.misol}
Soddalashtiring: a) $6x + 4 - 2x - 9 + x$; b) $3a^2 - 5a + a^2 + 8a$.

*Yechish.* Har bir hadni o'z ishorasi bilan olib, o'xshash hadlarni guruhlaymiz.

a) $x$ li hadlar: $6x - 2x + x = (6 - 2 + 1)x = 5x$. Ozod hadlar: $4 - 9 = -5$. Natija: $5x - 5$.

b) $a^2$ li hadlar: $3a^2 + a^2 = 4a^2$. $a$ li hadlar: $-5a + 8a = 3a$. Natija: $4a^2 + 3a$. Bu ikki hadni birlashtirib bo'lmaydi, chunki ular o'xshash emas.

*Javob:* a) $5x - 5$; b) $4a^2 + 3a$.
:::

Javobni odatda darajasi katta haddan boshlab yozamiz: avval $x^2$ li had, keyin $x$ li had, oxirida ozod had.

### Taqsimot xossasi: qavslarni ochish

Sonlar bilan tekshirib ko'raylik: $3 \cdot (10 + 2) = 3 \cdot 12 = 36$, boshqa tomondan $3 \cdot 10 + 3 \cdot 2 = 30 + 6 = 36$. Natija bir xil. Bu *taqsimot xossasi (distributive property)*:

$$a(b + c) = ab + ac,$$

$$a(b - c) = ab - ac.$$

Qavs oldidagi ko'paytuvchi qavs ichidagi **har bir** hadga ko'paytiriladi. Bu ish *qavslarni ochish (expanding)* deyiladi. 1-bobda ko'rganimizdek, qavs oldidagi son ko'paytirishni bildiradi: $3(x + 4) = 3 \cdot (x + 4)$.

- $4(x + 5) = 4x + 20$;
- $-2(3x - 7) = -6x + 14$ (minus marta minus plyus beradi);
- $x(x + 3) = x^2 + 3x$ (chunki $x \cdot x = x^2$);
- qavs oldida faqat minus bo'lsa, u $-1$ ko'paytuvchi: $-(x - 6) = -x + 6$. Qavs ichidagi **har bir** hadning ishorasi almashadi.

Bo'lishda ham xuddi shunday: kasr suratidagi har bir had maxrajga bo'linadi, $\frac{8x - 12}{4} = \frac{8x}{4} - \frac{12}{4} = 2x - 3$.

::: {.misol}
Soddalashtiring: a) $5(2x - 3) - 4(x - 2)$; b) $2x(x + 4) - (x^2 - 3x)$.

*Yechish.* Avval qavslarni ochamiz, keyin o'xshash hadlarni birlashtiramiz.

a) $5(2x - 3) = 10x - 15$. Ikkinchi qavs oldida $-4$ turibdi: $-4 \cdot x = -4x$ va $-4 \cdot (-2) = 8$. Demak:

$$10x - 15 - 4x + 8 = 6x - 7.$$

b) $2x(x + 4) = 2x^2 + 8x$. Minus oldidagi qavsni ochamiz: $-(x^2 - 3x) = -x^2 + 3x$. Demak:

$$2x^2 + 8x - x^2 + 3x = x^2 + 11x.$$

*Tekshirish.* $x = 1$ ni dastlabki va soddalashtirilgan ifodaga qo'yamiz. a) $5(2 - 3) - 4(1 - 2) = -5 + 4 = -1$ va $6 - 7 = -1$. b) $2 \cdot 5 - (1 - 3) = 10 + 2 = 12$ va $1 + 11 = 12$. Natijalar mos.

*Javob:* a) $6x - 7$; b) $x^2 + 11x$.
:::

### Teng kuchli ifodalar

O'zgaruvchining **har qanday** qiymatida bir xil qiymat beradigan ifodalar *teng kuchli ifodalar (equivalent expressions)* deyiladi. Masalan, $5(2x - 3) - 4(x - 2)$ va $6x - 7$ teng kuchli. Qavslarni ochish va o'xshash hadlarni birlashtirish ifodani teng kuchli, lekin soddaroq ifodaga aylantiradi. Bu *ifodani soddalashtirish (simplifying an expression)* deyiladi.

Tekshirishning tez usuli yuqoridagi misolda ko'rsatildi: ikkala ifodaga bir xil son qo'yib ko'ring. Qiymatlar har xil chiqsa, soddalashtirishda xato bor. (Bitta sonda mos kelishi hali kafolat emas, lekin xatoni tez ushlaydi.)

Ikkala ifoda soddalashtirilgan ko'rinishda bo'lsa, ular teng kuchli bo'lishi uchun $x$ li hadlarning koeffitsiyentlari ham, ozod hadlari ham teng bo'lishi kerak. Masalan, $k$ — biror *o'zgarmas son (constant)* va $2x + 3k$ ifodasi $2x + 12$ ga teng kuchli bo'lsa, ozod hadlar teng: $3k = 12$. Qaysi sonni $3$ ga ko'paytirsak $12$ chiqadi? $k = 4$.

### Umumiy ko'paytuvchini qavsdan chiqarish

Taqsimot xossasini teskari tomonga ham ishlatish mumkin: hamma hadlarda bor bo'lgan ko'paytuvchini qavs oldiga chiqaramiz. Buning uchun koeffitsiyentlarning EKUBini topamiz (2-bob):

- $6x + 15$: $6$ va $15$ ning EKUBi $3$, demak $6x + 15 = 3(2x + 5)$;
- $4x^2 - 10x$: $4$ va $10$ ning EKUBi $2$, ikkala hadda $x$ ham bor, demak $4x^2 - 10x = 2x(2x - 5)$.

Tekshirish uchun qavsni qayta oching: $3(2x + 5) = 6x + 15$. Bu amal *umumiy ko'paytuvchini qavsdan chiqarish (factoring out a common factor)* deyiladi; ko'phadlarni ko'paytuvchilarga ajratish haqida 14-bobda batafsil.

::: {.misol}
Avval soddalashtiring, keyin $x = -\frac{1}{2}$ bo'lganda ifodaning qiymatini toping: $3(4x + 1) - 2(x - 6) + 5$. Soddalashtirilgan ifodadan umumiy ko'paytuvchini qavsdan chiqaring.

*Yechish.*

1-qadam (qavslarni ochish): $12x + 3 - 2x + 12 + 5$.

2-qadam (o'xshash hadlar): $12x - 2x = 10x$ va $3 + 12 + 5 = 20$. Demak, ifoda $10x + 20$ ga teng.

3-qadam (qiymat): $10 \cdot \left(-\frac{1}{2}\right) + 20 = -5 + 20 = 15$.

4-qadam (qavsdan chiqarish): $10$ va $20$ ning EKUBi $10$, demak $10x + 20 = 10(x + 2)$.

*Tekshirish.* $x = -\frac{1}{2}$ ni to'g'ridan-to'g'ri dastlabki ifodaga qo'yamiz: $3 \cdot (-2 + 1) - 2 \cdot \left(-\frac{1}{2} - 6\right) + 5 = -3 + 13 + 5 = 15$. Mos keldi, lekin soddalashtirilgan ifodada hisob ancha oson edi.

*Javob:* $10x + 20$; qiymati $15$; $10(x + 2)$.
:::

## Ko'p uchraydigan xatolar

**1. Minus oldidagi qavsda faqat birinchi hadning ishorasini almashtirish.**

*Noto'g'ri:* $7 - (2x - 5) = 7 - 2x - 5 = -2x + 2$.

*To'g'ri:* qavs ichidagi **har bir** hadning ishorasi almashadi: $7 - (2x - 5) = 7 - 2x + 5 = -2x + 12$.

**2. Qavs oldidagi sonni faqat birinchi hadga ko'paytirish.**

*Noto'g'ri:* $3(x + 4) = 3x + 4$.

*To'g'ri:* $3(x + 4) = 3x + 12$. Tekshiring: $x = 0$ da $3(0 + 4) = 12$, lekin $3 \cdot 0 + 4 = 4$.

**3. O'xshash bo'lmagan hadlarni birlashtirish.**

*Noto'g'ri:* $3x + 2 = 5x$; $2x + 3x^2 = 5x^3$.

*To'g'ri:* bu ifodalarni bundan soddaroq yozib bo'lmaydi. $3x$ va $2$, $2x$ va $3x^2$ o'xshash hadlar emas.

**4. Manfiy sonni qavssiz o'rniga qo'yish.**

*Noto'g'ri:* $x = -4$ bo'lsa, $x^2 = -4^2 = -16$.

*To'g'ri:* $x^2 = (-4)^2 = 16$.

**5. Yolg'iz $x$ ning koeffitsiyentini unutish.**

*Noto'g'ri:* $5x - x = 5$.

*To'g'ri:* $x = 1x$, demak $5x - x = 5x - 1x = 4x$.

## Mashqlar

Ifodali javobni soddalashtirilgan ko'rinishda yozing: avval darajasi katta had, keyin $x$ li had, oxirida ozod had (masalan, $2x^2 - x + 6$). Ikki harf bo'lsa, harflar alifbo tartibida yoziladi. Kasr javobni qisqarmas kasr ko'rinishida yozing.

### A daraja

::: {.mashq #m8-1 daraja="A" javob="15"}
$x = 6$ bo'lsa, $4x - 9$ ifodaning qiymatini toping.
:::

::: {.mashq #m8-2 daraja="A" javob="11"}
$a = -3$ bo'lsa, $5 - 2a$ ifodaning qiymatini toping.
:::

::: {.mashq #m8-3 daraja="A" javob="10"}
$y = -5$ bo'lsa, $y^2 + 3y$ ifodaning qiymatini toping.
:::

::: {.mashq #m8-4 daraja="A" javob="$6x$"}
Soddalashtiring: $7x + 3x - 4x$.
:::

::: {.mashq #m8-5 daraja="A" javob="$11a + 6$"}
Soddalashtiring: $9a - 4 + 2a + 10$.
:::

::: {.mashq #m8-6 daraja="A" javob="$12x - 30$"}
Qavsni oching: $6(2x - 5)$.
:::

::: {.mashq #m8-7 daraja="A" javob="$3y - 12$"}
Qavsni oching: $-3(4 - y)$.
:::

::: {.mashq #m8-8 daraja="A" javob="-1"}
$4x^2 - x + 9$ ifodasida $x$ li hadning koeffitsiyenti nechaga teng?
:::

### B daraja

::: {.mashq #m8-9 daraja="B" javob="36"}
$x = -2$ va $y = 3$ bo'lsa, $x^2 y - 4xy$ ifodaning qiymatini toping.
:::

::: {.mashq #m8-10 daraja="B" javob="-3"}
$a = \frac{1}{2}$ va $b = -\frac{2}{3}$ bo'lsa, $6a + 9b$ ifodaning qiymatini toping.
:::

::: {.mashq #m8-11 daraja="B" javob="13/2"}
$m = -4$ bo'lsa, $\frac{3m - 1}{m + 2}$ ifodaning qiymatini toping.
:::

::: {.mashq #m8-12 daraja="B" javob="$10x + 10$"}
Soddalashtiring: $4(x + 3) + 2(3x - 1)$.
:::

::: {.mashq #m8-13 daraja="B" javob="$5y + 7$"}
Soddalashtiring: $8y - (3y - 7)$.
:::

::: {.mashq #m8-14 daraja="B" javob="$7a + 10$"}
Soddalashtiring: $2(5a - 4) - 3(a - 6)$.
:::

::: {.mashq #m8-15 daraja="B" javob="$x^{2} - 2x$"}
Soddalashtiring: $x(x - 5) + 3x$.
:::

::: {.mashq #m8-16 daraja="B" javob="$3x^{2} + 4x - 7$"}
Soddalashtiring: $5x^2 - 3x + 2 - 2x^2 + 7x - 9$.
:::

::: {.mashq #m8-17 daraja="B" javob="$6(2x - 3)$"}
Umumiy ko'paytuvchini qavsdan chiqaring (qavs ichidagi koeffitsiyentlarning umumiy bo'luvchisi qolmasin): $12x - 18$.
:::

### C daraja

::: {.mashq #m8-18 daraja="C" javob="$9x$"}
Soddalashtiring: $\frac{1}{2}(6x - 4) + \frac{2}{3}(9x + 3)$.
:::

::: {.mashq #m8-19 daraja="C" javob="$-4a + 9b$"}
Soddalashtiring: $3a - 2(a - 2b) + 5(b - a)$.
:::

::: {.mashq #m8-20 daraja="C" javob="$3x^{2} + 4x - 12$"}
Soddalashtiring: $2x(3x - 1) - 3(x^2 - 2x + 4)$.
:::

::: {.mashq #m8-21 daraja="C" javob="-8"}
Avval soddalashtiring, keyin $x = -3$ bo'lganda qiymatini toping: $4(2x - 5) - 3(2x - 7) + x$.
:::

::: {.mashq #m8-22 daraja="C" javob="12500"}
Taksida yo'l haqi $6000 + 2500k$ so'm, bu yerda $k$ — bosib o'tilgan kilometrlar soni. Ali taksida uyidan maktabgacha $7$ km, Vali esa uyidan maktabgacha $12$ km yo'l yurdi. Vali Alidan necha so'm ko'p to'ladi?
:::

::: {.mashq #m8-23 daraja="C" javob="$6x + 6$"}
To'g'ri to'rtburchak shaklidagi sinf xonasining eni $x$ metr, bo'yi esa $(2x + 3)$ metr. Xonaning perimetrini (to'rtta tomoni uzunliklarining yig'indisini) ifoda ko'rinishida yozing va soddalashtiring.
:::

::: {.mashq #m8-24 daraja="C" javob="$5a + 9000$"}
Bozorda $1$ kg olma $a$ so'm turadi, $1$ kg nok esa $1$ kg olmadan $3000$ so'm qimmat. Aziza $2$ kg olma va $3$ kg nok sotib oldi. U to'lagan pulni $a$ orqali ifodalang va soddalashtiring.
:::

::: {.mashq #m8-25 daraja="C" javob="$4x - 1$"}
Soddalashtiring: $\frac{10x - 15}{5} + 2(x + 1)$.
:::

::: {.mashq #m8-26 daraja="C" javob="3"}
$5(x - 2) - (5x - 13)$ ifodasi $x$ ning har qanday qiymatida bir xil qiymatga ega. Shu qiymatni toping.
:::

## SAT ko'prigi

Quyidagi savollar SAT uslubida, inglizcha yozilgan. *Equivalent* — "teng kuchli" (7-bobda ko'rgandik), *constant* — o'zgarmas son. Javoblar kitob oxirida.

::: {.sat #s8-1 javob="B"}
Which of the following is equivalent to $4(3x - 2) - (5x - 6)$?

A) $7x - 14$

B) $7x - 2$

C) $7x + 4$

D) $17x - 14$
:::

::: {.sat #s8-2 javob="33"}
What is the value of $2x^{2} - 5x$ when $x = -3$?
:::

::: {.sat #s8-3 javob="A"}
Which of the following expressions is equivalent to $6x^{2} + 9x$?

A) $3x(2x + 3)$

B) $3x(2x + 9)$

C) $6x(x + 3)$

D) $6x(x + 9)$
:::

::: {.sat #s8-4 javob="3"}
In the expression $3(x + 2k) - 2x$, $k$ is a constant. If the expression is equivalent to $x + 18$, what is the value of $k$?
:::
