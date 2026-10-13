# 18. Ehtimollik asoslari

*SAT bo'limi:* Problem-Solving and Data Analysis

## Bu bobda

Tanga tashlansa, gerb tushadimi yoki raqam? Ertaga yomg'ir yog'adimi? Lotereya bileti yutadimi? Bunday savollarga oldindan aniq javob berib bo'lmaydi, lekin "qanchalik ishonsa bo'ladi"ni son bilan o'lchash mumkin. Bu son — ehtimollik. Bu bobda:

- tajriba, elementar hodisa va tasodifiy hodisa tushunchalarini;
- teng imkoniyatli natijalarda ehtimollikni qulay natijalar soni orqali hisoblashni;
- qarama-qarshi hodisa ehtimolligini;
- natijalarni ro'yxat va jadval yordamida sanashni;
- ikki tomonlama jadvaldan ehtimollik va shartli ehtimollikni topishni;
- mustaqil hodisalarni o'rganamiz.

**SAT'da qayerda kerak?** Problem-Solving and Data Analysis bo'limida ehtimollik savollari odatda jadval bilan beriladi: "If a person is selected at random from those who..., what is the probability that...?" Bunday savolda asosiy ish — jadvaldan to'g'ri sonlarni olish (17-bob) va kasrni qisqartirish (3-bob).

## Yangi so'zlar

| O'zbekcha | English |
|---|---|
| tajriba | experiment |
| elementar hodisa | outcome |
| elementar hodisalar to'plami | sample space |
| tasodifiy hodisa | random event (event) |
| teng imkoniyatli | equally likely |
| qulay natija | favorable outcome |
| ehtimollik | probability |
| muqarrar hodisa | certain event |
| mumkin bo'lmagan hodisa | impossible event |
| qarama-qarshi hodisa | complementary event (complement) |
| tasodifan tanlash | selected at random |
| shartli ehtimollik | conditional probability |
| mustaqil hodisalar | independent events |
| bog'liq hodisalar | dependent events |
| qaytarib qo'yib | with replacement |
| qaytarmasdan | without replacement |
| kutilgan son | expected number |
| nisbiy chastota | relative frequency |

## Tushuntirish

### Tajriba, elementar hodisa, tasodifiy hodisa

Natijasini oldindan aniq aytib bo'lmaydigan har qanday harakat *tajriba (experiment)* deyiladi: tanga tashlash, o'yin soqqasini tashlash, xaltadan qaramasdan shar olish. Tajribaning bo'linmaydigan, eng sodda natijasi *elementar hodisa (outcome)* deyiladi. Barcha elementar hodisalar birgalikda *elementar hodisalar to'plami (sample space)* ni tashkil qiladi.

Masalan, o'yin soqqasi (yoqlarida $1$ dan $6$ gacha ko'zlar bor kub) tashlanganda elementar hodisalar oltita: $1$, $2$, $3$, $4$, $5$, $6$. Bu bobda tanga va soqqalar to'g'ri (simmetrik) deb olinadi: har bir tomoni bir xil imkoniyat bilan tushadi.

