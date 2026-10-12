# 02. Bo'linish: tub sonlar, EKUB, EKUK

*SAT bo'limi:* Problem-Solving and Data Analysis; Algebra

## Bu bobda

Sonlar qanday "qurilganini" bilsangiz, kasrlar, ifodalar va tenglamalar ancha osonlashadi. Bu bobda:

- bo'luvchi, karrali va qoldiq tushunchalarini;
- bo'linish belgilari yordamida tez tekshirishni;
- tub va murakkab sonlarni ajratishni, sonni tub ko'paytuvchilarga ajratishni;
- EKUB va EKUK ni topishni hamda ularni "teng bo'lish" va "yana birga" turidagi masalalarda qo'llashni o'rganamiz.

**SAT'da qayerda kerak?** Problem-Solving and Data Analysis bo'limida guruhlarga bo'lish, takrorlanadigan jadval va qoldiqli masalalar uchraydi. Algebra bo'limida esa EKUB ifodalarni soddalashtirishda, EKUK kasrlarni umumiy maxrajga keltirishda kerak bo'ladi (3-bob va 8-bobda shunga tayanamiz).

## Yangi so'zlar

| O'zbekcha | English |
|---|---|
| bo'luvchi | factor, divisor |
| karrali | multiple |
| bo'linadi | is divisible by |
| qoldiq | remainder |
| bo'linish belgisi | divisibility rule |
| juft son | even number |
| toq son | odd number |
| tub son | prime number |
| murakkab son | composite number |
| tub ko'paytuvchilarga ajratish | prime factorization |
| EKUB (eng katta umumiy bo'luvchi) | GCF (greatest common factor) |
| EKUK (eng kichik umumiy karrali) | LCM (least common multiple) |
| o'zaro tub sonlar | relatively prime numbers |

## Tushuntirish

### Bo'luvchi, karrali va qoldiq

Agar $a$ sonini $b$ soniga qoldiqsiz bo'lish mumkin bo'lsa, $a$ soni $b$ ga *bo'linadi (is divisible by)* deymiz. Bunda $b$ soni $a$ ning *bo'luvchisi (factor, divisor)*, $a$ esa $b$ ning *karralisi (multiple)* bo'ladi.

Masalan, $12 = 3 \cdot 4$. Demak, $3$ va $4$ — $12$ ning bo'luvchilari, $12$ esa $3$ ning ham, $4$ ning ham karralisi. $12$ ning barcha bo'luvchilari: $1, 2, 3, 4, 6, 12$. $3$ ning karralilari esa cheksiz ko'p: $3, 6, 9, 12, 15, \ldots$

Agar son bo'linmasa, *qoldiq (remainder)* qoladi. Masalan, 47 ta yong'oqni 6 kishiga teng bo'lsak, har kim 7 tadan oladi va 5 ta ortib qoladi:

$$47 = 6 \cdot 7 + 5.$$

Qoldiq har doim bo'luvchidan kichik bo'ladi: 6 ga bo'lganda qoldiq faqat $0, 1, 2, 3, 4$ yoki $5$ bo'lishi mumkin.

2 ga bo'linadigan sonlar *juft sonlar (even numbers)*, bo'linmaydiganlari *toq sonlar (odd numbers)* deyiladi.

### Bo'linish belgilari

Katta sonni bo'lib ko'rmasdan ham bo'linishini tekshirish mumkin. Mana eng ko'p ishlatiladigan *bo'linish belgilari (divisibility rules)*:

- **2 ga:** oxirgi raqami juft ($0, 2, 4, 6, 8$).
- **3 ga:** raqamlari yig'indisi 3 ga bo'linadi. $741$: $7 + 4 + 1 = 12$, demak $741$ soni 3 ga bo'linadi.
- **4 ga:** oxirgi ikki raqamidan tuzilgan son 4 ga bo'linadi. $1\,316$: $16$ soni 4 ga bo'linadi.
- **5 ga:** oxirgi raqami $0$ yoki $5$.
- **6 ga:** son ham 2 ga, ham 3 ga bo'linadi.
- **9 ga:** raqamlari yig'indisi 9 ga bo'linadi. $7\,236$: $7 + 2 + 3 + 6 = 18$.
- **10 ga:** oxirgi raqami $0$.

### Tub va murakkab sonlar

Faqat ikkita bo'luvchisi (1 va o'zi) bor son *tub son (prime number)* deyiladi. Ikkitadan ko'p bo'luvchisi bor son *murakkab son (composite number)* deyiladi.

50 dan kichik tub sonlar:

$$2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.$$

E'tibor bering: $1$ na tub, na murakkab (uning bitta bo'luvchisi bor). $2$ esa yagona juft tub son.

