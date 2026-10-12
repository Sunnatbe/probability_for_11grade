# 07. Darajalar va ildizlar

*SAT bo'limi:* Advanced Math; Problem-Solving and Data Analysis

## Bu bobda

1-bobda $5^2$ ni, 2-bobda $2^3$ ni ko'rgan edik va "darajalar haqida 7-bobda batafsil gaplashamiz" degan edik. Mana shu bob. Bu bobda:

- daraja, uning asosi va ko'rsatkichini;
- darajalarning asosiy xossalarini (ko'paytirish, bo'lish, darajani darajaga ko'tarish);
- nolinchi va manfiy darajalarni;
- kvadrat ildiz va kub ildizni;
- ildiz ostidan to'liq kvadrat ko'paytuvchini chiqarib, ildizni soddalashtirishni o'rganamiz.

**SAT'da qayerda kerak?** Advanced Math bo'limida "Which of the following is equivalent to ...?" (qaysi ifoda bunga teng?) turidagi savollar darajalar xossalariga tayanadi; ildizlarni soddalashtirish ham shu bo'limda keladi. Problem-Solving and Data Analysis bo'limida esa har soatda ikki baravar ko'payish kabi o'sish masalalari uchraydi. 19–20-boblarda (Pifagor teoremasi, yuz va hajm) ildiz va darajalar har qadamda kerak bo'ladi.

## Yangi so'zlar

| O'zbekcha | English |
|---|---|
| daraja | power |
| daraja asosi | base |
| daraja ko'rsatkichi | exponent |
| kub | cube |
| nolinchi daraja | zero exponent |
| manfiy daraja | negative exponent |
| kvadrat ildiz | square root |
| kub ildiz | cube root |
| ildiz belgisi | radical sign |
| to'liq kvadrat | perfect square |
| to'liq kub | perfect cube |

## Tushuntirish

### Daraja nima?

Bir xil sonlarning ko'paytmasini qisqa yozish uchun *daraja (power)* ishlatiladi:

$$2^5 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 32.$$

Bu yerda $2$ — *daraja asosi (base)*, ya'ni ko'paytirilayotgan son; $5$ — *daraja ko'rsatkichi (exponent)*, ya'ni asos necha marta ko'paytuvchi bo'lib kelishi. $2^5$ "ikkining beshinchi darajasi" deb o'qiladi. Inglizcha matnlarda ko'rsatkichni ham, darajaning o'zini ham ko'pincha *exponent* deb atashadi (1-bobda shunday degan edik).

Umumiy holda, $n$ natural son bo'lsa:

$$a^n = a \cdot a \cdot \ldots \cdot a,$$

bu yerda o'ng tomonda $n$ ta ko'paytuvchi bor. Bu yozuvda $a$ — istalgan son, $n$ esa ko'paytuvchilar soni. Harflar qoidani har qanday son uchun bir yo'la aytishning qisqa usuli (harfli ifodalar haqida 8-bobda batafsil).

Ba'zi darajalarning alohida nomi bor: $a^2$ — $a$ ning kvadrati (1-bob), $a^3$ — $a$ ning *kubi (cube)*. Har qanday son uchun $a^1 = a$.

**Ishora.** Manfiy son juft darajaga ko'tarilsa natija musbat, toq darajaga ko'tarilsa manfiy bo'ladi: $(-2)^4 = 16$, $(-2)^3 = -8$. 1-bobdagi farqni eslang: $-3^2 = -9$, lekin $(-3)^2 = 9$.

**Kasrni darajaga ko'tarish.** Surat ham, maxraj ham darajaga ko'tariladi: $\left(\frac{2}{3}\right)^2 = \frac{2}{3} \cdot \frac{2}{3} = \frac{4}{9}$.

Amallar tartibida daraja ko'paytirish va bo'lishdan **oldin** bajariladi (1-bob): $3 \cdot 2^2 = 3 \cdot 4 = 12$, $36$ emas.

::: {.misol}
Hisoblang: a) $(-2)^5$; b) $\left(\frac{2}{3}\right)^3$; c) $-2^4$.

*Yechish.*

a) Ko'rsatkich toq, demak natija manfiy: $(-2)^5 = -(2 \cdot 2 \cdot 2 \cdot 2 \cdot 2) = -32$.

