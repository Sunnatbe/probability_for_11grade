# 10. Tengsizliklar

*SAT bo'limi:* Algebra

## Bu bobda

Hayotda ko'p narsa aniq son bilan emas, chegara bilan aytiladi: "liftga ko'pi bilan 600 kg", "imtihondan o'tish uchun kamida 60 ball", "bu pul 15 kundan ko'pga yetmaydi". Bunday shartlar tengsizlik bilan yoziladi. 1-bobda $-4 < 3$ kabi yozuvlarni, 7-bobda $\geq$ belgisini ko'rgan edik va "tengsizliklar haqida 10-bobda batafsil" degan edik. Bu bobda:

- to'rtta tengsizlik belgisini va ularning o'qilishini;
- tengsizlikning yechimi nima ekanini va yechimlarni son o'qida tasvirlashni;
- chiziqli tengsizliklarni yechishni va manfiy songa ko'paytirganda belgi nega almashishini;
- tengsizlikning eng kichik yoki eng katta butun yechimini topishni;
- qo'sh tengsizliklarni va matnli masalalarni tengsizlik bilan yechishni o'rganamiz.

**SAT'da qayerda kerak?** SAT Algebra bo'limida "Which of the following is the solution to the inequality ...?", "What is the least integer value of $x$ that satisfies ...?" kabi savollar, shuningdek "ko'pi bilan", "kamida" so'zlari bor matnli masalani tengsizlikka aylantirish savollari muntazam uchraydi.

## Yangi so'zlar

| O'zbekcha | English |
|---|---|
| tengsizlik | inequality |
| kichik | less than |
| katta | greater than |
| kichik yoki teng | less than or equal to |
| katta yoki teng | greater than or equal to |
| tengsizlikning yechimi | solution of an inequality |
| yechimlar to'plami | solution set |
| bo'sh doiracha | open circle |
| bo'yalgan doiracha | closed circle |
| qo'sh tengsizlik | compound inequality |
| kamida | at least |
| ko'pi bilan | at most |

## Tushuntirish

### Tengsizlik belgilari

Ikki son yoki ifoda orasidagi "katta" yoki "kichik" munosabati *tengsizlik (inequality)* deyiladi. To'rtta belgi bor:

| Yozuv | Misol | O'zbekcha o'qilishi | English |
|---|---|---|---|
| $a < b$ | $3 < 8$ | $3$ soni $8$ dan kichik | less than |
| $a > b$ | $8 > 3$ | $8$ soni $3$ dan katta | greater than |
| $a \leq b$ | $x \leq 5$ | $x$ soni $5$ dan kichik yoki $5$ ga teng | less than or equal to |
| $a \geq b$ | $x \geq 0$ | $x$ soni $0$ dan katta yoki $0$ ga teng | greater than or equal to |

Eslab qolish oson: belgining **ochiq (keng) tomoni katta songa** qaragan, uchi esa kichik songa. $3 < 8$ va $8 > 3$ bir xil ma'noni bildiradi, faqat o'qish tartibi boshqa.

$\leq$ belgisi "kichik **yoki** teng" degani, shuning uchun $5 \leq 5$ to'g'ri tengsizlik, $5 < 5$ esa noto'g'ri. Xuddi shunday, $7 \geq 7$ to'g'ri. "Kichik" va "katta" belgilari *qat'iy* tengsizlik belgilari deyiladi: ular tenglikka yo'l qo'ymaydi.

1-bobdagi qoidani eslang: son o'qida o'ngdagi son har doim katta. Shuning uchun $-10 < -2$: $-10$ chaproqda turadi.

### Tengsizlikning yechimi va son o'qi

$x > 2$ tengsizligini qanoatlantiradigan sonlar ko'p: $3$, $2.5$, $100$, $2.01$ va hokazo. $2$ ning o'zi esa yechim emas, chunki $2 > 2$ noto'g'ri. Tengsizlikni to'g'ri qiladigan har bir son *tengsizlikning yechimi (solution of an inequality)* deyiladi. Ularning hammasi birgalikda *yechimlar to'plami (solution set)* deyiladi. Tenglamadan farqli ravishda, chiziqli tengsizlikning yechimlari odatda cheksiz ko'p.

