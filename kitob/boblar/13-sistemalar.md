# 13. Tenglamalar sistemasi

*SAT bo'limi:* Algebra

## Bu bobda

9- va 11-boblarda bitta noma'lumli tenglamalarni yechdik. Lekin ko'p masalada noma'lum ikkita bo'ladi: "olma necha so'm, nok necha so'm?", "kattalar chiptasi nechta, o'quvchilar chiptasi nechta?" Bunday masalalar ikki tenglama bilan yoziladi va ular birgalikda yechiladi. Bu bobda:

- tenglamalar sistemasi va uning yechimi nima ekanini;
- sistemani grafik usulda (12-bobdagi to'g'ri chiziqlar yordamida) yechishni;
- o'rniga qo'yish usulini;
- qo'shish usulini;
- sistemaning yechimi yo'q yoki cheksiz ko'p bo'lishini aniqlashni;
- matnli masalani sistema yordamida yechishni o'rganamiz.

**SAT'da qayerda kerak?** Ikki noma'lumli chiziqli tenglamalar sistemasi SAT Algebra bo'limining asosiy mavzularidan biri. "If $(x, y)$ is the solution to the system of equations, what is the value of $x$?", "How many solutions does the system have?", "For what value of $a$ does the system have no solution?" kabi savollar har bir testda uchraydi. Matnli savollarning ko'pi ham aslida sistema.

## Yangi so'zlar

| O'zbekcha | English |
|---|---|
| ikki noma'lumli chiziqli tenglama | linear equation in two variables |
| tenglamalar sistemasi | system of equations |
| sistemaning yechimi | solution of a system |
| grafik usul | graphing method |
| o'rniga qo'yish usuli | substitution method |
| qo'shish usuli | elimination method |
| kesishish nuqtasi | point of intersection |

## Tushuntirish

### Sistema va uning yechimi

$x + y = 10$ tenglamasida ikkita noma'lum bor. Bunday tenglama *ikki noma'lumli chiziqli tenglama (linear equation in two variables)* deyiladi. Uning yechimi bitta son emas, sonlar juftligi: $x = 7$, $y = 3$ yoki $x = 4$, $y = 6$ yoki $x = -2$, $y = 12$ va hokazo — yechimlar cheksiz ko'p. 12-bobdan bilamiz: bu juftliklarning hammasi koordinatalar tekisligida bitta to'g'ri chiziqda yotadi.

Endi ikkinchi shart qo'shamiz: $x - y = 4$. Ikkala tenglama **bir vaqtda** to'g'ri bo'lishi kerak bo'lsa, ular *tenglamalar sistemasi (system of equations)* ni tashkil qiladi. Sistemani bunday yozamiz:

$$x + y = 10$$

$$x - y = 4$$

Ikkala tenglamani ham to'g'ri tenglikka aylantiradigan $(x, y)$ juftlik *sistemaning yechimi (solution of a system)* deyiladi. Bu sistemada $x = 7$, $y = 3$: $7 + 3 = 10$ va $7 - 3 = 4$. $(4, 6)$ juftligi esa yechim emas: birinchi tenglama to'g'ri ($4 + 6 = 10$), lekin ikkinchisi noto'g'ri ($4 - 6 = -2$, $-2 \neq 4$).

Javobni tartiblangan juftlik ko'rinishida yozamiz: avval $x$, keyin $y$. Yuqoridagi sistemaning javobi $(7, 3)$.

### Grafik usul

Har bir tenglamaning grafigi — to'g'ri chiziq. Sistemaning yechimi ikkala chiziqda ham yotadigan nuqta, ya'ni ularning *kesishish nuqtasi (point of intersection)*. Shuning uchun sistemani yechishning bir yo'li — ikkala chiziqni chizib, kesishish nuqtasini topish. Bu *grafik usul (graphing method)* deyiladi.

![Ikki to'g'ri chiziqning kesishish nuqtasi](rasmlar/chiqish/13_kesishish.png){width=60%}

::: {.misol}
Rasm yordamida sistemani yeching va javobni tekshiring:

$$y = x + 1$$

$$y = -2x + 7$$

*Yechish.* Tutash chiziq $y = x + 1$, punktir chiziq $y = -2x + 7$ ning grafigi. Ular $x = 2$, $y = 3$ nuqtada kesishadi (yordamchi nuqtali chiziqlar bo'yicha o'qing).