*Tasodifiy hodisa (random event; SAT'da: event)* — tajribada ro'y berishi ham, ro'y bermasligi ham mumkin bo'lgan hodisa. U bir yoki bir nechta elementar hodisadan iborat. Masalan, "juft son tushadi" hodisasi uchta elementar hodisadan iborat: $2$, $4$, $6$. Bu elementar hodisalar shu hodisaga *qulay natijalar (favorable outcomes)* deyiladi. Hodisalarni lotin harflari bilan belgilaymiz: $A$, $B$, ...

### Ehtimollik

Agar barcha elementar hodisalar *teng imkoniyatli (equally likely)* bo'lsa (hech biri boshqasidan ko'proq ro'y bermasa), $A$ hodisaning *ehtimolligi (probability)*:

$$P(A) = \frac{m}{n},$$

bu yerda $n$ — barcha elementar hodisalar soni, $m$ — $A$ hodisaga qulay natijalar soni. Soqqa uchun: $6$ tushish ehtimolligi $\frac{1}{6}$, juft son tushish ehtimolligi $\frac{3}{6} = \frac{1}{2}$.

Qulay natijalar soni $0$ dan $n$ gacha bo'lgani uchun har doim $0 \leq P(A) \leq 1$:

- $P(A) = 1$ — hodisa albatta ro'y beradi, u *muqarrar hodisa (certain event)*;
- $P(A) = 0$ — hodisa hech qachon ro'y bermaydi, u *mumkin bo'lmagan hodisa (impossible event)*.

$P(A) = \frac{m}{n}$ formulasi bu ikki holatni ham qamrab oladi: muqarrar hodisada barcha natijalar qulay ($m = n$), mumkin bo'lmagan hodisada qulay natija yo'q ($m = 0$).

Ehtimollikni kasr, o'nli kasr yoki foiz bilan yozish mumkin: $\frac{3}{40} = 0.075 = 7.5\%$. Hisoblashda $1$ dan katta yoki manfiy son chiqsa, xato bor.

"Xaltadan **tasodifan** shar olinadi", "o'quvchi **tasodifan tanlanadi** (*selected at random*)" degani — har bir shar (har bir o'quvchi) bir xil imkoniyat bilan tanlanadi. Demak, natijalar teng imkoniyatli va formulani qo'llash mumkin.

**Qarama-qarshi hodisa.** $A$ hodisa ro'y bermasligidan iborat hodisa $A$ ga *qarama-qarshi hodisa (complementary event, complement)* deyiladi. Har bir elementar hodisa yo $A$ ga, yo unga qarama-qarshi hodisaga qulay, shuning uchun ularning ehtimolliklari yig'indisi $1$ ga teng. Demak,

**$A$ ro'y bermasligi ehtimolligi $1 - P(A)$ ga teng.**

Bu qoida, ayniqsa, "kamida bitta" so'zi bor savollarda juda qulay: "kamida bitta" ga qarama-qarshi hodisa — "birorta ham emas", uni sanash esa ko'pincha osonroq.

::: {.misol}
Xaltada $5$ ta qizil, $3$ ta ko'k va $4$ ta yashil shar bor. Xaltadan tasodifan bitta shar olinadi.

a) Shar yashil bo'lish ehtimolligini toping.

b) Shar yashil bo'lmaslik ehtimolligini toping.

c) Shar sariq bo'lish ehtimolligini toping.

*Yechish.* Jami $5 + 3 + 4 = 12$ ta shar, har biri bir xil imkoniyat bilan olinadi: $n = 12$.

a) Qulay natijalar — yashil sharlar, $m = 4$: $P = \frac{4}{12} = \frac{1}{3}$.

b) Bu a) dagi hodisaga qarama-qarshi hodisa: $P = 1 - \frac{1}{3} = \frac{2}{3}$. Tekshirish: yashil bo'lmagan sharlar $5 + 3 = 8$ ta, $\frac{8}{12} = \frac{2}{3}$.

c) Xaltada sariq shar yo'q, $m = 0$: $P = \frac{0}{12} = 0$. Bu — mumkin bo'lmagan hodisa.

*Javob:* a) $\frac{1}{3}$; b) $\frac{2}{3}$; c) $0$.
:::

### Natijalarni ro'yxat va jadval bilan sanash

Ikki yoki undan ko'p tajriba birga o'tkazilsa, elementar hodisalarni adashmasdan sanash uchun ularni tartib bilan ro'yxatga yozamiz yoki jadval tuzamiz.

Ikkita soqqa tashlanganda (masalan, oq va qora), har bir elementar hodisa — sonlar juftligi: birinchi soqqadagi son va ikkinchisidagi son. $(2, 5)$ va $(5, 2)$ — har xil elementar hodisalar. Jadvalda $6$ qator va $6$ ustun bor, demak elementar hodisalar $6 \cdot 6 = 36$ ta. Umuman, birinchi tajribaning $a$ ta, ikkinchisining $b$ ta natijasi bo'lsa, birgalikda $a \cdot b$ ta elementar hodisa bo'ladi.

::: {.misol}
Ikkita soqqa tashlanadi. Quyidagi jadvalda qatorda birinchi soqqadagi son, ustunda ikkinchisidagi son, katakda esa ularning yig'indisi:

|  | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ |
| $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
| $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ |
| $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ |
| $5$ | $6$ | $7$ | $8$ | $9$ | $10$ | $11$ |
| $6$ | $7$ | $8$ | $9$ | $10$ | $11$ | $12$ |

a) Yig'indi $8$ bo'lish ehtimolligini toping.

b) Yig'indi $10$ dan kichik bo'lish ehtimolligini toping.

