import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

import type { PageSummary, Tab } from '../types'
import { checkTopics, readSections } from './page'

const PANE = 'ehtimollik'
const PAGE_FILE = 'index.html'
const IS_TEACHER_OFF = 'isTeacherOff'

const tab = atom({ plugin: 'ehtimollik-ustoz', key: 'tab' } as const, 'formulalar' as Tab)
const page = atom({ plugin: 'ehtimollik-ustoz', key: 'page' } as const, null as PageSummary | null)

const TEACHER = `# O'qituvchi rejimi: 11-sinf ehtimollik nazariyasi

Foydalanuvchi — 11-sinf o'quvchilariga ehtimollik nazariyasini o'zbek tilida o'rgatadigan o'qituvchi. Ushbu loyiha o'quvchilar uchun interaktiv dars sahifasi.

- Foydalanuvchiga va sahifadagi o'quv matnlariga o'zbek tilida (lotin yozuvida) yoz. Kod, o'zgaruvchi nomlari va commit xabarlari odatdagidek qolishi mumkin.
- Maktab darsliklaridagi atamalardan foydalan: hodisa, tajriba, elementar hodisa, qulay natija, birgalikda bo'lmagan hodisalar, bog'liqmas hodisalar, shartli ehtimollik, to'la ehtimollik formulasi, Bayes formulasi, Bernulli sxemasi, matematik kutilma, dispersiya.
- Belgilashlar: P(A), Ā (qarama-qarshi hodisa), P(B|A), Pₙ = n!, Aₙᵏ = n!/(n−k)!, Cₙᵏ = n!/(k!(n−k)!).
- Masala yechganda yoki tuzganda: shartni yoz, hodisalarni belgila, formulani nomi bilan ko'rsat, hisobni bosqichma-bosqich bajar va javobni oddiy kasr hamda o'nli kasr ko'rinishida ber.
- Har bir javobni tekshir: har qanday ehtimollik 0 ≤ P ≤ 1 oralig'ida, to'liq guruh hodisalari ehtimolliklari yig'indisi 1 ga teng, taqsimot jadvalidagi ehtimolliklar yig'indisi 1 ga teng. Natijani iloji bo'lsa boshqa usul bilan yoki kichik sonlarda sanab tekshir.
- Qiyinlik 11-sinf darajasida bo'lsin: oliy matematika (integral, limit teoremalarining isboti) faqat o'qituvchi so'rasa.
- Sahifaga o'zgartirish kiritganda formulalar, misollar va interaktiv hisoblagichlar natijalari matematik jihatdan to'g'ri ekanini tekshir.`

const FORMULAS = `**Klassik ehtimollik**
P(A) = m / n, 0 ≤ P(A) ≤ 1 (m — qulay natijalar, n — barcha natijalar)

**Geometrik ehtimollik**
P(A) = S(g) / S(G)

**Kombinatorika**
Pₙ = n!   Aₙᵏ = n! / (n−k)!   Cₙᵏ = n! / (k!·(n−k)!)

**Qarama-qarshi hodisa**
P(Ā) = 1 − P(A)

**Qo'shish qoidasi**
P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
Birgalikda bo'lmasa: P(A ∪ B) = P(A) + P(B)

**Ko'paytirish qoidasi**
P(A ∩ B) = P(A) · P(B|A)
Bog'liqmas bo'lsa: P(A ∩ B) = P(A) · P(B)

**Shartli ehtimollik**
P(B|A) = P(A ∩ B) / P(A)

**To'la ehtimollik formulasi**
P(A) = Σ P(Hᵢ) · P(A|Hᵢ)

**Bayes formulasi**
P(Hᵢ|A) = P(Hᵢ) · P(A|Hᵢ) / P(A)

**Bernulli formulasi**
Pₙ(k) = Cₙᵏ · pᵏ · qⁿ⁻ᵏ, q = 1 − p

**Matematik kutilma va dispersiya**
M(X) = Σ xᵢ·pᵢ   D(X) = M(X²) − (M(X))²   σ = √D(X)

**Binomial taqsimot**
M(X) = np   D(X) = npq   σ = √(npq)

**Normal taqsimot**
f(x) = 1/(σ√(2π)) · e^(−(x−μ)² / (2σ²))
68–95–99,7 qoidasi: μ ± σ, μ ± 2σ, μ ± 3σ`

