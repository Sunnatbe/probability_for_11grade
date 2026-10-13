# 17. Jadval va grafiklarni o'qish

*SAT bo'limi:* Problem-Solving and Data Analysis

## Bu bobda

Gazetadagi diagramma, telefondagi ob-havo grafigi, maktabdagi so'rovnoma natijalari — ma'lumotlar ko'pincha son ro'yxati emas, jadval yoki rasm ko'rinishida beriladi. Bunday rasmdan to'g'ri sonni "o'qib olish" — alohida mahorat. Bu bobda:

- jadvalni, jumladan ikki tomonlama jadvalni o'qishni va undan foiz hisoblashni;
- ustunli diagrammani o'qishni;
- chiziqli grafikdan o'sish, kamayish va o'zgarish tezligini topishni;
- nuqtali diagrammani, bog'lanish turini va eng mos to'g'ri chiziq bilan bashorat qilishni o'rganamiz.

**SAT'da qayerda kerak?** Problem-Solving and Data Analysis bo'limidagi savollarning katta qismi jadval yoki grafik bilan beriladi: "According to the table, what percentage of...", "Based on the line of best fit, what is the predicted value...". Bu bob 6-bobdagi foizlarga, 12-bobdagi burchak koeffitsiyenti va o'zgarish tezligiga hamda 16-bobdagi o'rta qiymatga tayanadi.

## Yangi so'zlar

| O'zbekcha | English |
|---|---|
| jadval | table |
| qator | row |
| ustun (jadvalda) | column |
| jami | total |
| ikki tomonlama jadval | two-way table |
| ustunli diagramma | bar graph |
| chiziqli grafik | line graph |
| nuqtali diagramma | scatterplot |
| bog'lanish | association |
| musbat bog'lanish | positive association |
| manfiy bog'lanish | negative association |
| eng mos to'g'ri chiziq | line of best fit |
| bashorat | prediction |
| o'rtacha o'zgarish tezligi | average rate of change |

## Tushuntirish

### Jadval va ikki tomonlama jadval

*Jadval (table)* gorizontal *qatorlar (rows)* va vertikal *ustunlar (columns)* dan iborat. Har bir katakdagi son o'z qatori va o'z ustunining nomiga tegishli. Jadvalni o'qishdan oldin doim sarlavhalarni o'qing: sonlar nimani bildiradi, qanday birlikda?

Odamlar ikki belgi bo'yicha guruhlansa (masalan, sinfi va tanlagan to'garagi bo'yicha), *ikki tomonlama jadval (two-way table)* hosil bo'ladi. Unda odatda oxirgi ustun va oxirgi qator *jami (total)* ni ko'rsatadi:

- qatordagi sonlar yig'indisi shu qatorning "Jami" katagiga teng;
- ustundagi sonlar yig'indisi shu ustunning "Jami" katagiga teng;
- pastki o'ng burchakdagi son — umumiy son.

Shu qoidalar yordamida jadvaldagi noma'lum katakni topish mumkin.

**Jadvaldan foiz.** "Qismning necha foizi" savolida eng muhimi — **qaysi guruhga nisbatan** so'ralayotganini aniqlash. "10-sinf o'quvchilarining necha foizi..." deyilsa, maxrajda 10-sinf o'quvchilari soni (qatorning "Jami"si) turadi. "Shaxmatchilarning necha foizi..." deyilsa, maxrajda shaxmatchilar soni (ustunning "Jami"si) turadi. Foizni 6-bobdagidek topamiz: qismni butunga bo'lamiz va $100\%$ ga ko'paytiramiz. Xuddi shu fikr 18-bobda shartli ehtimollikka olib keladi.

::: {.misol}
Maktabdagi 9- va 10-sinf o'quvchilari bittadan sport to'garagini tanladi. Natijalar 17.1-jadvalda, uning ba'zi kataklari to'ldirilmagan:

|  | Futbol | Shaxmat | Suzish | Jami |
|---|---|---|---|---|
| 9-sinf | $30$ | $15$ | ? | $80$ |
| 10-sinf | $22$ | ? | $18$ | $50$ |
| Jami | $52$ | $25$ | $53$ | $130$ |