Yechimlar to'plamini son o'qida tasvirlaymiz:

- chegaradagi son yechimga **kirmasa** (qat'iy belgi: $x < c$ yoki $x > c$), unga *bo'sh doiracha (open circle)* qo'yamiz;
- chegaradagi son yechimga **kirsa** ($x \leq c$ yoki $x \geq c$), *bo'yalgan doiracha (closed circle)* qo'yamiz;
- yechimlar qaysi tomonda bo'lsa, o'sha tomonga qalin chiziq va strelka chizamiz: "katta" bo'lsa o'ngga, "kichik" bo'lsa chapga.

![Son o'qida tengsizliklar: $x > 2$, $x \leq -1$ va $-2 < x \leq 3$](rasmlar/chiqish/10_tengsizlik.png){width=85%}

Yechimni yozganda $x$ ni chapga qo'yish qulay: $2 < x$ va $x > 2$ bir xil ma'noda, lekin $x > 2$ son o'qida chizishga osonroq.

### Tengsizlikni yechish

Tengsizlik xuddi tenglama kabi yechiladi (9-bob), faqat bitta yangi qoida bor. Avval sonlarda tekshirib ko'ramiz. $2 < 5$ to'g'ri.

- Ikkala tomonga $3$ qo'shamiz: $5 < 8$, to'g'ri.
- Ikkala tomonni $4$ ga ko'paytiramiz: $8 < 20$, to'g'ri.
- Ikkala tomonni $-1$ ga ko'paytiramiz: $-2$ va $-5$. Lekin $-2 < -5$ **noto'g'ri**! Son o'qida $-2$ o'ngroqda, demak $-2 > -5$.

Manfiy songa ko'paytirish sonlarni noldan "aks ettiradi", shuning uchun kattasi kichik bo'lib qoladi. Qoidalar:

1. Ikkala tomonga bir xil son qo'shish yoki ayirish mumkin; belgi **o'zgarmaydi**.
2. Ikkala tomonni **musbat** songa ko'paytirish yoki bo'lish mumkin; belgi **o'zgarmaydi**.
3. Ikkala tomonni **manfiy** songa ko'paytirish yoki bo'lish mumkin, lekin belgi **teskarisiga almashadi**: "kichik" "katta"ga, "kichik yoki teng" "katta yoki teng"ga aylanadi va aksincha. Masalan, $-x < 2$ ning ikkala tomonini $-1$ ga ko'paytirsak, $x > -2$ chiqadi.

Javobni tekshirishning tez usuli: yechimlar to'plamidan bitta qulay sonni (masalan $0$ ni) olib, dastlabki tengsizlikka qo'yib ko'ring.

::: {.misol}
Yeching va yechimni son o'qida qanday tasvirlanishini ayting: a) $x - 4 \leq 1$; b) $-2x > 14$; c) $5 - 3x \leq 17$.

*Yechish.*

a) Ikkala tomonga $4$ qo'shamiz: $x \leq 5$. Son o'qida $5$ da bo'yalgan doiracha, strelka chapga.

b) Ikkala tomonni $-2$ ga bo'lamiz, manfiy son, demak belgi almashadi: $x < \frac{14}{-2}$, ya'ni $x < -7$. Son o'qida $-7$ da bo'sh doiracha, strelka chapga.

c) Ikkala tomondan $5$ ni ayiramiz: $-3x \leq 12$. Ikkala tomonni $-3$ ga bo'lamiz va belgini almashtiramiz: $x \geq -4$. Son o'qida $-4$ da bo'yalgan doiracha, strelka o'ngga.

