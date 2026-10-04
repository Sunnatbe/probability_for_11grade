import React from 'react';
import {meta} from '../catalog';
import {Shape, SideNotes} from '../figures';
import type {Lesson} from '../types';

const r = String.raw;

const lesson: Lesson = {
  ...meta(30),
  topics: ['Pifagor teoremasi', 'Pifagor uchliklari', "O'xshashlik", 'Proporsional tomonlar', "Yuza nisbati"],
  cover: [
    r`Assalomu alaykum! O'ttizinchi darsga xush kelibsiz. Bugungi mavzu — o'xshash uchburchaklar va Pifagor teoremasi.`,
    r`Pifagor teoremasini, tez-tez uchraydigan Pifagor uchliklarini, uchburchaklar o'xshashligini, proporsional tomonlarni va o'xshash shakllar yuzalari nisbatini o'rganamiz.`,
  ],
  goals: [
    r`Pifagor teoremasi bilan noma'lum tomonni topish`,
    r`Pifagor uchliklarini darhol tanish`,
    r`O'xshash uchburchaklarni aniqlash va proporsiya tuzish`,
    r`O'xshash shakllar yuzalari nisbatini topish`,
  ],
  goalsSay: [
    r`Darsning maqsadlari.`,
    r`Birinchi: to'g'ri burchakli uchburchakda Pifagor teoremasi bilan noma'lum tomonni topish.`,
    r`Ikkinchi: uch, to'rt, besh kabi Pifagor uchliklarini darhol tanib, hisob-kitobni qisqartirish.`,
    r`Uchinchi: o'xshash uchburchaklarni aniqlash va mos tomonlar proporsiyasini tuzish.`,
    r`To'rtinchi: o'xshash shakllar yuzalari nisbati tomonlar nisbatining kvadratiga teng ekanini qo'llash.`,
    r`Bu ikki mavzu geometriya savollarining eng katta qismini tashkil qiladi.`,
  ],
  goalsResult: r`uchburchak savollarining asosiy qismi — sizniki`,
  slides: [
    {
      type: 'custom',
      kicker: 'PIFAGOR TEOREMASI',
      title: r`$a^2+b^2=c^2$`,
      beats: 3,
      doc: r`To'g'ri burchakli uchburchakda katetlar $a$, $b$ va gipotenuza $c$ uchun: $a^2+b^2=c^2$. Gipotenuza — to'g'ri burchak **qarshisidagi** eng uzun tomon.`,
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
              [10, 30],
            ]}
            rightAngle={[
              [10, 90],
              [90, 90],
              [10, 30],
            ]}
            labels={[
              {at: [50, 98], text: r`$b$`, color: '#F59E0B'},
              {at: [3, 60], text: r`$a$`, color: '#F59E0B'},
              {at: [56, 54], text: r`$c$`, color: '#22C55E'},
            ]}
          />
          <SideNotes
            items={[
              {text: r`$a$, $b$ — **katetlar** (to'g'ri burchak yonidagi tomonlar)`, at: b(1)},
              {text: r`$c$ — **gipotenuza**: to'g'ri burchak qarshisida, eng uzun tomon`, at: b(2)},
              {text: r`$a^2+b^2=c^2$ — faqat **to'g'ri burchakli** uchburchakda`, at: b(3)},
            ]}
          />
        </>
      ),
      say: [
        r`Pifagor teoremasi. To'g'ri burchakli uchburchakni ko'ramiz.`,
        r`To'g'ri burchak yonidagi ikki tomon — a va b — katetlar deyiladi.`,
        r`To'g'ri burchak qarshisidagi tomon — c — gipotenuza. U har doim eng uzun tomon.`,
        r`Teorema: katetlar kvadratlari yig'indisi gipotenuza kvadratiga teng. Bu faqat to'g'ri burchakli uchburchakda ishlaydi. Formula SAT'ning formulalar varag'ida ham berilgan.`,
      ],
    },
    {
      type: 'example',
      kicker: '1-MISOL',
      title: 'Katetni topish',
      label: 'SPR SAVOLI',
      question: r`A right triangle has a hypotenuse of length 13 and one leg of length 5. What is the length of the other leg?`,
      steps: [
        {m: r`5^2+b^2=13^2`},
        {m: r`b^2=169-25=144`},
        {m: r`b=12`},
      ],
      answer: r`$12$`,
      say: [
        r`Birinchi misol. To'g'ri burchakli uchburchakning gipotenuzasi o'n uch, bir kateti besh. Ikkinchi katet qancha?`,
        r`Pifagor: besh kvadrat plyus b kvadrat teng o'n uch kvadrat.`,
        r`B kvadrat teng bir yuz oltmish to'qqiz minus yigirma besh — bir yuz qirq to'rt.`,
        r`B teng o'n ikki.`,
        r`Javob: o'n ikki. Gipotenuza berilganda — ayiramiz, katetlar berilganda — qo'shamiz.`,
      ],
    },
    {
      type: 'cards',
      kicker: 'UCHLIKLAR',
      title: 'Pifagor uchliklari — yod oling',
      cards: [
        {title: r`$3,\ 4,\ 5$`, text: r`va karralilari: $6,8,10$; $9,12,15$; $15,20,25$`},
        {title: r`$5,\ 12,\ 13$`, text: r`va karralilari: $10,24,26$`},
        {title: r`$8,\ 15,\ 17$`, text: r`kamroq uchraydi, lekin tanish bo'lsin`},
        {title: r`$7,\ 24,\ 25$`, text: r`ikki tomon berilsa — uchinchisini darhol ayting`},
      ],
      say: [
        r`Pifagor uchliklari — butun sonli to'g'ri burchakli uchburchaklar. Ularni yod olsangiz, ko'p hisob-kitobdan qutulasiz.`,
        r`Eng mashhuri — uch, to'rt, besh, va uning karralilari: olti, sakkiz, o'n; to'qqiz, o'n ikki, o'n besh.`,
        r`Besh, o'n ikki, o'n uch — biz hozir yechgan misol.`,
        r`Sakkiz, o'n besh, o'n yetti.`,
        r`Yetti, yigirma to'rt, yigirma besh. Ikki tomon shu uchliklardan birini eslatsa — uchinchi tomonni darhol ayting.`,
      ],
    },
    {
      type: 'example',
      kicker: 'SAT MISOLI',
      title: "Narvon masalasi",
      question: r`A 10-foot ladder leans against a vertical wall. The bottom of the ladder is 6 feet from the base of the wall. How high up the wall does the ladder reach?`,
      choices: [r`$4$ ft`, r`$6$ ft`, r`$8$ ft`, r`$\sqrt{136}$ ft`],
      steps: [
        {m: r`6^2+h^2=10^2`, note: r`narvon — gipotenuza`},
        {m: r`h^2=64\Rightarrow h=8`, note: r`$6,8,10$ — uchlik`},
      ],
      answer: r`C`,
      tip: r`D — narvonni katet deb olgan xato: $6^2+10^2=136$.`,
      say: [
        r`SAT misoli. O'n futlik narvon devorga suyangan. Narvonning pastki uchi devordan olti fut uzoqlikda. Narvon devorning qancha balandligiga yetadi?`,
        r`Devor va yer to'g'ri burchak hosil qiladi, narvon — gipotenuza. Olti kvadrat plyus h kvadrat teng o'n kvadrat.`,
        r`H kvadrat oltmish to'rt, h teng sakkiz. Bu olti, sakkiz, o'n uchligi.`,
        r`Javob: C.`,
        r`D variant — narvonni katet deb olgan xato. Doim tekshiring: gipotenuza — to'g'ri burchak qarshisidagi tomon.`,
      ],
    },
    {
      type: 'cards',
      kicker: "O'XSHASHLIK",
      title: "O'xshash uchburchaklar",
      cards: [
        {title: 'Belgisi (AA)', text: r`Ikki burchagi mos ravishda teng — uchburchaklar **o'xshash**`},
        {title: 'Mos burchaklar', text: r`Teng; mos tomonlar teng burchaklar qarshisida`},
        {title: 'Proporsiya', text: r`$\frac{AB}{DE}=\frac{BC}{EF}=\frac{AC}{DF}=k$`},
        {title: 'Tez-tez uchraydi', text: r`Parallel chiziq kesib o'tgan uchburchak; soya masalalari`},
      ],
      say: [
        r`Endi o'xshash uchburchaklar — shakli bir xil, o'lchami har xil uchburchaklar.`,
        r`Ikki burchagi mos ravishda teng bo'lsa, uchburchaklar o'xshash. Uchinchisi avtomatik teng bo'ladi.`,
        r`O'xshash uchburchaklarda mos burchaklar teng, mos tomonlar esa teng burchaklar qarshisida yotadi.`,
        r`Mos tomonlar nisbati bir xil — bu o'xshashlik koeffitsiyenti k.`,
        r`SAT'da odatda ikki holatda uchraydi: uchburchak ichida tomonga parallel chiziq o'tkazilgan va soya masalalari.`,
      ],
    },
    {
      type: 'custom',
      kicker: "O'XSHASHLIK",
      title: 'Ichki parallel chiziq',
      beats: 4,
      doc: r`Uchburchak $ABC$ da $DE\parallel BC$, $D$ — $AB$ da, $E$ — $AC$ da. $AD=4$, $DB=6$, $DE=6$ bo'lsa, $\triangle ADE\sim\triangle ABC$: $\frac{AD}{AB}=\frac{DE}{BC}\Rightarrow\frac{4}{10}=\frac{6}{BC}\Rightarrow BC=15$.`,
      render: (b) => (
        <>
          <Shape
            appear={0.3}
            left={180}
            top={260}
            size={620}
            points={[
              [50, 8],
              [8, 92],
              [92, 92],
            ]}
            extra={[{from: [33.2, 41.6], to: [66.8, 41.6], color: '#F59E0B'}]}
            labels={[
              {at: [50, 2], text: r`$A$`},
              {at: [3, 96], text: r`$B$`},
              {at: [97, 96], text: r`$C$`},
              {at: [27, 41], text: r`$D$`},
              {at: [73, 41], text: r`$E$`},
              {at: [36, 22], text: r`$4$`, color: '#F59E0B'},
              {at: [16, 66], text: r`$6$`, color: '#C7CCF5'},
              {at: [50, 36], text: r`$6$`, color: '#F59E0B'},
              {at: [50, 98], text: r`$?$`, color: '#22C55E'},
            ]}
          />
          <SideNotes
            items={[
              {text: r`$DE\parallel BC$ $\Rightarrow$ $\triangle ADE\sim\triangle ABC$ (umumiy $\angle A$, mos burchaklar)`, at: b(1)},
              {text: r`Mos tomonlar: $AD\leftrightarrow AB$, $DE\leftrightarrow BC$. $AB=4+6=10$!`, at: b(2)},
              {text: r`$\dfrac{4}{10}=\dfrac{6}{BC}$`, at: b(3)},
              {text: r`$BC=15$`, at: b(4)},
            ]}
          />
        </>
      ),
      say: [
        r`Klassik holat: ABC uchburchakda DE kesma BC ga parallel. AD to'rt, DB olti, DE olti. BC ni toping.`,
        r`DE parallel BC bo'lgani uchun, ADE va ABC uchburchaklar o'xshash: A burchak umumiy, parallel chiziqlar esa teng mos burchaklar hosil qiladi.`,
        r`Mos tomonlar: AD — AB ga, DE — BC ga. Diqqat: AB — bu to'liq tomon, to'rt plyus olti — o'n, olti emas!`,
        r`Proporsiya: to'rt bo'lingan o'n teng olti bo'lingan BC.`,
        r`BC teng o'n besh. Eng ko'p xato — to'rtni oltiga nisbatlash, ya'ni AD ni DB ga solishtirish.`,
      ],
    },
    {
      type: 'example',
      kicker: 'SAT MISOLI',
      title: 'Soya masalasi',
      label: 'SPR SAVOLI',
      question: r`At the same time of day, a 6-foot person casts a 4-foot shadow and a tree casts a 30-foot shadow. How tall, in feet, is the tree?`,
      steps: [
        {m: r`\frac{6}{4}=\frac{h}{30}`, note: r`bo'y/soya — o'xshash uchburchaklar`},
        {m: r`4h=180`},
        {m: r`h=45`},
      ],
      answer: r`$45$`,
      say: [
        r`Soya masalasi. Bir vaqtda olti futlik odam to'rt futlik soya, daraxt esa o'ttiz futlik soya tashlaydi. Daraxt balandligi qancha?`,
        r`Quyosh nurlari bir xil burchak ostida tushadi, shuning uchun uchburchaklar o'xshash: bo'y bo'lingan soya teng.`,
        r`To'rt h teng bir yuz sakson.`,
        r`H teng qirq besh.`,
        r`Javob: qirq besh fut.`,
      ],
    },
    {
      type: 'formula',
      kicker: 'YUZA VA HAJM NISBATI',
      title: "O'xshash shakllar nisbatlari",
      formulas: [
        {label: 'Tomonlar', tex: r`k`},
        {label: 'Yuzalar', tex: r`k^2`},
        {label: 'Hajmlar', tex: r`k^3`},
      ],
      banner: r`Tomonlar 2 marta katta bo'lsa — yuza 4 marta, hajm 8 marta katta`,
      say: [
        r`O'xshash shakllarning nisbatlari.`,
        r`Agar tomonlar nisbati k bo'lsa…`,
        r`…yuzalar nisbati k kvadrat…`,
        r`…hajmlar nisbati esa k kub.`,
        r`Masalan, tomonlar ikki marta katta bo'lsa, yuza to'rt marta, hajm sakkiz marta katta bo'ladi. Bu SAT'dagi qiyin savollarning sevimli mavzusi.`,
      ],
    },
    {
      type: 'example',
      kicker: 'SAT MISOLI',
      title: "Yuzalar nisbati",
      question: r`Triangle $PQR$ is similar to triangle $STU$, and each side of $STU$ is 3 times the corresponding side of $PQR$. If the area of $PQR$ is 10, what is the area of $STU$?`,
      choices: [r`$30$`, r`$60$`, r`$90$`, r`$270$`],
      steps: [
        {m: r`k=3\Rightarrow k^2=9`},
        {m: r`10\cdot9=90`},
      ],
      answer: r`C`,
      tip: r`A — tomonlar nisbatini yuzaga qo'llagan xato; D — hajm uchun ($k^3$).`,
      say: [
        r`SAT misoli. PQR va STU uchburchaklar o'xshash, STU ning tomonlari uch marta katta. PQR yuzasi o'n bo'lsa, STU yuzasi qancha?`,
        r`Tomonlar nisbati uch, yuzalar nisbati — to'qqiz.`,
        r`O'n karra to'qqiz — to'qson.`,
        r`Javob: C.`,
        r`A variant — o'ttiz — tomonlar nisbatini to'g'ridan-to'g'ri yuzaga qo'llagan xato. D — ikki yuz yetmish — hajmlar uchun bo'lardi.`,
      ],
    },
    {
      type: 'trap',
      title: 'Gipotenuzani adashtirish',
      question: r`The two shorter sides of a right triangle are 6 and 8. A student computes the third side as $\sqrt{8^2-6^2}=\sqrt{28}$. What is the correct length of the third side?`,
      wrong: r`$\sqrt{28}$`,
      why: r`$8$ gipotenuza deb olingan. Lekin "ikki **qisqa** tomon" — bu katetlar.`,
      right: r`Katetlar $6$ va $8$: $c=\sqrt{36+64}=$ **10**. Avval aniqlang: qaysi tomon to'g'ri burchak qarshisida?`,
      say: [
        r`Tuzoq. To'g'ri burchakli uchburchakning ikki qisqa tomoni olti va sakkiz. O'quvchi uchinchi tomonni sakkiz kvadrat minus olti kvadratdan ildiz deb hisobladi. To'g'rimi?`,
        r`Yo'q. U sakkizni gipotenuza deb olgan. Lekin ikki qisqa tomon — bu katetlar, gipotenuza eng uzun tomon.`,
        r`To'g'risi: oltmish olti emas — o'ttiz olti plyus oltmish to'rt — yuz, ildizi o'n. Avval har doim aniqlang: qaysi tomon to'g'ri burchak qarshisida?`,
      ],
    },
    {
      type: 'example',
      kicker: 'MUSTAQIL MASHQ',
      title: "O'zingiz yeching",
      label: 'MASHQ',
      question: r`A rectangle has length 24 and width 7. What is the length of its diagonal?`,
      steps: [
        {m: r`d^2=24^2+7^2`},
        {m: r`=576+49=625`},
        {m: r`d=25`},
      ],
      answer: r`$25$`,
      say: [
        r`Mustaqil mashq. Videoni to'xtating. To'g'ri to'rtburchakning bo'yi yigirma to'rt, eni yetti. Diagonali qancha?`,
        r`Diagonal to'g'ri to'rtburchakni ikkita to'g'ri burchakli uchburchakka bo'ladi: d kvadrat teng yigirma to'rt kvadrat plyus yetti kvadrat.`,
        r`Besh yuz yetmish olti plyus qirq to'qqiz — olti yuz yigirma besh.`,
        r`D teng yigirma besh.`,
        r`Javob: yigirma besh — yetti, yigirma to'rt, yigirma besh uchligi.`,
      ],
    },
    {
      type: 'example',
      kicker: 'PIFAGOR',
      title: 'Ikki nuqta orasidagi masofa',
      label: 'SPR SAVOLI',
      question: r`What is the distance between the points $(1,\,2)$ and $(7,\,10)$ in the $xy$-plane?`,
      steps: [
        {m: r`\Delta x=6,\quad\Delta y=8`, note: r`to'g'ri burchakli uchburchak katetlari`},
        {m: r`d=\sqrt{6^2+8^2}=\sqrt{100}`},
        {m: r`d=10`},
      ],
      answer: r`$10$`,
      tip: r`Masofa formulasi $d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$ — bu Pifagorning o'zi.`,
      say: [
        r`Pifagor koordinatalarda. What is the distance between one, two and seven, ten?`,
        r`Ikki nuqta orasida gorizontal farq olti, vertikal farq sakkiz. Ular to'g'ri burchakli uchburchakning katetlari.`,
        r`Masofa — gipotenuza: ildiz ostida o'ttiz olti plyus oltmish to'rt — ildiz yuz.`,
        r`O'n.`,
        r`Javob: o'n.`,
        r`Masofa formulasi aslida Pifagor teoremasining o'zi — uni alohida yodlash shart emas.`,
      ],
    },
    {
      type: 'example',
      kicker: 'SAT MISOLI',
      title: "O'xshash uchburchaklar perimetri",
      question: r`Triangle $ABC$ is similar to triangle $DEF$, with $AB$ corresponding to $DE$. If $AB=6$, $DE=9$, and the perimeter of $ABC$ is 20, what is the perimeter of $DEF$?`,
      choices: [r`$23$`, r`$30$`, r`$45$`, r`$13\tfrac13$`],
      steps: [
        {m: r`k=\frac{9}{6}=1.5`},
        {m: r`20\cdot1.5=30`, note: r`perimetr — uzunlik, $k$ marta`},
      ],
      answer: r`B`,
      say: [
        r`SAT misoli. ABC va DEF uchburchaklar o'xshash, AB va DE mos tomonlar. AB olti, DE to'qqiz, ABC perimetri yigirma. DEF perimetri qancha?`,
        r`O'xshashlik koeffitsiyenti: to'qqiz bo'lingan olti — bir butun besh.`,
        r`Perimetr — uzunlik, u ham k marta oshadi: yigirma karra bir butun besh — o'ttiz.`,
        r`Javob: B. C — qirq besh — yuza uchun k kvadratni qo'llagan xato bo'lardi.`,
      ],
    },
  ],
  recap: [
    r`$a^2+b^2=c^2$; $c$ — to'g'ri burchak qarshisida`,
    r`Uchliklar: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$`,
    r`O'xshash: tomonlar $k$, yuza $k^2$, hajm $k^3$`,
  ],
  homework: r`platformada Pifagor va o'xshashlik bo'yicha 15 ta savol`,
  recapSay: [
    r`Xulosa.`,
    r`Pifagor teoremasi: a kvadrat plyus b kvadrat teng c kvadrat. C — to'g'ri burchak qarshisidagi eng uzun tomon.`,
    r`Pifagor uchliklarini yod oling: uch-to'rt-besh, besh-o'n ikki-o'n uch, sakkiz-o'n besh-o'n yetti, yetti-yigirma to'rt-yigirma besh.`,
    r`O'xshash shakllarda tomonlar nisbati k, yuzalar — k kvadrat, hajmlar — k kub.`,
    r`Hozir platformada Pifagor va o'xshashlik bo'yicha o'n beshta savolni yeching. Keyingi darsda to'g'ri burchakli uchburchak trigonometriyasini o'rganamiz.`,
    r`Ko'rishguncha!`,
  ],
};

export default lesson;