a) Noma'lum kataklarni toping.

b) 10-sinf o'quvchilarining necha foizi suzishni tanlagan?

c) Shaxmatni tanlaganlarning necha foizi 9-sinf o'quvchilari?

*Yechish.*

a) 9-sinf qatori: $30 + 15 + ? = 80$, demak suzish $80 - 45 = 35$. 10-sinf qatori: $22 + ? + 18 = 50$, demak shaxmat $50 - 40 = 10$. Ustunlar bilan tekshiramiz: shaxmat $15 + 10 = 25$, suzish $35 + 18 = 53$. To'g'ri.

b) Butun — 10-sinf o'quvchilari ($50$ ta), qism — ulardan suzishni tanlaganlar ($18$ ta): $\frac{18}{50} = 0.36$, ya'ni $36\%$.

c) Butun — shaxmatchilar ($25$ ta), qism — ulardan 9-sinfdagilar ($15$ ta): $\frac{15}{25} = 0.6$, ya'ni $60\%$.

*Javob:* a) $35$ va $10$; b) $36\%$; c) $60\%$.
:::

### Ustunli diagramma

*Ustunli diagramma (bar graph)* da har bir guruh bitta ustun bilan ko'rsatiladi; ustunning balandligi shu guruhdagi miqdorni bildiradi. Qiymatni o'qish uchun ustunning yuqori chetidan gorizontal chiziq bo'ylab vertikal o'qqa qaraymiz. Avval o'qdagi bo'linmalar qadamini aniqlang: quyidagi diagrammada raqamlar har $20$ da yozilgan, chiziqlar esa har $10$ da o'tkazilgan.

![17.1-rasm. Maktab kutubxonasidan oylar bo'yicha berilgan kitoblar soni](rasmlar/chiqish/17_ustunli.png){width=75%}

::: {.misol}
17.1-rasmga qarang. a) Oktabrda dekabrdagidan nechta ko'p kitob berilgan? b) Oktabrdan dekabrga berilgan kitoblar soni necha foizga kamaygan?

*Yechish.*

a) Oktabr ustuni $150$ chizig'igacha, dekabr ustuni $90$ chizig'igacha yetadi. Farq: $150 - 90 = 60$ ta.

b) Foizli o'zgarish (6-bob): o'zgarish dastlabki qiymatga bo'linadi. Dastlabki qiymat — oktabr: $\frac{60}{150} = 0.4$, ya'ni $40\%$ ga kamaygan.

*Javob:* a) $60$ ta; b) $40\%$ ga.
:::

### Chiziqli grafik

*Chiziqli grafik (line graph)* bitta miqdorning vaqt o'tishi bilan qanday o'zgarishini ko'rsatadi. Gorizontal o'qda vaqt, vertikal o'qda miqdor; o'lchangan nuqtalar kesmalar bilan tutashtiriladi.

- Kesma yuqoriga ko'tarilsa — miqdor oshgan, pastga tushsa — kamaygan.
- Kesma qanchalik tik bo'lsa, o'zgarish shunchalik tez.

Ikki vaqt orasidagi *o'rtacha o'zgarish tezligi (average rate of change)* 12-bobdagi burchak koeffitsiyentining o'zi:

$$\frac{y_2 - y_1}{x_2 - x_1},$$

ya'ni miqdorning o'zgarishi o'tgan vaqtga bo'linadi. Birligi "miqdor birligi / vaqt birligi", masalan °C/soat. Miqdor oshsa, tezlik musbat; miqdor kamaysa (masalan, harorat pasaysa), suratdagi ayirma manfiy bo'ladi, demak tezlik ham manfiy.

![17.2-rasm. Bahor kunida havo harorati (har 2 soatda o'lchangan)](rasmlar/chiqish/17_chiziqli.png){width=75%}

::: {.misol}
17.2-rasmga qarang.

a) Kun davomida o'lchangan eng yuqori harorat qancha va u soat nechada qayd etilgan?

b) Qaysi ikki soatlik oraliqda harorat eng tez ko'tarilgan? Shu oraliqdagi o'zgarish tezligini toping.

c) 10:00 dan 14:00 gacha bo'lgan o'rtacha o'zgarish tezligini toping.