b) $\left(\frac{2}{3}\right)^3 = \frac{2 \cdot 2 \cdot 2}{3 \cdot 3 \cdot 3} = \frac{8}{27}$.

c) Qavs yo'q, shuning uchun avval daraja, keyin minus: $-2^4 = -(2 \cdot 2 \cdot 2 \cdot 2) = -16$.

*Javob:* a) $-32$; b) $\frac{8}{27}$; c) $-16$.
:::

### Darajalarning xossalari

Quyidagi qoidalarni yodlash shart emas: har birini ko'paytuvchilarni yoyib yozib, o'zingiz tekshirib ko'rishingiz mumkin.

**1. Asoslari bir xil darajalarni ko'paytirish:** ko'rsatkichlar qo'shiladi.

$$a^m \cdot a^n = a^{m+n}.$$

Masalan, $2^3 \cdot 2^2 = (2 \cdot 2 \cdot 2) \cdot (2 \cdot 2) = 2^5$. Jami $3 + 2 = 5$ ta ikkilik.

**2. Asoslari bir xil darajalarni bo'lish:** ko'rsatkichlar ayiriladi ($a \neq 0$).

$$\frac{a^m}{a^n} = a^{m-n}.$$

Masalan, $\frac{5^6}{5^4} = 5^2$: suratdagi oltita beshlikdan to'rttasi maxrajdagi to'rtta beshlik bilan qisqaradi.

**3. Darajani darajaga ko'tarish:** ko'rsatkichlar ko'paytiriladi.

$$\left(a^m\right)^n = a^{m \cdot n}.$$

Masalan, $\left(2^3\right)^2 = 2^3 \cdot 2^3 = 2^6$.

**4. Ko'paytmani darajaga ko'tarish:** har bir ko'paytuvchi darajaga ko'tariladi.

$$(a \cdot b)^n = a^n \cdot b^n.$$

Masalan, $(2 \cdot 5)^3 = 2^3 \cdot 5^3$. Bu qoidani teskari tomonga ham ishlatish foydali: ko'rsatkichlari bir xil bo'lsa, asoslarni ko'paytirish mumkin: $2^3 \cdot 5^3 = (2 \cdot 5)^3 = 10^3 = 1000$.

**5. Kasrni darajaga ko'tarish** (yuqorida ko'rdik, $b \neq 0$):

$$\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}.$$

Diqqat: 1- va 2-qoidalar faqat **asoslari bir xil** bo'lganda ishlaydi. $2^3 \cdot 3^2$ ni bitta darajaga birlashtirib bo'lmaydi; uni shunchaki hisoblaymiz: $8 \cdot 9 = 72$.

**Asoslarni bir xil qilish.** Ko'pincha asoslar har xil ko'rinadi, lekin ular bitta sonning darajalari bo'ladi: $4 = 2^2$, $8 = 2^3$, $9 = 3^2$, $27 = 3^3$, $25 = 5^2$. Masalan, $9^3 = \left(3^2\right)^3 = 3^6$.

::: {.misol}
Hisoblang: a) $\frac{3^7 \cdot 3^2}{3^6}$; b) $\frac{\left(5^2\right)^3}{5^5}$.

*Yechish.*

a) 1-qoida: $3^7 \cdot 3^2 = 3^{7+2} = 3^9$. 2-qoida: $\frac{3^9}{3^6} = 3^{9-6} = 3^3 = 27$.

b) 3-qoida: $\left(5^2\right)^3 = 5^{2 \cdot 3} = 5^6$. 2-qoida: $\frac{5^6}{5^5} = 5^{6-5} = 5^1 = 5$.

*Javob:* a) $27$; b) $5$.
:::

### Nolinchi va manfiy daraja

Ikkining darajalarini ketma-ket yozib chiqamiz:

$2^4 = 16$, $2^3 = 8$, $2^2 = 4$, $2^1 = 2$.

Ko'rsatkich $1$ ga kamayganda natija $2$ ga bo'linadi. Shu qonuniyatni davom ettirsak:

$2^0 = 2 \div 2 = 1$, $2^{-1} = \frac{1}{2}$, $2^{-2} = \frac{1}{4}$.

