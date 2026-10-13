# 16. O'rta qiymat, mediana, moda

*SAT bo'limi:* Problem-Solving and Data Analysis

## Bu bobda

Sinfning test natijalari, bir haftalik havo harorati, do'kondagi kunlik savdo — bularning hammasi sonlar ro'yxati. Ro'yxat uzun bo'lsa, uni bir-ikki son bilan qisqa ta'riflash kerak bo'ladi: "o'rtacha qancha?", "o'rtadagisi qancha?", "eng ko'p qaysi biri uchraydi?". Bu bobda:

- o'rta qiymat, mediana, moda va kenglikni topishni;
- o'rta qiymat va yig'indi orasidagi bog'lanishni (yangi son qo'shilsa yoki olib tashlansa nima bo'lishini);
- boshqalardan keskin farq qiluvchi son o'rta qiymat va medianaga qanday ta'sir qilishini;
- chastotalar jadvalidan o'rta qiymat, mediana va modani topishni;
- vaznli o'rta qiymatni (ikki guruhning umumiy o'rta qiymatini);
- tarqoqlikni kenglik va standart chetlanish yordamida solishtirishni o'rganamiz.

**SAT'da qayerda kerak?** Problem-Solving and Data Analysis bo'limida deyarli har bir testda "What is the mean of...?", "If the value ... is removed, which statement about the mean and median is true?" kabi savollar bor. Ma'lumot ko'pincha ro'yxat, jadval yoki diagramma ko'rinishida beriladi. Bu bob 1–4-boblardagi arifmetikaga va 9-bobdagi chiziqli tenglamalarga tayanadi; diagrammalarni 17-bobda batafsil o'qiymiz.

## Yangi so'zlar

| O'zbekcha | English |
|---|---|
| ma'lumotlar | data |
| ma'lumotlar to'plami | data set |
| o'rta qiymat (o'rta arifmetik) | mean (average) |
| mediana | median |
| moda | mode |
| kenglik | range |
| keskin farq qiluvchi qiymat | outlier |
| chastota | frequency |
| chastotalar jadvali | frequency table |
| vaznli o'rta qiymat | weighted average |
| tarqoqlik | spread |
| standart chetlanish | standard deviation |

## Tushuntirish

### O'rta qiymat

Kuzatish yoki o'lchash natijasida yig'ilgan sonlar *ma'lumotlar (data)* deyiladi. Bitta savolga tegishli sonlar ro'yxati *ma'lumotlar to'plami (data set)* deyiladi; undagi har bir son — to'plamning bitta qiymati.

*O'rta qiymat (mean)* yoki *o'rta arifmetik (average)* ni topish uchun barcha qiymatlarni qo'shamiz va yig'indini qiymatlar soniga bo'lamiz. Masalan, $4$, $7$ va $13$ uchun:

$$\frac{4 + 7 + 13}{3} = \frac{24}{3} = 8.$$

Ma'nosi: agar umumiy miqdor ($24$) uch kishiga teng bo'lib berilsa, har biriga $8$ tadan tegardi.

Bundan muhim qoida kelib chiqadi. $n$ ta qiymatning o'rta qiymati $a$ bo'lsa, ularning yig'indisi $S$ quyidagicha:

$$S = n \cdot a.$$

SAT'dagi ko'p savollar aynan shu qoida bilan yechiladi: o'rta qiymatdan yig'indiga o'tamiz, yig'indilar bilan ishlaymiz, keyin yana o'rta qiymatga qaytamiz.

### Mediana va moda

*Mediana (median)* — qiymatlar o'sish tartibida (kichigidan kattasiga) terilganda qoq o'rtada turgan son.

- Qiymatlar soni toq bo'lsa, mediana — aynan o'rtadagi son. $n$ ta qiymatda u $\frac{n + 1}{2}$-o'rinda turadi.
- Qiymatlar soni juft bo'lsa, o'rtada ikkita son turadi; mediana — shu ikki sonning o'rta qiymati.

Medianadan oldin qiymatlarni **albatta tartiblash** kerak.

*Moda (mode)* — to'plamda eng ko'p takrorlangan qiymat. Agar hamma qiymatlar bir martadan uchrasa, moda yo'q; ikkita qiymat bir xil eng ko'p marta uchrasa, ikkalasi ham moda.