async function scanPage($: EngineInterface) {
  const path = `${await $.session.root()}/${PAGE_FILE}`
  let summary: PageSummary
  try {
    const html = await $.fs.read(path)
    summary = { path, isFound: true, sections: readSections(html), topics: checkTopics(html) }
  } catch {
    summary = { path, isFound: false, sections: [], topics: [] }
  }
  await update($, page, () => summary)
}

const openPane = ($: EngineInterface) => $.ui.open({ id: PANE, title: 'Ehtimollik' })

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'ehtimollik',
      description: "Ehtimollik panelini ochadi: formulalar va sahifadagi mavzular",
    })
    await $.command.register({
      name: 'ustoz',
      description: "O'qituvchi rejimini yoqadi yoki o'chiradi",
    })
    await scanPage($)
    void openPane($)

    return next(e)
  })

  on('command.run', { command: 'ehtimollik' }, async $ => {
    await scanPage($)
    await openPane($)

    return { text: 'Ehtimollik paneli ochildi.' }
  })

  on('command.run', { command: 'ustoz' }, async $ => {
    const isOff = !(await $.store.get(IS_TEACHER_OFF))
    await $.store.set(IS_TEACHER_OFF, isOff)

    return {
      text: isOff
        ? "O'qituvchi rejimi o'chirildi."
        : "O'qituvchi rejimi yoqildi: javoblar o'zbek tilida, 11-sinf darajasida, tekshiruv bilan.",
    }
  })

  on('prompt.compose', async ($, e, next) => {
    const composed = await next(e)
    if (await $.store.get(IS_TEACHER_OFF)) return composed

    return {
      sections: [
        ...composed.sections,
        { id: 'ehtimollik-ustoz:teacher', text: TEACHER, scope: 'session' as const },
      ],
    }
  })

  // Claude sahifani tahrirlagan bo'lishi mumkin: har navbat oxirida mavzular qayta o'qiladi.
  on('turn.complete', async ($, e, next) => {
    await scanPage($)

    return next(e)
  })

  on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e) => {
    const { Box, Button, Markdown, Text } = $.ui.resolve(e)
    const current = await read($, tab)
    const summary = await read($, page)
    const pick = (next: Tab) => () => update($, tab, () => next)

    const tabs = (
      <Box flexDirection="row" gap={1}>
        <Button
          key="formulalar"
          label="Formulalar"
          hotkey="f"
          variant={current === 'formulalar' ? 'primary' : 'secondary'}
          onPress={pick('formulalar')}
        />
        <Button
          key="mavzular"
          label="Mavzular"
          hotkey="m"
          variant={current === 'mavzular' ? 'primary' : 'secondary'}
          onPress={pick('mavzular')}
        />
      </Box>
    )

    if (current === 'formulalar') {
      return (
        <Box flexDirection="column" gap={1}>
          {tabs}
          <Markdown text={FORMULAS} />
        </Box>
      )
    }

    if (summary === null || !summary.isFound) {
      return (
        <Box flexDirection="column" gap={1}>
          {tabs}
          <Text dimColor>{PAGE_FILE} topilmadi{summary === null ? '' : `: ${summary.path}`}</Text>
        </Box>
      )
    }

    const missing = summary.topics.filter(t => !t.isOnPage).length

    return (
      <Box flexDirection="column" gap={1}>
        {tabs}
        <Box flexDirection="column">
          <Text bold>Sahifadagi bo'limlar</Text>
          {summary.sections.map(section => (
            <Box flexDirection="column">
              <Text>{section.label}</Text>
              {section.subTabs.length > 0 && <Text dimColor>   {section.subTabs.join(' · ')}</Text>}
            </Box>
          ))}
        </Box>
        <Box flexDirection="column">
          <Text bold>
            Dastur mavzulari ({summary.topics.length - missing}/{summary.topics.length} sahifada)
          </Text>
          {summary.topics.map(t => (
            <Text dimColor={!t.isOnPage}>
              {t.isOnPage ? '✓' : '·'} {t.topic}
            </Text>
          ))}
        </Box>
      </Box>
    )
  })
}
