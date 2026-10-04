import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import {CheckBadge, prog} from '../components';
import {C, FONT, MATH_FONT, SHADOW} from '../theme';
import {
  Card,
  IconBolt,
  IconBook,
  IconBulb,
  IconCalc,
  IconChart,
  IconClockFast,
  IconDice,
  IconFlag,
  IconLaptop,
  IconQuestion,
  IconQuiet,
  IconTarget,
  IconTimer,
  NumDot,
  Reveal,
  sec,
  SlideFrame,
} from './ui';

const Cross: React.FC<{size?: number}> = ({size = 52}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" style={{flexShrink: 0}}>
    <circle cx="32" cy="32" r="30" fill={C.red} />
    <path d="M21 21 L43 43 M43 21 L21 43" stroke="#fff" strokeWidth="7" strokeLinecap="round" />
  </svg>
);

const Check: React.FC<{size?: number}> = ({size = 52}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" style={{flexShrink: 0}}>
    <circle cx="32" cy="32" r="30" fill={C.green} />
    <path d="M18 33 L28 43 L47 22" fill="none" stroke="#fff" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Banner: React.FC<{at: number; color?: string; top: number; children: React.ReactNode; icon?: React.ReactNode}> = ({
  at,
  color = C.amber,
  top,
  children,
  icon,
}) => (
  <Reveal at={at} dy={60} style={{position: 'absolute', left: 120, right: 120, top}}>
    <div
      style={{
        background: C.navyCard,
        border: `4px solid ${color}`,
        borderRadius: 24,
        boxShadow: SHADOW,
        padding: '24px 36px',
        display: 'flex',
        alignItems: 'center',
        gap: 28,
        fontSize: 38,
        fontWeight: 700,
        lineHeight: 1.3,
      }}
    >
      {icon}
      <div>{children}</div>
    </div>
  </Reveal>
);

// ---------------------------------------------------------------------------
// Slide 1 overlay: lesson topics under the frozen title card
export const S1Topics: React.FC = () => {
  const topics = ['Test formati', 'Savol turlari', 'Domenlar', 'Vaqt', 'Tuzoqlar', 'Diagnostika'];
  return (
    <AbsoluteFill style={{fontFamily: FONT, color: C.white}}>
      <div style={{position: 'absolute', left: 140, top: 712, display: 'flex', gap: 16, flexWrap: 'wrap', width: 1240}}>
        {topics.map((t, i) => (
          <Reveal key={t} at={3 + i * 1.6} dy={20} pop>
            <div
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: C.lavender,
                border: '2px solid rgba(199,204,245,0.35)',
                borderRadius: 999,
                padding: '10px 24px',
                background: 'rgba(42,48,96,0.7)',
              }}
            >
              {t}
            </div>
          </Reveal>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------------------
// Slide 2: Darsning maqsadi (60 s)
export const S2Goals: React.FC<{duration: number}> = ({duration}) => {
  const goals = [
    {icon: <IconLaptop />, text: 'Digital SAT Math qanday tuzilganini bilasiz'},
    {icon: <IconChart />, text: 'Ballar qaysi mavzulardan kelishini tushunasiz'},
    {icon: <IconTimer />, text: "Vaqtni to'g'ri taqsimlashni o'rganasiz"},
    {icon: <IconTarget />, text: "Diagnostik test bilan boshlang'ich darajangizni aniqlaysiz"},
  ];
  return (
    <SlideFrame n={2} kicker="KIRISH" title="Darsning maqsadi" duration={duration}>
      <div
        style={{
          position: 'absolute',
          left: 120,
          right: 120,
          top: 280,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 36,
        }}
      >
        {goals.map((g, i) => (
          <Reveal key={i} at={4 + i * 10} dy={40}>
            <Card style={{display: 'flex', alignItems: 'center', gap: 28, height: 190}}>
              <NumDot n={i + 1} size={72} />
              <div style={{fontSize: 40, fontWeight: 700, lineHeight: 1.25, flex: 1}}>{g.text}</div>
              {g.icon}
            </Card>
          </Reveal>
        ))}
      </div>
      <Banner at={46} top={760} icon={<IconBulb size={64} />}>
        Natija: <span style={{color: C.amber}}>o'zingizning shaxsiy tayyorgarlik rejangiz</span>
      </Banner>
    </SlideFrame>
  );
};

// ---------------------------------------------------------------------------
// Slide 3: Digital SAT umumiy ko'rinish (90 s)
export const S3Overview: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const focus = prog(frame, sec(22), sec(0.8));
  const section = (opts: {
    at: number;
    title: string;
    q: string;
    t: string;
    dim: boolean;
  }) => (
    <Reveal at={opts.at} dy={40} style={{flex: 1}}>
      <div
        style={{
          background: opts.dim ? C.navyCard : C.white,
          color: opts.dim ? C.white : C.ink,
          borderRadius: 26,
          boxShadow: SHADOW,
          padding: '30px 40px',
          height: 250,
          boxSizing: 'border-box',
          opacity: opts.dim ? 1 - 0.45 * focus : 1,
          transform: `scale(${opts.dim ? 1 - 0.03 * focus : 1 + 0.03 * focus})`,
          border: !opts.dim ? `${5 * focus}px solid ${C.amber}` : '2px solid rgba(199,204,245,0.14)',
          position: 'relative',
        }}
      >
        {!opts.dim ? (
          <div
            style={{
              position: 'absolute',
              right: 30,
              top: 30,
              background: C.amber,
              color: C.ink,
              fontWeight: 800,
              fontSize: 22,
              padding: '8px 18px',
              borderRadius: 999,
              opacity: focus,
            }}
          >
            BIZNING KURS
          </div>
        ) : null}
        <div style={{fontSize: 48, fontWeight: 800}}>{opts.title}</div>
        <div style={{display: 'flex', gap: 46, marginTop: 34, fontSize: 36, fontWeight: 600}}>
          <span>{opts.q}</span>
          <span>{opts.t}</span>
          <span>200–800 ball</span>
        </div>
      </div>
    </Reveal>
  );

  const tools = [
    {icon: <IconLaptop size={50} />, text: 'Bluebook ilovasi'},
    {icon: <IconCalc size={50} />, text: 'Desmos kalkulyatori'},
    {icon: <IconBook size={50} />, text: "Formulalar varag'i"},
    {icon: <IconFlag size={50} />, text: 'Mark for Review'},
  ];

  return (
    <SlideFrame n={3} kicker="UMUMIY KO'RINISH" title="Digital SAT: 2 bo'lim" duration={duration}>
      <div style={{position: 'absolute', left: 120, right: 120, top: 250, display: 'flex', gap: 40}}>
        {section({at: 3, title: 'Reading and Writing', q: '54 savol', t: '64 minut', dim: true})}
        {section({at: 10, title: 'Math', q: '44 savol', t: '70 minut', dim: false})}
      </div>

      <Reveal at={32} style={{position: 'absolute', left: 120, right: 120, top: 540}}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 60,
            fontSize: 36,
            fontWeight: 600,
            color: C.lavender,
            background: 'rgba(42,48,96,0.6)',
            borderRadius: 20,
            padding: '20px 30px',
          }}
        >
          <span>
            Jami: <b style={{color: C.white}}>400–1600 ball</b>
          </span>
          <span>
            Vaqt: <b style={{color: C.white}}>≈2 soat 14 minut</b>
          </span>
          <span>
            Orada: <b style={{color: C.white}}>10 minut tanaffus</b>
          </span>
        </div>
      </Reveal>

      <div style={{position: 'absolute', left: 120, right: 120, top: 680, display: 'flex', gap: 28}}>
        {tools.map((t, i) => (
          <Reveal key={t.text} at={50 + i * 6} dy={30} pop style={{flex: 1}}>
            <Card style={{display: 'flex', alignItems: 'center', gap: 20, padding: '22px 26px'}}>
              {t.icon}
              <div style={{fontSize: 32, fontWeight: 700}}>{t.text}</div>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal at={76} style={{position: 'absolute', left: 120, right: 120, top: 860}}>
        <div style={{fontSize: 34, fontWeight: 600, color: C.lavender, textAlign: 'center'}}>
          <span style={{color: C.amber, fontWeight: 800}}>Eslatma:</span> 44 savoldan 4 tasi baholanmaydigan tajriba
          savoli — qaysiligi aytilmaydi, shuning uchun hammasiga jiddiy yondashing.
        </div>
      </Reveal>
    </SlideFrame>
  );
};

// ---------------------------------------------------------------------------
// Slide 4b: Adaptivlik (after the 4-facts clip)
export const S4Adaptive: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const arrow = (at: number, up: boolean) => {
    const p = prog(frame, sec(at), sec(0.8));
    const d = up ? 'M0 150 C 140 150, 160 40, 300 40' : 'M0 150 C 140 150, 160 260, 300 260';
    return (
      <path
        d={d}
        fill="none"
        stroke={up ? C.green : C.pink}
        strokeWidth={8}
        strokeLinecap="round"
        strokeDasharray={420}
        strokeDashoffset={420 * (1 - p)}
      />
    );
  };
  const box = (o: {at: number; top: number; color: string; soft: string; title: string; sub: string; label: string}) => (
    <Reveal at={o.at} dx={60} dy={0} style={{position: 'absolute', left: 1040, top: o.top, width: 760}}>
      <div
        style={{
          background: o.soft,
          color: C.ink,
          borderRadius: 26,
          boxShadow: SHADOW,
          padding: '26px 36px',
          borderLeft: `14px solid ${o.color}`,
        }}
      >
        <div style={{fontSize: 26, fontWeight: 800, color: o.color, letterSpacing: 1}}>{o.label}</div>
        <div style={{fontSize: 46, fontWeight: 800, marginTop: 6}}>{o.title}</div>
        <div style={{fontSize: 32, fontWeight: 600, marginTop: 10, color: C.inkSoft}}>{o.sub}</div>
      </div>
    </Reveal>
  );
  return (
    <SlideFrame n={4} kicker="ASOSIY QISM" title="Adaptivlik qanday ishlaydi?" duration={duration}>
      <Reveal at={1.5} dy={40} style={{position: 'absolute', left: 120, top: 380, width: 560}}>
        <Card light style={{height: 300}}>
          <NumDot n={1} size={66} />
          <div style={{fontSize: 52, fontWeight: 800, marginTop: 22}}>1-modul</div>
          <div style={{fontSize: 32, fontWeight: 600, marginTop: 12, color: C.inkSoft, lineHeight: 1.35}}>
            22 savol · 35 minut
            <br />
            aralash qiyinlik
          </div>
        </Card>
      </Reveal>
      <svg style={{position: 'absolute', left: 710, top: 380}} width={330} height={300} viewBox="0 0 330 300">
        {arrow(5, true)}
        {arrow(11, false)}
      </svg>
      <Reveal at={5.5} style={{position: 'absolute', left: 730, top: 340}}>
        <div style={{fontSize: 28, fontWeight: 700, color: C.green}}>yaxshi natija</div>
      </Reveal>
      <Reveal at={11.5} style={{position: 'absolute', left: 730, top: 690}}>
        <div style={{fontSize: 28, fontWeight: 700, color: C.pink}}>past natija</div>
      </Reveal>
      {box({
        at: 6,
        top: 270,
        color: C.greenDark,
        soft: C.greenSoft,
        label: '2-MODUL',
        title: 'Qiyinroq savollar',
        sub: "Yuqori ball (700+) uchun yagona yo'l",
      })}
      {box({
        at: 12,
        top: 560,
        color: C.pinkDark,
        soft: C.pinkSoft,
        label: '2-MODUL',
        title: 'Osonroq savollar',
        sub: 'Maksimal ball ham cheklanadi',
      })}
      <Banner at={18} top={850} icon={<IconTarget size={60} />}>
        1-modul — <span style={{color: C.amber}}>eng muhim modul</span>: shoshilmang, oddiy xatolarga yo'l qo'ymang
      </Banner>
    </SlideFrame>
  );
};

// ---------------------------------------------------------------------------
// Slide 5 overlays: tips beside the frozen worked example
export const S5Tips: React.FC = () => (
  <AbsoluteFill style={{fontFamily: FONT, color: C.white}}>
    <Reveal at={3} dx={80} dy={0} style={{position: 'absolute', left: 1380, top: 360, width: 460}}>
      <Card accent={C.amber}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <IconBulb size={46} />
          <div style={{fontSize: 30, fontWeight: 800, color: C.amber}}>Maslahat</div>
        </div>
        <div style={{fontSize: 30, fontWeight: 600, lineHeight: 1.35, marginTop: 14}}>
          Javobni boshlang'ich tenglamaga qo'yib tekshiring: 10 soniya — va ko'p xatoning oldi olinadi.
        </div>
      </Card>
    </Reveal>
    <Reveal at={22} dx={-80} dy={0} style={{position: 'absolute', left: 80, top: 360, width: 470}}>
      <Card>
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <IconBook size={46} color={C.lavender} />
          <div style={{fontSize: 30, fontWeight: 800, color: C.lavender}}>Lug'at</div>
        </div>
        <div style={{fontSize: 29, fontWeight: 500, lineHeight: 1.5, marginTop: 14}}>
          <b>value of x</b> — x ning qiymati
          <br />
          <b>solve</b> — yeching
          <br />
          <b>equation</b> — tenglama
          <br />
          <b>solution</b> — yechim
        </div>
      </Card>
    </Reveal>
  </AbsoluteFill>
);

// ---------------------------------------------------------------------------
// Slide 6a: Savol turlari (55 s)
export const S6Types: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const typed = '7/2';
  const nChars = Math.floor(interpolate(frame, [sec(17), sec(19)], [0, typed.length], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}));
  const caret = Math.floor(frame / 15) % 2 === 0;
  const rules = [
    {ok: true, text: '7/2'},
    {ok: true, text: '3.5'},
    {ok: false, text: '3 1/2'},
    {ok: false, text: '3.5 sm'},
  ];
  return (
    <SlideFrame n={6} kicker="SAVOL TURLARI" title="Ikki xil savol" duration={duration}>
      <div style={{position: 'absolute', left: 120, right: 120, top: 240, display: 'flex', gap: 40}}>
        <Reveal at={3} dy={40} style={{flex: 1}}>
          <Card light style={{height: 380}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
              <div style={{fontSize: 40, fontWeight: 800}}>Test savollari</div>
              <div style={{fontSize: 54, fontWeight: 800, color: C.indigo}}>≈75%</div>
            </div>
            <div style={{fontSize: 28, color: C.inkSoft, fontWeight: 600}}>Multiple choice · 4 ta variant</div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 30}}>
              {['A', 'B', 'C', 'D'].map((l, i) => {
                const sel = i === 2 && frame > sec(9);
                return (
                  <div
                    key={l}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      border: `3px solid ${sel ? C.indigo : '#D9DCF0'}`,
                      background: sel ? '#ECEBFF' : C.white,
                      borderRadius: 16,
                      padding: '12px 18px',
                      fontSize: 30,
                      fontWeight: 600,
                    }}
                  >
                    <NumDot n={l} size={44} color={sel ? C.indigo : '#9AA0C8'} />
                    <span style={{fontFamily: MATH_FONT}}>{['2', '3', '4', '8'][i]}</span>
                  </div>
                );
              })}
            </div>
          </Card>
        </Reveal>
        <Reveal at={13} dy={40} style={{flex: 1}}>
          <Card light style={{height: 380}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
              <div style={{fontSize: 40, fontWeight: 800}}>Javobni o'zingiz yozasiz</div>
              <div style={{fontSize: 54, fontWeight: 800, color: C.amber}}>≈25%</div>
            </div>
            <div style={{fontSize: 28, color: C.inkSoft, fontWeight: 600}}>SPR · Student-Produced Response</div>
            <div
              style={{
                marginTop: 40,
                border: `3px solid ${C.indigo}`,
                borderRadius: 16,
                height: 110,
                display: 'flex',
                alignItems: 'center',
                padding: '0 30px',
                fontSize: 60,
                fontFamily: MATH_FONT,
              }}
            >
              {typed.slice(0, nChars)}
              <span style={{opacity: caret ? 1 : 0, color: C.indigo, marginLeft: 4}}>|</span>
            </div>
            <div style={{fontSize: 26, color: C.inkSoft, marginTop: 14}}>Variant yo'q — javobni o'zingiz kiritasiz</div>
          </Card>
        </Reveal>
      </div>

      <Reveal at={26} style={{position: 'absolute', left: 120, right: 120, top: 670}}>
        <div style={{fontSize: 34, fontWeight: 800, color: C.amber}}>SPR: faqat son yozing</div>
      </Reveal>
      <div style={{position: 'absolute', left: 120, right: 120, top: 730, display: 'flex', gap: 24}}>
        {rules.map((r, i) => (
          <Reveal key={r.text} at={28 + i * 3} pop style={{flex: 1}}>
            <Card style={{display: 'flex', alignItems: 'center', gap: 20, padding: '20px 26px'}} accent={r.ok ? C.green : C.red}>
              {r.ok ? <Check /> : <Cross />}
              <span style={{fontSize: 46, fontFamily: MATH_FONT}}>{r.text}</span>
            </Card>
          </Reveal>
        ))}
      </div>
      <Reveal at={42} style={{position: 'absolute', left: 120, right: 120, top: 890}}>
        <div style={{fontSize: 32, fontWeight: 600, color: C.lavender}}>
          Aralash son va birlik yozilmaydi · To'g'ri javob bir nechta bo'lsa — bittasini yozing
        </div>
      </Reveal>
    </SlideFrame>
  );
};