*Tekshirish.* c) da $x = 0$ yechimlar to'plamida ($0 \geq -4$). Dastlabki tengsizlikka qo'yamiz: $5 - 0 \leq 17$, to'g'ri. $x = -5$ esa to'plamda emas: $5 + 15 = 20$, va $20 \leq 17$ noto'g'ri. Hammasi mos.

*Javob:* a) $x \leq 5$; b) $x < -7$; c) $x \geq -4$.
:::

Ikkala tomonida $x$ bo'lgan tengsizlikni ham 9-bobdagi tartibda yechamiz. $x$ li hadlarni koeffitsiyent musbat chiqadigan tomonga yig'sangiz, manfiy songa bo'lishga hojat qolmaydi.

::: {.misol}
Yeching: $4(x - 1) > 7x + 5$.

*Yechish.* Qavsni ochamiz: $4x - 4 > 7x + 5$.

*1-usul.* $x$ li hadlarni chapga, sonlarni o'ngga o'tkazamiz: $4x - 7x > 5 + 4$, ya'ni $-3x > 9$. $-3$ ga bo'lamiz, belgi almashadi: $x < -3$.

*2-usul.* $x$ li hadlarni o'ngga, sonlarni chapga o'tkazamiz: $-4 - 5 > 7x - 4x$, ya'ni $-9 > 3x$. $3$ ga bo'lamiz (musbat son, belgi o'zgarmaydi): $-3 > x$. Bu $x < -3$ ning o'zi.

*Tekshirish.* $x = -4$ ni olamiz: chap tomon $4 \cdot (-5) = -20$, o'ng tomon $-28 + 5 = -23$. $-20 > -23$, to'g'ri.

*Javob:* $x < -3$.
:::

### Eng kichik va eng katta butun yechim

SAT ko'pincha tengsizlikni qanoatlantiradigan eng kichik yoki eng katta **butun** sonni so'raydi. Avval tengsizlikni yechamiz, keyin son o'qiga qaraymiz.

- $x > 3$ bo'lsa, eng kichik butun yechim $4$ (chunki $3$ kirmaydi); $x \geq 3$ bo'lsa, $3$.
- Chegara kasr bo'lsa, ehtiyot bo'ling, ayniqsa manfiy sonlarda. $x \leq -1.5$ bo'lsa, eng katta butun yechim $-2$, $-1$ emas: $-1$ son o'qida $-1.5$ dan o'ngda, demak undan katta.

::: {.misol}
a) $3x + 2 > 19$ tengsizlikni qanoatlantiradigan eng kichik butun sonni toping.

b) $-2x + 1 \geq 8$ tengsizlikni qanoatlantiradigan eng katta butun sonni toping.

*Yechish.*

a) $3x > 17$, $x > \frac{17}{3}$. $\frac{17}{3} = 5\frac{2}{3}$, ya'ni $5$ bilan $6$ orasida. Undan katta eng kichik butun son $6$.

b) $-2x \geq 7$. $-2$ ga bo'lamiz, belgi almashadi: $x \leq -\frac{7}{2} = -3.5$. Son o'qida $-3.5$ dan chapda yoki uning ustida turgan butun sonlar: $-4$, $-5$, $-6$, ... Ulardan eng kattasi $-4$. ($-3$ mos emas: $-3 > -3.5$.)

*Javob:* a) $6$; b) $-4$.
:::

### Qo'sh tengsizlik

$-2 < x \leq 3$ yozuvi ikki shartni birdan aytadi: $x > -2$ **va** $x \leq 3$. Bunday yozuv *qo'sh tengsizlik (compound inequality)* deyiladi. Son o'qida u ikki doiracha orasidagi kesma bo'ladi (yuqoridagi rasmning uchinchi qatori).

Qo'sh tengsizlikni yechishda amalni uchala qismga **bir vaqtda** qo'llaymiz. Manfiy songa bo'lsak, ikkala belgi ham almashadi; shundan keyin javobni kichik sondan katta songa qarab qayta yozamiz.