Har bir murakkab sonni tub sonlarning ko'paytmasi shaklida yozish mumkin. Bu *tub ko'paytuvchilarga ajratish (prime factorization)* deyiladi. Bir xil ko'paytuvchilarni daraja bilan qisqa yozamiz: $2 \cdot 2 \cdot 2 = 2^3$ ("ikkining kubi"). 1-bobda kvadratni ko'rgan edik; bu ham xuddi shunday yozuv.

::: {.misol}
$360$ ni tub ko'paytuvchilarga ajrating.

*Yechish.* Eng kichik tub sondan boshlab ketma-ket bo'lamiz:

$$360 = 2 \cdot 180 = 2 \cdot 2 \cdot 90 = 2 \cdot 2 \cdot 2 \cdot 45 = 2 \cdot 2 \cdot 2 \cdot 3 \cdot 15 = 2 \cdot 2 \cdot 2 \cdot 3 \cdot 3 \cdot 5.$$

Daraja bilan yozamiz: $360 = 2^3 \cdot 3^2 \cdot 5$.

*Tekshirish:* $8 \cdot 9 \cdot 5 = 72 \cdot 5 = 360$. To'g'ri.
:::

### EKUB — eng katta umumiy bo'luvchi

Ikki sonning ikkalasini ham bo'ladigan eng katta son ularning *EKUB* i deyiladi (inglizchada *GCF — greatest common factor*). Uni topish uchun:

1. har bir sonni tub ko'paytuvchilarga ajratamiz;
2. ikkalasida ham bor tub ko'paytuvchilarni olamiz;
3. har biridan kichikroq darajasini olib, ko'paytiramiz.

EKUB i 1 ga teng sonlar *o'zaro tub sonlar (relatively prime numbers)* deyiladi, masalan $8$ va $15$.

::: {.misol}
EKUB$(48, 72)$ ni toping.

*Yechish.*

1-qadam: $48 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 3 = 2^4 \cdot 3$, $72 = 2 \cdot 2 \cdot 2 \cdot 3 \cdot 3 = 2^3 \cdot 3^2$.

2-qadam: umumiy tub ko'paytuvchilar — $2$ va $3$.

3-qadam: kichik darajalar: $2^3$ va $3^1$. EKUB$(48, 72) = 2^3 \cdot 3 = 8 \cdot 3 = 24$.

*Tekshirish:* $48 \div 24 = 2$, $72 \div 24 = 3$; $2$ va $3$ ning umumiy bo'luvchisi faqat $1$, demak kattaroq umumiy bo'luvchi yo'q.

*Javob:* $24$.
:::

### EKUK — eng kichik umumiy karrali

Ikki sonning ikkalasiga ham bo'linadigan eng kichik musbat son ularning *EKUK* i deyiladi (inglizchada *LCM — least common multiple*). Topish uchun:

1. har bir sonni tub ko'paytuvchilarga ajratamiz;
2. hech bo'lmaganda bittasida uchragan barcha tub ko'paytuvchilarni olamiz;
3. har biridan kattaroq darajasini olib, ko'paytiramiz.

Kichik sonlar uchun boshqa yo'l ham bor: kattaroq sonning karralilarini sanab chiqamiz va birinchi bo'lib kichik songa bo'linganini olamiz.

Foydali bog'lanish: ikki sonning EKUB i bilan EKUK ini ko'paytirsak, shu ikki sonning ko'paytmasi chiqadi. Masalan, EKUB$(12, 18) = 6$ va EKUK$(12, 18) = 36$, haqiqatan ham $6 \cdot 36 = 216 = 12 \cdot 18$.

::: {.misol}
EKUK$(12, 18)$ ni toping.

*Yechish.*

1-qadam: $12 = 2^2 \cdot 3$, $18 = 2 \cdot 3^2$.

2-qadam: tub ko'paytuvchilar — $2$ va $3$; katta darajalar: $2^2$ va $3^2$.

3-qadam: EKUK$(12, 18) = 2^2 \cdot 3^2 = 4 \cdot 9 = 36$.

*Ikkinchi yo'l:* $18$ ning karralilari: $18, 36, \ldots$ $18$ soni 12 ga bo'linmaydi, $36$ esa bo'linadi.

*Javob:* $36$.
:::

### Masalada EKUB mi, EKUK mi?

Savolga qarang:

