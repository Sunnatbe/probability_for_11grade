const path = require('path');
const fs = require('fs');
const meta = require('../meta.json');

const MODULE_LABEL = {
  M0: 'M0 · KIRISH',
  M1: 'M1 · PEOPLE & DAILY LIFE',
  M2: 'M2 · PAST & EXPERIENCES',
  M3: 'M3 · FUTURE, PLANS & WORK',
  M4: 'M4 · RULES, ADVICE & CONDITIONS',
  M5: 'M5 · TAKRORLASH',
};

const MODULE_SPOKEN = {
  M0: 'kirish modulining',
  M1: '«People & Daily Life» modulining',
  M2: '«Past & Experiences» modulining',
  M3: '«Future, Plans & Work» modulining',
  M4: '«Rules, Advice & Conditions» modulining',
  M5: 'takrorlash modulining',
};

const pad = (n) => String(n).padStart(2, '0');

function slug(title) {
  const map = { "'": '', '’': '', 'ʻ': '', 'ʼ': '', '«': '', '»': '', '—': '', '–': '-', '+': '', ':': '', ',': '', '(': '', ')': '', '&': 'va', '·': '' };
  let s = title.replace(/['’ʻʼ«»—–+:,()&·]/g, (c) => map[c]);
  s = s.replace(/\s+/g, '_').replace(/_+/g, '_').replace(/[^A-Za-z0-9_\-]/g, '');
  return s.replace(/^_|_$/g, '');
}

function loadLesson(n) {
  const m = meta.lessons.find((l) => l.n === n);
  const file = path.join(__dirname, '..', 'lessons', `d${pad(n)}.js`);
  if (!fs.existsSync(file)) return null;
  const c = require(file);
  const next = meta.lessons.find((l) => l.n === n + 1);
  return {
    ...c,
    meta: m,
    title: c.title || m.title,
    moduleLabel: `${MODULE_LABEL[m.module]} · ${m.level}`,
    moduleSpoken: MODULE_SPOKEN[m.module],
    test: m.test,
    next: c.next || (next ? `${next.n}-dars — ${next.title}` : 'Kurs yakuni — natijalar tahlili va sertifikat'),
    nextShort: c.next || (next ? `Dars ${next.n} — ${next.title}` : 'Kurs yakuni — sertifikat'),
    nowText: c.now || `dars testi (${m.test})${c.moduleTest ? ` + ${c.moduleTest}` : ''}`,
    fileBase: `Dars${pad(n)}_${c.short || slug(m.title)}`,
  };
}

module.exports = { meta, loadLesson, pad, slug };