*Yechish.*

a) Eng baland nuqta $18$ chizig'ida, vaqt o'qida 14:00. Eng yuqori harorat $18$ °C, soat 14:00 da.

b) Har bir ikki soatlik kesmani ko'zdan kechiramiz: ko'tariluvchi kesmalar ichida eng tigi — 8:00 dan 10:00 gacha. Bu kesmada harorat $6$ °C dan $12$ °C ga, ya'ni $6$ °C ga ko'tarilgan; qolgan ko'tariluvchi kesmalarda o'sish bundan kam (buni grafikdan o'zingiz tekshiring). Tezlik: $\frac{6}{2} = 3$ °C/soat.

c) 10:00 da $12$ °C, 14:00 da $18$ °C, o'tgan vaqt $4$ soat: $\frac{18 - 12}{14 - 10} = \frac{6}{4} = 1.5$ °C/soat.

*Javob:* a) $18$ °C, soat 14:00 da; b) 8:00 dan 10:00 gacha, $3$ °C/soat; c) $1.5$ °C/soat.
:::

### Nuqtali diagramma va eng mos to'g'ri chiziq

Har bir obyekt uchun ikkita miqdor o'lchansa (masalan, o'quvchining testga tayyorlangan soatlari va test bali), har bir obyekt koordinatalar tekisligida bitta nuqta bo'ladi. Bunday rasm *nuqtali diagramma (scatterplot)* deyiladi.

Nuqtalar qanday joylashganiga qarab ikki miqdor orasidagi *bog'lanish (association)* haqida gapiramiz:

- nuqtalar chapdan o'ngga qarab umuman ko'tarilsa — *musbat bog'lanish (positive association)*: bir miqdor oshsa, ikkinchisi ham odatda oshadi;
- nuqtalar umuman tushsa — *manfiy bog'lanish (negative association)*;
- aniq yo'nalish bo'lmasa — bog'lanish yo'q.

Nuqtalar taxminan to'g'ri chiziq bo'ylab joylashsa, ularning "o'rtasidan" o'tadigan to'g'ri chiziq chiziladi. U *eng mos to'g'ri chiziq (line of best fit)* deyiladi: nuqtalarning bir qismi undan yuqorida, bir qismi pastda bo'ladi, chiziq esa ularga iloji boricha yaqin o'tadi. Uning tenglamasi $y = mx + b$ (12-bob) bilan *bashorat (prediction)* qilamiz: $x$ ni qo'yib, kutilgan $y$ ni topamiz. Bashorat taxminiy: haqiqiy qiymat undan yuqori yoki past bo'lishi mumkin.

![17.3-rasm. O'quvchilarning testga tayyorgarlik vaqti va test bali; uzuq chiziq — eng mos to'g'ri chiziq](rasmlar/chiqish/17_nuqtali.png){width=75%}

E'tibor bering: 17.3-rasmda vertikal o'q $0$ dan emas, $40$ dan boshlanadi. Bo'linmalar: raqamlar har $10$ ballda, chiziqlar har $5$ ballda.

::: {.misol}
17.3-rasmda eng mos to'g'ri chiziq $y = 5x + 45$, bu yerda $x$ — tayyorgarlik vaqti (soat), $y$ — test bali.

a) Tayyorgarlik vaqti va test bali orasida qanday bog'lanish bor?

b) Tenglamadagi $5$ va $45$ sonlari nimani bildiradi?

c) $5.5$ soat tayyorlangan o'quvchi uchun bashorat qilingan ball qancha?

d) $3$ soat tayyorlangan o'quvchi $65$ ball oldi. Uning bali bashoratdan qanchaga farq qiladi?

*Yechish.*

a) Nuqtalar chapdan o'ngga qarab ko'tariladi: ko'proq tayyorlangan o'quvchilar odatda yuqoriroq ball olgan. Bu musbat bog'lanish.

