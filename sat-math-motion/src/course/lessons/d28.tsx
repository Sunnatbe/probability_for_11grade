import {meta} from '../catalog';
import type {Lesson} from '../types';

const r = String.raw;

const lesson: Lesson = {
  ...meta(28),
  topics: ['Populyatsiya va tanlanma', 'Tasodifiy tanlash', 'Xatolik chegarasi', 'Tajriba', 'Xulosa chegaralari'],
  cover: [
    r`Assalomu alaykum! Yigirma sakkizinchi darsga xush kelibsiz. Bu PSDA modulining yakuniy darsi. Mavzu — tanlanma, xulosa va xatolik chegarasi.`,
    r`Populyatsiya va tanlanmani, qaysi tanlanma ishonchli ekanini, xatolik chegarasini, tajriba va kuzatuvni hamda qaysi xulosa qilish mumkin, qaysi biri mumkin emasligini o'rganamiz.`,
  ],
  goals: [
    r`Tanlanmadan populyatsiya haqida xulosa qilish`,
    r`Siljigan (biased) tanlanmani aniqlash`,
    r`Xatolik chegarasini talqin qilish`,
    r`Tasodifiy tanlash va tasodifiy taqsimlashni farqlash`,
  ],
  goalsSay: [
    r`Darsning maqsadlari.`,
    r`Birinchi: tanlanma natijasidan butun populyatsiya haqida hisob-kitob qilish.`,
    r`Ikkinchi: siljigan, ya'ni ishonchsiz tanlanmani tanib olish.`,
    r`Uchinchi: xatolik chegarasini — margin of error — to'g'ri talqin qilish.`,
    r`To'rtinchi: qachon umumlashtirish mumkin, qachon sabab-oqibat haqida gapirish mumkin — buni farqlash.`,
    r`Bu savollarda hisob deyarli yo'q — hammasi mantiq va to'g'ri so'zni tanlashga bog'liq.`,
  ],
  goalsResult: r`"Which conclusion is supported?" savollari — ishonchli`,
  slides: [
    {
      type: 'cards',
      kicker: 'ASOSLAR',
      title: 'Populyatsiya va tanlanma',
      cards: [
        {title: 'Populyatsiya', text: r`Biz bilmoqchi bo'lgan **butun** guruh: shahardagi barcha saylovchilar`},
        {title: 'Tanlanma', text: r`So'rov o'tkazilgan qism: 500 nafar saylovchi`},
        {title: 'Tasodifiy tanlanma', text: r`Har bir a'zo teng imkoniyat bilan tanlanadi — xulosa **populyatsiyaga** o'tadi`},
        {title: 'Siljigan tanlanma', text: r`Ixtiyoriy javob, qulay joy, maxsus guruh — xulosa ishonchsiz`},
      ],
      say: [
        r`Asosiy tushunchalar.`,
        r`Populyatsiya — biz bilmoqchi bo'lgan butun guruh, masalan shahardagi barcha saylovchilar.`,
        r`Tanlanma — haqiqatan so'rov o'tkazilgan qism, masalan besh yuz nafar saylovchi.`,
        r`Agar tanlanma tasodifiy bo'lsa — populyatsiyaning har bir a'zosi teng imkoniyat bilan tanlansa — natijani butun populyatsiyaga tatbiq etish mumkin.`,
        r`Agar tanlanma siljigan bo'lsa — masalan, faqat ixtiyoriy javob berganlar yoki faqat bitta joydagi odamlar — xulosa ishonchsiz.`,
      ],
    },
    {
      type: 'example',
      kicker: 'SAT MISOLI',
      title: 'Siljigan tanlanma',
      question: r`To estimate how many students at a school support more funding for sports, a researcher surveyed 200 students attending a basketball game. Which statement is true?`,
      choices: [r`The results can be generalized to all students at the school`, r`The sample is likely biased because students at a game may favor sports`, r`The sample is too large to be useful`, r`The results apply to all students in the country`],
      steps: [
        {m: r`\text{tanlanma: o'yindagi tomoshabinlar}`},
        {m: r`\text{ular sportni yoqtirishi ehtimoli yuqori}\Rightarrow\text{siljigan}`},
      ],
      answer: r`B`,
      say: [
        r`SAT misoli. Maktabda sportga ko'proq mablag'ni qo'llab-quvvatlovchilarni aniqlash uchun basketbol o'yinidagi ikki yuz o'quvchi so'raldi. Which statement is true?`,
        r`Tanlanma — o'yinga kelgan o'quvchilar.`,
        r`Ular sportni yoqtirishi ehtimoli boshqalardan yuqori, demak tanlanma siljigan. Ikki yuz — yetarlicha katta, muammo hajmda emas, tanlash usulida.`,
        r`Javob: B.`,
      ],
    },
    {
      type: 'formula',
      kicker: 'XATOLIK CHEGARASI',
      title: 'Margin of error',
      formulas: [
        {label: 'Interval', tex: r`\text{baho}\pm\text{MOE}`, note: r`$52\%\pm3\%\Rightarrow49\%$ dan $55\%$ gacha`},
        {label: 'Tanlanma hajmi', tex: r`n\uparrow\ \Rightarrow\ \text{MOE}\downarrow`, note: r`kattaroq tasodifiy tanlanma — aniqroq baho`},
      ],
      banner: r`Interval — haqiqiy qiymat uchun **ehtimoliy** (plausible) oraliq. U siljigan tanlanmani tuzatmaydi`,
      say: [
        r`Xatolik chegarasi — margin of error.`,
        r`So'rov natijasi baho plyus-minus xatolik chegarasi ko'rinishida beriladi. Ellik ikki foiz plyus-minus uch foiz — haqiqiy qiymat ehtimol qirq to'qqizdan ellik besh foizgacha.`,
        r`Tanlanma kattaroq bo'lsa, xatolik chegarasi kichikroq — baho aniqroq bo'ladi.`,
        r`Muhim: bu oraliq — haqiqiy qiymat uchun ehtimoliy oraliq, kafolat emas. Va u siljigan tanlanma xatosini tuzatmaydi.`,
      ],
    },
    {
      type: 'example',
      kicker: '1-MISOL',
      title: 'Intervalni talqin qilish',
      question: r`A random sample of voters showed 52% support a proposal, with a margin of error of 3%. Which conclusion is best supported?`,
      choices: [r`Exactly 52% of all voters support it`, r`The true percentage is plausibly between 49% and 55%`, r`A majority of voters definitely support it`, r`Between 52% and 55% support it`],
      steps: [
        {m: r`52\pm3\Rightarrow[49\%,\ 55\%]`},
        {m: r`49\%<50\%`, note: r`ko'pchilik qo'llashi kafolatlanmagan`},
      ],
      answer: r`B`,
      tip: r`"Exactly", "definitely", "proves" — bunday kuchli so'zlar odatda noto'g'ri variantda.`,
      say: [
        r`Birinchi misol. Tasodifiy tanlanmada saylovchilarning ellik ikki foizi taklifni qo'llab-quvvatladi, xatolik chegarasi uch foiz. Which conclusion is best supported?`,
        r`Interval: qirq to'qqizdan ellik besh foizgacha.`,
        r`Qirq to'qqiz ellikdan kichik — demak, ko'pchilik qo'llashi kafolatlanmagan. C xato.`,
        r`Javob: B.`,
        r`Esda tuting: "exactly", "definitely", "proves" kabi kuchli so'zlar odatda noto'g'ri variantlarda bo'ladi.`,
      ],
    },
    {
      type: 'example',
      kicker: '2-MISOL',
      title: 'Tanlanmadan populyatsiyaga',
      label: 'SPR SAVOLI',
      question: r`In a random sample of 150 of a town's 3,000 voters, 60 support a new park. Based on this, about how many of the town's voters support the park?`,
      steps: [
        {m: r`\frac{60}{150}=0.4`, note: r`tanlanmadagi ulush`},
        {m: r`0.4\cdot3000=1200`},
      ],
      answer: r`$1200$`,
      say: [
        r`Ikkinchi misol. Shahardagi uch ming saylovchidan tasodifiy bir yuz ellik nafari so'raldi, oltmishtasi yangi parkni qo'llab-quvvatladi. Taxminan nechta saylovchi parkni qo'llab-quvvatlaydi?`,
        r`Tanlanmadagi ulush: oltmish bo'lingan bir yuz ellik — nol butun to'rt.`,
        r`Butun populyatsiyaga: nol butun to'rt karra uch ming — bir ming ikki yuz.`,
        r`Javob: bir ming ikki yuz. Bu faqat tanlanma tasodifiy bo'lgani uchun to'g'ri.`,
      ],
    },
    {
      type: 'compare',
      kicker: 'IKKI XIL TASODIFIYLIK',
      title: 'Tanlash va taqsimlash',
      cards: [
        {title: 'Tasodifiy tanlash', rule: r`Kimdan so'raymiz? — **umumlashtirish** mumkin`, example: r`populyatsiyadan tasodifiy 500 kishi`},
        {title: 'Tasodifiy taqsimlash', rule: r`Kim qaysi guruhga? — **sabab-oqibat** mumkin`, example: r`dori / platsebo guruhlariga tasodifan`},
      ],
      banner: r`Ikkalasi ham bo'lsa — populyatsiya uchun sabab-oqibat; hech biri bo'lmasa — faqat tanlanma haqida bog'liqlik`,
      say: [
        r`Ikki xil tasodifiylikni farqlash juda muhim.`,
        r`Tasodifiy tanlash — ishtirokchilar populyatsiyadan tasodifan olinadi. Bu natijani butun populyatsiyaga umumlashtirishga imkon beradi.`,
        r`Tasodifiy taqsimlash — tajribada ishtirokchilar guruhlarga tasodifan bo'linadi, masalan dori va platsebo. Bu sabab-oqibat haqida xulosa qilishga imkon beradi.`,
        r`Ikkalasi ham bo'lsa — butun populyatsiya uchun sabab-oqibat. Hech biri bo'lmasa — faqat shu tanlanmadagi bog'liqlik.`,
      ],
    },
    {
      type: 'example',
      kicker: 'SAT MISOLI',
      title: 'Tajribadan xulosa',
      question: r`100 volunteers were randomly assigned to take either a new vitamin or a placebo. The vitamin group had significantly fewer colds. Which conclusion is appropriate?`,
      choices: [r`The vitamin reduces colds for all people in the country`, r`The vitamin is likely to reduce colds for people similar to the volunteers`, r`There is no relationship between the vitamin and colds`, r`Volunteers who take vitamins are healthier in general`],
      steps: [
        {m: r`\text{tasodifiy taqsimlash}\ \checkmark\Rightarrow\text{sabab-oqibat}`},
        {m: r`\text{ko'ngillilar — tasodifiy tanlanma emas}\Rightarrow\text{umumlashtirish cheklangan}`},
      ],
      answer: r`B`,
      say: [
        r`SAT misoli. Yuz ko'ngilli tasodifan vitamin yoki platsebo guruhiga ajratildi. Vitamin guruhida shamollash ancha kam bo'ldi. Which conclusion is appropriate?`,
        r`Tasodifiy taqsimlash bor — demak, vitamin sabab bo'lgan deyish mumkin.`,
        r`Lekin ishtirokchilar ko'ngillilar, populyatsiyadan tasodifiy tanlanmagan — natijani butun mamlakatga umumlashtirib bo'lmaydi.`,
        r`Javob: B — ko'ngillilarga o'xshash odamlar uchun vitamin shamollashni kamaytirishi ehtimoli bor.`,
      ],
    },
    {
      type: 'trap',
      title: 'Populyatsiyadan tashqariga umumlashtirish',
      question: r`A random sample of 9th-grade students at a school found that 70% prefer online homework. Which conclusion is valid?`,
      wrong: r`Maktabdagi barcha o'quvchilarning 70% i`,
      why: r`Tanlanma faqat **9-sinflardan** olingan — populyatsiya ham faqat 9-sinflar.`,
      right: r`Faqat: "bu maktabdagi **9-sinf** o'quvchilarining taxminan 70% i". Xulosa tanlanma olingan populyatsiyadan tashqariga chiqmaydi.`,
      say: [
        r`Tuzoq. Maktabdagi to'qqizinchi sinf o'quvchilaridan tasodifiy tanlanma: yetmish foizi onlayn uy vazifasini afzal ko'radi. Which conclusion is valid?`,
        r`"Maktabdagi barcha o'quvchilarning yetmish foizi" — noto'g'ri. Tanlanma faqat to'qqizinchi sinflardan olingan.`,
        r`To'g'risi: bu maktabdagi to'qqizinchi sinf o'quvchilarining taxminan yetmish foizi. Xulosa hech qachon tanlanma olingan populyatsiyadan tashqariga chiqmaydi.`,
      ],
    },
    {
      type: 'example',
      kicker: 'SAT MISOLI',
      title: 'Xatolik chegarasini kamaytirish',
      question: r`A researcher wants to reduce the margin of error of a survey estimate. Which action is most likely to do this?`,
      choices: [r`Survey only people who volunteer`, r`Use a larger random sample from the same population`, r`Use a smaller random sample`, r`Survey people at one location`],
      steps: [
        {m: r`n\uparrow\Rightarrow\text{MOE}\downarrow`},
      ],
      answer: r`B`,
      say: [
        r`Yana bir misol. Tadqiqotchi xatolik chegarasini kamaytirmoqchi. Which action is most likely to do this?`,
        r`Xatolik chegarasi tanlanma hajmi oshganda kamayadi — xuddi shu populyatsiyadan kattaroq tasodifiy tanlanma kerak.`,
        r`Javob: B. A va D — siljigan usullar, ular aniqlikni oshirmaydi, balki xulosani buzadi.`,
      ],
    },
    {
      type: 'example',
      kicker: 'MUSTAQIL MASHQ',
      title: "O'zingiz yeching",
      label: 'MASHQ',
      question: r`In a random sample of 80 of a school's 2,000 students, 24 walk to school. Estimate the number of students at the school who walk to school.`,
      steps: [
        {m: r`\frac{24}{80}=0.3`},
        {m: r`0.3\cdot2000=600`},
      ],
      answer: r`$600$`,
      say: [
        r`Mustaqil mashq. Videoni to'xtating. Maktabdagi ikki ming o'quvchidan tasodifiy sakson nafari so'raldi, yigirma to'rttasi maktabga piyoda keladi. Maktabda taxminan nechta o'quvchi piyoda keladi?`,
        r`Tanlanmadagi ulush: yigirma to'rt bo'lingan sakson — nol butun uch.`,
        r`Nol butun uch karra ikki ming — olti yuz.`,
        r`Javob: olti yuz.`,
      ],
    },
    {
      type: 'cards',
      kicker: 'TADQIQOT TURLARI',
      title: 'Uch turdagi tadqiqot',
      cards: [
        {title: "So'rovnoma (survey)", text: r`Tanlanmadan so'rash — populyatsiya haqida **baho**`, icon: 'question'},
        {title: 'Kuzatuv', text: r`Aralashmasdan kuzatish — faqat **bog'liqlik**`, icon: 'target'},
        {title: 'Tajriba', text: r`Guruhlarga tasodifan taqsimlab ta'sir qilish — **sabab-oqibat**`, icon: 'bolt'},
      ],
      say: [
        r`Uch turdagi tadqiqot va ulardan qanday xulosa chiqarish mumkin.`,
        r`So'rovnoma: tanlanmadan so'raymiz va populyatsiya haqida baho beramiz.`,
        r`Kuzatuv: hech narsaga aralashmasdan kuzatamiz. Undan faqat bog'liqlik haqida xulosa chiqariladi.`,
        r`Tajriba: ishtirokchilarni guruhlarga tasodifan taqsimlab, ularga ta'sir qilamiz. Faqat tajriba sabab-oqibatni ko'rsata oladi.`,
      ],
    },
    {
      type: 'example',
      kicker: 'SAT MISOLI',
      title: "Eng to'g'ri tanlash usuli",
      question: r`A researcher wants to estimate the average height of 10th-grade students in a city. Which sampling method is most appropriate?`,
      choices: [r`Measure the basketball team at one school`, r`Measure a random sample of 10th graders from all schools in the city`, r`Ask for volunteers online`, r`Measure the first 50 teenagers at a mall`],
      steps: [
        {m: r`\text{populyatsiya: shahardagi barcha 10-sinflar}`},
        {m: r`\text{tasodifiy, butun populyatsiyadan}\Rightarrow\text{B}`},
      ],
      answer: r`B`,
      say: [
        r`SAT misoli. Tadqiqotchi shahardagi o'ninchi sinf o'quvchilarining o'rtacha bo'yini baholamoqchi. Which sampling method is most appropriate?`,
        r`Populyatsiya — shahardagi barcha o'ninchi sinf o'quvchilari.`,
        r`Bizga butun populyatsiyadan tasodifiy tanlanma kerak — bu B. A — basketbolchilar baland bo'ladi, C — ko'ngillilar, D — savdo markazidagilar — hammasi siljigan.`,
        r`Javob: B.`,
      ],
    },
    {
      type: 'example',
      kicker: 'SAT MISOLI',
      title: 'Ikki so\'rovni solishtirish',
      question: r`Poll A surveyed a random sample of 400 voters and Poll B surveyed a random sample of 1,600 voters from the same population. Which statement is most likely true?`,
      choices: [r`Poll A has a smaller margin of error`, r`Poll B has a smaller margin of error`, r`Both have the same margin of error`, r`Poll B is biased because it is larger`],
      steps: [
        {m: r`1600>400`},
        {m: r`n\uparrow\Rightarrow\text{MOE}\downarrow`},
      ],
      answer: r`B`,
      say: [
        r`Yana bir SAT misoli. A so'rovda to'rt yuz, B so'rovda bir ming olti yuz saylovchi tasodifan tanlangan, populyatsiya bir xil. Which statement is most likely true?`,
        r`B ning tanlanmasi kattaroq.`,
        r`Kattaroq tasodifiy tanlanma — kichikroq xatolik chegarasi.`,
        r`Javob: B. Katta tanlanma o'zi siljishga olib kelmaydi — siljish tanlash usuliga bog'liq.`,
      ],
    },
  ],
  recap: [
    r`Tasodifiy tanlanma — populyatsiyaga umumlashtirish; siljigan — yo'q`,
    r`$\text{baho}\pm\text{MOE}$ — ehtimoliy oraliq; katta $n$ — kichik MOE`,
    r`Tasodifiy taqsimlash — sabab-oqibat; kuchli so'zlardan ehtiyot bo'ling`,
  ],
  homework: r`platformada PSDA moduli bo'yicha 20 ta aralash savol`,
  recapSay: [
    r`Xulosa.`,
    r`Tasodifiy tanlanma natijasini populyatsiyaga umumlashtirish mumkin, siljigan tanlanmanikini — yo'q.`,
    r`Baho plyus-minus xatolik chegarasi — ehtimoliy oraliq. Kattaroq tanlanma — kichikroq xatolik.`,
    r`Sabab-oqibat uchun tasodifiy taqsimlash kerak. "Exactly", "definitely", "proves" kabi kuchli so'zlardan ehtiyot bo'ling.`,
    r`Hozir platformada PSDA moduli bo'yicha yigirmata aralash savolni yeching. Keyingi darsdan Geometriya moduli boshlanadi: burchaklar, chiziqlar va uchburchaklar.`,
    r`Ko'rishguncha!`,
  ],
};

export default lesson;