Shundan quyidagi ta'riflar kelib chiqadi ($a \neq 0$, $n$ — natural son):

- **nolinchi daraja (zero exponent):** $a^0 = 1$. Buni 2-qoida ham tasdiqlaydi: $\frac{5^3}{5^3} = 5^{3-3} = 5^0$, boshqa tomondan esa har qanday son o'ziga bo'linsa $1$ chiqadi;
- **manfiy daraja (negative exponent):** $a^{-n} = \frac{1}{a^n}$. Manfiy ko'rsatkich natijani manfiy qilmaydi, u **teskari son**ni (3-bob) bildiradi: $2^{-1} = \frac{1}{2}$.

Kasr manfiy darajaga ko'tarilsa, u ag'dariladi: $\left(\frac{a}{b}\right)^{-n} = \left(\frac{b}{a}\right)^n$. Masalan, $\left(\frac{1}{3}\right)^{-2} = 3^2 = 9$.

O'nning darajalari o'nli kasrlar bilan bog'liq (4-bob): $10^2 = 100$, $10^1 = 10$, $10^0 = 1$, $10^{-1} = \frac{1}{10} = 0.1$, $10^{-2} = \frac{1}{100} = 0.01$.

Yuqoridagi beshta xossa nolinchi va manfiy ko'rsatkichlar uchun ham o'rinli. $0^0$ va nolning manfiy darajalari aniqlanmagan, shuning uchun asos $0$ bo'lmasligi kerak.

::: {.misol}
Hisoblang: a) $2^{-3}$; b) $\left(\frac{3}{4}\right)^{-2}$; c) $7^0 + 10^{-2}$.

*Yechish.*

a) $2^{-3} = \frac{1}{2^3} = \frac{1}{8}$.

b) Kasrni ag'daramiz: $\left(\frac{3}{4}\right)^{-2} = \left(\frac{4}{3}\right)^2 = \frac{16}{9}$.

c) $7^0 = 1$, $10^{-2} = 0.01$, demak $1 + 0.01 = 1.01$.

*Javob:* a) $\frac{1}{8}$; b) $\frac{16}{9}$; c) $1.01$.
:::

### Kvadrat ildiz

$a$ sonining *kvadrat ildizi (square root)* — kvadrati $a$ ga teng bo'lgan **manfiy bo'lmagan** son. U $\sqrt{a}$ deb yoziladi; bundagi belgi *ildiz belgisi (radical sign)* deyiladi. Masalan, $\sqrt{49} = 7$, chunki $7^2 = 49$ va $7 \geq 0$.

E'tibor bering: $(-7)^2 = 49$ ham to'g'ri, lekin $\sqrt{49}$ belgisi faqat musbat javobni, ya'ni $7$ ni bildiradi. Manfiy sondan kvadrat ildiz olinmaydi, chunki hech bir sonning kvadrati manfiy emas.

Butun sonning kvadrati bo'lgan son *to'liq kvadrat (perfect square)* deyiladi. Birinchi to'liq kvadratlarni bilib olish foydali:

$$1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144.$$

Ildizning xossalari ($a \geq 0$, $b \geq 0$):

- $\left(\sqrt{a}\right)^2 = a$, masalan $\left(\sqrt{7}\right)^2 = 7$;
- $\sqrt{a^2}$ har doim manfiy emas: $\sqrt{(-5)^2} = \sqrt{25} = 5$. Ya'ni $\sqrt{a^2}$ son $a$ ning moduliga (1-bob) teng;
- $\sqrt{a \cdot b} = \sqrt{a} \cdot \sqrt{b}$, masalan $\sqrt{4 \cdot 25} = 2 \cdot 5 = 10$;
- $\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}}$ ($b \neq 0$).

Qo'shish uchun bunday qoida **yo'q**: $\sqrt{a + b}$ odatda $\sqrt{a} + \sqrt{b}$ ga teng emas.

To'liq kvadrat bo'lmagan sonning ildizi butun son emas, lekin uni baholash mumkin: $\sqrt{30}$ ni olaylik. $25 < 30 < 36$, demak $5 < \sqrt{30} < 6$.

### Kub ildiz

