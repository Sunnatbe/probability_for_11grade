// Dars matnlari uchun kichik belgilash tili:
//   $...$      — LaTeX formula (PDF da KaTeX, PPT da Unicode matn)
//   **...**    — qalin matn
// O'zbekcha apostrof ' konspektda ’ ga almashtiriladi (formulalardan tashqari).
const katex = require('katex');

const SUP = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  '+': '⁺', '-': '⁻', '−': '⁻', '=': '⁼', '(': '⁽', ')': '⁾', 'n': 'ⁿ', 'x': 'ˣ', 'm': 'ᵐ', 't': 'ᵗ', 'k': 'ᵏ',
  'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'h': 'ʰ', 'i': 'ⁱ', 'r': 'ʳ', 'y': 'ʸ', 'p': 'ᵖ', 's': 'ˢ', 'w': 'ʷ',
  'u': 'ᵘ', 'v': 'ᵛ', 'o': 'ᵒ', ' ': '', '°': '°' };
const SUB = { '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
  '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎', 'a': 'ₐ', 'e': 'ₑ', 'o': 'ₒ', 'x': 'ₓ', 'h': 'ₕ', 'k': 'ₖ',
  'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'p': 'ₚ', 's': 'ₛ', 't': 'ₜ', 'i': 'ᵢ', 'r': 'ᵣ', 'u': 'ᵤ', 'v': 'ᵥ', ' ': '' };

const CMDS = {
  cdot: '·', times: '×', div: '÷', ne: '≠', neq: '≠', le: '≤', leq: '≤', ge: '≥', geq: '≥', pm: '±', mp: '∓',
  Rightarrow: '⇒', implies: '⇒', Leftrightarrow: '⇔', iff: '⇔', to: '→', rightarrow: '→', leftarrow: '←', infty: '∞',
  pi: 'π', theta: 'θ', alpha: 'α', beta: 'β', gamma: 'γ', Delta: 'Δ', delta: 'δ', sigma: 'σ', mu: 'μ', lambda: 'λ',
  circ: '°', angle: '∠', triangle: '△', sim: '~', cong: '≅', parallel: '∥', perp: '⊥', approx: '≈', '%': '%',
  '$': '$', '{': '{', '}': '}', '#': '#', '&': '&', left: '', right: '', bigl: '', bigr: '', Big: '', big: '',
  quad: '   ', qquad: '    ', ',': ' ', ';': ' ', ':': ' ', '!': '', ' ': ' ', lvert: '|', rvert: '|', mid: '|', vert: '|',
  cdots: '⋯', ldots: '…', dots: '…', in: '∈', notin: '∉', emptyset: '∅', varnothing: '∅', checkmark: '✓', star: '★',
  sin: 'sin', cos: 'cos', tan: 'tan', log: 'log', ln: 'ln', max: 'max', min: 'min', degree: '°', prime: '′',
  langle: '⟨', rangle: '⟩', cup: '∪', cap: '∩', subset: '⊂', ast: '*', bullet: '•', square: '□', boxtimes: '⊠',
  rho: 'ρ', omega: 'ω', phi: 'φ', ell: 'ℓ', leftrightarrow: '↔', Leftarrow: '⇐', uparrow: '↑', displaystyle: '', textstyle: '', downarrow: '↓', nearrow: '↗', searrow: '↘', neg: '¬', sqrtsign: '√',
};

function readGroup(s, i) {
  // s[i] — '{' bo'lsa, mos '}' gacha bo'lgan ichki qismni qaytaradi
  if (s[i] !== '{') {
    if (s[i] === '\\') { const m = /^\\([a-zA-Z]+|.)/.exec(s.slice(i)); return [m[0], i + m[0].length]; }
    return [s[i], i + 1];
  }
  let depth = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === '{') depth++;
    else if (s[j] === '}') { depth--; if (depth === 0) return [s.slice(i + 1, j), j + 1]; }
  }
  return [s.slice(i + 1), s.length];
}

const oneGroup = (t) => { if (!/^\(.*\)$/.test(t)) return false; let d = 0; for (let k = 0; k < t.length; k++) { if (t[k] === '(') d++; else if (t[k] === ')') { d--; if (d === 0 && k < t.length - 1) return false; } } return true; };
const simple = (t) => /^(\d+(\.\d+)?|Δ?[A-Za-zα-ωπθ][₀-₉]?|√?\d+|[A-Za-z]\(\w\))$/.test(t) || oneGroup(t) || /^[A-Za-z0-9]+[⁰¹²³⁴⁵⁶⁷⁸⁹ⁿˣ]+$/.test(t);