b) $5$ — burchak koeffitsiyenti, ya'ni o'zgarish tezligi: har bir qo'shimcha soat tayyorgarlik uchun bashorat qilingan ball $5$ ga oshadi. $45$ — $x = 0$ dagi qiymat: umuman tayyorlanmagan o'quvchi uchun bashorat qilingan ball. Lekin $x = 0$ ma'lumotlar oralig'idan ($1$ dan $10$ soatgacha) tashqarida, shuning uchun bu son faqat taxminiy (4-xatoga qarang).

c) $y = 5 \cdot 5.5 + 45 = 27.5 + 45 = 72.5$ ball.

d) Bashorat: $5 \cdot 3 + 45 = 60$. Haqiqiy ball $65$, demak $65 - 60 = 5$ ball yuqori. Rasmda bu nuqta chiziqdan yuqorida turibdi.

*Javob:* a) musbat; b) $5$ — har soat uchun ball o'sishi, $45$ — tayyorgarliksiz bashorat; c) $72.5$; d) bashoratdan $5$ ball yuqori.
:::

## Ko'p uchraydigan xatolar

**1. Ustunlarni o'qning boshlanishiga qaramasdan solishtirish.**

*Noto'g'ri:* vertikal o'qi $85$ dan boshlangan diagrammada $100$ ning ustuni $90$ nikidan uch baravar baland ko'rinadi, demak qiymati ham uch baravar katta.

*To'g'ri:* qiymatlarni o'qdan o'qiymiz: $100$ soni $90$ dan atigi $10$ taga ko'p. Ustun uzunligini faqat o'q $0$ dan boshlanganda solishtirish mumkin.

**2. Jadvaldan foiz topishda noto'g'ri butunni olish.**

*Noto'g'ri:* Misol 1 dagi jadvalda "Shaxmatni tanlaganlarning necha foizi 9-sinf o'quvchilari?" savoliga $\frac{15}{80} = 18.75\%$.

*To'g'ri:* savol shaxmatchilar haqida, butun — shaxmatchilar soni: $\frac{15}{25} = 60\%$. ($\frac{15}{80}$ esa boshqa savolga javob: "9-sinf o'quvchilarining necha foizi shaxmatni tanlagan?")

**3. O'zgarish tezligida vaqtga bo'lishni unutish.**

*Noto'g'ri:* 17.2-rasmda 8:00 dan 14:00 gacha harorat $6$ °C dan $18$ °C ga ko'tarilgan, demak o'zgarish tezligi $12$ °C/soat.

*To'g'ri:* $12$ °C — o'zgarishning o'zi. Tezlik uchun uni o'tgan vaqtga bo'lamiz: $\frac{12}{6} = 2$ °C/soat.

**4. Eng mos to'g'ri chiziq bilan ma'lumotlardan juda uzoqda bashorat qilish.**

*Noto'g'ri:* $y = 5x + 45$ bo'yicha $12$ soat tayyorlangan o'quvchi $105$ ball oladi.

*To'g'ri:* test $100$ ballik, $105$ bo'lishi mumkin emas. Chiziq faqat ma'lumotlar bor oraliqda (bu yerda $1$ dan $10$ soatgacha) ishonchli. Undan uzoqlashsak, bashorat ma'nosini yo'qotishi mumkin.

## Mashqlar

Vaqtni soat va daqiqa bilan yozing (masalan, 7:15), vaqt oralig'ini "10:00 dan 12:00 gacha" ko'rinishida yozing. Foizni foiz belgisi bilan yozing (masalan, $12.5\%$). O'zgarish tezligini birliksiz son bilan yozing (masalan, $-4.5$). Boshqa javoblarni son bilan yozing.

17.1–17.3-rasmlarga oid mashqlarda kerakli qiymatlarni rasmdan o'qing. 17.5, 17.16, 17.17 va 17.20-mashqlar quyidagi jadvalga tegishli.

**17.2-jadval.** Maktab kutubxonasi so'rovnomasi: o'quvchilar eng ko'p o'qiydigan kitob turi.

|  | Badiiy | Ilmiy-ommabop | Tarixiy | Jami |
|---|---|---|---|---|
| 8-sinf | $33$ | $10$ | $17$ | $60$ |
| 9-sinf | $31$ | $30$ | $19$ | $80$ |
| Jami | $64$ | $40$ | $36$ | $140$ |

### A daraja