// ---------------------------------------------------------------------------
// Slide 6b: Jarima yo'q (35 s)
export const S6NoPenalty: React.FC<{duration: number}> = ({duration}) => {
  const tips = [
    {icon: <IconQuestion size={60} />, title: "Bo'sh qoldirmang", text: 'Har bir savolga javob belgilang'},
    {icon: <IconDice size={60} />, title: 'Aqlli taxmin', text: "Noto'g'ri variantlarni chiqarib tashlang va qolganidan tanlang"},
    {icon: <IconFlag size={60} />, title: 'Mark for Review', text: 'Qiyin savolni belgilab, keyinroq qayting'},
  ];
  return (
    <SlideFrame n={6} kicker="SAVOL TURLARI" title="Jarima yo'q!" duration={duration}>
      <Reveal at={1} style={{position: 'absolute', left: 120, right: 120, top: 260}}>
        <div style={{fontSize: 56, fontWeight: 800, textAlign: 'center'}}>
          Noto'g'ri javob uchun ball <span style={{color: C.amber}}>ayirilmaydi</span>
        </div>
      </Reveal>
      <div style={{position: 'absolute', left: 120, right: 120, top: 420, display: 'flex', gap: 36}}>
        {tips.map((t, i) => (
          <Reveal key={t.title} at={5 + i * 7} dy={50} style={{flex: 1}}>
            <Card style={{height: 400}}>
              {t.icon}
              <div style={{fontSize: 44, fontWeight: 800, marginTop: 26}}>{t.title}</div>
              <div style={{fontSize: 34, fontWeight: 500, marginTop: 18, lineHeight: 1.35, color: C.lavender}}>{t.text}</div>
            </Card>
          </Reveal>
        ))}
      </div>
    </SlideFrame>
  );
};