$a$ sonining *kub ildizi (cube root)* — kubi $a$ ga teng bo'lgan son: $\sqrt[3]{8} = 2$, chunki $2^3 = 8$. Kvadrat ildizdan farqli ravishda, manfiy sonning ham kub ildizi bor: $\sqrt[3]{-8} = -2$, chunki $(-2)^3 = -8$.

Butun sonning kubi bo'lgan son *to'liq kub (perfect cube)* deyiladi: $1$, $8$, $27$, $64$, $125$ va $10^3 = 1000$. O'nli kasrdan ham ildiz olish mumkin: $\sqrt[3]{0.027} = 0.3$, chunki $0.3^3 = 0.027$.

::: {.misol}
Hisoblang: a) $\sqrt{144}$; b) $\sqrt[3]{-125}$; c) $\sqrt{\frac{9}{49}}$; d) $\sqrt{0.36}$. e) $\sqrt{60}$ qaysi ikki ketma-ket butun son orasida joylashgan?

*Yechish.*

a) $12^2 = 144$, demak $\sqrt{144} = 12$.

b) $(-5)^3 = -125$, demak $\sqrt[3]{-125} = -5$.

c) $\sqrt{\frac{9}{49}} = \frac{\sqrt{9}}{\sqrt{49}} = \frac{3}{7}$.

d) $0.36 = \frac{36}{100}$, demak $\sqrt{0.36} = \frac{6}{10} = 0.6$. Tekshirish: $0.6 \cdot 0.6 = 0.36$.

e) $49 < 60 < 64$, demak $7 < \sqrt{60} < 8$.

*Javob:* a) $12$; b) $-5$; c) $\frac{3}{7}$; d) $0.6$; e) $7$ va $8$ orasida.
:::

### Ildizni soddalashtirish

$\sqrt{72}$ butun son emas, lekin uni soddaroq yozish mumkin. Buning uchun ildiz ostidagi sonni **to'liq kvadrat** va boshqa son ko'paytmasiga ajratamiz, keyin $\sqrt{a \cdot b} = \sqrt{a} \cdot \sqrt{b}$ xossasini ishlatamiz. $6\sqrt{2}$ yozuvi $6 \cdot \sqrt{2}$ degani.

Har doim **eng katta** to'liq kvadrat bo'luvchini tanlang. Aks holda ish oxiriga yetmaydi: $\sqrt{72} = \sqrt{4 \cdot 18} = 2\sqrt{18}$, lekin $18$ ichida yana $9$ bor, demak $2\sqrt{18} = 2 \cdot 3\sqrt{2} = 6\sqrt{2}$.

Ildiz osti bir xil bo'lgan ifodalarni xuddi bir xil narsalardek qo'shish va ayirish mumkin: $5\sqrt{2} + 3\sqrt{2} = 8\sqrt{2}$ (5 ta $\sqrt{2}$ ga yana 3 ta $\sqrt{2}$ qo'shildi). Ildiz osti har xil bo'lsa, masalan $\sqrt{2} + \sqrt{3}$, uni bitta ildizga birlashtirib bo'lmaydi.

::: {.misol}
Soddalashtiring: a) $\sqrt{72}$; b) $\sqrt{50} + \sqrt{18}$.

*Yechish.*

a) $72$ ning to'liq kvadrat bo'luvchilari: $4, 9, 36$. Eng kattasi $36$: $\sqrt{72} = \sqrt{36 \cdot 2} = \sqrt{36} \cdot \sqrt{2} = 6\sqrt{2}$.

*Tekshirish:* $\left(6\sqrt{2}\right)^2 = 36 \cdot 2 = 72$. To'g'ri.

b) Har birini soddalashtiramiz: $\sqrt{50} = \sqrt{25 \cdot 2} = 5\sqrt{2}$, $\sqrt{18} = \sqrt{9 \cdot 2} = 3\sqrt{2}$. Ildiz ostilari bir xil: $5\sqrt{2} + 3\sqrt{2} = 8\sqrt{2}$.

*Javob:* a) $6\sqrt{2}$; b) $8\sqrt{2}$.
:::