*Yechish.* Barcha elementar hodisalar $n = 36$ ta, hammasi teng imkoniyatli.

a) Jadvalda $8$ soni beshta katakda: $(2, 6)$, $(3, 5)$, $(4, 4)$, $(5, 3)$, $(6, 2)$. $P = \frac{5}{36}$.

b) $10$ dan kichik yig'indili kataklar ko'p, qarama-qarshi hodisani sanash osonroq: yig'indi $10$ yoki undan katta. Bunday kataklar: $10$ — uchta, $11$ — ikkita, $12$ — bitta, jami $6$ ta. Qarama-qarshi hodisa ehtimolligi $\frac{6}{36} = \frac{1}{6}$, demak $P = 1 - \frac{1}{6} = \frac{5}{6}$.

*Javob:* a) $\frac{5}{36}$; b) $\frac{5}{6}$.
:::

::: {.misol}
Tanga uch marta tashlanadi. Tanganing bir tomoni gerb (G), ikkinchisi raqam (R).

a) Roppa-rosa ikki marta gerb tushish ehtimolligini toping.

b) Kamida bir marta raqam tushish ehtimolligini toping.

*Yechish.* Elementar hodisalarni tartib bilan yozamiz (har bir tashlashda $2$ ta natija, jami $2 \cdot 2 \cdot 2 = 8$ ta):

GGG, GGR, GRG, GRR, RGG, RGR, RRG, RRR.

a) Roppa-rosa ikkita G: GGR, GRG, RGG — $3$ ta. $P = \frac{3}{8}$.

b) "Kamida bir marta raqam" ga qarama-qarshi hodisa — "birorta ham raqam yo'q", ya'ni GGG. Uning ehtimolligi $\frac{1}{8}$. Demak, $P = 1 - \frac{1}{8} = \frac{7}{8}$.

*Javob:* a) $\frac{3}{8}$; b) $\frac{7}{8}$.
:::

### Ikki tomonlama jadval va shartli ehtimollik

17-bobdagi ikki tomonlama jadvaldan ehtimollik ham topiladi. Jadvaldagi odamlardan biri tasodifan tanlansa, har bir odam — bitta teng imkoniyatli elementar hodisa. Demak, ehtimollik — jadvaldagi kerakli son va umumiy son nisbati.

SAT'da ko'pincha tanlov guruhning bir qismidan o'tkaziladi: "If a student is selected at random **from those who** ...", ya'ni "... bo'lganlar orasidan tasodifan tanlansa". Bunda biror hodisa (masalan, "o'quvchi 10-sinfda o'qiydi") ro'y bergani oldindan ma'lum. Shunday sharoitdagi ehtimollik *shartli ehtimollik (conditional probability)* deyiladi. Uni topish uchun:

1. ma'lum bo'lgan shartga mos guruhni topamiz (jadvalning bitta qatori yoki ustuni) — bu yangi "barcha natijalar", maxraj shu guruhning soni bo'ladi;
2. surat — shu guruh ichidagi qulay natijalar soni.

E'tibor bering: "10-sinf o'quvchilari orasidan tanlangan o'quvchi nonushta qiladi" va "nonushta qiladiganlar orasidan tanlangan o'quvchi 10-sinfda" — har xil savollar, ularning maxrajlari har xil.

Ikki savolga "ha/yo'q" javoblarini ham shunday jadvalga joylash mumkin: qatorlar — birinchi savolga javob, ustunlar — ikkinchisiga. Shunda "ikkalasiga ham ha" yoki "hech biriga ha emas" kabi guruhlarni sanash oson bo'ladi.

::: {.misol}
Maktabda $200$ o'quvchidan "Bugun nonushta qildingizmi?" deb so'raldi:

|  | Ha | Yo'q | Jami |
|---|---|---|---|
| 9-sinf | $48$ | $32$ | $80$ |
| 10-sinf | $54$ | $66$ | $120$ |
| Jami | $102$ | $98$ | $200$ |

a) So'ralganlardan tasodifan tanlangan o'quvchi nonushta qilgan bo'lish ehtimolligini toping.

b) Nonushta qilgan o'quvchilar orasidan tasodifan bittasi tanlandi. U 10-sinf o'quvchisi bo'lish ehtimolligini toping.