::: {.mashq #m17-1 daraja="A" javob="140"}
17.1-rasm bo'yicha noyabr oyida kutubxonadan nechta kitob berilgan?
:::

::: {.mashq #m17-2 daraja="A" javob="80"}
17.1-rasm bo'yicha eng ko'p kitob berilgan oyda eng kam kitob berilgan oydagidan nechta ko'p kitob berilgan?
:::

::: {.mashq #m17-3 daraja="A" javob="14"}
17.2-rasm bo'yicha soat 16:00 da havo harorati necha gradus bo'lgan?
:::

::: {.mashq #m17-4 daraja="A" javob="16"}
17.3-rasmda nechta o'quvchining ma'lumoti ko'rsatilgan?
:::

::: {.mashq #m17-5 daraja="A" javob="36"}
17.2-jadval bo'yicha jami nechta o'quvchi tarixiy kitoblarni tanlagan?
:::

::: {.mashq #m17-6 daraja="A" javob="4"}
17.3-rasm bo'yicha nechta o'quvchi testga $4$ soatdan kam tayyorlangan?
:::

::: {.mashq #m17-7 daraja="A" javob="780"}
17.1-rasm bo'yicha olti oy davomida kutubxonadan jami nechta kitob berilgan?
:::

::: {.mashq #m17-8 daraja="A" javob="18:00"}
17.2-rasm bo'yicha o'lchov o'tkazilgan vaqtlardan qaysi birida harorat $8$ °C bo'lgan?
:::

### B daraja

::: {.mashq #m17-9 daraja="B" javob="130"}
17.1-rasm bo'yicha kutubxonadan bir oyda o'rtacha nechta kitob berilgan (16-bob)?
:::

::: {.mashq #m17-10 daraja="B" javob="25%"}
17.1-rasm bo'yicha sentabrdan oktabrga berilgan kitoblar soni necha foizga oshgan?
:::

::: {.mashq #m17-11 daraja="B" javob="8"}
17.2-rasm bo'yicha 12:00 dan 18:00 gacha harorat necha gradusga pasaygan?
:::

::: {.mashq #m17-12 daraja="B" javob="-2.5"}
17.2-rasm bo'yicha 14:00 dan 18:00 gacha bo'lgan o'rtacha o'zgarish tezligini (°C/soat) toping.
:::

::: {.mashq #m17-13 daraja="B" javob="16:00 dan 18:00 gacha"}
17.2-rasm bo'yicha qaysi ikki soatlik oraliqda harorat eng tez pasaygan?
:::

::: {.mashq #m17-14 daraja="B" javob="82.5"}
17.3-rasmdagi eng mos to'g'ri chiziq $y = 5x + 45$ bo'yicha $7.5$ soat tayyorlangan o'quvchi uchun bashorat qilingan ball qancha?
:::

::: {.mashq #m17-15 daraja="B" javob="7"}
$y = 5x + 45$ modeli bo'yicha bashorat qilingan ball $80$ ga teng bo'ladigan tayyorgarlik vaqti necha soat?
:::

::: {.mashq #m17-16 daraja="B" javob="55%"}
17.2-jadval bo'yicha 8-sinf o'quvchilarining necha foizi badiiy kitoblarni tanlagan?
:::

::: {.mashq #m17-17 daraja="B" javob="75%"}
17.2-jadval bo'yicha ilmiy-ommabop kitoblarni tanlagan o'quvchilarning necha foizi 9-sinfda o'qiydi?
:::

### C daraja

::: {.mashq #m17-18 daraja="C" javob="126"}
17.1-rasmdagi oylardan keyin, mart oyida kutubxonadan fevraldagidan $40\%$ kam kitob berildi. Sentabrdan martgacha bo'lgan yetti oyda bir oyda o'rtacha nechta kitob berilgan?
:::

::: {.mashq #m17-19 daraja="C" javob="20:40"}
17.2-rasmdagi kunda harorat 18:00 dan keyin ham 16:00–18:00 oralig'idagi tezlik bilan bir tekis pasaygan deb hisoblang. Soat nechada harorat $0$ °C ga tushgan?
:::

::: {.mashq #m17-20 daraja="C" javob="39%"}
17.2-jadvaldagi so'rovnomadan keyin yana $20$ ta 9-sinf o'quvchisi so'raldi va ularning hammasi tarixiy kitoblarni tanladi. Endi 9-sinfda so'ralgan barcha o'quvchilarning necha foizi tarixiy kitoblarni tanlagan?
:::

::: {.mashq #m17-21 daraja="C" javob="20"}
Ikki o'quvchidan biri ikkinchisiga qaraganda testga $4$ soat ko'proq tayyorlandi. $y = 5x + 45$ modeli bo'yicha ularning bashorat qilingan ballari necha ballga farq qiladi?
:::

::: {.mashq #m17-22 daraja="C" javob="15"}
17.3-rasmda $4$ soat tayyorlangan o'quvchilardan birining bali bashoratdan past. Uning bali $y = 5x + 45$ bo'yicha bashorat qilingan balldan necha ball past?
:::

::: {.mashq #m17-23 daraja="C" javob="87.5"}
17.3-rasm bo'yicha testga $7$ soat yoki undan ko'proq tayyorlangan o'quvchilarning o'rtacha balini toping.
:::

::: {.mashq #m17-24 daraja="C" javob="56.25%"}
17.3-rasmdagi o'quvchilarning necha foizi eng mos to'g'ri chiziq bo'yicha bashorat qilingan balldan yuqori ball olgan?
:::

## SAT ko'prigi

Quyidagi savollar SAT uslubida, inglizcha yozilgan. *survey* — so'rovnoma, *surveyed* — so'ralgan, *scatterplot* — nuqtali diagramma, *line of best fit* — eng mos to'g'ri chiziq, *predicted* — bashorat qilingan, *average rate of change* — o'rtacha o'zgarish tezligi, *high temperature* — kunning eng yuqori harorati, *°F* — Farengeyt gradusi. Javobi foiz bo'lgan grid-in (javobni o'zingiz yozadigan) savolda SAT'da son % belgisisiz kiritiladi. Javoblar kitob oxirida.

::: {.sat #s17-1 javob="28"}
The table shows the results of a survey in which students at a school were asked how they usually get to school.

|  | Walk | Bus | Car | Total |
|---|---|---|---|---|
| Grade 9 | $26$ | $36$ | $18$ | $80$ |
| Grade 10 | $21$ | $39$ | $15$ | $75$ |
| Total | $47$ | $75$ | $33$ | $155$ |

What percentage of the grade 10 students surveyed usually walk to school?
:::

::: {.sat #s17-2 javob="C"}
A scatterplot shows the age $x$, in years, and the price $y$, in thousands of dollars, of $25$ used cars. The line of best fit for the data is $y = -1.6x + 24$. Which of the following is the best interpretation of $-1.6$ in this context?

A) The predicted price of a car decreases by about \$16,000 for each additional year of age.

B) The predicted price of a new car is about \$1,600.

C) The predicted price of a car decreases by about \$1,600 for each additional year of age.

D) The predicted price of a car increases by about \$1,600 for each additional year of age.
:::

::: {.sat #s17-3 javob="2.1"}
The table shows the height of a plant, in centimeters, measured every two weeks.

| Week | $0$ | $2$ | $4$ | $6$ | $8$ |
|---|---|---|---|---|---|
| Height (cm) | $3.0$ | $7.4$ | $12.2$ | $15.8$ | $18.0$ |

What is the average rate of change, in centimeters per week, of the height of the plant from week $2$ to week $6$?
:::

S17.4 va S17.5-savollar quyidagi ma'lumotga tegishli.

Questions S17.4 and S17.5 refer to the following information.

At a water stand, the line of best fit for a scatterplot of the daily high temperature $x$, in degrees Fahrenheit (°F), and the number of bottles of water sold $y$ is $y = 4.5x - 210$.

::: {.sat #s17-4 javob="168"}
Based on the line of best fit, how many bottles of water are predicted to be sold on a day when the high temperature is $84$°F?
:::

::: {.sat #s17-5 javob="19"}
On one day, the high temperature was $78$°F and the stand sold $160$ bottles of water. How many more bottles were sold that day than the number predicted by the line of best fit?
:::