**SAT uchun eslatma.** SAT'da ildiz ba'zan kasr ko'rsatkichli daraja ko'rinishida yoziladi: $a^{\frac{1}{2}} = \sqrt{a}$ va $a^{\frac{1}{3}} = \sqrt[3]{a}$. Masalan, $16^{\frac{1}{2}} = \sqrt{16} = 4$. Bunday yozuvni ko'rsangiz, uni ildizga aylantiring.

## Ko'p uchraydigan xatolar

**1. Asosni ko'rsatkichga ko'paytirish.**

*Noto'g'ri:* $2^4 = 2 \cdot 4 = 8$.

*To'g'ri:* $2^4 = 2 \cdot 2 \cdot 2 \cdot 2 = 16$.

**2. Ko'paytirishda ko'rsatkichlarni ko'paytirish yoki har xil asoslarni birlashtirish.**

*Noto'g'ri:* $2^3 \cdot 2^4 = 2^{12}$; $2^3 \cdot 3^2 = 6^5$.

*To'g'ri:* asoslar bir xil bo'lsa ko'rsatkichlar **qo'shiladi**: $2^3 \cdot 2^4 = 2^7 = 128$. Asoslar har xil bo'lsa, shunchaki hisoblaymiz: $2^3 \cdot 3^2 = 8 \cdot 9 = 72$.

**3. Nolinchi va manfiy darajani noto'g'ri tushunish.**

*Noto'g'ri:* $5^0 = 0$; $2^{-3} = -8$.

*To'g'ri:* $5^0 = 1$; manfiy ko'rsatkich teskari sonni bildiradi: $2^{-3} = \frac{1}{2^3} = \frac{1}{8}$.

**4. Yig'indidan ildizni har bir qo'shiluvchidan alohida olish.**

*Noto'g'ri:* $\sqrt{9 + 16} = \sqrt{9} + \sqrt{16} = 3 + 4 = 7$.

*To'g'ri:* avval ildiz ostini hisoblaymiz: $\sqrt{9 + 16} = \sqrt{25} = 5$. Xuddi shuningdek, $\sqrt{2} + \sqrt{3}$ soni $\sqrt{5}$ ga teng emas.

**5. Kvadrat ildizga ikkita javob yozish.**

*Noto'g'ri:* $\sqrt{49} = \pm 7$.

*To'g'ri:* $\sqrt{49} = 7$. Ildiz belgisi faqat manfiy bo'lmagan ildizni bildiradi. ($7$ ham, $-7$ ham kvadratga ko'tarilganda $49$ beradi, lekin $\sqrt{49}$ bu ikkisidan faqat $7$ ni bildiradi.)

## Mashqlar

Kasr javobni qisqarmas kasr ko'rinishida, ildizli javobni soddalashtirilgan ko'rinishda yozing (masalan, $3\sqrt{7}$).

### A daraja