// ---------------------------------------------------------------------------
// Slide 7b: 4 domen batafsil
const DOMAINS = [
  {name: 'Algebra', pct: 35, q: '13–15 savol', topics: 'chiziqli tenglama va tengsizlik, sistema, chiziqli funksiya', color: C.green},
  {name: 'Advanced Math', pct: 35, q: '13–15 savol', topics: "kvadrat va eksponent funksiyalar, ko'phadlar, ifodalar", color: C.pink},
  {name: 'Problem-Solving & Data Analysis', pct: 15, q: '5–7 savol', topics: 'foiz, nisbat, statistika, ehtimollik', color: C.amber},
  {name: 'Geometry & Trigonometry', pct: 15, q: '5–7 savol', topics: 'yuza va hajm, uchburchak, aylana, trigonometriya', color: C.indigoLight},
];

export const S7Domains: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const barW = 1680;
  let acc = 0;
  return (
    <SlideFrame n={7} kicker="DOMENLAR" title="4 domen: batafsil" duration={duration}>
      <div style={{position: 'absolute', left: 120, top: 250, width: barW, height: 64, display: 'flex', borderRadius: 16, overflow: 'hidden', background: 'rgba(42,48,96,0.7)'}}>
        {DOMAINS.map((d, i) => {
          const p = prog(frame, sec(1 + i * 0.7), sec(0.8), Easing.out(Easing.cubic));
          acc += d.pct;
          return (
            <div
              key={d.name}
              style={{
                width: (barW * d.pct * p) / 100,
                background: d.color,
                color: C.ink,
                fontWeight: 800,
                fontSize: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                borderRight: i < 3 ? `3px solid ${C.navy}` : undefined,
              }}
            >
              ≈{d.pct}%
            </div>
          );
        })}
      </div>
      <div style={{position: 'absolute', left: 120, right: 120, top: 350, display: 'flex', flexDirection: 'column', gap: 16}}>
        {DOMAINS.map((d, i) => (
          <Reveal key={d.name} at={6 + i * 10} dx={-60} dy={0}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 28,
                background: C.navyCard,
                borderRadius: 20,
                padding: '14px 30px',
                borderLeft: `12px solid ${d.color}`,
                boxShadow: SHADOW,
              }}
            >
              <div style={{width: 640}}>
                <div style={{fontSize: 36, fontWeight: 800}}>{d.name}</div>
                <div style={{fontSize: 28, fontWeight: 600, color: d.color, marginTop: 4}}>
                  ≈{d.pct}% · {d.q}
                </div>
              </div>
              <div style={{fontSize: 30, fontWeight: 500, color: C.lavender, flex: 1, lineHeight: 1.3}}>{d.topics}</div>
            </div>
          </Reveal>
        ))}
      </div>
      <Banner at={50} top={870} icon={<IconTarget size={56} />}>
        Algebra + Advanced Math <span style={{color: C.amber}}>≈ 70%</span> — tayyorgarlikni shulardan boshlaymiz
      </Banner>
    </SlideFrame>
  );
};

