import React from 'react';
import {meta} from '../catalog';
import {ParallelLines, Shape, SideNotes} from '../figures';
import type {Lesson} from '../types';

const r = String.raw;

const lesson: Lesson = {
  ...meta(29),
  topics: ['Burchak qoidalari', 'Parallel chiziqlar', "Uchburchak yig'indisi", 'Tashqi burchak', "Ko'pburchaklar"],
  cover: [
    r`Assalomu alaykum! Yigirma to'qqizinchi darsga xush kelibsiz. Bugundan Geometriya va Trigonometriya moduli boshlanadi. Birinchi mavzu — burchaklar, chiziqlar va uchburchaklar.`,
    r`Asosiy burchak qoidalarini, parallel chiziqlar va kesuvchini, uchburchak burchaklari yig'indisini, tashqi burchakni, teng yonli uchburchakni va ko'pburchak burchaklarini o'rganamiz.`,
  ],
  goals: [
    r`Burchaklarning asosiy qoidalarini qo'llash`,
    r`Parallel chiziqlardagi teng burchaklarni topish`,
    r`Uchburchak burchaklari va tomonlari xossalari`,
    r`Ko'pburchak ichki burchaklari yig'indisi`,
  ],
  goalsSay: [
    r`Darsning maqsadlari.`,
    r`Birinchi: to'g'ri chiziq, vertikal burchaklar va nuqta atrofidagi burchaklar qoidalari.`,
    r`Ikkinchi: parallel chiziqlarni kesuvchi kesganda hosil bo'ladigan teng va yig'indisi bir yuz sakson bo'lgan burchaklar.`,
    r`Uchinchi: uchburchak burchaklari yig'indisi, tashqi burchak, teng yonli uchburchak va uchburchak tengsizligi.`,
    r`To'rtinchi: istalgan ko'pburchakning ichki burchaklari yig'indisi.`,
    r`Geometriya savollari o'n besh foiz atrofida, va ularning ko'pchiligi aynan shu qoidalarga tayanadi.`,
  ],
  goalsResult: r`burchak savollari — 30 soniyada`,
  slides: [
    {
      type: 'cards',
      kicker: 'ASOSIY QOIDALAR',
      title: 'Burchaklar: 4 qoida',
      cards: [
        {title: "To'g'ri chiziq", text: r`Yonma-yon burchaklar yig'indisi $180^\circ$`},
        {title: 'Vertikal burchaklar', text: r`Kesishgan ikki chiziqda qarama-qarshi burchaklar **teng**`},
        {title: 'Nuqta atrofi', text: r`Bir nuqta atrofidagi burchaklar yig'indisi $360^\circ$`},
        {title: 'Uchburchak', text: r`Ichki burchaklar yig'indisi $180^\circ$`},
      ],
      say: [
        r`To'rtta asosiy qoida.`,
        r`To'g'ri chiziqdagi yonma-yon burchaklar yig'indisi bir yuz sakson gradus.`,
        r`Ikki chiziq kesishganda qarama-qarshi — vertikal — burchaklar teng.`,
        r`Bir nuqta atrofidagi barcha burchaklar yig'indisi uch yuz oltmish gradus.`,
        r`Va uchburchak ichki burchaklari yig'indisi doim bir yuz sakson gradus.`,
      ],
    },
    {
      type: 'custom',
      kicker: 'PARALLEL CHIZIQLAR',
      title: 'Kesuvchi va hosil bo\'lgan burchaklar',
      beats: 3,
      doc: r`$\ell\parallel m$ va kesuvchi: **mos** burchaklar teng, **ichki almashinuvchi** burchaklar teng, **bir tomondagi ichki** burchaklar yig'indisi $180^\circ$. Faqat ikki xil o'lcham bo'ladi: $a$ va $180^\circ-a$.`,
      render: (b) => (
        <>
          <ParallelLines
            appear={0.3}
            angles={[
              {at: b(1), pos: 'tr1', text: r`$a$`, color: '#F59E0B'},
              {at: b(1), pos: 'tr2', text: r`$a$`, color: '#F59E0B'},
              {at: b(2), pos: 'bl1', text: r`$a$`, color: '#F59E0B'},
              {at: b(3), pos: 'tl2', text: r`$180^\circ-a$`, color: '#22C55E'},
              {at: b(3), pos: 'br1', text: r`$180^\circ-a$`, color: '#22C55E'},
            ]}
          />
          <SideNotes
            items={[
              {text: r`**Mos** burchaklar teng (bir xil joyda)`, at: b(1)},
              {text: r`**Ichki almashinuvchi** burchaklar teng ("Z" shakli)`, at: b(2)},
              {text: r`**Bir tomondagi ichki** burchaklar: yig'indi $180^\circ$`, at: b(3)},
              {text: r`Xulosa: faqat 2 xil o'lcham — $a$ va $180^\circ-a$`, at: b(3) + 2},
            ]}
          />
        </>
      ),
      say: [
        r`Ikki parallel chiziq — l va m — va ularni kesib o'tuvchi chiziq.`,
        r`Mos burchaklar — har bir kesishishda bir xil joyda turgan burchaklar — teng.`,
        r`Ichki almashinuvchi burchaklar — parallel chiziqlar orasida, kesuvchining ikki tomonida — ham teng. Ular "Z" harfi shaklini hosil qiladi.`,
        r`Bir tomondagi ichki burchaklar yig'indisi bir yuz sakson gradus. Natijada hamma sakkizta burchak faqat ikki xil o'lchamda bo'ladi: a va bir yuz sakson minus a. Bitta burchakni bilsangiz — hammasini bilasiz.`,
      ],
    },
    {
      type: 'example',
      kicker: '1-MISOL',
      title: 'Bir tomondagi ichki burchaklar',
      label: 'SPR SAVOLI',
      question: r`Two parallel lines are cut by a transversal. Two same-side interior angles measure $(2x+10)^\circ$ and $(3x-5)^\circ$. What is the value of $x$?`,
      steps: [
        {m: r`(2x+10)+(3x-5)=180`, note: r`yig'indi $180^\circ$`},
        {m: r`5x+5=180`},
        {m: r`x=35`},
      ],
      answer: r`$35$`,
      tip: r`Burchaklar: $80^\circ$ va $100^\circ$ — yig'indi $180^\circ$ ✓`,
      say: [
        r`Birinchi misol. Ikki parallel chiziqni kesuvchi kesadi. Bir tomondagi ikki ichki burchak ikki x plyus o'n va uch x minus besh gradus. X nimaga teng?`,
        r`Bir tomondagi ichki burchaklar yig'indisi bir yuz sakson.`,
        r`Besh x plyus besh teng bir yuz sakson.`,
        r`X teng o'ttiz besh.`,
        r`Javob: o'ttiz besh.`,
        r`Tekshiruv: burchaklar sakson va yuz gradus — yig'indisi bir yuz sakson.`,
      ],
    },
    {
      type: 'example',
      kicker: '2-MISOL',
      title: 'Uchburchak burchaklari',
      label: 'SPR SAVOLI',
      question: r`The measures of the angles of a triangle are in the ratio $1:2:3$. What is the measure, in degrees, of the largest angle?`,
      steps: [
        {m: r`x+2x+3x=180`},
        {m: r`6x=180\Rightarrow x=30`},
        {m: r`3x=90`},
      ],
      answer: r`$90$`,
      say: [
        r`Ikkinchi misol. Uchburchak burchaklari bir ga ikki ga uch nisbatda. Eng katta burchak necha gradus?`,
        r`Burchaklar x, ikki x, uch x. Yig'indisi bir yuz sakson.`,
        r`Olti x teng bir yuz sakson, x teng o'ttiz.`,
        r`Eng kattasi — uch x — to'qson.`,
        r`Javob: to'qson. Bu to'g'ri burchakli uchburchak — o'ttiz, oltmish, to'qson. Uni keyingi darslarda tez-tez uchratamiz.`,
      ],
    },
    {
      type: 'custom',
      kicker: 'TASHQI BURCHAK',
      title: "Tashqi burchak teoremasi",
      beats: 3,
      doc: r`**Tashqi burchak** — unga qo'shni bo'lmagan ikki ichki burchak yig'indisiga teng: $\angle\text{tashqi}=A+B$.`,
      render: (b) => (
        <>
          <Shape
            appear={0.3}
            left={180}
            top={300}
            size={560}
            points={[
              [10, 85],
              [70, 85],
              [48, 47],
            ]}
            extra={[{from: [70, 85], to: [98, 85], color: '#C7CCF5'}]}
            labels={[
              {at: [23, 80], text: r`$45^\circ$`, color: '#F59E0B'},
              {at: [48, 58], text: r`$?$`, color: '#22C55E'},
              {at: [80, 76], text: r`$120^\circ$`, color: '#EC4899'},
            ]}
          />
          <SideNotes
            items={[
              {text: r`Tashqi burchak $=$ ikki **qo'shni bo'lmagan** ichki burchak yig'indisi`, at: b(1)},
              {text: r`$120^\circ=45^\circ+?$`, at: b(2)},
              {text: r`$?=75^\circ$`, at: b(3)},
            ]}
          />
        </>
      ),
      say: [
        r`Tashqi burchak. Uchburchakning bir tomonini davom ettirsak, tashqi burchak hosil bo'ladi.`,
        r`Teorema: tashqi burchak unga qo'shni bo'lmagan ikki ichki burchak yig'indisiga teng.`,
        r`Rasmda tashqi burchak bir yuz yigirma, bitta ichki burchak qirq besh. Noma'lum burchak: bir yuz yigirma teng qirq besh plyus noma'lum.`,
        r`Noma'lum — yetmish besh gradus. Bu usul ichki burchaklarni alohida hisoblashdan tezroq.`,
      ],
    },
    {
      type: 'cards',
      kicker: 'UCHBURCHAK XOSSALARI',
      title: 'Uchburchak haqida 4 fakt',
      cards: [
        {title: 'Teng yonli', text: r`Teng tomonlar qarshisidagi burchaklar **teng**`},
        {title: 'Teng tomonli', text: r`Hamma burchaklar $60^\circ$`},
        {title: 'Katta tomon', text: r`Eng katta burchak qarshisida — eng katta tomon`},
        {title: 'Uchburchak tengsizligi', text: r`Har bir tomon qolgan ikkitasi yig'indisidan **kichik**: $|a-b|<c<a+b$`},
      ],
      say: [
        r`Uchburchak haqida to'rtta fakt.`,
        r`Teng yonli uchburchakda teng tomonlar qarshisidagi burchaklar ham teng.`,
        r`Teng tomonli uchburchakda hamma burchaklar oltmish gradus.`,
        r`Eng katta burchak qarshisida eng katta tomon yotadi, eng kichik burchak qarshisida — eng kichik tomon.`,
        r`Uchburchak tengsizligi: har bir tomon qolgan ikki tomon yig'indisidan kichik va ayirmasidan katta.`,
      ],
    },
    {
      type: 'example',
      kicker: '3-MISOL',
      title: 'Teng yonli uchburchak',
      label: 'SPR SAVOLI',
      question: r`In isosceles triangle $ABC$, $AB=AC$ and the measure of angle $A$ is $40^\circ$. What is the measure, in degrees, of angle $B$?`,
      steps: [
        {m: r`\angle B=\angle C`, note: r`$AB=AC$ qarshisidagi burchaklar`},
        {m: r`2\angle B=180-40=140`},
        {m: r`\angle B=70`},
      ],
      answer: r`$70$`,
      say: [
        r`Uchinchi misol. Teng yonli ABC uchburchakda AB teng AC, A burchak qirq gradus. B burchak necha gradus?`,
        r`AB va AC teng bo'lgani uchun ular qarshisidagi B va C burchaklar teng.`,
        r`Ikki B teng bir yuz sakson minus qirq — bir yuz qirq.`,
        r`B teng yetmish.`,
        r`Javob: yetmish.`,
      ],
    },
    {
      type: 'example',
      kicker: 'SAT MISOLI',
      title: 'Uchburchak tengsizligi',
      question: r`Two sides of a triangle have lengths 5 and 9. Which of the following could be the length of the third side?`,
      choices: [r`$3$`, r`$4$`, r`$13$`, r`$14$`],
      steps: [
        {m: r`9-5<c<9+5`},
        {m: r`4<c<14`},
        {m: r`c=13\ \checkmark`},
      ],
      answer: r`C`,
      tip: r`$4$ va $14$ — chegaralar, ular **kirmaydi**: $5+4=9$ — uchburchak "yassilanib" chiziqqa aylanadi.`,
      say: [
        r`SAT misoli. Uchburchakning ikki tomoni besh va to'qqiz. Uchinchi tomon qaysi bo'lishi mumkin?`,
        r`Uchinchi tomon ayirmadan katta va yig'indidan kichik: to'qqiz minus besh dan katta, to'qqiz plyus besh dan kichik.`,
        r`To'rt kichik c kichik o'n to'rt.`,
        r`Variantlardan faqat o'n uch mos keladi.`,
        r`Javob: C.`,
        r`To'rt va o'n to'rt — chegaralar va ular kirmaydi: besh plyus to'rt to'qqizga teng bo'lsa, uchburchak bitta chiziqqa yassilanib qoladi.`,
      ],
    },
    {
      type: 'formula',
      kicker: "KO'PBURCHAKLAR",
      title: "Ko'pburchak burchaklari",
      formulas: [
        {label: "Ichki yig'indi", tex: r`(n-2)\cdot180^\circ`, note: r`$n$ — tomonlar soni`},
        {label: 'Muntazam: bitta ichki', tex: r`\dfrac{(n-2)\cdot180^\circ}{n}`},
        {label: "Tashqi yig'indi", tex: r`360^\circ`, note: r`har qanday qavariq ko'pburchakda`},
      ],
      say: [
        r`Ko'pburchaklar.`,
        r`N burchakli ko'pburchakning ichki burchaklari yig'indisi n minus ikki karra bir yuz sakson gradus. Masalan, to'rtburchak — uch yuz oltmish, beshburchak — besh yuz qirq.`,
        r`Muntazam ko'pburchakda barcha burchaklar teng, shuning uchun bittasi — yig'indi bo'lingan n.`,
        r`Tashqi burchaklar yig'indisi esa har doim uch yuz oltmish gradus.`,
      ],
    },
    {
      type: 'example',
      kicker: '4-MISOL',
      title: 'Muntazam oltiburchak',
      label: 'SPR SAVOLI',
      question: r`What is the measure, in degrees, of each interior angle of a regular hexagon?`,
      steps: [
        {m: r`(6-2)\cdot180=720`},
        {m: r`720\div6=120`},
      ],
      answer: r`$120$`,
      tip: r`Tashqi burchak orqali: $360\div6=60$, ichki $=180-60=120$.`,
      say: [
        r`To'rtinchi misol. Muntazam oltiburchakning har bir ichki burchagi necha gradus?`,
        r`Ichki burchaklar yig'indisi: to'rt karra bir yuz sakson — yetti yuz yigirma.`,
        r`Oltiga bo'lamiz: bir yuz yigirma.`,
        r`Javob: bir yuz yigirma.`,
        r`Boshqa yo'l: tashqi burchak uch yuz oltmish bo'lingan olti — oltmish, ichki esa bir yuz sakson minus oltmish — bir yuz yigirma.`,
      ],
    },
    {
      type: 'trap',
      title: 'Tashqi burchakni topish',
      question: r`Two angles of a triangle measure $50^\circ$ and $60^\circ$. What is the measure of the exterior angle at the third vertex?`,
      wrong: r`$70^\circ$`,
      why: r`$70^\circ$ — bu uchinchi **ichki** burchak. Savol tashqi burchakni so'rayapti.`,
      right: r`Tashqi $=50^\circ+60^\circ=$ **$110^\circ$**. Tekshiruv: $180^\circ-70^\circ=110^\circ$ ✓`,
      say: [
        r`Tuzoq. Uchburchakning ikki burchagi ellik va oltmish gradus. Uchinchi uchdagi tashqi burchak qancha?`,
        r`Ko'p o'quvchi uchinchi ichki burchakni topadi — yetmish — va shuni belgilaydi. Lekin savol tashqi burchakni so'rayapti.`,
        r`Tashqi burchak — qo'shni bo'lmagan ikki ichki burchak yig'indisi: ellik plyus oltmish — bir yuz o'n. Tekshiruv: bir yuz sakson minus yetmish — bir yuz o'n.`,
      ],
    },
    {
      type: 'example',
      kicker: 'MUSTAQIL MASHQ',
      title: "O'zingiz yeching",
      label: 'MASHQ',
      question: r`The angles of a quadrilateral measure $x^\circ$, $2x^\circ$, $3x^\circ$, and $4x^\circ$. What is the measure, in degrees, of the largest angle?`,
      steps: [
        {m: r`x+2x+3x+4x=360`},
        {m: r`x=36`},
        {m: r`4x=144`},
      ],
      answer: r`$144$`,
      say: [
        r`Mustaqil mashq. Videoni to'xtating. To'rtburchak burchaklari x, ikki x, uch x va to'rt x gradus. Eng kattasi necha gradus?`,
        r`To'rtburchak ichki burchaklari yig'indisi uch yuz oltmish: o'n x teng uch yuz oltmish.`,
        r`X teng o'ttiz olti.`,
        r`Eng kattasi — to'rt x — bir yuz qirq to'rt.`,
        r`Javob: bir yuz qirq to'rt.`,
      ],
    },
    {
      type: 'example',
      kicker: 'SAT MISOLI',
      title: 'Vertikal va qo\'shni burchaklar',
      label: 'SPR SAVOLI',
      question: r`Two lines intersect. Two vertical angles measure $(3x+15)^\circ$ and $(5x-25)^\circ$. What is the measure, in degrees, of an angle adjacent to them?`,
      steps: [
        {m: r`3x+15=5x-25`, note: r`vertikal burchaklar teng`},
        {m: r`x=20\Rightarrow3x+15=75`},
        {m: r`180-75=105`, note: r`qo'shni — to'g'ri chiziq`},
      ],
      answer: r`$105$`,
      say: [
        r`SAT misoli. Ikki to'g'ri chiziq kesishadi. Ikki vertikal burchak uch x plyus o'n besh va besh x minus yigirma besh gradus. Ularga qo'shni burchak necha gradus?`,
        r`Vertikal burchaklar teng: uch x plyus o'n besh teng besh x minus yigirma besh.`,
        r`X teng yigirma, burchak — yetmish besh gradus.`,
        r`Qo'shni burchak to'g'ri chiziqda: bir yuz sakson minus yetmish besh — bir yuz besh.`,
        r`Javob: bir yuz besh. Yetmish beshni belgilab qo'ymang — savol qo'shni burchakni so'rayapti.`,
      ],
    },
  ],
  recap: [
    r`Chiziq $180^\circ$, nuqta atrofi $360^\circ$, vertikal burchaklar teng`,
    r`Parallel: faqat $a$ va $180^\circ-a$; tashqi burchak = ikki ichki yig'indisi`,
    r`Ko'pburchak: $(n-2)\cdot180^\circ$; uchburchak tengsizligi`,
  ],
  homework: r`platformada burchaklar va uchburchaklar bo'yicha 15 ta savol`,
  recapSay: [
    r`Xulosa.`,
    r`To'g'ri chiziqda bir yuz sakson, nuqta atrofida uch yuz oltmish, vertikal burchaklar teng.`,
    r`Parallel chiziqlar va kesuvchida faqat ikki xil burchak bor: a va bir yuz sakson minus a. Tashqi burchak qo'shni bo'lmagan ikki ichki burchak yig'indisiga teng.`,
    r`Ko'pburchak ichki burchaklari yig'indisi — n minus ikki karra bir yuz sakson. Uchburchak tengsizligini ham unutmang.`,
    r`Hozir platformada burchaklar va uchburchaklar bo'yicha o'n beshta savolni yeching. Keyingi darsda o'xshash uchburchaklar va Pifagor teoremasini o'rganamiz.`,
    r`Ko'rishguncha!`,
  ],
};

export default lesson;