*Tekshirish.* Birinchi tenglama: $2 + 1 = 3$. Ikkinchi tenglama: $-2 \cdot 2 + 7 = -4 + 7 = 3$. Ikkalasi ham to'g'ri.

*Javob:* $(2, 3)$.
:::

Grafik usul yechimni ko'z bilan ko'rsatadi, lekin kesishish nuqtasi katak ustiga tushmasa (masalan, $x = \frac{7}{3}$ bo'lsa), uni rasmdan aniq o'qib bo'lmaydi. Shuning uchun quyidagi ikki algebraik usul kerak.

### O'rniga qo'yish usuli

*O'rniga qo'yish usuli (substitution method)* ning qadamlari:

1. Tenglamalardan biridan bitta noma'lumni ikkinchisi orqali ifodalaymiz (koeffitsiyenti $1$ yoki $-1$ bo'lgan noma'lumni tanlash qulay).
2. Bu ifodani ikkinchi tenglamaga qo'yamiz. Bitta noma'lumli tenglama hosil bo'ladi, uni 9-bobdagidek yechamiz.
3. Topilgan qiymatni 1-qadamdagi ifodaga qo'yib, ikkinchi noma'lumni topamiz.
4. Juftlikni **ikkala** tenglamaga qo'yib tekshiramiz.

::: {.misol}
Sistemani o'rniga qo'yish usuli bilan yeching:

$$x - 2y = 1$$

$$3x + y = 17$$

*Yechish.*

1-qadam: birinchi tenglamada $x$ ning koeffitsiyenti $1$. $-2y$ ni o'ngga o'tkazamiz: $x = 2y + 1$.

2-qadam: ikkinchi tenglamadagi $x$ o'rniga $2y + 1$ ni qavs ichida qo'yamiz:

$$3(2y + 1) + y = 17.$$

Qavsni ochamiz: $6y + 3 + y = 17$, ya'ni $7y + 3 = 17$, $7y = 14$, $y = 2$.

3-qadam: $x = 2 \cdot 2 + 1 = 5$.

4-qadam: $5 - 2 \cdot 2 = 1$ va $3 \cdot 5 + 2 = 17$. Ikkalasi ham to'g'ri.

*Javob:* $(5, 2)$.
:::

### Qo'shish usuli

Ikki tenglamaning chap tomonlarini qo'shsak va o'ng tomonlarini qo'shsak, yana to'g'ri tenglik chiqadi (tarozi qoidasi: ikkala tomonga teng narsalarni qo'shyapmiz). Agar bir noma'lumning koeffitsiyentlari qarama-qarshi sonlar bo'lsa (masalan, $6y$ va $-6y$), qo'shganda bu noma'lum yo'qoladi. Bu *qo'shish usuli (elimination method)* deyiladi.

1. Kerak bo'lsa, tenglamalarni (har birining **ikkala tomonini va har bir hadini**) shunday sonlarga ko'paytiramizki, bir noma'lumning koeffitsiyentlari qarama-qarshi bo'lsin.
2. Tenglamalarni qo'shamiz va bitta noma'lumli tenglamani yechamiz.
3. Topilgan qiymatni istalgan tenglamaga qo'yib, ikkinchi noma'lumni topamiz va tekshiramiz.

Koeffitsiyentlar bir xil bo'lsa (masalan, $2y$ va $2y$), tenglamalarni qo'shish o'rniga birini ikkinchisidan ayiramiz. Bunda ayiriladigan tenglamaning **har bir** hadining, o'ng tomonining ham ishorasi almashadi.

::: {.misol}
Sistemani qo'shish usuli bilan yeching:

$$3x + 2y = 4$$

$$5x - 3y = 13$$

*Yechish.*

1-qadam: $y$ ni yo'qotamiz. $2$ va $3$ ning EKUKi $6$. Birinchi tenglamani $3$ ga, ikkinchisini $2$ ga ko'paytiramiz:

$$9x + 6y = 12$$

$$10x - 6y = 26$$

2-qadam: qo'shamiz: $19x = 38$, $x = 2$.

3-qadam: birinchi tenglamaga qo'yamiz: $3 \cdot 2 + 2y = 4$, $2y = -2$, $y = -1$.

*Tekshirish:* $3 \cdot 2 + 2 \cdot (-1) = 4$ va $5 \cdot 2 - 3 \cdot (-1) = 10 + 3 = 13$.

*Javob:* $(2, -1)$.
:::