// ---------------------------------------------------------------------------
// Slide 8: Vaqt strategiyasi (90 s)
export const S8Time: React.FC<{duration: number}> = ({duration}) => {
  const frame = useCurrentFrame();
  const L = 160;
  const W = 1600;
  const segs = [
    {from: 0, to: 25, label: '1-aylanish: ishonchli savollar', sub: '≈25 min', color: C.indigo, at: 20},
    {from: 25, to: 32, label: '2-aylanish: belgilanganlar', sub: '≈7 min', color: C.amber, at: 30},
    {from: 32, to: 35, label: 'Tekshiruv', sub: '2–3 min', color: C.green, at: 40},
  ];
  return (
    <SlideFrame n={8} kicker="STRATEGIYA" title="Vaqt strategiyasi" duration={duration}>
      <Reveal at={3} pop style={{position: 'absolute', left: 0, right: 0, top: 230, textAlign: 'center'}}>
        <div style={{fontSize: 76, fontWeight: 800}}>
          35 min ÷ 22 savol <span style={{color: C.amber}}>≈ 1,5 min</span>
          <span style={{fontSize: 44, color: C.lavender, fontWeight: 600}}> / savol</span>
        </div>
      </Reveal>

      <Reveal at={18} style={{position: 'absolute', left: L, top: 400}}>
        <div style={{fontSize: 30, fontWeight: 700, color: C.lavender}}>Bitta modul — 35 minut</div>
      </Reveal>
      <div style={{position: 'absolute', left: L, top: 450, width: W, height: 80, borderRadius: 18, background: 'rgba(42,48,96,0.7)', opacity: prog(frame, sec(18), sec(0.5))}}>
        {segs.map((s) => {
          const p = prog(frame, sec(s.at), sec(1.2), Easing.out(Easing.cubic));
          return (
            <div
              key={s.label}
              style={{
                position: 'absolute',
                left: (W * s.from) / 35,
                top: 0,
                height: 80,
                width: ((W * (s.to - s.from)) / 35) * p,
                background: s.color,
                borderRadius: s.from === 0 ? '18px 0 0 18px' : s.to === 35 ? '0 18px 18px 0' : 0,
              }}
            />
          );
        })}
        {[0, 5, 10, 15, 20, 25, 30, 35].map((m) => (
          <div key={m} style={{position: 'absolute', left: (W * m) / 35 - 30, top: 92, width: 60, textAlign: 'center', fontSize: 22, color: C.lavender}}>
            {m}
          </div>
        ))}
      </div>
      {segs.map((s, i) => (
        <Reveal
          key={s.label}
          at={s.at + 0.6}
          style={
            i === 2
              ? {position: 'absolute', left: L + W - 400, top: 372, width: 400, textAlign: 'right'}
              : {position: 'absolute', left: L + (W * s.from) / 35, top: 590, width: i === 0 ? 700 : 520}
          }
        >
          <div style={{fontSize: 30, fontWeight: 800, color: s.color === C.indigo ? C.indigoLight : s.color}}>{s.label}</div>
          <div style={{fontSize: 26, fontWeight: 600, color: C.lavender}}>{s.sub}</div>
        </Reveal>
      ))}

      <div style={{position: 'absolute', left: 120, right: 120, top: 740, display: 'flex', gap: 36}}>
        <Reveal at={52} dy={50} style={{flex: 1}}>
          <Card accent={C.amber} style={{display: 'flex', alignItems: 'center', gap: 26}}>
            <IconClockFast size={70} />
            <div style={{fontSize: 36, fontWeight: 700, lineHeight: 1.3}}>
              Savol <span style={{color: C.amber}}>2 minutdan</span> oshsa — belgilang va keyingisiga o'ting
            </div>
          </Card>
        </Reveal>
        <Reveal at={68} dy={50} style={{flex: 1}}>
          <Card accent={C.green} style={{display: 'flex', alignItems: 'center', gap: 26}}>
            <IconFlag size={70} color={C.green} />
            <div style={{fontSize: 36, fontWeight: 700, lineHeight: 1.3}}>
              Oxirgi 2–3 minut: <span style={{color: C.green}}>bo'sh savol qolmasin!</span>
            </div>
          </Card>
        </Reveal>
      </div>
    </SlideFrame>
  );
};

