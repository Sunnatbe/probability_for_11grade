import React from 'react';
import {meta} from '../catalog';
import {BigLine, NumberLine, NoteRow} from '../figures';
import type {Lesson} from '../types';

const r = String.raw;

const lesson: Lesson = {
  ...meta(19),
  topics: ['Radikalni ajratish', 'Kvadratga oshirish', 'Begona ildiz', 'Modul', 'Modulli tengsizlik'],
  cover: [
    r`Assalomu alaykum! O'n to'qqizinchi darsga xush kelibsiz. Bugungi mavzu — radikal va modulli tenglamalar.`,
    r`Ildiz ostida noma'lum bo'lgan tenglamalarni yechishni, begona ildizlarni aniqlashni, modulli tenglama va tengsizliklarni hamda ularning grafik ma'nosini o'rganamiz.`,
  ],
  goals: [
    r`Radikal tenglamani 4 qadamda yechish`,
    r`Begona ildizni tekshiruv bilan aniqlash`,
    r`$|x-a|=b$ ko'rinishidagi tenglamalarni yechish`,
    r`Modulli tengsizlikni son o'qida tasvirlash`,
  ],
  goalsSay: [
    r`Darsning maqsadlari.`,
    r`Birinchi: ildiz ostida noma'lum bo'lgan tenglamani to'rt qadamda yechish.`,
    r`Ikkinchi: kvadratga oshirish natijasida paydo bo'ladigan begona ildizlarni tekshiruv bilan aniqlash.`,
    r`Uchinchi: modulli tenglamalarni ikki holatga ajratib yechish.`,
    r`To'rtinchi: modulli tengsizlikni masofa sifatida tushunish va son o'qida tasvirlash.`,
    r`Bu savollarda eng ko'p ball tekshiruvni unutish tufayli yo'qotiladi.`,
  ],
  goalsResult: r`radikal va modulli savollarda begona javobga tushmaslik`,
  slides: [
    {
      type: 'cards',
      kicker: 'ALGORITM',
      title: 'Radikal tenglama: 4 qadam',
      cards: [
        {title: 'Ildizni yolg\'iz qoldiring', text: r`$\sqrt{x-1}+3=x\ \Rightarrow\ \sqrt{x-1}=x-3$`},
        {title: 'Kvadratga oshiring', text: r`Ikkala tomonni: $x-1=(x-3)^2$`},
        {title: 'Yeching', text: r`Odatda kvadrat tenglama chiqadi`},
        {title: 'Tekshiring!', text: r`Har bir javobni **dastlabki** tenglamaga qo'ying`},
      ],
      say: [
        r`Radikal tenglama — ildiz ostida noma'lum bo'lgan tenglama. Uni yechish uchun to'rt qadam.`,
        r`Birinchi: ildizni tenglamaning bir tomonida yolg'iz qoldiring.`,
        r`Ikkinchi: ikkala tomonni kvadratga oshiring — ildiz yo'qoladi.`,
        r`Uchinchi: hosil bo'lgan tenglamani yeching — ko'pincha bu kvadrat tenglama.`,
        r`To'rtinchi va eng muhimi: har bir topilgan javobni dastlabki tenglamaga qo'yib tekshiring. Kvadratga oshirish yangi, begona yechimlar qo'shishi mumkin.`,
      ],
    },
    {
      type: 'example',
      kicker: '1-MISOL',
      title: 'Oddiy radikal tenglama',
      label: 'SPR SAVOLI',
      question: r`If $\sqrt{x+3}=5$, what is the value of $x$?`,
      steps: [
        {m: r`x+3=25`, note: r`kvadratga oshiramiz`},
        {m: r`x=22`},
        {m: r`\sqrt{25}=5\ \checkmark`},
      ],
      answer: r`$22$`,
      say: [
        r`Birinchi misol: ildiz ostida x plyus uch teng besh.`,
        r`Ildiz allaqachon yolg'iz. Kvadratga oshiramiz: x plyus uch teng yigirma besh.`,
        r`X teng yigirma ikki.`,
        r`Tekshiramiz: yigirma beshning ildizi besh. To'g'ri.`,
        r`Javob: yigirma ikki.`,
      ],
    },
    {
      type: 'example',
      kicker: '2-MISOL',
      title: 'Begona ildiz',
      label: 'MISOL',
      question: r`Solve $\sqrt{2x+3}=x$.`,
      steps: [
        {m: r`2x+3=x^2`, note: r`kvadratga oshiramiz`},
        {m: r`x^2-2x-3=0\Rightarrow(x-3)(x+1)=0`},
        {m: r`x=3:\ \sqrt9=3\ \checkmark`},
        {m: r`x=-1:\ \sqrt1=1\neq-1\ \text{✗}`, note: r`begona ildiz`},
      ],
      answer: r`$x=3$`,
      tip: r`Ildiz qiymati hech qachon manfiy emas: $\sqrt{\ \ }\ge0$. Shuning uchun o'ng tomon manfiy chiqsa — begona.`,
      say: [
        r`Ikkinchi misol: ildiz ostida ikki x plyus uch teng x.`,
        r`Kvadratga oshiramiz: ikki x plyus uch teng x kvadrat.`,
        r`Nolga keltirib ajratamiz: x minus uch karra x plyus bir. Nomzodlar: uch va minus bir.`,
        r`Tekshiramiz. X teng uch: to'qqizning ildizi uch — to'g'ri.`,
        r`X teng minus bir: birning ildizi bir, lekin o'ng tomon minus bir. Teng emas — bu begona ildiz.`,
        r`Javob: faqat uch.`,
        r`Esda tuting: kvadrat ildizning qiymati hech qachon manfiy bo'lmaydi. Shuning uchun ildiz manfiy songa teng chiqsa — bu begona javob.`,
      ],
    },
    {
      type: 'example',
      kicker: 'SAT MISOLI',
      title: 'Radikalni avval ajratish',
      question: r`What are all solutions to $\sqrt{x-1}+3=x$?`,
      choices: [r`$2$ only`, r`$5$ only`, r`$2$ and $5$`, r`No solution`],
      steps: [
        {m: r`\sqrt{x-1}=x-3`, note: r`avval ildizni yolg'iz qoldiramiz`},
        {m: r`x-1=x^2-6x+9\Rightarrow x^2-7x+10=0`},
        {m: r`x=5:\ 2+3=5\ \checkmark;\quad x=2:\ 1+3\neq2\ \text{✗}`},
      ],
      answer: r`B`,
      tip: r`C variant — tekshiruvsiz olingan "ikkala ildiz". SAT'da u deyarli doim bo'ladi.`,
      say: [
        r`SAT misoli. What are all solutions to square root of x minus one plus three equals x?`,
        r`Avval ildizni yolg'iz qoldiramiz: ildiz x minus bir teng x minus uch.`,
        r`Kvadratga oshiramiz: x minus bir teng x kvadrat minus olti x plyus to'qqiz. Nolga keltirsak: x kvadrat minus yetti x plyus o'n teng nol. Nomzodlar: besh va ikki.`,
        r`Tekshiramiz. Besh: to'rtning ildizi ikki, plyus uch — besh. To'g'ri. Ikki: birning ildizi bir, plyus uch — to'rt, ikki emas. Begona.`,
        r`Javob: B — faqat besh.`,
        r`C variant — tekshirmasdan ikkala ildizni olgan o'quvchilar uchun tuzoq. SAT'da bunday variant deyarli doim bo'ladi.`,
      ],
    },
    {
      type: 'trap',
      title: 'Ajratmasdan kvadratga oshirish',
      question: r`Solve $\sqrt{x}+2=5$.`,
      wrong: r`$x+4=25\Rightarrow x=21$`,
      why: r`Hadma-had kvadratga oshirilgan: $(\sqrt x+2)^2\neq x+4$.`,
      right: r`Avval ajrating: $\sqrt x=3$, keyin kvadrat: **$x=9$**. Tekshiruv: $3+2=5$ ✓`,
      say: [
        r`Tuzoq. Solve square root of x plus two equals five.`,
        r`O'quvchi har bir hadni alohida kvadratga oshiradi: x plyus to'rt teng yigirma besh. Bu xato — yig'indining kvadrati kvadratlar yig'indisiga teng emas.`,
        r`To'g'ri yo'l: avval ildizni ajratamiz — ildiz x teng uch, keyin kvadratga oshiramiz — x teng to'qqiz. Tekshiruv: uch plyus ikki — besh.`,
      ],
    },
    {
      type: 'formula',
      kicker: 'MODUL',
      title: 'Modul — masofa',
      formulas: [
        {label: 'Ma\'nosi', tex: r`|x-a|=d(x,\,a)`, note: r`son o'qida $x$ dan $a$ gacha masofa`},
        {label: 'Tenglama', tex: r`|x-a|=b\ \Rightarrow\ x=a+b\ \text{yoki}\ x=a-b`, note: r`$b\ge0$ bo'lsa`},
        {label: "Yechim yo'q", tex: r`|\ldots|=\text{manfiy son}`, note: r`modul hech qachon manfiy emas`},
      ],
      say: [
        r`Endi modul. Modulni masofa deb tushuning.`,
        r`X minus a ning moduli — son o'qida x dan a gacha bo'lgan masofa.`,
        r`Shuning uchun x minus a ning moduli b ga teng bo'lsa, x — a dan b masofadagi ikki son: a plyus b yoki a minus b.`,
        r`Modul hech qachon manfiy bo'lmaydi. Modul manfiy songa teng bo'lsa — yechim yo'q.`,
      ],
    },
    {
      type: 'example',
      kicker: '3-MISOL',
      title: 'Modulli tenglama',
      label: 'SPR SAVOLI',
      question: r`What is the sum of the solutions to $|2x-1|=7$?`,
      steps: [
        {m: r`2x-1=7\Rightarrow x=4`},
        {m: r`2x-1=-7\Rightarrow x=-3`},
        {m: r`4+(-3)=1`},
      ],
      answer: r`$1$`,
      say: [
        r`Uchinchi misol. What is the sum of the solutions to absolute value of two x minus one equals seven?`,
        r`Birinchi holat: ichki ifoda yettiga teng — ikki x minus bir teng yetti, x teng to'rt.`,
        r`Ikkinchi holat: ichki ifoda minus yettiga teng — ikki x teng minus olti, x teng minus uch.`,
        r`Yig'indi: to'rt plyus minus uch — bir.`,
        r`Javob: bir.`,
      ],
    },
    {
      type: 'custom',
      kicker: 'MODULLI TENGSIZLIK',
      title: r`$|x-3|<2$`,
      beats: 3,
      doc: r`$|x-3|<2$ — $x$ dan $3$ gacha masofa $2$ dan kichik: $-2<x-3<2$, ya'ni **$1<x<5$** (bo'sh doiralar). $|x-a|>b$ esa ikki tomonga: $x<a-b$ yoki $x>a+b$.`,
      render: (b) => (
        <>
          <BigLine text={r`$-2<x-3<2\quad\Rightarrow\quad 1<x<5$`} at={b(1)} top={250} size={54} />
          <NumberLine
            from={-1}
            to={8}
            top={380}
            marks={[
              {x: 1, closed: false, label: '1', at: b(2)},
              {x: 5, closed: false, label: '5', at: b(2)},
              {x: 3, closed: true, label: 'markaz 3', at: b(2)},
            ]}
            shade={[{a: 1, b: 5, at: b(2) + 0.4}]}
          />
          <NoteRow
            top={700}
            items={[
              {text: r`$|x-a|<b$: **ichkarida** — $a-b<x<a+b$`, at: b(3)},
              {text: r`$|x-a|>b$: **tashqarida** — $x<a-b$ yoki $x>a+b$`, at: b(3) + 1, color: '#F59E0B'},
            ]}
          />
        </>
      ),
      say: [
        r`Modulli tengsizlik: x minus uch ning moduli ikkidan kichik. Ya'ni x uchdan ikki birlikdan kamroq uzoqlikda.`,
        r`Buni qo'sh tengsizlik qilib yozamiz: minus ikki kichik x minus uch kichik ikki. Uchni qo'shsak: bir kichik x kichik besh.`,
        r`Son o'qida: markaz uch, undan ikki birlik chapga va o'ngga — bir va besh. Belgi qat'iy, shuning uchun doiralar bo'sh.`,
        r`Qoida: modul kichik bo'lsa — yechim markaz atrofida, ichkarida. Modul katta bo'lsa — ikki tomonga, tashqarida.`,
      ],
    },
    {
      type: 'graph',
      kicker: 'GRAFIKDA',
      title: r`$|x-2|=3$ grafikda`,
      x: [-3, 7],
      y: [-1, 6],
      items: [
        {kind: 'fn', f: (x) => Math.abs(x - 2), label: r`$y=|x-2|$`, note: r`Modul grafigi — "V" shakl, uchi $(2,\,0)$`},
        {kind: 'fn', f: () => 3, label: r`$y=3$`, note: r`O'ng tomon — gorizontal chiziq`},
        {kind: 'point', x: -1, y: 3, label: r`$x=-1$`, color: '#22C55E', note: r`Kesishishlar — yechimlar: $x=-1$…`},
        {kind: 'point', x: 5, y: 3, label: r`$x=5$`, color: '#22C55E', note: r`…va $x=5$`},
      ],
      say: [
        r`Modulli tenglamani grafikda ham ko'rish mumkin: x minus ikkining moduli teng uch.`,
        r`Modul grafigi — V harfi shaklida, uchi ikki, nol nuqtasida.`,
        r`O'ng tomon — y teng uch gorizontal chizig'i.`,
        r`Ular minus birda…`,
        r`…va beshda kesishadi. Agar o'ng tomon manfiy bo'lganida, chiziq V dan pastda qolardi va kesishish bo'lmasdi — yechim yo'q. Desmos'da modul belgisini "abs" yoki vertikal chiziqlar bilan yozasiz.`,
      ],
    },
    {
      type: 'example',
      kicker: 'MUSTAQIL MASHQ',
      title: "O'zingiz yeching",
      label: 'MASHQ',
      question: r`What is the solution to $\sqrt{3x+1}=x-1$?`,
      steps: [
        {m: r`3x+1=x^2-2x+1\Rightarrow x^2-5x=0`},
        {m: r`x=0\ \text{yoki}\ x=5`},
        {m: r`x=0:\ 1\neq-1\ \text{✗};\quad x=5:\ 4=4\ \checkmark`},
      ],
      answer: r`$5$`,
      say: [
        r`Mustaqil mashq. Videoni to'xtating: ildiz ostida uch x plyus bir teng x minus bir.`,
        r`Kvadratga oshiramiz: uch x plyus bir teng x kvadrat minus ikki x plyus bir. Soddalashtirsak: x kvadrat minus besh x teng nol.`,
        r`Nomzodlar: nol va besh.`,
        r`Tekshiramiz. Nol: birning ildizi bir, o'ng tomon minus bir — begona. Besh: o'n oltining ildizi to'rt, o'ng tomon to'rt — to'g'ri.`,
        r`Javob: besh.`,
      ],
    },
    {
      type: 'example',
      kicker: 'SAT MISOLI',
      title: 'Matndan modulli tengsizlik',
      question: r`Which inequality describes all values of $x$ that are within 3 units of 7 on the number line?`,
      choices: [r`$|x-3|\le7$`, r`$|x+7|\le3$`, r`$|x-7|\le3$`, r`$|x-7|\ge3$`],
      steps: [
        {m: r`\text{masofa}(x,\,7)=|x-7|`},
        {m: r`\text{"within 3"}\Rightarrow\ \le3`},
        {m: r`|x-7|\le3\iff4\le x\le10`},
      ],
      answer: r`C`,
      say: [
        r`SAT misoli. Which inequality describes all values of x that are within three units of seven?`,
        r`X dan yettigacha masofa — x minus yettining moduli.`,
        r`"Within three" — uchdan oshmaydi, ya'ni kichik yoki teng uch.`,
        r`X minus yettining moduli kichik yoki teng uch. Bu to'rt va o'n orasidagi sonlar.`,
        r`Javob: C. B variantda ishora xato — x plyus yetti minus yettigacha masofani bildiradi. D esa teskari — "kamida uch birlik uzoqda".`,
      ],
    },
    {
      type: 'example',
      kicker: 'SAT MISOLI',
      title: "Yechimi yo'q tenglama",
      question: r`Which of the following equations has no solution?`,
      choices: [r`$|x-1|=0$`, r`$|x-1|+5=2$`, r`$|x+1|=5$`, r`$|x|-5=2$`],
      steps: [
        {m: r`B:\ |x-1|=-3`, note: r`modulni yolg'iz qoldiramiz`},
        {m: r`|\ldots|\ge0>-3`, note: r`modul manfiy bo'la olmaydi`},
      ],
      answer: r`B`,
      say: [
        r`Yana bir misol. Which of the following equations has no solution?`,
        r`Har bir variantda modulni yolg'iz qoldiramiz. B variant: x minus birning moduli teng ikki minus besh — minus uch.`,
        r`Modul hech qachon manfiy bo'lmaydi, demak bu tenglamaning yechimi yo'q.`,
        r`Javob: B. Qolganlari yechimga ega: A da bitta, C va D da ikkitadan.`,
      ],
    },
  ],
  recap: [
    r`Radikal: ajrating $\to$ kvadratga $\to$ yeching $\to$ **tekshiring**`,
    r`$\sqrt{\ \ }\ge0$ — manfiyga teng chiqsa, begona ildiz`,
    r`$|x-a|=b$: $a\pm b$; $<$ — ichkarida, $>$ — tashqarida`,
  ],
  homework: r`platformada radikal va modulli tenglamalar bo'yicha 12 ta savol`,
  recapSay: [
    r`Xulosa.`,
    r`Radikal tenglama: ildizni ajrating, kvadratga oshiring, yeching va albatta tekshiring.`,
    r`Kvadrat ildiz hech qachon manfiy emas — manfiy songa teng chiqqan javob begona.`,
    r`Modul — masofa. X minus a ning moduli b ga teng bo'lsa, x teng a plyus-minus b. Kichik belgisi — ichkarida, katta belgisi — tashqarida.`,
    r`Hozir platformada radikal va modulli tenglamalar bo'yicha o'n ikkita savolni yeching. Keyingi darsda funksiyalar: belgilash, kompozitsiya va siljitishni o'rganamiz.`,
    r`Ko'rishguncha!`,
  ],
};

export default lesson;
