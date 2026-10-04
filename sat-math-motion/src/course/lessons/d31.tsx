import React from 'react';
import {meta} from '../catalog';
import {Shape, SideNotes} from '../figures';
import type {Lesson} from '../types';

const r = String.raw;

const lesson: Lesson = {
  ...meta(31),
  topics: ['SOH-CAH-TOA', 'Maxsus uchburchaklar', '$\\sin x=\\cos(90-x)$', 'Tomonni topish', 'Kalkulyator rejimi'],
  cover: [
    r`Assalomu alaykum! O'ttiz birinchi darsga xush kelibsiz. Bugungi mavzu — to'g'ri burchakli uchburchak trigonometriyasi.`,
    r`Sinus, kosinus va tangensni SOH-CAH-TOA qoidasi bilan topishni, ikki maxsus uchburchakni, sinus va kosinus orasidagi bog'lanishni va kalkulyator bilan tomon topishni o'rganamiz.`,
  ],
  goals: [
    r`$\sin$, $\cos$, $\tan$ ni tomonlar orqali yozish`,
    r`$45$-$45$-$90$ va $30$-$60$-$90$ uchburchaklarni qo'llash`,
    r`$\sin x=\cos(90^\circ-x)$ bog'lanishini ishlatish`,
    r`Burchak va bitta tomondan qolgan tomonlarni topish`,
  ],
  goalsSay: [
    r`Darsning maqsadlari.`,
    r`Birinchi: sinus, kosinus va tangensni tomonlar nisbati sifatida yozish.`,
    r`Ikkinchi: ikki maxsus uchburchak — qirq besh, qirq besh, to'qson va o'ttiz, oltmish, to'qson — tomonlari nisbatini qo'llash.`,
    r`Uchinchi: bir burchakning sinusi qo'shimcha burchakning kosinusiga tengligini ishlatish.`,
    r`To'rtinchi: burchak va bitta tomon berilganda qolgan tomonlarni kalkulyator bilan topish.`,
    r`Trigonometriya savollari kam, lekin ular deyarli doim bir xil shablonda keladi.`,
  ],
  goalsResult: r`trigonometriya shablonlari — yodda`,
  slides: [
    {
      type: 'custom',
      kicker: 'SOH-CAH-TOA',
      title: r`Burchak $\theta$ ga nisbatan tomonlar`,
      beats: 3,
      doc: r`Burchak $\theta$ uchun: **qarshidagi** (opposite) katet, **yonidagi** (adjacent) katet va **gipotenuza**. $\sin\theta=\frac{\text{qarshi}}{\text{gip.}}$, $\cos\theta=\frac{\text{yon}}{\text{gip.}}$, $\tan\theta=\frac{\text{qarshi}}{\text{yon}}$ — SOH-CAH-TOA.`,
      render: (b) => (
        <>
          <Shape
            appear={0.3}
            left={200}
            top={290}
            size={560}
            points={[
              [10, 90],
              [90, 90],
              [90, 30],
            ]}
            rightAngle={[
              [90, 90],
              [10, 90],
              [90, 30],
            ]}
            labels={[
              {at: [24, 84], text: r`$\theta$`, color: '#F59E0B'},
              {at: [50, 98], text: 'yon', color: '#C7CCF5'},
              {at: [99, 60], text: 'qarshi', color: '#EC4899'},
              {at: [44, 52], text: 'gipotenuza', color: '#22C55E'},
            ]}
          />
          <SideNotes
            items={[
              {text: r`**SOH:** $\sin\theta=\dfrac{\text{qarshi}}{\text{gipotenuza}}$`, at: b(1)},
              {text: r`**CAH:** $\cos\theta=\dfrac{\text{yon}}{\text{gipotenuza}}$`, at: b(2)},
              {text: r`**TOA:** $\tan\theta=\dfrac{\text{qarshi}}{\text{yon}}$`, at: b(3)},
            ]}
          />
        </>
      ),
      say: [
        r`To'g'ri burchakli uchburchakda o'tkir burchak theta olamiz. Unga nisbatan tomonlarning nomi: qarshidagi katet, yonidagi katet va gipotenuza.`,
        r`SOH: sinus — qarshidagi bo'lingan gipotenuza.`,
        r`CAH: kosinus — yonidagi bo'lingan gipotenuza.`,
        r`TOA: tangens — qarshidagi bo'lingan yonidagi. "SOH-CAH-TOA" so'zini eslab qolsangiz, uchala formula yodingizda bo'ladi. Muhim: "qarshi" va "yon" qaysi burchakka nisbatan olinayotganiga bog'liq.`,
      ],
    },
    {
      type: 'example',
      kicker: '1-MISOL',
      title: '3-4-5 uchburchakda',
      label: 'MISOL',
      question: r`In right triangle $ABC$, angle $C$ is $90^\circ$, $BC=3$, $AC=4$, and $AB=5$. Find $\sin A$, $\cos A$, and $\tan A$.`,
      steps: [
        {m: r`\sin A=\frac{BC}{AB}=\frac35`, note: r`$A$ qarshisida — $BC$`},
        {m: r`\cos A=\frac{AC}{AB}=\frac45`, note: r`$A$ yonida — $AC$`},
        {m: r`\tan A=\frac{BC}{AC}=\frac34`},
      ],
      answer: r`$\frac35,\ \frac45,\ \frac34$`,
      tip: r`$B$ burchak uchun qarshi va yon **almashadi**: $\sin B=\frac45=\cos A$.`,
      say: [
        r`Birinchi misol. ABC uchburchakda C — to'g'ri burchak, BC uch, AC to'rt, AB besh. A burchakning sinus, kosinus va tangensini toping.`,
        r`A burchak qarshisida BC — uch. Sinus A: uch beshdan.`,
        r`A yonidagi katet — AC — to'rt. Kosinus A: to'rt beshdan.`,
        r`Tangens A: qarshi bo'lingan yon — uch to'rtdan.`,
        r`Javob ekranda.`,
        r`E'tibor bering: B burchak uchun qarshi va yon tomonlar almashadi. Sinus B to'rt beshdan — bu kosinus A ga teng.`,
      ],
    },
    {
      type: 'cards',
      kicker: 'MAXSUS UCHBURCHAKLAR',
      title: 'Ikki maxsus uchburchak',
      cards: [
        {title: r`$45^\circ$-$45^\circ$-$90^\circ$`, text: r`Tomonlar $x:x:x\sqrt2$ — teng yonli to'g'ri burchakli`},
        {title: r`$30^\circ$-$60^\circ$-$90^\circ$`, text: r`Tomonlar $x:x\sqrt3:2x$ — qisqa katet $30^\circ$ qarshisida`},
        {title: 'Qayerda?', text: r`Kvadrat diagonali — $45$-$45$-$90$; teng tomonli uchburchak balandligi — $30$-$60$-$90$`},
      ],
      banner: r`Ikkalasi ham SAT formulalar varag'ida bor — lekin yoddan bilish vaqt tejaydi`,
      say: [
        r`Ikki maxsus uchburchak.`,
        r`Qirq besh, qirq besh, to'qson: katetlar teng, gipotenuza katetdan ildiz ikki marta katta. Nisbat: x, x, x ildiz ikki.`,
        r`O'ttiz, oltmish, to'qson: qisqa katet x — o'ttiz gradus qarshisida, uzun katet x ildiz uch, gipotenuza ikki x.`,
        r`Qayerda uchraydi? Kvadratning diagonali uni ikkita qirq besh-qirq besh-to'qson uchburchakka bo'ladi. Teng tomonli uchburchakning balandligi — ikkita o'ttiz-oltmish-to'qson uchburchakka.`,
        r`Ikkalasi ham formulalar varag'ida bor, lekin yoddan bilish vaqtni tejaydi.`,
      ],
    },
    {
      type: 'custom',
      kicker: '30-60-90',
      title: r`$30^\circ$-$60^\circ$-$90^\circ$ uchburchak`,
      beats: 3,
      doc: r`Gipotenuza $10$ bo'lsa: qisqa katet $\frac{10}{2}=5$ ($30^\circ$ qarshisida), uzun katet $5\sqrt3$ ($60^\circ$ qarshisida).`,
      render: (b) => (
        <>
          <Shape
            appear={0.3}
            left={200}
            top={300}
            size={560}
            points={[
              [10, 85],
              [90, 85],
              [10, 39],
            ]}
            rightAngle={[
              [10, 85],
              [90, 85],
              [10, 39],
            ]}
            labels={[
              {at: [76, 79], text: r`$30^\circ$`, color: '#F59E0B'},
              {at: [16, 50], text: r`$60^\circ$`, color: '#F59E0B'},
              {at: [56, 55], text: r`$10$`, color: '#22C55E'},
              {at: [2, 62], text: r`$5$`, color: '#EC4899'},
              {at: [50, 94], text: r`$5\sqrt3$`, color: '#EC4899'},
            ]}
          />
          <SideNotes
            items={[
              {text: r`Gipotenuza $=2x=10$ $\Rightarrow$ $x=5$`, at: b(1)},
              {text: r`Qisqa katet ($30^\circ$ qarshisida): $x=5$`, at: b(2)},
              {text: r`Uzun katet ($60^\circ$ qarshisida): $x\sqrt3=5\sqrt3\approx8.66$`, at: b(3)},
            ]}
          />
        </>
      ),
      say: [
        r`Misol: o'ttiz-oltmish-to'qson uchburchakning gipotenuzasi o'n. Katetlarini toping.`,
        r`Gipotenuza ikki x, demak x — besh.`,
        r`Qisqa katet o'ttiz gradus qarshisida — besh.`,
        r`Uzun katet oltmish gradus qarshisida — besh ildiz uch, taxminan sakkiz butun oltmish olti.`,
      ],
    },
    {
      type: 'formula',
      kicker: "BOG'LANISH",
      title: "Qo'shimcha burchaklar",
      formulas: [
        {label: 'Asosiy fakt', tex: r`\sin x^\circ=\cos(90-x)^\circ`},
        {label: 'Misol', tex: r`\sin30^\circ=\cos60^\circ=\tfrac12`},
        {label: 'SAT shabloni', tex: r`\sin a=\cos b\ \Rightarrow\ a+b=90`},
      ],
      say: [
        r`Juda muhim bog'lanish.`,
        r`To'g'ri burchakli uchburchakda ikki o'tkir burchak yig'indisi to'qson. Bir burchakning qarshi katetini ikkinchisi yon katet deb ko'radi. Shuning uchun x ning sinusi to'qson minus x ning kosinusiga teng.`,
        r`Masalan, sinus o'ttiz teng kosinus oltmish — ikkalasi yarim.`,
        r`SAT shabloni: sinus a teng kosinus b bo'lsa — a plyus b to'qson.`,
      ],
    },
    {
      type: 'example',
      kicker: 'SAT MISOLI',
      title: r`$\sin x=\cos32^\circ$`,
      label: 'SPR SAVOLI',
      question: r`In a right triangle, $\sin(x^\circ)=\cos(32^\circ)$, where $0<x<90$. What is the value of $x$?`,
      steps: [
        {m: r`x+32=90`},
        {m: r`x=58`},
      ],
      answer: r`$58$`,
      say: [
        r`SAT misoli. Sinus x teng kosinus o'ttiz ikki, x nol va to'qson orasida. X nimaga teng?`,
        r`Shablon: burchaklar yig'indisi to'qson. X plyus o'ttiz ikki teng to'qson.`,
        r`X teng ellik sakkiz.`,
        r`Javob: ellik sakkiz. Bu savol deyarli har bir testda biror shaklda uchraydi.`,
      ],
    },
    {
      type: 'example',
      kicker: '2-MISOL',
      title: 'Bitta nisbatdan ikkinchisini topish',
      label: 'SPR SAVOLI',
      question: r`In right triangle $PQR$, angle $R$ is a right angle and $\cos P=\dfrac{5}{13}$. What is $\sin P$?`,
      steps: [
        {m: r`\text{yon}=5,\ \text{gip.}=13`},
        {m: r`\text{qarshi}=\sqrt{13^2-5^2}=12`, note: r`Pifagor ($5$-$12$-$13$)`},
        {m: r`\sin P=\frac{12}{13}`},
      ],
      answer: r`$12/13$`,
      say: [
        r`Ikkinchi misol. PQR uchburchakda R — to'g'ri burchak, kosinus P besh o'n uchdan. Sinus P nimaga teng?`,
        r`Kosinus — yon bo'lingan gipotenuza: yon besh, gipotenuza o'n uch.`,
        r`Qarshidagi katetni Pifagor bilan topamiz: o'n ikki — besh, o'n ikki, o'n uch uchligi.`,
        r`Sinus P — o'n ikki o'n uchdan.`,
        r`Javob: o'n ikki slesh o'n uch. Bitta nisbat berilsa — uchburchakni chizing, tomonlarni yozing va Pifagor bilan qolganini toping.`,
      ],
    },
    {
      type: 'example',
      kicker: '3-MISOL',
      title: 'Burchak va tomondan tomon topish',
      label: 'SPR SAVOLI',
      question: r`A right triangle has a hypotenuse of length 20 and an acute angle of $35^\circ$. To the nearest hundredth, what is the length of the side opposite the $35^\circ$ angle?`,
      steps: [
        {m: r`\sin35^\circ=\frac{x}{20}`},
        {m: r`x=20\sin35^\circ`},
        {m: r`\approx20\cdot0.5736=11.47`, note: r`kalkulyator — **gradus** rejimida!`},
      ],
      answer: r`$11.47$`,
      say: [
        r`Uchinchi misol. Gipotenuza yigirma, o'tkir burchak o'ttiz besh gradus. Shu burchak qarshisidagi tomon qancha — yuzdan birgacha yaxlitlang.`,
        r`Qarshi va gipotenuza — bu sinus: sinus o'ttiz besh teng x bo'lingan yigirma.`,
        r`X teng yigirma karra sinus o'ttiz besh.`,
        r`Kalkulyatorda: taxminan o'n bir butun yuzdan qirq yetti. Desmos'da gradus rejimi yoqilganini tekshiring!`,
        r`Javob: o'n bir butun qirq yetti.`,
      ],
    },
    {
      type: 'trap',
      title: 'Kalkulyator: gradus yoki radian?',
      question: r`What is $20\sin(35^\circ)$, to the nearest hundredth?`,
      wrong: r`$-8.57$`,
      why: r`Kalkulyator **radian** rejimida edi: $\sin(35\ \text{rad})\approx-0.43$. To'g'ri burchakli uchburchakda sinus manfiy bo'lishi mumkin emas!`,
      right: r`Desmos sozlamalaridan (gayka belgisi) **Degrees** ni tanlang: $20\sin35^\circ\approx$ **11.47**.`,
      say: [
        r`Tuzoq. Yigirma karra sinus o'ttiz besh gradus — yuzdan birgacha.`,
        r`Agar kalkulyator radian rejimida bo'lsa, minus sakkiz butun ellik yetti chiqadi. Bu darhol shubha uyg'otishi kerak: uchburchak tomoni manfiy bo'la olmaydi.`,
        r`Desmos'da gayka belgisini bosib, Degrees ni tanlang. Shunda o'n bir butun qirq yetti chiqadi. Trigonometriya savolidan oldin rejimni har doim tekshiring.`,
      ],
    },
    {
      type: 'example',
      kicker: '45-45-90',
      title: 'Kvadrat diagonali',
      question: r`The diagonal of a square has length 8. What is the side length of the square?`,
      choices: [r`$4$`, r`$4\sqrt2$`, r`$8\sqrt2$`, r`$2\sqrt2$`],
      steps: [
        {m: r`x\sqrt2=8`, note: r`diagonal — gipotenuza`},
        {m: r`x=\frac{8}{\sqrt2}=\frac{8\sqrt2}{2}=4\sqrt2`},
      ],
      answer: r`B`,
      tip: r`C — teskari xato: tomondan diagonalga o'tishda $\times\sqrt2$, diagonaldan tomonga — $\div\sqrt2$.`,
      say: [
        r`Qirq besh-qirq besh-to'qson misoli. Kvadratning diagonali sakkiz. Tomoni qancha?`,
        r`Diagonal — gipotenuza: x ildiz ikki teng sakkiz.`,
        r`X teng sakkiz bo'lingan ildiz ikki — to'rt ildiz ikki.`,
        r`Javob: B.`,
        r`C — teskari xato. Tomondan diagonalga — ildiz ikkiga ko'paytiramiz, diagonaldan tomonga — bo'lamiz.`,
      ],
    },
    {
      type: 'example',
      kicker: 'MUSTAQIL MASHQ',
      title: "O'zingiz yeching",
      label: 'MASHQ',
      question: r`In a right triangle, $\tan\theta=\dfrac34$. What is $\sin\theta$?`,
      steps: [
        {m: r`\text{qarshi}=3,\ \text{yon}=4`},
        {m: r`\text{gip.}=5`, note: r`$3$-$4$-$5$`},
        {m: r`\sin\theta=\frac35`},
      ],
      answer: r`$3/5$`,
      say: [
        r`Mustaqil mashq. Videoni to'xtating. To'g'ri burchakli uchburchakda tangens theta uch to'rtdan. Sinus theta nimaga teng?`,
        r`Tangens — qarshi bo'lingan yon: qarshi uch, yon to'rt.`,
        r`Gipotenuza — besh, uch-to'rt-besh uchligi.`,
        r`Sinus — qarshi bo'lingan gipotenuza: uch beshdan.`,
        r`Javob: uch slesh besh.`,
      ],
    },
    {
      type: 'example',
      kicker: 'SAT MISOLI',
      title: 'Sinusdan tomonga',
      label: 'SPR SAVOLI',
      question: r`In right triangle $ABC$, angle $C$ is $90^\circ$, $\sin A=0.6$, and $AB=15$. What is the length of $BC$?`,
      steps: [
        {m: r`\sin A=\frac{BC}{AB}`},
        {m: r`BC=15\cdot0.6=9`},
      ],
      answer: r`$9$`,
      say: [
        r`SAT misoli. ABC uchburchakda C — to'g'ri burchak, sinus A nol butun olti, AB o'n besh. BC qancha?`,
        r`Sinus A — qarshidagi katet bo'lingan gipotenuza: BC bo'lingan AB.`,
        r`BC teng o'n besh karra nol butun olti — to'qqiz.`,
        r`Javob: to'qqiz. Bu yana uch-to'rt-besh oilasi: to'qqiz, o'n ikki, o'n besh.`,
      ],
    },
    {
      type: 'example',
      kicker: '30-60-90',
      title: 'Teng tomonli uchburchak balandligi',
      question: r`An equilateral triangle has side length 10. What is its height?`,
      choices: [r`$5$`, r`$5\sqrt2$`, r`$5\sqrt3$`, r`$10\sqrt3$`],
      steps: [
        {m: r`\text{balandlik}\Rightarrow30\text{-}60\text{-}90:\ \text{gip.}=10,\ \text{qisqa}=5`},
        {m: r`h=5\sqrt3`, note: r`$60^\circ$ qarshisidagi katet`},
      ],
      answer: r`C`,
      say: [
        r`Yana bir misol. Tomoni o'n bo'lgan teng tomonli uchburchakning balandligi qancha?`,
        r`Balandlik uchburchakni ikkita o'ttiz-oltmish-to'qson uchburchakka bo'ladi: gipotenuza o'n, qisqa katet — tomonning yarmi — besh.`,
        r`Balandlik — uzun katet: besh ildiz uch.`,
        r`Javob: C.`,
      ],
    },
  ],
  recap: [
    r`SOH-CAH-TOA: qarshi/gip, yon/gip, qarshi/yon`,
    r`$x:x:x\sqrt2$ va $x:x\sqrt3:2x$; $\sin a=\cos b\Rightarrow a+b=90$`,
    r`Kalkulyator — **gradus** rejimida`,
  ],
  homework: r`platformada trigonometriya bo'yicha 12 ta savol`,
  recapSay: [
    r`Xulosa.`,
    r`SOH-CAH-TOA: sinus — qarshi bo'lingan gipotenuza, kosinus — yon bo'lingan gipotenuza, tangens — qarshi bo'lingan yon.`,
    r`Maxsus uchburchaklar: x, x, x ildiz ikki va x, x ildiz uch, ikki x. Sinus a teng kosinus b bo'lsa, a plyus b to'qson.`,
    r`Trigonometriya hisoblashidan oldin kalkulyator gradus rejimida ekanini tekshiring.`,
    r`Hozir platformada trigonometriya bo'yicha o'n ikkita savolni yeching. Keyingi darsda aylana: yoy, sektor va radianlarni o'rganamiz.`,
    r`Ko'rishguncha!`,
  ],
};

export default lesson;