- narsalarni **teng guruhlarga bo'lish**, "eng ko'p nechta guruh", "eng katta o'lcham" — **EKUB** (javob berilgan sonlardan katta bo'lmaydi);
- "**yana qachon birga**", "eng kam nechta", takrorlanadigan jadvallar — **EKUK** (javob berilgan sonlardan kichik bo'lmaydi).

::: {.misol}
O'qituvchida 36 ta qalam va 48 ta daftar bor. U ularni o'quvchilarga shunday bo'lib bermoqchiki, har bir o'quvchi bir xil sondagi qalam va bir xil sondagi daftar olsin va hech narsa ortib qolmasin. Eng ko'pi bilan nechta o'quvchiga bo'lib berish mumkin? Har biri nechtadan qalam va daftar oladi?

*Yechish.* O'quvchilar soni 36 ning ham, 48 ning ham bo'luvchisi bo'lishi kerak, eng kattasi esa EKUB.

1-qadam: $36 = 2^2 \cdot 3^2$, $48 = 2^4 \cdot 3$.

2-qadam: EKUB$(36, 48) = 2^2 \cdot 3 = 12$.

3-qadam: har bir o'quvchi $36 \div 12 = 3$ ta qalam va $48 \div 12 = 4$ ta daftar oladi.

*Javob:* 12 ta o'quvchi; har biri 3 ta qalam va 4 ta daftar.
:::

::: {.misol}
Bekatdan ikkita avtobus qatnaydi: birinchisi har 12 minutda, ikkinchisi har 20 minutda jo'naydi. Soat 8:00 da ikkalasi birga jo'nadi. Ular keyingi safar soat nechada birga jo'naydi?

*Yechish.* Soat 8:00 dan keyin o'tgan minutlar soni 12 ga ham, 20 ga ham karrali bo'lishi kerak. Bunday sonlarning eng kichigi — EKUK.

1-qadam: $12 = 2^2 \cdot 3$, $20 = 2^2 \cdot 5$.

2-qadam: EKUK$(12, 20) = 2^2 \cdot 3 \cdot 5 = 60$ minut.

3-qadam: 8:00 dan 60 minut, ya'ni 1 soat keyin.

*Javob:* soat 9:00 da.
:::

## Ko'p uchraydigan xatolar

**1. 1 ni tub son deb hisoblash.**

*Noto'g'ri:* "1 dan 10 gacha tub sonlar: $1, 2, 3, 5, 7$."

*To'g'ri:* tub sonning aynan ikkita bo'luvchisi bo'ladi, $1$ ning esa bittasi bor. Javob: $2, 3, 5, 7$.

**2. EKUK ni shunchaki ko'paytma deb olish.**

*Noto'g'ri:* EKUK$(6, 8) = 6 \cdot 8 = 48$.

*To'g'ri:* $6 = 2 \cdot 3$, $8 = 2^3$, demak EKUK$(6, 8) = 2^3 \cdot 3 = 24$. $48$ — umumiy karrali, lekin eng kichigi emas. Ko'paytma faqat o'zaro tub sonlar uchun EKUK ga teng.

**3. EKUB va EKUK ni almashtirib yuborish.**

*Noto'g'ri:* avtobuslar masalasida EKUB$(12, 20) = 4$ ni olib, "4 minutdan keyin birga jo'naydi" deyish. Birinchi avtobus 12 minutdan oldin umuman jo'namaydi-ku!

*To'g'ri:* "yana qachon birga" — bu EKUK: $60$ minut.

**4. Har bir toq sonni tub deb o'ylash.**

*Noto'g'ri:* "51 va 91 — tub sonlar."

*To'g'ri:* $51 = 3 \cdot 17$ (raqamlar yig'indisi $6$, demak 3 ga bo'linadi), $91 = 7 \cdot 13$. Ikkalasi ham murakkab.

## Mashqlar

Tub ko'paytuvchilarga ajratganda javobni daraja bilan yozing, masalan $2^3 \cdot 5$.

### A daraja

::: {.mashq #m2-1 daraja="A" javob="5"}
47 ni 6 ga bo'lganda qoldiq nechaga teng?
:::

::: {.mashq #m2-2 daraja="A" javob="8"}
30 sonining nechta bo'luvchisi bor?
:::

::: {.mashq #m2-3 daraja="A" javob="23, 29, 37"}
$21, 23, 27, 29, 33, 37$ sonlari ichidan tub sonlarni ajratib yozing.
:::

::: {.mashq #m2-4 daraja="A" javob="8"}
1 dan 20 gacha (20 ham kiradi) nechta tub son bor?
:::

::: {.mashq #m2-5 daraja="A" javob="49"}
7 ning 50 dan kichik eng katta karralisini toping.
:::

::: {.mashq #m2-6 daraja="A" javob="648"}
Raqamlar yig'indisi yordamida $5\,832$ soni 9 ga bo'linishini tekshiring va bo'linmani toping.
:::

::: {.mashq #m2-7 daraja="A" javob="$2^3 \cdot 3^2$"}
72 ni tub ko'paytuvchilarga ajrating.
:::

::: {.mashq #m2-8 daraja="A" javob="6"}
EKUB$(18, 24)$ ni toping.
:::

### B daraja

::: {.mashq #m2-9 daraja="B" javob="24"}
EKUK$(8, 12)$ ni toping.
:::

::: {.mashq #m2-10 daraja="B" javob="$2^2 \cdot 3^2 \cdot 7$"}
252 ni tub ko'paytuvchilarga ajrating.
:::

::: {.mashq #m2-11 daraja="B" javob="42"}
EKUB$(84, 126)$ ni toping.
:::

::: {.mashq #m2-12 daraja="B" javob="105"}
EKUK$(15, 35)$ ni toping.
:::

::: {.mashq #m2-13 daraja="B" javob="1 (o'zaro tub sonlar)"}
EKUB$(16, 27)$ ni toping. Bu sonlar haqida nima deyish mumkin?
:::

::: {.mashq #m2-14 daraja="B" javob="15"}
EKUB$(30, 45, 75)$ ni toping.
:::

::: {.mashq #m2-15 daraja="B" javob="60"}
EKUK$(4, 6, 10)$ ni toping.
:::

::: {.mashq #m2-16 daraja="B" javob="525"}
520 dan 529 gacha bo'lgan sonlardan qaysi biri 3 ga ham, 5 ga ham bo'linadi?
:::

### C daraja

::: {.mashq #m2-17 daraja="C" javob="24"}
Gul do'konida 48 ta qizil va 72 ta oq atirgul bor. Sotuvchi ulardan bir xil guldastalar yasamoqchi: har bir guldastada qizil atirgullar soni bir xil, oq atirgullar soni ham bir xil bo'lsin va birorta gul ortib qolmasin. Eng ko'pi bilan nechta guldasta yasash mumkin?
:::

::: {.mashq #m2-18 daraja="C" javob="12 kundan keyin, shanba"}
Ali basseynga har 4 kunda, Vali esa har 6 kunda boradi. Dushanba kuni ular basseynda uchrashishdi. Necha kundan keyin ular yana basseynda uchrashadi va bu haftaning qaysi kuni bo'ladi?
:::

::: {.mashq #m2-19 daraja="C" javob="120 sm, 12 ta"}
Sinf xonasining poli to'g'ri to'rtburchak shaklida, o'lchamlari 360 sm va 480 sm. Polni bir xil, iloji boricha katta kvadrat plitkalar bilan, plitkalarni kesmasdan qoplash kerak. Plitkaning tomoni necha sm bo'ladi va nechta plitka kerak?
:::

::: {.mashq #m2-20 daraja="C" javob="73"}
Savatdagi olmalarni 4 tadan, 6 tadan yoki 9 tadan qilib paketlansa, har safar 1 ta olma ortib qoladi. Savatda 50 tadan ko'p, lekin 100 tadan kam olma bor. Savatda nechta olma bor?
:::

::: {.mashq #m2-21 daraja="C" javob="juma"}
Bugun chorshanba. 100 kundan keyin haftaning qaysi kuni bo'ladi?
:::

::: {.mashq #m2-22 daraja="C" javob="5"}
Bir-biriga tegib turgan ikki tishli g'ildirakning birida 18 ta, ikkinchisida 30 ta tish bor. Har biridagi bitta tish bo'yoq bilan belgilangan va hozir bu ikki tish bir-biriga tegib turibdi. Kichik g'ildirak kamida necha marta to'liq aylangandan keyin belgilangan tishlar yana uchrashadi?
:::

::: {.mashq #m2-23 daraja="C" javob="60"}
EKUB$(a, 36) = 12$ va EKUK$(a, 36) = 180$ bo'lsa, $a$ sonini toping.
:::

::: {.mashq #m2-24 daraja="C" javob="108"}
12 ga ham, 18 ga ham bo'linadigan eng kichik uch xonali sonni toping.
:::

## SAT ko'prigi

Quyidagi savollar SAT uslubida, inglizcha yozilgan. *Factor*, *multiple*, *prime*, *remainder* so'zlariga e'tibor bering. Javoblar kitob oxirida.

::: {.sat #s2-1 javob="D"}
Which of the following is a prime number?

A) $39$

B) $51$

C) $57$

D) $59$
:::

::: {.sat #s2-2 javob="72"}
Two lights are switched on at the same moment. The first light blinks every 18 seconds, and the second light blinks every 24 seconds. After how many seconds will the two lights next blink at the same moment?
:::

::: {.sat #s2-3 javob="C"}
What is the greatest common factor of $84$ and $140$?

A) $7$

B) $14$

C) $28$

D) $420$
:::

::: {.sat #s2-4 javob="A"}
When the positive integer $n$ is divided by $7$, the remainder is $4$. What is the remainder when $n + 10$ is divided by $7$?

A) $0$

B) $3$

C) $4$

D) $6$
:::