// ---------------------------------------------------------------------------
// Slide 9b: Kalit so'zlar
export const S9Keywords: React.FC<{duration: number}> = ({duration}) => {
  const words = [
    {en: 'positive / negative', uz: 'musbat / manfiy'},
    {en: 'integer', uz: 'butun son'},
    {en: 'greatest / least', uz: 'eng katta / eng kichik'},
    {en: 'NOT / EXCEPT', uz: '…emas / …dan tashqari'},
    {en: 'in terms of', uz: '… orqali ifodalang'},
    {en: 'value of 2x', uz: 'x emas — 2x ning qiymati!'},
  ];
  return (
    <SlideFrame n={9} kicker="TUZOQ VA MASLAHAT" title="Savolni oxirigacha o'qing" duration={duration}>
      <div
        style={{
          position: 'absolute',
          left: 120,
          right: 120,
          top: 270,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 32,
        }}
      >
        {words.map((w, i) => (
          <Reveal key={w.en} at={3 + i * 5} pop>
            <Card light style={{height: 280, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <div style={{fontSize: 22, fontWeight: 800, color: C.indigo, letterSpacing: 2}}>KALIT SO'Z</div>
              <div style={{fontSize: 46, fontWeight: 800, marginTop: 12}}>{w.en}</div>
              <div style={{fontSize: 32, fontWeight: 600, color: C.inkSoft, marginTop: 14}}>{w.uz}</div>
            </Card>
          </Reveal>
        ))}
      </div>
    </SlideFrame>
  );
};

// ---------------------------------------------------------------------------
// Slide 10: Diagnostik test (60 s)
export const S10Diagnostic: React.FC<{duration: number}> = ({duration}) => {
  const how = [
    {icon: <IconTimer size={52} />, text: "35 minutlik taymer qo'ying"},
    {icon: <IconCalc size={52} />, text: 'Desmos ishlatish mumkin'},
    {icon: <IconQuiet size={52} />, text: 'Tinch joy, telefon chetda'},
    {icon: <IconDice size={52} />, text: 'Bilmasangiz ham — taxmin qiling'},
  ];
  const errors = [
    {title: 'Bilmadim', text: "mavzuni o'rganish kerak", icon: <IconBook size={52} color={C.pink} />, color: C.pink},
    {title: 'Shoshildim', text: "e'tiborsizlik, savolni noto'g'ri o'qish", icon: <IconBolt size={52} color={C.amber} />, color: C.amber},
    {title: 'Vaqt yetmadi', text: 'tezlikni oshirish kerak', icon: <IconClockFast size={52} color={C.indigoLight} />, color: C.indigoLight},
  ];
  return (
    <SlideFrame n={10} kicker="DIAGNOSTIKA" title="Diagnostik test: 22 savol" duration={duration}>
      <div style={{position: 'absolute', left: 120, top: 250, width: 800}}>
        <Reveal at={1.5}>
          <div style={{fontSize: 34, fontWeight: 800, color: C.amber, marginBottom: 20}}>Qanday topshirasiz</div>
        </Reveal>
        <div style={{display: 'flex', flexDirection: 'column', gap: 18}}>
          {how.map((h, i) => (
            <Reveal key={h.text} at={3 + i * 5} dx={-50} dy={0}>
              <Card style={{display: 'flex', alignItems: 'center', gap: 24, padding: '20px 28px'}}>
                {h.icon}
                <div style={{fontSize: 34, fontWeight: 700}}>{h.text}</div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
      <div style={{position: 'absolute', left: 1000, top: 250, width: 800}}>
        <Reveal at={25}>
          <div style={{fontSize: 34, fontWeight: 800, color: C.amber, marginBottom: 20}}>Testdan keyin: xatolarni ajrating</div>
        </Reveal>
        <div style={{display: 'flex', flexDirection: 'column', gap: 18}}>
          {errors.map((e, i) => (
            <Reveal key={e.title} at={27 + i * 6} dx={50} dy={0}>
              <Card light style={{display: 'flex', alignItems: 'center', gap: 24, padding: '20px 28px', borderLeft: `12px solid ${e.color}`}}>
                {e.icon}
                <div>
                  <div style={{fontSize: 36, fontWeight: 800}}>{e.title}</div>
                  <div style={{fontSize: 28, fontWeight: 500, color: C.inkSoft}}>{e.text}</div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
      <Banner at={47} top={880} icon={<CheckBadge start={sec(47.4)} size={58} />}>
        Eng zaif domeningiz — <span style={{color: C.amber}}>shaxsiy rejangizning birinchi qadami</span>
      </Banner>
    </SlideFrame>
  );
};