Qaysi usulni tanlash kerak? Biror noma'lumning koeffitsiyenti $1$ yoki $-1$ bo'lsa yoki tenglama allaqachon $y = mx + b$ ko'rinishida bo'lsa, o'rniga qo'yish qulay. Aks holda qo'shish usuli odatda tezroq.

### Yechimi yo'q yoki cheksiz ko'p yechim

Ikki to'g'ri chiziq uch xil joylashishi mumkin. Har birini $y = mx + b$ ko'rinishiga keltirib, burchak koeffitsiyentlarini (12-bob) solishtiramiz:

- burchak koeffitsiyentlari har xil — chiziqlar bitta nuqtada kesishadi, sistemaning **bitta** yechimi bor;
- burchak koeffitsiyentlari teng, $b$ lari har xil — chiziqlar parallel, umumiy nuqtasi yo'q, sistemaning **yechimi yo'q**;
- burchak koeffitsiyentlari ham, $b$ lari ham teng — ikkala tenglama aslida bitta chiziq, uning har bir nuqtasi yechim, ya'ni yechim **cheksiz ko'p**.

Algebraik usulda buni shunday ko'ramiz: ikkala noma'lum ham yo'qolib qoladi. $5 = 2$ kabi noto'g'ri tenglik chiqsa, yechim yo'q; $0 = 0$ kabi har doim to'g'ri tenglik chiqsa, yechim cheksiz ko'p (9-bobdagi kabi).

::: {.misol}
a) Sistemani yeching:

$$2x - y = 3$$

$$4x - 2y = 5$$

b) $k$ ning qanday qiymatida quyidagi sistemaning yechimi yo'q?

$$kx + 3y = 6$$

$$2x + y = 5$$

*Yechish.*

a) Birinchi tenglamani $2$ ga ko'paytiramiz: $4x - 2y = 6$. Undan ikkinchi tenglamani ayiramiz: $(4x - 2y) - (4x - 2y) = 6 - 5$, ya'ni $0 = 1$. Bu noto'g'ri tenglik, demak yechim yo'q. Grafikda: $y = 2x - 3$ va $y = 2x - \frac{5}{2}$ — burchak koeffitsiyentlari teng ($2$), $b$ lari har xil, chiziqlar parallel.

b) Ikkala tenglamani $y$ ga nisbatan yechamiz. Birinchisi: $3y = -kx + 6$, $y = -\frac{k}{3}x + 2$. Ikkinchisi: $y = -2x + 5$. Yechim bo'lmasligi uchun burchak koeffitsiyentlari teng bo'lishi kerak: $-\frac{k}{3} = -2$, $k = 6$. Bunda $b$ lar har xil ($2 \neq 5$), demak chiziqlar haqiqatan parallel.

*Javob:* a) yechimi yo'q; b) $k = 6$.
:::

### Matnli masalalar

11-bobdagi to'rt qadamli usul ikki noma'lum bilan ham ishlaydi: ikkita noma'lumni ikki harf bilan belgilaymiz, masaladagi ikkita shartdan ikkita tenglama tuzamiz, sistemani yechamiz va javobni masala shartiga qo'yib tekshiramiz.

::: {.misol}
Maktab konsertiga $150$ ta chipta sotildi: kattalar chiptasi $20\,000$ so'm, o'quvchilar chiptasi $12\,000$ so'm. Jami $2\,200\,000$ so'm tushdi. Nechta kattalar chiptasi sotilgan?

*Yechish.* $x$ — kattalar chiptalari soni, $y$ — o'quvchilar chiptalari soni.

Chiptalar soni: $x + y = 150$.

Tushgan pul: $20\,000x + 12\,000y = 2\,200\,000$. Ikkala tomonni $4000$ ga bo'lamiz: $5x + 3y = 550$.

Birinchi tenglamadan $y = 150 - x$. Ikkinchisiga qo'yamiz: $5x + 3(150 - x) = 550$, $5x + 450 - 3x = 550$, $2x = 100$, $x = 50$. Unda $y = 150 - 50 = 100$.

*Tekshirish:* $50 + 100 = 150$ ta chipta; $50 \cdot 20\,000 + 100 \cdot 12\,000 = 1\,000\,000 + 1\,200\,000 = 2\,200\,000$ so'm.

