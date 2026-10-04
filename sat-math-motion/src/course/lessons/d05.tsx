import React from 'react';
import {meta} from '../catalog';
import {BigLine, NumberLine, NoteRow} from '../figures';
import type {Lesson} from '../types';

const r = String.raw;

const lesson: Lesson = {
  ...meta(5),
  topics: ['Belgilar', 'Teskari belgi qoidasi', "Son o'qi", 'Qo\'sh tengsizlik', 'At least / at most'],
  cover: [
    r`Assalomu alaykum! Beshinchi darsga xush kelibsiz. Bugungi mavzu — chiziqli tengsizliklar.`,
    r`Tengsizlik belgilarini, belgi qachon teskari bo'lishini, son o'qida tasvirlashni, qo'sh tengsizliklarni va "at least", "at most" kabi matnli iboralarni o'rganamiz.`,
  ],
  goals: [
    r`Tengsizlikni tenglama kabi yechish`,
    r`Manfiy songa ko'paytirishda belgini to'g'ri almashtirish`,
    r`Yechimni son o'qida tasvirlash va butun yechimlarni sanash`,
    r`"At least / at most" iboralarini tengsizlikka aylantirish`,
  ],
  goalsSay: [
    r`Darsning maqsadlari.`,
    r`Birinchi: tengsizlikni xuddi tenglama kabi, o'sha algoritm bilan yechish.`,
    r`Ikkinchi: yagona muhim farqni o'zlashtirish — manfiy songa ko'paytirganda yoki bo'lganda belgi teskari bo'ladi.`,
    r`Uchinchi: yechimni son o'qida ko'rsatish va oraliqdagi butun sonlarni sanash.`,
    r`To'rtinchi: matnli masalalardagi "at least", "at most", "no more than" iboralarini to'g'ri belgiga aylantirish.`,
    r`Tengsizliklar Algebra domenida muntazam uchraydi va ko'pincha matnli masala ko'rinishida beriladi.`,
  ],
  goalsResult: r`tengsizlik savollarida belgi xatosiz`,
  slides: [
    {
      type: 'cards',
      kicker: 'BELGILAR',
      title: 'Tengsizlik belgilari va iboralar',
      cards: [
        {title: r`$<$ — kichik`, text: r`"less than", "fewer than"`},
        {title: r`$>$ — katta`, text: r`"greater than", "more than", "exceeds"`},
        {title: r`$\le$ — ko'pi bilan`, text: r`"at most", "no more than", "maximum"`},
        {title: r`$\ge$ — kamida`, text: r`"at least", "no less than", "minimum"`},
      ],
      banner: r`**at least** $\Rightarrow\ \ge$ , **at most** $\Rightarrow\ \le$ — eng ko'p uchraydigan juftlik`,
      say: [
        r`Avval belgilar va ularning inglizcha iboralari.`,
        r`Kichik belgisi: less than, fewer than.`,
        r`Katta belgisi: greater than, more than, exceeds — oshib ketadi.`,
        r`Kichik yoki teng belgisi — ko'pi bilan: at most, no more than, maximum.`,
        r`Katta yoki teng belgisi — kamida: at least, no less than, minimum.`,
        r`Eslab qoling: at least — katta yoki teng, at most — kichik yoki teng. Bu ikki ibora SAT matnli masalalarida eng ko'p uchraydi va ko'pincha teskari tushuniladi.`,
      ],
    },
    {
      type: 'formula',
      kicker: 'QOIDALAR',
      title: 'Tengsizlik — deyarli tenglama',
      formulas: [
        {label: "Qo'shish / ayirish", tex: r`x+3>5\ \Rightarrow\ x>2`, note: r`belgi o'zgarmaydi`},
        {label: 'Musbatga ko\'paytirish', tex: r`\tfrac{x}{2}\le4\ \Rightarrow\ x\le8`, note: r`belgi o'zgarmaydi`},
        {label: 'Manfiyga bo\'lish', tex: r`-2x>6\ \Rightarrow\ x<-3`, note: r`belgi **teskari**!`},
      ],
      banner: r`Manfiy songa ko'paytirish yoki bo'lish — belgini teskari aylantiring`,
      say: [
        r`Tengsizlik deyarli tenglama kabi yechiladi.`,
        r`Ikkala tomonga son qo'shsak yoki ayirsak, belgi o'zgarmaydi: x plyus uch katta besh, demak x katta ikki.`,
        r`Musbat songa ko'paytirsak yoki bo'lsak ham belgi o'zgarmaydi: x ikkidan kichik yoki teng to'rt, demak x kichik yoki teng sakkiz.`,
        r`Lekin manfiy songa ko'paytirganda yoki bo'lganda belgi teskari bo'ladi. Minus ikki x katta olti — minus ikkiga bo'lamiz — x kichik minus uch.`,
        r`Nima uchun? Masalan, ikki kichik uch — rost. Ikkalasini minus birga ko'paytirsak, minus ikki va minus uch chiqadi, endi esa minus ikki katta minus uch. Shu sababli belgini teskari aylantiramiz.`,
      ],
    },
    {
      type: 'example',
      kicker: '1-MISOL',
      title: 'Belgi teskari bo\'ladigan misol',
      label: 'MISOL',
      question: r`Solve $3-2x\le11$.`,
      steps: [
        {m: r`-2x\le8`, note: r`$3$ ni ayiramiz`},
        {m: r`x\ge-4`, note: r`$-2$ ga bo'lamiz — belgi teskari`},
      ],
      answer: r`$x\ge-4$`,
      tip: r`Tekshiruv: $x=0$ ni qo'ying: $3\le11$ ✓ — $0$ haqiqatan yechimlar ichida.`,
      say: [
        r`Birinchi misol: uch minus ikki x kichik yoki teng o'n bir.`,
        r`Uchni ayiramiz: minus ikki x kichik yoki teng sakkiz.`,
        r`Minus ikkiga bo'lamiz va belgini teskari aylantiramiz: x katta yoki teng minus to'rt.`,
        r`Javob: x katta yoki teng minus to'rt.`,
        r`Tez tekshirish usuli: yechimlar ichidagi oddiy sonni, masalan nolni, dastlabki tengsizlikka qo'ying. Uch kichik yoki teng o'n bir — rost. Demak, belgining yo'nalishi to'g'ri.`,
      ],
    },
    {
      type: 'custom',
      kicker: "SON O'QI",
      title: r`$x\ge-4$ ni son o'qida tasvirlash`,
      beats: 3,
      doc: r`- To'ldirilgan doira ($\bullet$) — son yechimga **kiradi** ($\le$, $\ge$).
- Bo'sh doira ($\circ$) — son yechimga **kirmaydi** ($<$, $>$).
- $x\ge-4$: $-4$ da to'ldirilgan doira, o'ngga bo'yaladi.`,
      render: (b) => (
        <>
          <NumberLine
            from={-7}
            to={5}
            marks={[{x: -4, closed: true, label: '−4', at: b(1)}]}
            shade={[{a: -4, b: null, at: b(2)}]}
          />
          <NoteRow
            top={660}
            items={[
              {text: r`**To'ldirilgan** doira: $\le,\ \ge$ — son yechimga kiradi`, at: b(1)},
              {text: r`**Bo'sh** doira: $<,\ >$ — son kirmaydi`, at: b(3), color: '#F59E0B'},
            ]}
          />
        </>
      ),
      say: [
        r`Endi bu yechimni son o'qida tasvirlaymiz.`,
        r`Minus to'rt nuqtasiga to'ldirilgan doira qo'yamiz, chunki belgi "katta yoki teng" — minus to'rtning o'zi ham yechim.`,
        r`X minus to'rtdan katta bo'lgani uchun o'ng tomonni bo'yaymiz — cheksizlikkacha.`,
        r`Agar belgi qat'iy bo'lsa, ya'ni oddiy katta yoki kichik, doira bo'sh chiziladi — bu son yechimga kirmaydi degani. SAT bunday rasmlarni variant sifatida beradi, shuning uchun doiraga e'tibor bering.`,
      ],
    },
    {
      type: 'custom',
      kicker: "QO'SH TENGSIZLIK",
      title: r`$-3<2x+1\le7$`,
      beats: 4,
      doc: r`**Qo'sh tengsizlik** $-3<2x+1\le7$: uch qismga ham bir xil amal qilamiz.
1. $-4<2x\le6$ — $1$ ni ayiramiz
2. $-2<x\le3$ — $2$ ga bo'lamiz
3. Butun yechimlar: $-1,0,1,2,3$ — **5 ta**`,
      render: (b) => (
        <>
          <BigLine text={r`$-4<2x\le6$ $\quad\Rightarrow\quad$ $-2<x\le3$`} at={b(1)} top={250} size={54} />
          <NumberLine
            from={-5}
            to={6}
            top={380}
            marks={[
              {x: -2, closed: false, label: '−2', at: b(2)},
              {x: 3, closed: true, label: '3', at: b(2)},
            ]}
            shade={[{a: -2, b: 3, at: b(2) + 0.5}]}
          />
          <NoteRow
            top={700}
            items={[
              {text: r`Butun yechimlar: $-1,\ 0,\ 1,\ 2,\ 3$`, at: b(3)},
              {text: r`Jami: **5 ta** ( $-2$ kirmaydi, $3$ kiradi)`, at: b(4), color: '#22C55E'},
            ]}
          />
        </>
      ),
      say: [
        r`Qo'sh tengsizlik: minus uch kichik ikki x plyus bir, u esa kichik yoki teng yetti. Savol: nechta butun son bu tengsizlikni qanoatlantiradi?`,
        r`Qo'sh tengsizlikda uchala qismga bir xil amal qilamiz. Birni ayiramiz: minus to'rt kichik ikki x kichik yoki teng olti. Ikkiga bo'lamiz: minus ikki kichik x kichik yoki teng uch.`,
        r`Son o'qida: minus ikkida bo'sh doira, chunki belgi qat'iy; uchda to'ldirilgan doira. Orasini bo'yaymiz.`,
        r`Butun sonlarni sanaymiz: minus bir, nol, bir, ikki, uch.`,
        r`Jami beshta. Minus ikki kirmaydi, uch esa kiradi — chegaralarga doim alohida qarang.`,
      ],
    },
    {
      type: 'example',
      kicker: 'MATNLI MASALA',
      title: '"At most" bilan masala',
      label: 'SPR SAVOLI',
      question: r`A phone plan costs 20 dollars per month plus 0.10 dollars per text message. Aziz wants to spend at most 35 dollars this month. What is the maximum number of text messages he can send?`,
      steps: [
        {m: r`20+0.10t\le35`, note: r`"at most" $\Rightarrow\ \le$`},
        {m: r`0.10t\le15`},
        {m: r`t\le150`, note: r`$0.10$ ga bo'lamiz`},
      ],
      answer: r`$150$`,
      tip: r`"Maximum" so'ralsa — chegaraviy sonni oling. Agar $t\le150.5$ chiqsa, butun son kerak: $150$.`,
      say: [
        r`Matnli masala. Telefon tarifi oyiga yigirma dollar, plyus har bir SMS uchun o'n sent. Aziz bu oy ko'pi bilan o'ttiz besh dollar sarflamoqchi. U eng ko'pi bilan nechta SMS yubora oladi?`,
        r`"At most" — kichik yoki teng. Tengsizlik: yigirma plyus nol butun o'ndan bir t kichik yoki teng o'ttiz besh.`,
        r`Yigirmani ayiramiz: nol butun o'ndan bir t kichik yoki teng o'n besh.`,
        r`Nol butun o'ndan birga bo'lamiz: t kichik yoki teng bir yuz ellik.`,
        r`Javob: bir yuz ellik.`,
        r`Maksimum so'ralganda chegaraviy qiymatni olamiz. Agar natija kasr chiqsa va narsalar soni so'ralsa, butun songa pastga qarab yaxlitlang.`,
      ],
    },
    {
      type: 'trap',
      title: "Manfiy songa ko'paytirish",
      question: r`Which of the following is the solution set of $-\dfrac{x}{3}\ge2$?`,
      wrong: r`$x\ge-6$`,
      why: r`$-3$ ga ko'paytirildi, lekin belgi teskari aylantirilmadi.`,
      right: r`$-3$ ga ko'paytiramiz va belgini aylantiramiz: **$x\le-6$**. Tekshiruv: $x=-9$: $3\ge2$ ✓`,
      say: [
        r`Tuzoq. Which of the following is the solution set of minus x over three greater than or equal to two?`,
        r`Ko'p o'quvchi minus uchga ko'paytiradi va x katta yoki teng minus olti deb yozadi. Bu variant testda albatta bo'ladi. Xato — belgi teskari aylantirilmadi.`,
        r`To'g'ri javob: x kichik yoki teng minus olti. Tekshiramiz: x teng minus to'qqiz bo'lsa, minus x uchdan — uch, uch katta yoki teng ikki — rost. Shubha bo'lsa, doim bitta sonni qo'yib tekshiring.`,
      ],
    },
    {
      type: 'example',
      kicker: 'SAT MISOLI',
      title: 'Variantlardan tanlash',
      question: r`Which of the following values of $x$ satisfies $5x-4>2x+11$?`,
      choices: [r`$3$`, r`$4$`, r`$5$`, r`$6$`],
      steps: [
        {m: r`3x>15`, note: r`hadlarni yig'amiz`},
        {m: r`x>5`},
        {m: r`5\ \text{kirmaydi},\ 6>5`, note: r`belgi qat'iy`},
      ],
      answer: r`D`,
      tip: r`Qat'iy belgida ($>$, $<$) chegaraviy son yechim emas — bu tuzoq variant sifatida beriladi.`,
      say: [
        r`Yana bir test savoli. Which of the following values of x satisfies five x minus four greater than two x plus eleven?`,
        r`Ikki x ni chapga, minus to'rtni o'ngga o'tkazamiz: uch x katta o'n besh.`,
        r`Uchga bo'lamiz: x katta besh.`,
        r`Besh — chegaraviy son, lekin belgi qat'iy, shuning uchun beshning o'zi yechim emas. Variantlardan faqat olti beshdan katta.`,
        r`Javob: D.`,
        r`Bu savoldagi C varianti — besh — aynan qat'iy belgini unutgan o'quvchilar uchun qo'yilgan tuzoq.`,
      ],
    },
    {
      type: 'example',
      kicker: 'MATNLI MASALA',
      title: '"At least" bilan o\'rtacha qiymat',
      label: 'SPR SAVOLI',
      question: r`To earn an A, a student needs an average score of at least 85 on four tests. Her first three scores are 80, 88, and 82. What is the minimum score she needs on the fourth test?`,
      steps: [
        {m: r`\frac{80+88+82+s}{4}\ge85`, note: r`"at least" $\Rightarrow\ \ge$`},
        {m: r`250+s\ge340`, note: r`$4$ ga ko'paytiramiz`},
        {m: r`s\ge90`},
      ],
      answer: r`$90$`,
      tip: r`"Minimum" so'ralsa — tengsizlikning chegaraviy qiymati javob bo'ladi.`,
      say: [
        r`Yana bir matnli masala. A baho olish uchun to'rtta testdan o'rtacha ball kamida sakson besh bo'lishi kerak. Birinchi uchta natija: sakson, sakson sakkiz va sakson ikki. To'rtinchi testda kamida necha ball olish kerak?`,
        r`To'rtinchi ballni s deb belgilaymiz. O'rtacha: to'rtta ball yig'indisi bo'lingan to'rtga, va bu kamida sakson besh — katta yoki teng.`,
        r`To'rtga ko'paytiramiz: ikki yuz ellik plyus s katta yoki teng uch yuz qirq.`,
        r`Demak, s katta yoki teng to'qson.`,
        r`Javob: to'qson.`,
        r`Minimum so'ralganda chegaraviy qiymat — javob. O'rtacha qiymat masalalarida doim yig'indiga o'ting: o'rtacha karra soni — yig'indi.`,
      ],
    },
    {
      type: 'example',
      kicker: 'MUSTAQIL MASHQ',
      title: "O'zingiz yeching",
      label: 'MASHQ',
      question: r`What is the greatest integer $x$ that satisfies $\dfrac{x+4}{2}\ge x-1$?`,
      steps: [
        {m: r`x+4\ge2x-2`, note: r`$2$ ga ko'paytiramiz`},
        {m: r`6\ge x`, note: r`hadlarni yig'amiz`},
        {m: r`x\le6`},
      ],
      answer: r`$6$`,
      say: [
        r`Mustaqil mashq. Videoni to'xtating va yeching: x plyus to'rt, bo'lingan ikkiga, katta yoki teng x minus bir. Bu tengsizlikni qanoatlantiradigan eng katta butun son qaysi?`,
        r`Ikkala tomonni ikkiga ko'paytiramiz. Ikki musbat, shuning uchun belgi o'zgarmaydi: x plyus to'rt katta yoki teng ikki x minus ikki.`,
        r`X larni o'ngga, sonlarni chapga yig'amiz: olti katta yoki teng x.`,
        r`Ya'ni x kichik yoki teng olti.`,
        r`Eng katta butun son — olti. Belgi "yoki teng" bo'lgani uchun oltining o'zi kiradi.`,
      ],
    },
  ],
  recap: [
    r`at least $\Rightarrow\ \ge$, at most $\Rightarrow\ \le$`,
    r`Manfiyga ko'paytirish/bo'lish — belgi teskari`,
    r`Chegarani tekshiring: qat'iy belgida u yechim emas`,
  ],
  homework: r`platformada tengsizliklar bo'yicha 12 ta savol`,
  recapSay: [
    r`Xulosa.`,
    r`At least — katta yoki teng, at most — kichik yoki teng.`,
    r`Manfiy songa ko'paytirganda yoki bo'lganda belgini teskari aylantiring.`,
    r`Chegaraviy songa alohida qarang: qat'iy belgida u yechim emas, son o'qida esa bo'sh doira bilan chiziladi.`,
    r`Hozir platformada tengsizliklar bo'yicha o'n ikkita savolni yeching. Keyingi darsda chiziqli funksiyalar — qiyalik va kesishma bilan tanishamiz.`,
    r`Ko'rishguncha!`,
  ],
};

export default lesson;