*Kenglik (range)* — eng katta va eng kichik qiymatlar ayirmasi. U qiymatlar qanchalik keng sochilganini ko'rsatadi.

::: {.misol}
a) Aziz bir hafta davomida har kuni necha daqiqa kitob o'qiganini yozib bordi: $12$, $8$, $20$, $5$, $14$, $8$, $10$. O'rta qiymat, mediana, moda va kenglikni toping.

b) Keyingi haftada u faqat $6$ kun o'qidi: $24$, $30$, $18$, $27$, $21$, $30$. Bu to'plamning o'rta qiymati va medianasini toping.

*Yechish.*

a) Yig'indi: $12 + 8 + 20 + 5 + 14 + 8 + 10 = 77$. Qiymatlar $7$ ta, demak o'rta qiymat $\frac{77}{7} = 11$ daqiqa.

Tartiblaymiz: $5$, $8$, $8$, $10$, $12$, $14$, $20$. Qiymatlar soni toq, o'rtadagisi $\frac{7 + 1}{2} = 4$-o'rinda: mediana $10$.

$8$ ikki marta, qolganlari bir martadan uchraydi: moda $8$.

Kenglik: $20 - 5 = 15$.

b) Yig'indi: $24 + 30 + 18 + 27 + 21 + 30 = 150$, o'rta qiymat $\frac{150}{6} = 25$.

Tartiblaymiz: $18$, $21$, $24$, $27$, $30$, $30$. Qiymatlar soni juft, o'rtada $24$ va $27$ turibdi: mediana $\frac{24 + 27}{2} = 25.5$.

*Javob:* a) o'rta qiymat $11$, mediana $10$, moda $8$, kenglik $15$; b) o'rta qiymat $25$, mediana $25.5$.
:::

### Qiymat qo'shilsa yoki olib tashlansa

To'plamga yangi son qo'shilsa yoki undan son olib tashlansa, yangi o'rta qiymatni hamma sonlarni qaytadan qo'shmasdan topish mumkin: avval $S = n \cdot a$ bilan yig'indini topamiz, keyin yig'indiga sonni qo'shamiz (yoki ayiramiz) va yangi songa bo'lamiz.

::: {.misol}
Malika $5$ ta testdan o'rtacha $84$ ball oldi. $6$ ta test bo'yicha o'rta qiymati $85$ bo'lishi uchun u $6$-testdan necha ball olishi kerak?

*Yechish.* Avval yig'indilarni topamiz.

- $5$ ta testning ballari yig'indisi: $5 \cdot 84 = 420$.
- $6$ ta test o'rtacha $85$ bo'lishi uchun yig'indi $6 \cdot 85 = 510$ bo'lishi kerak.

Demak, $6$-test: $510 - 420 = 90$ ball. Tekshirish: $\frac{420 + 90}{6} = \frac{510}{6} = 85$.

*Javob:* $90$ ball.
:::

E'tibor bering: o'rta qiymatni $1$ ballga ko'tarish uchun $85$ emas, $90$ ball kerak bo'ldi, chunki yangi test oldingi besh testning har birini $1$ balldan "ko'tarib" qo'yishi kerak.

### Keskin farq qiluvchi qiymat

Boshqa qiymatlardan juda katta yoki juda kichik bo'lgan son *keskin farq qiluvchi qiymat (outlier)* deyiladi. U o'rta qiymatni kuchli o'zgartiradi, medianani esa deyarli o'zgartirmaydi: mediana faqat o'rtada nima turganiga qaraydi, chetdagi son qanchalik katta ekani unga ahamiyatsiz.