c) 10-sinf o'quvchilari orasidan tasodifan bittasi tanlandi. U nonushta qilgan bo'lish ehtimolligini toping.

*Yechish.*

a) Barcha natijalar — $200$ o'quvchi, qulaylari — "Ha" ustunining jamisi $102$: $P = \frac{102}{200} = \frac{51}{100}$.

b) Shart: o'quvchi nonushta qilgan. Guruh — "Ha" ustuni, $102$ o'quvchi. Ulardan 10-sinfdagilar $54$ ta: $P = \frac{54}{102} = \frac{9}{17}$.

c) Shart: o'quvchi 10-sinfda. Guruh — 10-sinf qatori, $120$ o'quvchi. Ulardan nonushta qilganlar $54$ ta: $P = \frac{54}{120} = \frac{9}{20}$.

E'tibor bering: b) va c) bandlarda surat bir xil ($54$), lekin guruhlar (maxrajlar) har xil, shuning uchun javoblar ham har xil.

*Javob:* a) $\frac{51}{100}$; b) $\frac{9}{17}$; c) $\frac{9}{20}$.
:::

### Mustaqil hodisalar

Bir hodisaning ro'y berishi ikkinchisining ehtimolligini o'zgartirmasa, ular *mustaqil hodisalar (independent events)* deyiladi, aks holda — *bog'liq hodisalar (dependent events)*. Masalan, tanga tashlash natijasi soqqada qaysi son tushishiga ta'sir qilmaydi. Mustaqil $A$ va $B$ hodisalarning **ikkalasi ham** ro'y berish ehtimolligi:

$$P(A) \cdot P(B).$$

Xaltadan shar olib, uni **qaytarib qo'yib (with replacement)** yana shar olsak, ikkinchi olishda xalta avvalgidek bo'ladi — olishlar mustaqil. Sharni **qaytarmasdan (without replacement)** olsak, ikkinchi olishda xaltadagi sharlar o'zgaradi, hodisalar bog'liq bo'ladi: ikkinchi ehtimollikni o'zgargan xalta bo'yicha hisoblash kerak.

**Kutilgan son.** Hodisaning ehtimolligi $p$ bo'lsa, tajriba ko'p marta ($N$ marta) takrorlanganda u taxminan $p \cdot N$ marta ro'y beradi. Bu son *kutilgan son (expected number)* deyiladi. Masalan, basketbolchi jarima to'pini $0.2$ ehtimollik bilan o'tkazib yuborsa, $50$ ta otishda u taxminan $0.2 \cdot 50 = 10$ marta o'tkazib yuboradi.

**Nisbiy chastota.** Ba'zan ehtimollik oldindan ma'lum emas, uni kuzatishdan baholaymiz. Hodisa $N$ ta kuzatuvda $k$ marta ro'y bergan bo'lsa, $\frac{k}{N}$ nisbat *nisbiy chastota (relative frequency)* deyiladi. Kuzatuvlar ko'p bo'lsa, nisbiy chastota ehtimollikka yaqin bo'ladi, shuning uchun uni ehtimollik o'rniga ishlatib, kutilgan sonni topish mumkin.

::: {.misol}
a) Tanga va soqqa birga tashlanadi. Tangada gerb, soqqada $6$ tushish ehtimolligini toping.

b) Xaltada $3$ ta qizil va $2$ ta ko'k shar bor. Shar olinadi, rangi yozib qo'yiladi va shar xaltaga qaytariladi, keyin yana bitta shar olinadi. Ikkala shar ham ko'k bo'lish ehtimolligini toping.

c) Agar b) banddagi tajribada birinchi shar xaltaga qaytarilmasa-chi?

*Yechish.*

a) Tanga va soqqa bir-biriga ta'sir qilmaydi: $P = \frac{1}{2} \cdot \frac{1}{6} = \frac{1}{12}$. Tekshirish: elementar hodisalar $2 \cdot 6 = 12$ ta, ulardan faqat bittasi (gerb va $6$) qulay.

b) Shar qaytariladi, olishlar mustaqil. Har safar ko'k shar olish ehtimolligi $\frac{2}{5}$: $P = \frac{2}{5} \cdot \frac{2}{5} = \frac{4}{25}$.