::: {.mashq #m7-1 daraja="A" javob="81"}
$3^4$ ni hisoblang.
:::

::: {.mashq #m7-2 daraja="A" javob="-64"}
$(-4)^3$ ni hisoblang.
:::

::: {.mashq #m7-3 daraja="A" javob="2"}
$9^0 + 1^9$ ni hisoblang.
:::

::: {.mashq #m7-4 daraja="A" javob="1/16"}
$2^{-4}$ ni kasr ko'rinishida yozing.
:::

::: {.mashq #m7-5 daraja="A" javob="13"}
$\sqrt{169}$ ni hisoblang.
:::

::: {.mashq #m7-6 daraja="A" javob="6"}
$\sqrt[3]{216}$ ni hisoblang.
:::

::: {.mashq #m7-7 daraja="A" javob="9/25"}
$\left(\frac{3}{5}\right)^2$ ni hisoblang.
:::

::: {.mashq #m7-8 daraja="A" javob="0.001"}
$10^{-3}$ ni o'nli kasr ko'rinishida yozing.
:::

### B daraja

::: {.mashq #m7-9 daraja="B" javob="8"}
$\frac{2^5 \cdot 2^4}{2^6}$ ni hisoblang.
:::

::: {.mashq #m7-10 daraja="B" javob="9"}
$\frac{\left(3^2\right)^3}{3^4}$ ni hisoblang.
:::

::: {.mashq #m7-11 daraja="B" javob="6/5"}
$5^{-1} + 5^0$ ni hisoblang.
:::

::: {.mashq #m7-12 daraja="B" javob="25/4"}
$\left(\frac{2}{5}\right)^{-2}$ ni hisoblang.
:::

::: {.mashq #m7-13 daraja="B" javob="1000000"}
$4^3 \cdot 25^3$ ni qulay usulda hisoblang.
:::

::: {.mashq #m7-14 daraja="B" javob="0.9"}
$\sqrt{0.49} + \sqrt[3]{0.008}$ ni hisoblang.
:::

::: {.mashq #m7-15 daraja="B" javob="$7\sqrt 2$"}
$\sqrt{98}$ ni soddalashtiring.
:::

::: {.mashq #m7-16 daraja="B" javob="6"}
$\sqrt{2} \cdot \sqrt{18}$ ni hisoblang.
:::

::: {.mashq #m7-17 daraja="B" javob="9 va 10"}
$\sqrt{90}$ qaysi ikki ketma-ket butun son orasida joylashgan?
:::

### C daraja

::: {.mashq #m7-18 daraja="C" javob="16"}
$\frac{2^{-2} \cdot 2^5}{2^{-1}}$ ni hisoblang.
:::

::: {.mashq #m7-19 daraja="C" javob="3"}
$\frac{6^4}{2^4 \cdot 3^3}$ ni hisoblang.
:::

::: {.mashq #m7-20 daraja="C" javob="$2\sqrt 3$"}
$\sqrt{75} - \sqrt{27}$ ni soddalashtiring.
:::

::: {.mashq #m7-21 daraja="C" javob="11"}
$\left(\sqrt{5}\right)^2 + \sqrt{(-6)^2}$ ni hisoblang.
:::

::: {.mashq #m7-22 daraja="C" javob="19200"}
Laboratoriyada bakteriyalar soni har soatda 2 baravar ko'payadi. Soat 8:00 da idishda 300 ta bakteriya bor edi. Soat 14:00 da idishda nechta bakteriya bo'ladi?
:::

::: {.mashq #m7-23 daraja="C" javob="140"}
Kvadrat shaklidagi bog'ning yuzi $1225$ kvadrat metr (kvadratning yuzi uning tomoni uzunligining kvadratiga teng). Bog'ning to'rt tomonini to'r bilan o'rab chiqish uchun necha metr to'r kerak?
:::

::: {.mashq #m7-24 daraja="C" javob="15"}
Kub shaklidagi akvariumning hajmi $3375$ kub santimetr (kubning hajmi uning qirrasi uzunligining kubiga teng). Akvarium qirrasining uzunligi necha santimetr?
:::

::: {.mashq #m7-25 daraja="C" javob="2"}
$\frac{8^5}{4^7}$ ni hisoblang. (Ko'rsatma: ikkala asosni $2$ ning darajasi ko'rinishida yozing.)
:::

::: {.mashq #m7-26 daraja="C" javob="5"}
$\frac{25^3 \cdot 5^{-2}}{125}$ ni hisoblang.
:::

## SAT ko'prigi

Quyidagi savollar SAT uslubida, inglizcha yozilgan. *Equivalent* — "teng kuchli", ya'ni har doim bir xil qiymatga ega. Javoblar kitob oxirida.

::: {.sat #s7-1 javob="B"}
Which of the following is equivalent to $\frac{2^{9} \cdot 2^{-3}}{2^{2}}$?

A) $2^{3}$

B) $2^{4}$

C) $2^{8}$

D) $2^{14}$
:::

::: {.sat #s7-2 javob="C"}
Which of the following expressions is equivalent to $\left(x^{3}\right)^{4} \cdot x^{2}$ for all values of $x$?

A) $x^{9}$

B) $x^{12}$

C) $x^{14}$

D) $x^{24}$
:::

::: {.sat #s7-3 javob="12"}
What is the value of $\sqrt{3} \cdot \sqrt{48}$?
:::

::: {.sat #s7-4 javob="D"}
Which of the following is equal to $\sqrt{200}$?

A) $2\sqrt{10}$

B) $4\sqrt{5}$

C) $4\sqrt{10}$

D) $10\sqrt{2}$
:::

::: {.sat #s7-5 javob="9"}
If $3^{n} = 81$, what is the value of $3^{n-2}$?
:::