function texToPlain(s) {
  let out = '';
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (c === '\\') {
      const m = /^\\([a-zA-Z]+|.)/.exec(s.slice(i));
      const name = m[1];
      i += m[0].length;
      if (/^[a-zA-Z]+$/.test(name)) while (s[i] === ' ') i++;
      if (name === 'frac' || name === 'dfrac' || name === 'tfrac') {
        while (s[i] === ' ') i++;
        let a, b; [a, i] = readGroup(s, i); while (s[i] === ' ') i++; [b, i] = readGroup(s, i);
        a = texToPlain(a); b = texToPlain(b);
        const VULGAR = { '1/2': '½', '1/3': '⅓', '2/3': '⅔', '1/4': '¼', '3/4': '¾' };
        if (VULGAR[`${a}/${b}`]) { out += VULGAR[`${a}/${b}`]; continue; }
        out += (simple(a) ? a : `(${a})`) + '/' + (simple(b) ? b : `(${b})`);
      } else if (name === 'sqrt') {
        let idx = '';
        if (s[i] === '[') { const j = s.indexOf(']', i); idx = s.slice(i + 1, j); i = j + 1; }
        let a; [a, i] = readGroup(s, i); a = texToPlain(a);
        const root = idx === '3' ? '∛' : idx === '4' ? '∜' : idx ? [...idx].map((ch) => SUP[ch] || ch).join('') + '√' : '√';
        out += root + (simple(a) ? a : `(${a})`);
      } else if (['text', 'mathrm', 'textbf', 'mathbf', 'textit', 'operatorname', 'boxed', 'overline', 'mathit', 'underline', 'widehat', 'overarc', 'overset', 'vec'].includes(name)) {
        let a; [a, i] = readGroup(s, i);
        if (name === 'overset') { let b; [b, i] = readGroup(s, i); out += texToPlain(b); }
        else out += name.startsWith('text') || name === 'operatorname' ? a.replace(/\\%/g, '%').replace(/\\\$/g, '$') : texToPlain(a);
      } else if (name === 'bar' || name === 'hat') {
        let a; [a, i] = readGroup(s, i);
        out += texToPlain(a) + (name === 'bar' ? '\u0304' : '\u0302');
      } else if (name === 'begin' || name === 'end') {
        let a; [a, i] = readGroup(s, i);
      } else if (['sin', 'cos', 'tan', 'log', 'ln'].includes(name)) {
        out += name + (/[A-Za-z0-9\\]/.test(s[i] || '') ? ' ' : '');
      } else if (name in CMDS) {
        out += CMDS[name];
      } else {
        out += name;
      }
    } else if (c === '^' || c === '_') {
      i++;
      let a; [a, i] = readGroup(s, i);
      if (a === '\\circ') { out += '°'; continue; }
      const p = texToPlain(a).replace(/−/g, '-');
      const map = c === '^' ? SUP : SUB;
      if ([...p].every((ch) => ch in map)) out += [...p].map((ch) => map[ch]).join('');
      else out += (c === '^' ? '^' : '_') + (p.length > 1 ? `(${p})` : p);
    } else if (c === '{' || c === '}') {
      i++;
    } else if (c === '~') {
      out += ' '; i++;
    } else if (c === '&') {
      i++;
    } else {
      out += c; i++;
    }
  }
  return out;
}

function prettify(p) {
  // binar amallar atrofida bo'shliq, minusni − ga almashtirish
  p = p.replace(/-/g, '−');
  p = p.replace(/\s*([=<>≤≥≠⇒⇔→≈±·×÷∥≅])\s*/g, ' $1 ');
  p = p.replace(/(\S)\s*\+\s*/g, '$1 + ');
  p = p.replace(/([\w)\]²³⁴⁰¹⁵⁶⁷⁸⁹ⁿˣ°|!′%])\s*−\s*/g, '$1 − ');
  p = p.replace(/\(\s+/g, '(').replace(/\s+\)/g, ')');
  p = p.replace(/ {2,}/g, (m) => (m.length >= 3 ? '   ' : ' '));
  return p.trim();
}

const plainMath = (tex) => prettify(texToPlain(tex));

function splitMarkup(s) {
  // [{t:'text'|'math', v}] ga ajratish; \$ — oddiy dollar belgisi
  const parts = [];
  let buf = '';
  let inMath = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '\\' && s[i + 1] === '$') { buf += inMath ? '\\$' : '$'; i++; continue; }
    if (s[i] === '$') { parts.push({ t: inMath ? 'math' : 'text', v: buf }); buf = ''; inMath = !inMath; continue; }
    buf += s[i];
  }
  parts.push({ t: inMath ? 'math' : 'text', v: buf });
  return parts.filter((p) => p.v !== '');
}

// PPT uchun: oddiy Unicode matn
function toPlain(s) {
  if (s == null) return '';
  return splitMarkup(String(s)).map((p) => (p.t === 'math' ? plainMath(p.v) : p.v.replace(/\*\*/g, ''))).join('');
}

// PPT uchun: qalin qismlar bilan runlar
function toRuns(s) {
  const runs = [];
  String(s).split(/(\*\*[^*]+\*\*)/).forEach((chunk) => {
    if (!chunk) return;
    const bold = chunk.startsWith('**');
    runs.push({ text: toPlain(bold ? chunk.slice(2, -2) : chunk), bold });
  });
  return runs;
}

const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const uzApos = (t) => t.replace(/([A-Za-z])'([A-Za-z])/g, '$1’$2').replace(/'/g, '’');

function mathHtml(tex, display = false) {
  return katex.renderToString(tex, { throwOnError: true, displayMode: display, strict: false, output: 'html' });
}

// PDF uchun: HTML
function toHtml(s) {
  if (s == null) return '';
  return splitMarkup(String(s)).map((p) => {
    if (p.t === 'math') return mathHtml(p.v);
    return esc(uzApos(p.v)).replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
  }).join('');
}

module.exports = { toPlain, toRuns, toHtml, mathHtml, plainMath, uzApos, esc };
