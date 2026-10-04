import React from 'react';
import {meta} from '../catalog';
import {BarChart, SideNotes} from '../figures';
import type {Lesson} from '../types';

const r = String.raw;

// Scatter data roughly around y = 2.5x + 10
const SCATTER: [number, number][] = [
  [1, 13],
  [2, 14],
  [2.5, 17.5],
  [3, 16],
  [4, 21],
  [5, 22],
  [5.5, 25],
  [6, 24],
  [7, 28],
  [8, 29],
  [9, 33],
];

const lesson: Lesson = {
  ...meta(26),
  topics: ['Diagramma turlari', 'Scatter plot', 'Eng mos chiziq', 'Qoldiq', 'Korrelyatsiya'],
  cover: [
    r`Assalomu alaykum! Yigirma oltinchi darsga xush kelibsiz. Bugungi mavzu — grafiklar va ma'lumotlarni talqin qilish.`,
    r`Diagramma turlarini, scatter plot va eng mos chiziqni, bashorat va qoldiqni, korrelyatsiyani va ustunli diagrammadan to'g'ri xulosa chiqarishni o'rganamiz.`,
  ],
  goals: [
    r`Diagrammalardan qiymatlarni aniq o'qish`,
    r`Eng mos chiziq bilan bashorat qilish`,
    r`Qoldiq (residual) ni hisoblash`,
    r`Korrelyatsiya va sabab-oqibatni farqlash`,
  ],
  goalsSay: [
    r`Darsning maqsadlari.`,
    r`Birinchi: turli diagrammalardan qiymatlarni aniq o'qish.`,
    r`Ikkinchi: scatter plot ustidagi eng mos chiziq bilan bashorat qilish va uning qiyaligini talqin qilish.`,
    r`Uchinchi: haqiqiy va bashorat qilingan qiymat farqi — qoldiqni hisoblash.`,
    r`To'rtinchi: bog'liqlik bor degani sabab-oqibat bor degani emasligini tushunish.`,
    r`Bu savollarda hisob oddiy, asosiy ish — grafikni diqqat bilan o'qish.`,
  ],
  goalsResult: r`grafik savollarida diqqat — kafolatlangan ball`,
  slides: [
    {
      type: 'cards',
      kicker: 'DIAGRAMMALAR',
      title: "Ma'lumot ko'rsatish turlari",
      cards: [
        {title: 'Ustunli diagramma', text: r`Kategoriyalarni solishtirish: oylar, mahsulotlar`, icon: 'chart'},
        {title: 'Chiziqli grafik', text: r`Vaqt bo'yicha o'zgarish: eng tik qism — eng tez o'zgarish`, icon: 'clock'},
        {title: 'Scatter plot', text: r`Ikki o'zgaruvchi bog'liqligi: har bir nuqta — bitta obyekt`, icon: 'target'},
        {title: 'Gistogramma / dot plot', text: r`Taqsimot shakli, chastotalar`, icon: 'book'},
      ],
      say: [
        r`SAT'da uchraydigan asosiy diagramma turlari.`,
        r`Ustunli diagramma — kategoriyalarni solishtirish uchun: oylar, mahsulotlar, shaharlar.`,
        r`Chiziqli grafik — vaqt bo'yicha o'zgarish. Grafikning eng tik qismi — eng tez o'zgarish davri.`,
        r`Scatter plot — ikki o'zgaruvchi orasidagi bog'liqlik. Har bir nuqta — bitta obyekt, masalan bitta o'quvchi.`,
        r`Gistogramma va dot plot — taqsimotning shakli va chastotalar.`,
      ],
    },
    {
      type: 'graph',
      kicker: 'SCATTER PLOT',
      title: "O'qish soati va test bali",
      x: [0, 10],
      y: [0, 40],
      items: [
        {kind: 'points', pts: SCATTER, color: '#C7CCF5', note: r`Har nuqta — bitta o'quvchi: $x$ — o'qish soati, $y$ — ball`},
        {kind: 'fn', f: (x) => 2.5 * x + 10, label: r`$y=2.5x+10$`, note: r`Eng mos chiziq (line of best fit): nuqtalar orasidan o'tadi`},
        {kind: 'note', note: r`Qiyalik $2.5$: har qo'shimcha soat — taxminan **$+2.5$ ball**`},
      ],
      say: [
        r`Scatter plot: o'quvchilarning o'qish soatlari va test ballari.`,
        r`Har bir nuqta — bitta o'quvchi. Gorizontal o'qda — o'qish soati, vertikal o'qda — ball. Nuqtalar umumiy ravishda yuqoriga ko'tariladi.`,
        r`Eng mos chiziq — nuqtalar orasidan, ularga eng yaqin o'tadigan to'g'ri chiziq: y teng ikki butun besh x plyus o'n.`,
        r`Uning qiyaligi ikki butun besh: har bir qo'shimcha soat o'qish ball taxminan ikki yarim ballga oshishi bilan bog'liq. "Taxminan" so'zi muhim — bu model, aniq qoida emas.`,
      ],
    },
    {
      type: 'cards',
      kicker: 'TALQIN',
      title: 'Eng mos chiziq: 4 savol turi',
      cards: [
        {title: 'Qiyalik', text: r`$x$ bittaga oshganda $y$ ning **taxminiy** o'zgarishi`},
        {title: '$y$-kesishma', text: r`$x=0$ dagi taxminiy qiymat (ba'zan ma'nosiz)`},
        {title: 'Bashorat', text: r`$x$ ni tenglamaga qo'ying: $y=2.5\cdot8+10=30$`},
        {title: 'Qoldiq (residual)', text: r`haqiqiy $-$ bashorat; nuqta chiziqdan yuqorida — musbat`},
      ],
      say: [
        r`Eng mos chiziq haqida to'rt turdagi savol bo'ladi.`,
        r`Qiyalik: x bittaga oshganda y ning taxminiy o'zgarishi.`,
        r`Y kesishma: x nol bo'lgandagi taxminiy qiymat. Ba'zan u ma'nosiz bo'ladi, masalan nol soat o'qigan o'quvchi.`,
        r`Bashorat: x ni tenglamaga qo'yamiz. Sakkiz soat uchun: ikki butun besh karra sakkiz plyus o'n — o'ttiz.`,
        r`Qoldiq — haqiqiy qiymat minus bashorat qilingan qiymat. Nuqta chiziqdan yuqorida bo'lsa — qoldiq musbat, pastda — manfiy.`,
      ],
    },
    {
      type: 'example',
      kicker: '1-MISOL',
      title: 'Bashorat va qoldiq',
      label: 'SPR SAVOLI',
      question: r`The line of best fit for a data set is $y=2.5x+10$. A student who studied 8 hours scored 33. What is the residual for this student?`,
      steps: [
        {m: r`\hat y=2.5\cdot8+10=30`, note: r`bashorat`},
        {m: r`33-30=3`, note: r`haqiqiy $-$ bashorat`},
      ],
      answer: r`$3$`,
      say: [
        r`Birinchi misol. Eng mos chiziq y teng ikki butun besh x plyus o'n. Sakkiz soat o'qigan o'quvchi o'ttiz uch ball oldi. Uning qoldig'i qancha?`,
        r`Bashorat: ikki butun besh karra sakkiz plyus o'n — o'ttiz.`,
        r`Qoldiq: haqiqiy minus bashorat — o'ttiz uch minus o'ttiz — uch.`,
        r`Javob: uch. Musbat qoldiq — o'quvchi chiziq bashorat qilganidan yaxshiroq natija ko'rsatgan.`,
      ],
    },
    {
      type: 'compare',
      kicker: 'KORRELYATSIYA',
      title: "Bog'liqlik turlari",
      cards: [
        {title: 'Musbat', rule: r`$x$ oshsa, $y$ ham **oshadi**`, example: r`o'qish soati va ball`},
        {title: 'Manfiy', rule: r`$x$ oshsa, $y$ **kamayadi**`, example: r`avtomobil yoshi va narxi`},
        {title: "Bog'liqlik yo'q", rule: r`Nuqtalar tartibsiz`, example: r`bo'y va telefon raqami`},
      ],
      banner: r`Kuchli bog'liqlik — nuqtalar chiziqqa **yaqin**; kuchsiz — keng tarqalgan`,
      say: [
        r`Bog'liqlik, ya'ni korrelyatsiya turlari.`,
        r`Musbat: bir o'zgaruvchi oshsa, ikkinchisi ham oshadi. Nuqtalar yuqoriga ko'tariladi.`,
        r`Manfiy: biri oshsa, ikkinchisi kamayadi. Masalan, avtomobil yoshi va uning narxi.`,
        r`Bog'liqlik yo'q: nuqtalar tartibsiz joylashgan.`,
        r`Bog'liqlik kuchi: nuqtalar chiziqqa qanchalik yaqin bo'lsa, bog'liqlik shunchalik kuchli.`,
      ],
    },
    {
      type: 'custom',
      kicker: 'USTUNLI DIAGRAMMA',
      title: "Do'kon savdosi (ming dollar)",
      beats: 5,
      doc: r`Ustunli diagramma: yanvar $40$, fevral $55$, mart $50$, aprel $75$ (ming dollar). Eng katta o'sish: mart $\to$ aprel, $+25$. Foiz o'zgarishi: $\frac{75-50}{50}=50\%$.`,
      render: (b) => (
        <>
          <BarChart
            max={80}
            step={20}
            data={[
              {label: 'Yan', value: 40, at: b(1)},
              {label: 'Fev', value: 55, at: b(1) + 0.4},
              {label: 'Mar', value: 50, at: b(1) + 0.8},
              {label: 'Apr', value: 75, at: b(1) + 1.2, color: '#F59E0B'},
            ]}
          />
          <SideNotes
            items={[
              {text: r`Qiymatni **o'qning** shkalasidan o'qing`, at: b(2)},
              {text: r`Eng katta o'sish: Mar $\to$ Apr, $+25$`, at: b(3)},
              {text: r`Foiz o'zgarishi: $\frac{75-50}{50}=50\%$`, at: b(4)},
              {text: r`Fev $\to$ Mar: $\frac{50-55}{55}\approx-9\%$ — kamayish`, at: b(5)},
            ]}
          />
        </>
      ),
      say: [
        r`Ustunli diagramma: do'konning to'rt oylik savdosi, ming dollarda.`,
        r`Yanvar — qirq, fevral — ellik besh, mart — ellik, aprel — yetmish besh.`,
        r`Qiymatlarni doim o'qdagi shkaladan o'qing — ba'zan shkala noldan boshlanmaydi va ustunlar balandligi aldaydi.`,
        r`Qaysi oylar orasida eng katta o'sish? Martdan aprelgacha — yigirma besh ming.`,
        r`Foiz o'zgarishi: yigirma besh bo'lingan eski qiymat — ellik — ellik foiz.`,
        r`Fevraldan martgacha esa kamayish: minus besh bo'lingan ellik besh — taxminan minus to'qqiz foiz.`,
      ],
    },
    {
      type: 'trap',
      title: "Bog'liqlik ≠ sabab",
      question: r`A scatter plot shows a strong positive association between ice cream sales and swimming-pool accidents in a city. Which conclusion is supported?`,
      wrong: r`Muzqaymoq baxtsiz hodisalarga sabab bo'ladi`,
      why: r`Kuzatuv ma'lumotlari faqat **bog'liqlik** ko'rsatadi. Ikkalasiga ham uchinchi omil — issiq havo — ta'sir qiladi.`,
      right: r`Faqat: "ikki o'zgaruvchi orasida musbat bog'liqlik bor". Sabab-oqibat uchun **tasodifiy tajriba** kerak.`,
      say: [
        r`Tuzoq. Scatter plot shaharda muzqaymoq savdosi va basseyndagi baxtsiz hodisalar orasida kuchli musbat bog'liqlikni ko'rsatadi. Which conclusion is supported?`,
        r`"Muzqaymoq baxtsiz hodisalarga sabab bo'ladi" — noto'g'ri. Kuzatuv ma'lumotlari faqat bog'liqlikni ko'rsatadi. Bu yerda ikkalasiga ham uchinchi omil — issiq havo — ta'sir qilmoqda.`,
        r`To'g'ri xulosa: ikki o'zgaruvchi orasida musbat bog'liqlik bor. Sabab-oqibat haqida faqat tasodifiy tajriba asosida xulosa qilish mumkin — bu haqda yigirma sakkizinchi darsda gaplashamiz.`,
      ],
    },
    {
      type: 'example',
      kicker: 'SAT MISOLI',
      title: 'Qiyalikni talqin qilish',
      question: r`For used cars of a certain model, the line of best fit relating price $y$ (thousands of dollars) to age $x$ (years) is $y=-0.8x+15$. Which is the best interpretation of $-0.8$?`,
      choices: [r`Each year, the predicted price decreases by 800 dollars`, r`Each year, the price decreases by exactly 0.8 dollars`, r`A new car costs 800 dollars`, r`The predicted price decreases by 15 thousand per year`],
      steps: [
        {m: r`m=-0.8\ \tfrac{\text{ming dollar}}{\text{yil}}`},
        {m: r`-0.8\cdot1000=-800`, note: r`birlik — ming dollar`},
      ],
      answer: r`A`,
      tip: r`"Predicted" va "approximately" so'zlariga e'tibor bering — eng mos chiziq **taxmin** beradi.`,
      say: [
        r`SAT misoli. Ishlatilgan avtomobillar uchun narx — ming dollarda — va yosh orasidagi eng mos chiziq: y teng minus nol butun sakkiz x plyus o'n besh. Which is the best interpretation of minus zero point eight?`,
        r`Qiyalik — har bir yilga narx o'zgarishi: minus nol butun sakkiz ming dollar.`,
        r`Birlik ming dollar bo'lgani uchun — har yili taxminan sakkiz yuz dollar kamayish.`,
        r`Javob: A.`,
        r`B variant — birlikni unutgan va "exactly" degan, holbuki model faqat taxmin beradi. "Predicted" so'ziga e'tibor bering.`,
      ],
    },
    {
      type: 'example',
      kicker: 'MUSTAQIL MASHQ',
      title: "O'zingiz yeching",
      label: 'MASHQ',
      question: r`The line of best fit for a data set is $y=3x+5$. The data point $(4,\,20)$ is in the set. What is the residual for this point?`,
      steps: [
        {m: r`\hat y=3\cdot4+5=17`},
        {m: r`20-17=3`},
      ],
      answer: r`$3$`,
      say: [
        r`Mustaqil mashq. Videoni to'xtating. Eng mos chiziq y teng uch x plyus besh. To'rt, yigirma nuqtasining qoldig'i qancha?`,
        r`Bashorat: uch karra to'rt plyus besh — o'n yetti.`,
        r`Qoldiq: yigirma minus o'n yetti — uch.`,
        r`Javob: uch. Nuqta chiziqdan yuqorida — qoldiq musbat.`,
      ],
    },
    {
      type: 'table',
      kicker: "O'ZGARISH TEZLIGI",
      title: 'Jadvaldan o\'rtacha o\'zgarish',
      head: ['Yil', '$2010$', '$2012$', '$2014$', '$2016$'],
      rows: [[r`Aholi (ming)`, r`$50$`, r`$54$`, r`$62$`, r`$64$`]],
      banner: r`Eng katta o'sish: 2012–2014 ($+8$). O'rtacha o'zgarish 2010–2016: $\frac{64-50}{6}\approx2.33$ ming/yil`,
      say: [
        r`Jadval yoki chiziqli grafik berilganda ko'pincha o'zgarish tezligini so'rashadi. Shahar aholisi, ming kishida.`,
        r`Ikki ming o'ninchi yildan ikki ming o'n oltinchi yilgacha: ellik, ellik to'rt, oltmish ikki, oltmish to'rt.`,
        r`Qaysi ikki yil oralig'ida eng katta o'sish? Ikki ming o'n ikkidan o'n to'rtgacha — sakkiz ming. O'rtacha o'zgarish tezligi butun davr uchun: o'zgarish bo'lingan yillar soni — o'n to'rt bo'lingan olti — yiliga taxminan ikki butun uch ming kishi.`,
      ],
    },
    {
      type: 'compare',
      kicker: 'BASHORAT',
      title: 'Interpolyatsiya va ekstrapolyatsiya',
      cards: [
        {title: 'Interpolyatsiya', rule: r`Ma'lumotlar **oralig'idagi** bashorat — ishonchli`, example: r`$1$–$9$ soat ichida: $x=6$`},
        {title: 'Ekstrapolyatsiya', rule: r`Oraliqdan **tashqari** — ishonchsiz`, example: r`$x=30$ soat: $y=85$? — shubhali`},
      ],
      banner: r`SAT: "Which prediction is most reliable?" — ma'lumotlar oralig'iga eng yaqin qiymat`,
      say: [
        r`Bashoratning ishonchliligi.`,
        r`Interpolyatsiya — ma'lumotlar oralig'idagi qiymat uchun bashorat. Masalan, ma'lumotlar bir dan to'qqiz soatgacha bo'lsa, olti soat uchun bashorat ishonchli.`,
        r`Ekstrapolyatsiya — oraliqdan tashqarida bashorat. O'ttiz soat o'qigan o'quvchi uchun chiziq sakson besh ball beradi, lekin bunday ma'lumot bizda yo'q — bashorat shubhali.`,
        r`SAT so'rasa: qaysi bashorat eng ishonchli — ma'lumotlar oralig'idagi qiymatni tanlang.`,
      ],
    },
    {
      type: 'example',
      kicker: 'SAT MISOLI',
      title: 'Nuqta chiziqdan qayerda?',
      question: r`A line of best fit is $y=1.5x+2$. For which data point is the actual $y$-value less than the value predicted by the line?`,
      choices: [r`$(2,\,6)$`, r`$(4,\,8)$`, r`$(6,\,10)$`, r`$(8,\,15)$`],
      steps: [
        {m: r`A:\ \hat y=5<6`, note: r`yuqorida`},
        {m: r`B:\ \hat y=8=8`, note: r`chiziq ustida`},
        {m: r`C:\ \hat y=11>10`, note: r`pastda — qoldiq manfiy`},
      ],
      answer: r`C`,
      say: [
        r`SAT misoli. Eng mos chiziq y teng bir butun besh x plyus ikki. Qaysi nuqtaning haqiqiy qiymati bashoratdan kichik?`,
        r`A: bashorat besh, haqiqiy olti — nuqta chiziqdan yuqorida.`,
        r`B: bashorat sakkiz, haqiqiy sakkiz — nuqta aynan chiziqda.`,
        r`C: bashorat o'n bir, haqiqiy o'n — kichik. Nuqta chiziqdan pastda, qoldiq manfiy.`,
        r`Javob: C. D da bashorat o'n to'rt, haqiqiy o'n besh — yuqorida.`,
      ],
    },
  ],
  recap: [
    r`Qiymatni o'q shkalasidan o'qing; eng tik — eng tez o'zgarish`,
    r`Eng mos chiziq: qiyalik — taxminiy o'zgarish; qoldiq = haqiqiy $-$ bashorat`,
    r`Bog'liqlik $\neq$ sabab: sabab uchun tasodifiy tajriba`,
  ],
  homework: r`platformada grafik va ma'lumotlar bo'yicha 15 ta savol`,
  recapSay: [
    r`Xulosa.`,
    r`Qiymatlarni doim o'q shkalasidan o'qing. Chiziqli grafikning eng tik qismi — eng tez o'zgarish.`,
    r`Eng mos chiziqning qiyaligi — taxminiy o'zgarish; qoldiq — haqiqiy minus bashorat.`,
    r`Bog'liqlik sabab-oqibat degani emas: buning uchun tasodifiy tajriba kerak.`,
    r`Hozir platformada grafik va ma'lumotlar bo'yicha o'n beshta savolni yeching. Keyingi darsda ehtimollik va ikki tomonlama jadvallarni o'rganamiz.`,
    r`Ko'rishguncha!`,
  ],
};

export default lesson;