*Javob:* $50$ ta kattalar chiptasi (va $100$ ta o'quvchilar chiptasi).
:::

## Ko'p uchraydigan xatolar

**1. Faqat bitta noma'lumni topib to'xtash.**

*Noto'g'ri:* $x + y = 9$, $x - y = 5$. Qo'shamiz: $2x = 14$, $x = 7$. Javob: $7$.

*To'g'ri:* sistemaning yechimi — juftlik. $y = 9 - 7 = 2$, javob $(7, 2)$.

**2. Tenglamalarni ayirganda o'ng tomonni qo'shib yuborish.**

*Noto'g'ri:* $6x + y = 17$ dan $2x + y = 1$ ni ayirib, $4x = 18$.

*To'g'ri:* o'ng tomonlar ham ayiriladi: $4x = 17 - 1 = 16$, $x = 4$. Keyin $2 \cdot 4 + y = 1$, $y = -7$. Javob: $(4, -7)$.

**3. Tenglamani songa ko'paytirganda bir hadni unutish.**

*Noto'g'ri:* $2x + y = 5$ ni $3$ ga ko'paytirib, $6x + y = 15$.

*To'g'ri:* **har bir** had ko'paytiriladi: $6x + 3y = 15$.

**4. Juftlikda tartibni almashtirish.**

*Noto'g'ri:* $x = -1$, $y = 6$ topildi, javob $(6, -1)$ deb yozildi.

*To'g'ri:* avval $x$, keyin $y$: $(-1, 6)$. $(6, -1)$ — boshqa nuqta.

**5. $0 = 0$ chiqqanda "$x = 0$, $y = 0$" deb yozish.**

*Noto'g'ri:* $x + 3y = 4$ va $2x + 6y = 8$. Birinchisini $2$ ga ko'paytirib ayirsak, $0 = 0$; demak javob $(0, 0)$.

*To'g'ri:* $0 = 0$ har doim to'g'ri, ikkala tenglama bitta chiziqni beradi. Sistemaning yechimi cheksiz ko'p. ($(0, 0)$ yechim ham emas: $0 + 0 \neq 4$.)

## Mashqlar

Sistemaning yechimini $(x, y)$ ko'rinishida yozing: avval $x$, keyin $y$ (masalan, $(-7, 4)$). Yechimi bo'lmasa "yechimi yo'q", cheksiz ko'p bo'lsa "cheksiz ko'p yechim" deb yozing. Matnli masalalarda so'ralgan sonni yozing.

### A daraja

::: {.mashq #m13-1 daraja="A" javob="$(3, -1)$"}
$(1, 0)$, $(3, -1)$, $(4, 1)$, $(5, -2)$ juftliklaridan qaysi biri $x + 2y = 1$ va $2x - y = 7$ sistemasining yechimi?
:::

::: {.mashq #m13-2 daraja="A" javob="$(4, 8)$"}
Sistemani yeching: $y = 2x$ va $x + y = 12$.
:::

::: {.mashq #m13-3 daraja="A" javob="$(5, 8)$"}
Sistemani yeching: $y = x + 3$ va $2x + y = 18$.
:::

::: {.mashq #m13-4 daraja="A" javob="$(8, 3)$"}
Sistemani yeching: $x + y = 11$ va $x - y = 5$.
:::

::: {.mashq #m13-5 daraja="A" javob="$(3, 2)$"}
Sistemani yeching: $4x + y = 14$ va $2x + y = 8$.
:::

::: {.mashq #m13-6 daraja="A" javob="$(10, 5)$"}
Sistemani yeching: $x = 2y$ va $3x - 4y = 10$.
:::

::: {.mashq #m13-7 daraja="A" javob="$(3, -4)$"}
Sistemani yeching: $x + y = -1$ va $x - y = 7$.
:::

### B daraja

::: {.mashq #m13-8 daraja="B" javob="$(2, -2)$"}
Sistemani yeching: $3x + 2y = 2$ va $x - y = 4$.
:::

::: {.mashq #m13-9 daraja="B" javob="$(8, -3)$"}
Sistemani yeching: $2x + 5y = 1$ va $3x - 2y = 30$.
:::

::: {.mashq #m13-10 daraja="B" javob="$(2, 6)$"}
Sistemani yeching: $4x - 3y = -10$ va $5x + 2y = 22$.
:::

::: {.mashq #m13-11 daraja="B" javob="yechimi yo'q"}
Sistemani yeching: $3x - y = 4$ va $6x - 2y = 9$.
:::

::: {.mashq #m13-12 daraja="B" javob="cheksiz ko'p yechim"}
Sistemani yeching: $x + 2y = 5$ va $3x + 6y = 15$.
:::

::: {.mashq #m13-13 daraja="B" javob="$(6, 3)$"}
Sistemani yeching: $\frac{x}{2} + \frac{y}{3} = 4$ va $x - y = 3$.
:::

::: {.mashq #m13-14 daraja="B" javob="$(4, 5)$"}
$y = 2x - 3$ va $y = -x + 9$ to'g'ri chiziqlari qaysi nuqtada kesishadi?
:::

::: {.mashq #m13-15 daraja="B" javob="30"}
Ikki sonning yig'indisi $47$ ga, ayirmasi $13$ ga teng. Shu sonlarning kattasini toping.
:::

::: {.mashq #m13-16 daraja="B" javob="0"}
$y = 3x + 1$ va $y = 3x - 4$ to'g'ri chiziqlari nechta umumiy nuqtaga ega?
:::

### C daraja

::: {.mashq #m13-17 daraja="C" javob="3"}
$k$ ning qanday qiymatida $2x + ky = 3$ va $4x + 6y = 1$ sistemasining yechimi yo'q?
:::

::: {.mashq #m13-18 daraja="C" javob="10"}
$k$ ning qanday qiymatida $3x - 2y = 5$ va $6x - 4y = k$ sistemasi cheksiz ko'p yechimga ega?
:::

::: {.mashq #m13-19 daraja="C" javob="9000"}
Bozorda $2$ kg olma va $3$ kg nok uchun $41\,000$ so'm, $4$ kg olma va $1$ kg nok uchun $37\,000$ so'm to'landi. $1$ kg nok necha so'm turadi?
:::

::: {.mashq #m13-20 daraja="C" javob="18"}
Kassada faqat $1000$ so'mlik va $5000$ so'mlik pullar bor: jami $40$ dona, ularning umumiy summasi $112\,000$ so'm. $5000$ so'mlik pullar necha dona?
:::

::: {.mashq #m13-21 daraja="C" javob="12"}
Basketbol o'yinida jamoa faqat $2$ ochkolik va $3$ ochkolik to'plar bilan jami $68$ ochko to'pladi. Jami $28$ ta to'p tushirilgan bo'lsa, ulardan nechtasi $3$ ochkolik?
:::

::: {.mashq #m13-22 daraja="C" javob="3"}
Qayiq daryo oqimi bo'ylab suzganda uning tezligi qayiqning turg'un suvdagi tezligi va oqim tezligining yig'indisiga, oqimga qarshi suzganda esa ularning ayirmasiga teng. Qayiq oqim bo'ylab $36$ km ni $2$ soatda, oqimga qarshi $24$ km ni ham $2$ soatda bosib o'tdi. Oqim tezligi soatiga necha km?
:::

::: {.mashq #m13-23 daraja="C" javob="10"}
Ota o'g'lidan $28$ yosh katta. $4$ yildan keyin ota o'g'lidan $3$ baravar katta bo'ladi. O'g'il hozir necha yoshda?
:::

::: {.mashq #m13-24 daraja="C" javob="8"}
$5x + 3y = 34$ va $3x + 5y = 30$ bo'lsa, $x + y$ ning qiymatini toping. (Maslahat: tenglamalarni qo'shib ko'ring.)
:::

## SAT ko'prigi

Quyidagi savollar SAT uslubida, inglizcha yozilgan. *System of equations* — tenglamalar sistemasi, *solution* — yechim, *above* / *below* — yuqoridagi / quyidagi, *T-shirt* — futbolka. Javoblar kitob oxirida.

::: {.sat #s13-1 javob="4"}
$$2x + y = 11$$

$$x - y = 1$$

If $(x, y)$ is the solution to the system of equations above, what is the value of $x$?
:::

::: {.sat #s13-2 javob="7"}
In the xy-plane, the graphs of $y = 3x - 2$ and $y = -x + 10$ intersect at the point $(a, b)$. What is the value of $b$?
:::

::: {.sat #s13-3 javob="D"}
$$4x - 6y = 10$$

$$6x - 9y = 15$$

How many solutions does the system of equations above have?

A) Zero

B) Exactly one

C) Exactly two

D) Infinitely many
:::

::: {.sat #s13-4 javob="-2"}
In the system of equations below, $a$ is a constant.

$$ax + 3y = 8$$

$$4x - 6y = 5$$

For what value of $a$ does the system have no solution?
:::

::: {.sat #s13-5 javob="35"}
A school club sold $60$ T-shirts in two sizes, small and large. Each small T-shirt costs \$8 and each large T-shirt costs \$11. If the club collected a total of \$585 from selling the T-shirts, how many large T-shirts were sold?
:::