c) Birinchi shar ko'k bo'lish ehtimolligi $\frac{2}{5}$. Agar u ko'k bo'lsa, xaltada $4$ ta shar qoladi, ulardan $1$ tasi ko'k: ikkinchi olishda ko'k shar ehtimolligi $\frac{1}{4}$. $P = \frac{2}{5} \cdot \frac{1}{4} = \frac{2}{20} = \frac{1}{10}$.

*Javob:* a) $\frac{1}{12}$; b) $\frac{4}{25}$; c) $\frac{1}{10}$.
:::

## Ko'p uchraydigan xatolar

**1. Teng imkoniyatli bo'lmagan natijalarni sanash.**

*Noto'g'ri:* ikkita tanga tashlanganda natijalar uchta: "$0$ ta gerb", "$1$ ta gerb", "$2$ ta gerb". Demak, roppa-rosa bitta gerb tushish ehtimolligi $\frac{1}{3}$.

*To'g'ri:* bu uch natija teng imkoniyatli emas. Teng imkoniyatli elementar hodisalar to'rtta: GG, GR, RG, RR. Bitta gerb — GR va RG: $P = \frac{2}{4} = \frac{1}{2}$.

**2. Shartli ehtimollikda maxrajni umumiy sondan olish.**

*Noto'g'ri:* Misol 4 dagi jadvalda nonushta qilmaganlar orasidan tanlangan o'quvchi 9-sinfda bo'lish ehtimolligi $\frac{32}{200} = \frac{4}{25}$.