Ba'zan ikki shart "yoki" bilan bog'lanadi: "$x < -1$ yoki $x > 4$". Bunday yozuvni qo'sh tengsizlik shaklida yozib bo'lmaydi; son o'qida u qarama-qarshi tomonga ketgan ikki nur bo'ladi.

::: {.misol}
Yeching: a) $-1 \leq 2x + 3 < 9$; shu tengsizlikning nechta butun yechimi bor? b) $-7 < 5 - 3x \leq 11$.

*Yechish.*

a) Uchala qismdan $3$ ni ayiramiz: $-4 \leq 2x < 6$. Uchala qismni $2$ ga bo'lamiz: $-2 \leq x < 3$. Butun yechimlar: $-2, -1, 0, 1, 2$, jami $5$ ta ($3$ kirmaydi, $-2$ kiradi).

b) Uchala qismdan $5$ ni ayiramiz: $-12 < -3x \leq 6$. Uchala qismni $-3$ ga bo'lamiz, ikkala belgi almashadi: $4 > x \geq -2$. Kichikdan kattaga qarab yozamiz: $-2 \leq x < 4$.

*Javob:* a) $-2 \leq x < 3$, $5$ ta butun yechim; b) $-2 \leq x < 4$.
:::

### Matnli masalada tengsizlik

Quyidagi so'zlarga e'tibor bering:

- "$x$ kamida $a$" (*at least*), "$x$ soni $a$ dan kam emas" — $x \geq a$;
- "$x$ ko'pi bilan $a$" (*at most*), "$x$ soni $a$ dan oshmaydi" — $x \leq a$;
- "$x$ soni $a$ dan ko'p", "$x$ soni $a$ dan oshadi" — $x > a$; "$x$ soni $a$ dan kam" — $x < a$.

Javobda miqdor butun bo'lishi kerak bo'lsa (odamlar, qutilar, kunlar), yechimni ma'nosiga qarab yaxlitlaymiz.

::: {.misol}
Yuk liftiga ko'pi bilan $600$ kg yuk ko'tarish mumkin. Liftchining massasi $80$ kg, har bir qutining massasi $35$ kg. Liftchi bir martada eng ko'pi bilan nechta qutini olib chiqa oladi?

*Yechish.* Qutilar sonini $q$ bilan belgilaymiz. Liftdagi jami massa $80 + 35q$ kg, u $600$ dan oshmasligi kerak:

$$80 + 35q \leq 600.$$

$35q \leq 520$, $q \leq \frac{520}{35} = \frac{104}{7} \approx 14.86$. Qutilar soni butun son, demak eng ko'pi bilan $14$ ta.

*Tekshirish:* $80 + 35 \cdot 14 = 570 \leq 600$, to'g'ri; $15$ ta quti bo'lsa $80 + 525 = 605 > 600$, sig'maydi.

*Javob:* $14$ ta quti.
:::

## Ko'p uchraydigan xatolar

**1. Manfiy songa bo'lganda belgini almashtirmaslik.**

*Noto'g'ri:* $-6x < 18$, demak $x < -3$.

*To'g'ri:* $-6$ ga bo'lganda belgi almashadi: $x > -3$. Tekshirish: $x = 0$ da $0 < 18$, to'g'ri, va $0 > -3$.

**2. Keraksiz joyda belgini almashtirish.**

*Noto'g'ri:* $x - 5 > -2$, ayirish bor, demak $x < 3$.

*To'g'ri:* belgi faqat **manfiy songa ko'paytirish yoki bo'lishda** almashadi. Ikkala tomonga $5$ qo'shamiz: $x > 3$. Javobda manfiy son chiqishi ham belgini almashtirishga sabab emas.

**3. Doirachalarni adashtirish.**

*Noto'g'ri:* $x \geq 2$ ni son o'qida $2$ da bo'sh doiracha bilan chizish.

*To'g'ri:* $\geq$ va $\leq$ da chegara yechimga kiradi, demak doiracha bo'yalgan bo'ladi.