::: {.misol}
Mahalladagi $5$ ta oilaning oylik daromadi (million so'mda): $6$, $7$, $7$, $8$, $12$. Mahallaga oylik daromadi $50$ million so'm bo'lgan yangi oila ko'chib keldi. O'rta qiymat va mediana qanday o'zgardi?

*Yechish.* Avval: yig'indi $6 + 7 + 7 + 8 + 12 = 40$, o'rta qiymat $\frac{40}{5} = 8$; tartiblangan, o'rtadagisi $7$, mediana $7$.

Keyin: yig'indi $40 + 50 = 90$, o'rta qiymat $\frac{90}{6} = 15$. Tartiblangan: $6$, $7$, $7$, $8$, $12$, $50$; o'rtada $7$ va $8$, mediana $\frac{7 + 8}{2} = 7.5$.

O'rta qiymat $8$ dan $15$ ga ko'tarildi (deyarli ikki baravar), mediana esa $7$ dan $7.5$ ga, ya'ni atigi yarim millionga o'zgardi.

*Javob:* o'rta qiymat $8$ dan $15$ ga, mediana $7$ dan $7.5$ ga o'zgardi; olti oiladan beshtasining daromadi yangi o'rta qiymatdan ancha kam.
:::

Xulosa: to'plamda keskin farq qiluvchi qiymat bo'lsa, "odatdagi" qiymatni mediana yaxshiroq ko'rsatadi. Juda katta qiymat o'rta qiymatni medianadan yuqoriga tortadi, juda kichik qiymat esa pastga tortadi.

SAT'da tez-tez so'raladigan yana bir qoida: **to'plamdagi har bir qiymatga bir xil son qo'shilsa**, o'rta qiymat ham, mediana ham, moda ham shu songa oshadi, kenglik esa o'zgarmaydi (eng katta va eng kichik qiymat bir xil songa siljiydi, ayirmasi saqlanadi).

**Tarqoqlik haqida.** Kenglik — qiymatlarning *tarqoqligini (spread)* o'lchaydigan eng sodda son. SAT'da ba'zan *standart chetlanish (standard deviation)* ham uchraydi: u qiymatlar o'rta qiymatdan o'rtacha qanchalik uzoqda joylashganini ko'rsatadi. Uni hisoblash talab qilinmaydi, faqat solishtirish kerak: qiymatlari o'rta qiymat atrofida zich to'plangan to'plamning standart chetlanishi kichik, keng sochilgan to'plamniki katta.

### Chastotalar jadvali

Qiymatlar ko'p takrorlansa, ularni *chastotalar jadvali (frequency table)* bilan yozish qulay. Har bir qiymatning yonida (yoki ostida) uning *chastotasi (frequency)*, ya'ni u necha marta uchragani yoziladi.

Bunday jadvalda:

- qiymatlar soni — chastotalar yig'indisi;
- qiymatlar yig'indisi — har bir qiymatni chastotasiga ko'paytirib, natijalarni qo'shish;
- mediana — avval qiymatlar sonidan o'rtadagi o'rin(lar)ni topamiz, keyin chastotalarni chapdan qo'shib borib, shu o'rin qaysi qiymatga to'g'ri kelishini aniqlaymiz; qiymatlar soni juft bo'lsa va o'rtadagi ikki o'rin har xil qiymatlarga tushsa, mediana shu ikki qiymatning o'rta qiymatiga teng;
- moda — chastotasi eng katta bo'lgan **qiymat** (chastotaning o'zi emas).

::: {.misol}
Sinfdagi o'quvchilardan "Oilangizda nechta bola bor?" deb so'raldi. Natijalar jadvalda:

| Oiladagi bolalar soni | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|
| Oilalar soni | $4$ | $9$ | $7$ | $3$ | $2$ |

O'rta qiymat, mediana va modani toping.

*Yechish.* Qiymatlar soni: $4 + 9 + 7 + 3 + 2 = 25$ ta oila.

Bolalar soni yig'indisi: $1 \cdot 4 + 2 \cdot 9 + 3 \cdot 7 + 4 \cdot 3 + 5 \cdot 2 = 4 + 18 + 21 + 12 + 10 = 65$.

O'rta qiymat: $\frac{65}{25} = 2.6$ bola.

Mediana: $25$ ta qiymatda o'rtadagisi $\frac{25 + 1}{2} = 13$-o'rinda. Chastotalarni qo'shib boramiz: $1$-o'rindan $4$-o'ringacha "$1$", keyingi $9$ ta, ya'ni $5$-o'rindan $13$-o'ringacha "$2$". Demak, $13$-o'rinda $2$ turibdi: mediana $2$.

Moda: eng katta chastota $9$, u $2$ qiymatiga tegishli: moda $2$.

*Javob:* o'rta qiymat $2.6$, mediana $2$, moda $2$.
:::

### Vaznli o'rta qiymat

Ikki guruhning o'rta qiymatlari ma'lum bo'lsa, ularning umumiy o'rta qiymatini topish uchun **o'rta qiymatlarning o'rta qiymatini olib bo'lmaydi** (agar guruhlar har xil kattalikda bo'lsa). To'g'ri yo'l — yana yig'indilar orqali:

$$\frac{n_1 a_1 + n_2 a_2}{n_1 + n_2},$$

bu yerda $n_1$ va $n_2$ — guruhlardagi qiymatlar soni, $a_1$ va $a_2$ — ularning o'rta qiymatlari. Bunday o'rta qiymat *vaznli o'rta qiymat (weighted average)* deyiladi: kattaroq guruh natijaga kuchliroq ta'sir qiladi. Xuddi shunday, "$4$ kg $9\,000$ so'mdan va $1$ kg $24\,000$ so'mdan" kabi xaridning $1$ kg ga to'g'ri keladigan o'rtacha narxi ham vaznli o'rta qiymat.

::: {.misol}
A sinfdagi $20$ o'quvchining test bo'yicha o'rtacha bali $72$, B sinfdagi $30$ o'quvchiniki $82$. Ikkala sinfning umumiy o'rtacha bali qancha?

*Yechish.* A sinf ballari yig'indisi: $20 \cdot 72 = 1440$. B sinfniki: $30 \cdot 82 = 2460$. Jami $50$ o'quvchi, ballar yig'indisi $1440 + 2460 = 3900$.

Umumiy o'rta qiymat: $\frac{3900}{50} = 78$.

Agar $\frac{72 + 82}{2} = 77$ deb hisoblasak, xato bo'lardi: B sinfda o'quvchi ko'proq, shuning uchun umumiy o'rta qiymat $82$ ga yaqinroq.

*Javob:* $78$ ball.
:::

## Ko'p uchraydigan xatolar

**1. Medianani tartiblamasdan topish.**

*Noto'g'ri:* $9$, $2$, $7$, $4$, $6$ ning medianasi $7$ (berilgan ro'yxatda o'rtada turibdi).

*To'g'ri:* avval tartiblaymiz: $2$, $4$, $6$, $7$, $9$. Mediana $6$.

**2. Juft sonli to'plamda o'rtadagi ikki sondan birini olish.**

*Noto'g'ri:* $3$, $5$, $8$, $10$ ning medianasi $5$ (yoki $8$).

*To'g'ri:* o'rtada ikkita son bor, mediana ularning o'rta qiymati: $\frac{5 + 8}{2} = 6.5$.

**3. Har xil kattalikdagi guruhlarning o'rta qiymatlarini o'rtalashtirish.**

*Noto'g'ri:* $10$ o'quvchining o'rtacha bali $70$, $30$ o'quvchiniki $90$, demak umumiy o'rta qiymat $\frac{70 + 90}{2} = 80$.

*To'g'ri:* yig'indilar orqali: $\frac{10 \cdot 70 + 30 \cdot 90}{40} = \frac{700 + 2700}{40} = \frac{3400}{40} = 85$.

**4. Chastotalar jadvalida chastotalarni va qiymatlarni adashtirish.**

| Qiymat | $1$ | $2$ | $3$ |
|---|---|---|---|
| Chastota | $5$ | $3$ | $2$ |

*Noto'g'ri:* o'rta qiymat $\frac{1 + 2 + 3}{3} = 2$; moda $5$ (eng katta son).

*To'g'ri:* qiymatlar $10$ ta, yig'indisi $1 \cdot 5 + 2 \cdot 3 + 3 \cdot 2 = 17$, o'rta qiymat $\frac{17}{10} = 1.7$. Moda — eng ko'p uchragan **qiymat**, ya'ni $1$ ($5$ esa uning chastotasi).

## Mashqlar

Javobni butun son yoki o'nli kasr ko'rinishida yozing (masalan, $14.25$); to'plamlarni solishtirish mashqida to'plam harfini yozing. O'lchov birligini (so'm, sm, ball) yozish shart emas.

### A daraja