*To'g'ri:* tanlov faqat nonushta qilmaganlar ("Yo'q" ustuni, $98$ o'quvchi) orasidan: $P = \frac{32}{98} = \frac{16}{49}$.

**3. "Ikkalasi ham" ehtimolligida ehtimolliklarni qo'shish.**

*Noto'g'ri:* tangada gerb va soqqada $6$ tushish ehtimolligi $\frac{1}{2} + \frac{1}{6} = \frac{2}{3}$.

*To'g'ri:* mustaqil hodisalarning ikkalasi ham ro'y berish ehtimolligi ko'paytiriladi: $\frac{1}{2} \cdot \frac{1}{6} = \frac{1}{12}$. Ehtimolliklarni qo'shganda natija, odatda, har biridan katta chiqadi — "ikkalasi ham" ning ehtimolligi esa har biridan katta bo'la olmaydi.

**4. "Kamida bitta" ni qo'shish bilan topish.**

*Noto'g'ri:* ikkita tanga tashlanganda kamida bitta gerb tushish ehtimolligi $\frac{1}{2} + \frac{1}{2} = 1$, ya'ni gerb albatta tushadi.

*To'g'ri:* RR natijasida gerb yo'q, demak hodisa muqarrar emas. Qarama-qarshi hodisa orqali: $1 - \frac{1}{4} = \frac{3}{4}$.

## Mashqlar

Ehtimollikni qisqarmas kasr ko'rinishida yozing (masalan, $\frac{5}{14}$). Savolda o'nli kasr yoki foiz so'ralsa, javobni shunday yozing (masalan, $0.85$ yoki $85\%$). Boshqa javoblarni son bilan yozing.

18.13–18.16 va 18.20-mashqlar quyidagi jadvalga tegishli.

**18.1-jadval.** $120$ o'quvchidan tushlikda nima ichishi so'raldi; har bir o'quvchi bitta javob berdi.

|  | Choy | Sharbat | Suv | Jami |
|---|---|---|---|---|
| 7-sinf | $14$ | $26$ | $10$ | $50$ |
| 8-sinf | $34$ | $14$ | $22$ | $70$ |
| Jami | $48$ | $40$ | $32$ | $120$ |

### A daraja

::: {.mashq #m18-1 daraja="A" javob="1/4"}
$1$ dan $20$ gacha raqamlangan $20$ ta kartochkadan bittasi tasodifan olinadi. Kartochkadagi son $4$ ga bo'linish ehtimolligini toping.
:::

::: {.mashq #m18-2 daraja="A" javob="5/12"}
Qutida $7$ ta qizil va $5$ ta oq qalam bor. Qutidan qaramasdan bitta qalam olinadi. Qalam oq bo'lish ehtimolligini toping.
:::

::: {.mashq #m18-3 daraja="A" javob="0.65"}
Ob-havo ma'lumotiga ko'ra ertaga yomg'ir yog'ish ehtimolligi $0.35$. Ertaga yomg'ir yog'maslik ehtimolligini o'nli kasr ko'rinishida toping.
:::

::: {.mashq #m18-4 daraja="A" javob="3/10"}
MATEMATIKA so'zining $10$ ta harfi alohida kartochkalarga yozilgan. Kartochkalardan biri tasodifan olinadi. Unda A harfi bo'lish ehtimolligini toping.
:::

::: {.mashq #m18-5 daraja="A" javob="30"}
Soqqa tashlanadi va $1$ dan $5$ gacha raqamlangan $5$ ta teng bo'lakli aylanma g'ildirak aylantiriladi. Bu tajribada nechta elementar hodisa bor?
:::

::: {.mashq #m18-6 daraja="A" javob="8%"}
Lotereyada $500$ ta bilet bor, ulardan $40$ tasi yutuqli. Bitta bilet tasodifan sotib olingan. Uning yutuqli bo'lish ehtimolligini foizda toping.
:::

::: {.mashq #m18-7 daraja="A" javob="5/8"}
Aylanma g'ildirak $8$ ta teng bo'lakka bo'lingan: $3$ tasi qizil, $4$ tasi sariq, $1$ tasi yashil. G'ildirak aylantiriladi. Strelka sariq yoki yashil bo'lakda to'xtash ehtimolligini toping.
:::

::: {.mashq #m18-8 daraja="A" javob="2/5"}
Sinfda $30$ o'quvchi bor, ulardan $18$ tasi qiz. Sinf navbatchisi tasodifan tanlanadi. Navbatchi o'g'il bola bo'lish ehtimolligini toping.
:::

### B daraja

::: {.mashq #m18-9 daraja="B" javob="1/9"}
Ikkita soqqa tashlanadi. Tushgan sonlar yig'indisi $5$ ga teng bo'lish ehtimolligini toping.
:::

::: {.mashq #m18-10 daraja="B" javob="2/9"}
Ikkita soqqa tashlanadi. Katta sondan kichik sonni ayirganda $2$ chiqish ehtimolligini toping.
:::

::: {.mashq #m18-11 daraja="B" javob="15/16"}
Tanga $4$ marta tashlanadi. Kamida bir marta gerb tushish ehtimolligini toping.
:::

::: {.mashq #m18-12 daraja="B" javob="0.96"}
Zavodda ishlab chiqarilgan telefonlarning $4\%$ ida nuqson bor. Tasodifan olingan telefonning nuqsonsiz bo'lish ehtimolligini o'nli kasr ko'rinishida toping.
:::

::: {.mashq #m18-13 daraja="B" javob="4/15"}
18.1-jadvaldagi $120$ o'quvchidan biri tasodifan tanlanadi. U tushlikda suv ichishi ehtimolligini toping.
:::

::: {.mashq #m18-14 daraja="B" javob="13/60"}
18.1-jadvaldagi $120$ o'quvchidan biri tasodifan tanlanadi. U 7-sinf o'quvchisi bo'lish va sharbat ichish ehtimolligini toping.
:::

::: {.mashq #m18-15 daraja="B" javob="13/25"}
18.1-jadval bo'yicha 7-sinf o'quvchilari orasidan biri tasodifan tanlanadi. U sharbat ichishi ehtimolligini toping.
:::

::: {.mashq #m18-16 daraja="B" javob="17/24"}
18.1-jadval bo'yicha choy ichadigan o'quvchilar orasidan biri tasodifan tanlanadi. U 8-sinf o'quvchisi bo'lish ehtimolligini toping.
:::

::: {.mashq #m18-17 daraja="B" javob="9/25"}
Aylanma g'ildirak $1$ dan $5$ gacha raqamlangan $5$ ta teng bo'lakka bo'lingan. G'ildirak ikki marta aylantiriladi. Ikkala safar ham toq son chiqish ehtimolligini toping.
:::

### C daraja

::: {.mashq #m18-18 daraja="C" javob="24"}
Xaltada faqat qizil va ko'k sharlar bor. Tasodifan olingan shar qizil bo'lish ehtimolligi $\frac{3}{8}$. Xaltada $15$ ta ko'k shar bor. Xaltada jami nechta shar bor?
:::

::: {.mashq #m18-19 daraja="C" javob="25"}
Qutida $5$ ta qizil va $10$ ta ko'k konfet bor. Qutiga nechta qizil konfet qo'shilsa, tasodifan olingan konfet qizil bo'lish ehtimolligi $\frac{3}{4}$ ga teng bo'ladi?
:::

::: {.mashq #m18-20 daraja="C" javob="18/35"}
18.1-jadval bo'yicha 8-sinf o'quvchilari orasidan biri tasodifan tanlanadi. U tushlikda choy ichmasligi ehtimolligini toping.
:::

::: {.mashq #m18-21 daraja="C" javob="3/7"}
Sport klubida $80$ a'zo bor, ulardan $45$ tasi erkak, qolganlari ayol. Erkaklarning $20$ tasi va ayollarning $15$ tasi suzish bilan shug'ullanadi. Suzish bilan shug'ullanadigan a'zolar orasidan biri tasodifan tanlanadi. U ayol bo'lish ehtimolligini toping.
:::

::: {.mashq #m18-22 daraja="C" javob="11/36"}
Ikkita soqqa tashlanadi. Kamida bitta soqqada $6$ tushish ehtimolligini toping.
:::

::: {.mashq #m18-23 daraja="C" javob="7/50"}
Maktab sayohatidan keyin $50$ o'quvchidan so'raldi: ularning $30$ tasi Samarqandga, $25$ tasi Buxoroga borgan, $12$ tasi esa ikkala shaharga ham borgan. Bitta o'quvchi tasodifan tanlanadi. U bu ikki shahardan hech biriga bormagan bo'lish ehtimolligini toping. (Maslahat: "Samarqandga borganmi?" va "Buxoroga borganmi?" savollari bo'yicha ikki tomonlama jadval tuzing.)
:::

::: {.mashq #m18-24 daraja="C" javob="0.42"}
Maktabga boradigan yo'lda ikkita svetofor bor. Birinchi svetoforda qizil chiroqqa to'xtash ehtimolligi $0.4$, ikkinchisida $0.3$; svetoforlarni mustaqil deb hisoblang. Birorta ham svetoforda to'xtamaslik ehtimolligini o'nli kasr ko'rinishida toping.
:::

::: {.mashq #m18-25 daraja="C" javob="75"}
Zavodda tekshirilgan $400$ ta detaldan $6$ tasi nuqsonli chiqdi. Nisbiy chastotani nuqsonli detal chiqish ehtimolligi sifatida olib, $5\,000$ ta detaldan iborat partiyada nechta nuqsonli detal kutiladi?
:::

## SAT ko'prigi

Quyidagi savollar SAT uslubida, inglizcha yozilgan. *probability* — ehtimollik, *selected at random* — tasodifan tanlangan, *those who* — ...ganlar, *resident* — yashovchi, aholi vakili, *marble* — shar (shisha sharcha), *integer* — butun son, *multiple of* — ...ga karrali, *defective* — nuqsonli. Javoblar kitob oxirida.

Quyidagi jadval S18.1 va S18.2-savollarga tegishli.

The table shows the results of a survey of $300$ residents of a town about the pets they own and the type of home they live in. Each resident chose exactly one pet category.

|  | Dog | Cat | No pet | Total |
|---|---|---|---|---|
| Apartment | $24$ | $36$ | $60$ | $120$ |
| House | $72$ | $33$ | $75$ | $180$ |
| Total | $96$ | $69$ | $135$ | $300$ |

::: {.sat #s18-1 javob="B"}
Based on the table, if a resident is selected at random from those who live in a house, what is the probability that the resident owns a dog?

A) $\frac{72}{300}$

B) $\frac{72}{180}$

C) $\frac{72}{96}$

D) $\frac{96}{300}$
:::

::: {.sat #s18-2 javob="12/23"}
Based on the table, if a resident who owns a cat is selected at random, what is the probability that the resident lives in an apartment?
:::

::: {.sat #s18-3 javob="15"}
A bag contains $36$ marbles, each of which is red, blue, or green. If one marble is selected at random from the bag, the probability that it is red is $\frac{1}{4}$, and the probability that it is blue is $\frac{1}{3}$. How many green marbles are in the bag?
:::

::: {.sat #s18-4 javob="3/20"}
An integer is selected at random from the integers $1$ through $40$, inclusive. What is the probability that the integer is a multiple of $6$?
:::

::: {.sat #s18-5 javob="72"}
A factory found that $3\%$ of the light bulbs it produces are defective. Based on this, how many defective light bulbs are expected in a shipment of $2\,400$ light bulbs?
:::