**4. Manfiy chegarada butun yechimni noto'g'ri tanlash.**

*Noto'g'ri:* $x > -4.5$, eng kichik butun yechim $-5$.

*To'g'ri:* $-5$ son o'qida $-4.5$ dan chapda, demak $-5 < -4.5$. Eng kichik butun yechim $-4$.

**5. Qo'sh tengsizlikda amalni faqat o'rta qismga qo'llash.**

*Noto'g'ri:* $-3 < x + 2 < 5$, demak $-3 < x < 3$.

*To'g'ri:* $2$ ni **uchala** qismdan ayiramiz: $-5 < x < 3$.

## Mashqlar

Tengsizlik javobini $x$ chap tomonda turgan ko'rinishda yozing (masalan, $x \geq -\frac{1}{2}$), qo'sh tengsizlikni esa kichik sondan boshlab yozing. Kasr chegarani qisqarmas kasr ko'rinishida yozing.

### A daraja

::: {.mashq #m10-1 daraja="A" javob="$x > -4$"}
Yeching: $x + 6 > 2$.
:::

::: {.mashq #m10-2 daraja="A" javob="$x \leq -5$"}
Yeching: $x - 3 \leq -8$.
:::

::: {.mashq #m10-3 daraja="A" javob="$x < 7$"}
Yeching: $4x < 28$.
:::

::: {.mashq #m10-4 daraja="A" javob="$x \leq -6$"}
Yeching: $-5x \geq 30$.
:::

::: {.mashq #m10-5 daraja="A" javob="$x > -6$"}
Yeching: $\frac{x}{3} > -2$.
:::

::: {.mashq #m10-6 daraja="A" javob="$x > -8$"}
Yeching: $-\frac{x}{2} < 4$.
:::

::: {.mashq #m10-7 daraja="A" javob="$x > -3$"}
Son o'qida $-3$ nuqtada bo'sh doiracha turibdi va undan o'ngga qalin chiziq strelka bilan chizilgan. Bu qaysi tengsizlikning yechimlar to'plami?
:::

::: {.mashq #m10-8 daraja="A" javob="-3"}
$x \leq -2.5$ tengsizlikni qanoatlantiradigan eng katta butun sonni toping.
:::

### B daraja

::: {.mashq #m10-9 daraja="B" javob="$x \leq 6$"}
Yeching: $2x + 5 \leq 17$.
:::

::: {.mashq #m10-10 daraja="B" javob="$x < -4$"}
Yeching: $9 - 4x > 25$.
:::

::: {.mashq #m10-11 daraja="B" javob="$x < 5$"}
Yeching: $5x - 2 < 3x + 8$.
:::

::: {.mashq #m10-12 daraja="B" javob="$x \leq 7$"}
Yeching: $3(x + 4) \geq 5x - 2$.
:::

::: {.mashq #m10-13 daraja="B" javob="$x < 12$"}
Yeching: $\frac{x}{4} - 1 < \frac{x}{6}$.
:::

::: {.mashq #m10-14 daraja="B" javob="$-7 < x \leq 3$"}
Yeching: $-4 < x + 3 \leq 6$.
:::

::: {.mashq #m10-15 daraja="B" javob="$-3 \leq x < 4$"}
Yeching: $-9 \leq 3x < 12$.
:::

::: {.mashq #m10-16 daraja="B" javob="4"}
$4x - 3 > 10$ tengsizlikni qanoatlantiradigan eng kichik butun sonni toping.
:::

::: {.mashq #m10-17 daraja="B" javob="7"}
$-3 < x \leq 4$ qo'sh tengsizlikning nechta butun yechimi bor?
:::

### C daraja

::: {.mashq #m10-18 daraja="C" javob="$x \leq 4$"}
Yeching: $2(3x - 1) - (x + 4) \leq 3(x - 2) + 8$.
:::

::: {.mashq #m10-19 daraja="C" javob="$x \geq -5$"}
Yeching: $\frac{2x + 1}{3} \geq \frac{x - 1}{2}$.
:::

::: {.mashq #m10-20 daraja="C" javob="$-2 < x \leq 2$"}
Yeching: $1 \leq 5 - 2x < 9$.
:::

::: {.mashq #m10-21 daraja="C" javob="4"}
$-3x + 7 \geq 2x - 16$ tengsizlikni qanoatlantiradigan eng katta butun sonni toping.
:::

::: {.mashq #m10-22 daraja="C" javob="11"}
Mobil tarifda oylik to'lov $30\,000$ so'm, har bir gigabayt (GB) internet uchun esa yana $6000$ so'm olinadi. Nodira oylik xarajati $100\,000$ so'mdan oshmasligini xohlaydi. U bir oyda ko'pi bilan necha butun GB internet ishlata oladi?
:::

::: {.mashq #m10-23 daraja="C" javob="60"}
Maktab ekskursiyasi uchun avtobus ijarasi $900\,000$ so'm turadi, bundan tashqari har bir o'quvchiga muzeyga chipta $25\,000$ so'm. Har bir o'quvchi ekskursiya uchun $40\,000$ so'm to'laydi. Yig'ilgan pul barcha xarajatlarni qoplashi uchun ekskursiyaga kamida nechta o'quvchi borishi kerak?
:::

::: {.mashq #m10-24 daraja="C" javob="85"}
Dilnoza to'rtta testdan $78$, $85$, $90$ va $82$ ball oldi. Beshta test ballarining yig'indisi kamida $420$ bo'lsa, u sertifikat oladi. Sertifikat olish uchun beshinchi testdan kamida necha ball olishi kerak?
:::

::: {.mashq #m10-25 daraja="C" javob="$30 \leq d \leq 60$"}
Velosipedchi soatiga $15$ km tezlikda yurdi. U kamida $2$ soat, ko'pi bilan $4$ soat yo'l yurdi. U bosib o'tgan masofa $d$ (km) uchun qo'sh tengsizlik yozing.
:::

::: {.mashq #m10-26 daraja="C" javob="3"}
$x$ — butun son va $-5 < 2x + 1 \leq 7$. $x$ ning barcha mumkin bo'lgan qiymatlari yig'indisini toping.
:::

## SAT ko'prigi

Quyidagi savollar SAT uslubida, inglizcha yozilgan. *Satisfies* — "qanoatlantiradi" (tengsizlikni to'g'ri qiladi), *integer* — butun son, *pound* — funt, massa birligi. Javoblar kitob oxirida.

::: {.sat #s10-1 javob="A"}
Which of the following is the solution to the inequality $6 - 2x > 16$?

A) $x < -5$

B) $x > -5$

C) $x < -11$

D) $x > -11$
:::

::: {.sat #s10-2 javob="-7"}
What is the least integer value of $x$ that satisfies the inequality $4x + 9 > 2x - 6$?
:::

::: {.sat #s10-3 javob="A"}
A delivery truck can carry at most $2\,500$ pounds. The driver weighs $180$ pounds, and each box loaded onto the truck weighs $40$ pounds. Which inequality represents the possible numbers of boxes, $b$, that can be loaded onto the truck along with the driver?

A) $180 + 40b \leq 2\,500$

B) $180 + 40b \geq 2\,500$

C) $40 + 180b \leq 2\,500$

D) $180b + 40 \geq 2\,500$
:::

::: {.sat #s10-4 javob="B"}
If $-3 < 2x - 5 < 7$, which of the following could be the value of $x$?

A) $1$

B) $4$

C) $6$

D) $7$
:::

::: {.sat #s10-5 javob="C"}
For which of the following inequalities is $x = -2$ a solution?

A) $3x + 4 > 0$

B) $-x + 1 < 0$

C) $2x - 1 \leq -5$

D) $5 - x \leq 6$
:::