::: {.mashq #m16-1 daraja="A" javob="9"}
$6$, $11$, $4$, $9$, $15$ sonlarining o'rta qiymatini toping.
:::

::: {.mashq #m16-2 daraja="A" javob="Q"}
Ikki to'plam berilgan. P to'plam: $48$, $49$, $50$, $51$, $52$. Q to'plam: $30$, $40$, $50$, $60$, $70$. Qaysi to'plamning standart chetlanishi kattaroq? Hisoblamasdan, qiymatlarning tarqoqligiga qarab javob bering va to'plam harfini yozing.
:::

::: {.mashq #m16-3 daraja="A" javob="14"}
$14$, $6$, $3$, $14$, $11$, $3$, $14$, $10$ to'plamining modasini toping.
:::

::: {.mashq #m16-4 daraja="A" javob="38"}
Besh kun davomida bozordagi do'konga kelgan xaridorlar soni: $41$, $18$, $56$, $27$, $45$. Bu ma'lumotlar to'plamining kengligini toping.
:::

::: {.mashq #m16-5 daraja="A" javob="12.5"}
$16$, $7$, $15$, $10$, $20$, $9$ sonlarining medianasini toping.
:::

::: {.mashq #m16-6 daraja="A" javob="3.8"}
Sardor bir haftada $4$ marta yugurdi: $2.4$ km, $3.1$ km, $4.5$ km va $5.2$ km. U o'rtacha necha kilometr yugurgan?
:::

::: {.mashq #m16-7 daraja="A" javob="96"}
Oltita sonning o'rta qiymati $16$ ga teng. Bu sonlarning yig'indisini toping.
:::

::: {.mashq #m16-8 daraja="A" javob="-1"}
Yanvar oyining bir haftasida ertalabki havo harorati (°C): $-3$, $2$, $-5$, $0$, $4$, $-4$, $-1$. Haftalik o'rtacha ertalabki haroratni toping.
:::

### B daraja

::: {.mashq #m16-9 daraja="B" javob="16"}
To'rtta son $12$, $15$, $9$ va $x$ ning o'rta qiymati $13$ ga teng. $x$ ni toping.
:::

::: {.mashq #m16-10 daraja="B" javob="162"}
Basketbol to'garagidagi $5$ o'quvchining o'rtacha bo'yi $160$ sm. To'garakka bo'yi $172$ sm bo'lgan yangi o'quvchi qo'shildi. Endi $6$ o'quvchining o'rtacha bo'yi qancha?
:::

::: {.mashq #m16-11 daraja="B" javob="34"}
Sakkizta sonning o'rta qiymati $20$ ga teng. Ulardan bittasi olib tashlangach, qolgan yettita sonning o'rta qiymati $18$ bo'ldi. Qaysi son olib tashlangan?
:::

::: {.mashq #m16-12 daraja="B" javob="2.4"}
Maktab futbol jamoasi $20$ ta o'yinda urgan gollar soni jadvalda berilgan:

| Urilgan gollar | $0$ | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|---|
| O'yinlar soni | $2$ | $3$ | $4$ | $7$ | $4$ |

Jamoa bir o'yinda o'rtacha nechta gol urgan?
:::

::: {.mashq #m16-13 daraja="B" javob="3"}
Oldingi mashqdagi jadval bo'yicha bir o'yinda urilgan gollar sonining medianasini toping.
:::

::: {.mashq #m16-14 daraja="B" javob="7.75"}
$11$, $12$, $14$, $16$, $52$ to'plamidan $52$ olib tashlandi. To'plamning o'rta qiymati qanchaga kamaydi?
:::

::: {.mashq #m16-15 daraja="B" javob="14400"}
Onam bozordan $3$ kg olmani kilogrammi $12\,000$ so'mdan va $2$ kg nokni kilogrammi $18\,000$ so'mdan oldi. Sotib olingan mevaning $1$ kilogrammi o'rtacha necha so'mga tushgan?
:::

::: {.mashq #m16-16 daraja="B" javob="8.2"}
Sport musobaqasida $15$ o'g'il bola o'rtacha $8.8$ km, $10$ qiz bola esa o'rtacha $7.3$ km yugurdi. Barcha $25$ ishtirokchi o'rtacha necha kilometr yugurgan?
:::

::: {.mashq #m16-17 daraja="B" javob="18"}
$3$, $7$, $10$, $12$ va $x$ sonlari berilgan, bu yerda $x$ soni $12$ dan katta. Bu besh sonning o'rta qiymati ularning medianasiga teng. $x$ ni toping.
:::

### C daraja

::: {.mashq #m16-18 daraja="C" javob="98"}
Malika birinchi $4$ ta testdan o'rtacha $78$ ball oldi. Besh test bo'yicha o'rtacha bali kamida $82$ bo'lishi uchun u $5$-testdan kamida necha ball olishi kerak?
:::

::: {.mashq #m16-19 daraja="C" javob="66"}
O'qituvchi sinfdagi $25$ o'quvchining o'rtacha balini $68$ deb hisobladi. Keyin bitta o'quvchining bali $47$ o'rniga $97$ deb noto'g'ri yozilgani aniqlandi. To'g'ri o'rtacha ball qancha?
:::

::: {.mashq #m16-20 daraja="C" javob="120"}
Dehqon besh kun bozorda kartoshka sotdi. Dastlabki to'rt kunda u $120$ kg, $95$ kg, $140$ kg va $110$ kg sotdi. Besh kun bo'yicha kuniga o'rtacha $118$ kg sotgani ma'lum. Besh kunlik savdoning medianasini toping.
:::

::: {.mashq #m16-21 daraja="C" javob="12"}
Mahallada oilalar a'zolari soni so'raldi: $2$ kishilik oilalar $4$ ta, $3$ kishilik oilalar $6$ ta, $5$ kishilik oilalar $2$ ta, $4$ kishilik oilalar esa $k$ ta. Bir oiladagi a'zolar sonining o'rta qiymati $3.5$ ga teng. $k$ ni toping.
:::

::: {.mashq #m16-22 daraja="C" javob="72"}
Sayohatda avtobus $2$ soat davomida $60$ km/soat tezlik bilan, keyin $3$ soat davomida $80$ km/soat tezlik bilan yurdi. Butun yo'l bo'yicha o'rtacha tezlik (umumiy masofaning umumiy vaqtga nisbati) qancha?
:::

::: {.mashq #m16-23 daraja="C" javob="75"}
Maktab olimpiada jamoasida $20$ o'quvchi bor, ularning o'rtacha bali $79$. Jamoadagi $8$ o'quvchining o'rtacha bali $85$. Qolgan $12$ o'quvchining o'rtacha bali qancha?
:::

::: {.mashq #m16-24 daraja="C" javob="23"}
$14$, $18$, $21$, $25$, $30$, $36$ to'plamiga ikkita yangi son qo'shildi: $10$ va $40$. Yangi to'plamning medianasini toping.
:::

::: {.mashq #m16-25 daraja="C" javob="2.5"}
Kichik firmada $9$ kishi ishlaydi. $8$ ta xodimning har biri oyiga $4.5$ million so'm, rahbar esa $27$ million so'm maosh oladi. Oylik maoshning o'rta qiymati medianasidan necha million so'm katta?
:::

## SAT ko'prigi

Quyidagi savollar SAT uslubida, inglizcha yozilgan. *mean* — o'rta qiymat, *median* — mediana, *data set* — ma'lumotlar to'plami, *removed* — olib tashlandi, *each* — har bir, *combined* — birlashtirilgan (umumiy). Javoblar kitob oxirida.

::: {.sat #s16-1 javob="A"}
A data set consists of the $9$ values $3$, $4$, $4$, $5$, $6$, $6$, $7$, $8$, and $38$. If the value $38$ is removed from the data set, which of the following statements is true?

A) The mean and the median will both decrease.

B) The mean will decrease, and the median will increase.

C) The mean will decrease, and the median will not change.

D) The mean will not change, and the median will decrease.
:::

::: {.sat #s16-2 javob="46"}
The mean of a list of $10$ numbers is $24$. When the number $x$ is added to the list, the mean of the $11$ numbers is $26$. What is the value of $x$?
:::

::: {.sat #s16-3 javob="1.1"}
The table shows the number of books each of $20$ students read last month.

| Books read | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| Number of students | $6$ | $8$ | $4$ | $2$ |

What is the mean number of books read per student?
:::

::: {.sat #s16-4 javob="B"}
A club has two groups. Group A has $18$ members whose mean age is $30$ years. Group B has $12$ members whose mean age is $40$ years. What is the mean age, in years, of the combined $30$ members?

A) $36$

B) $34$

C) $70$

D) $35$
:::

::: {.sat #s16-5 javob="C"}
Data set Y is created by adding $5$ to each value in data set X. Which of the following statements is true?

A) The mean of data set Y is equal to the mean of data set X, and the range of data set Y is equal to the range of data set X.

B) The mean of data set Y is $5$ greater than the mean of data set X, and the range of data set Y is $5$ greater than the range of data set X.

C) The mean of data set Y is $5$ greater than the mean of data set X, and the range of data set Y is equal to the range of data set X.

D) The mean of data set Y is equal to the mean of data set X, and the range of data set Y is $5$ greater than the range of data set X.
:::
