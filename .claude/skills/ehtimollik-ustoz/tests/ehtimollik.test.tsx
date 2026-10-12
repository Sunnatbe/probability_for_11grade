import { expect, mock, test } from 'claude-code/testing'

import { checkTopics, readSections } from '../hooks/page'

const HTML = `
<style>.bayes { color: red }</style>
<nav class="nav">
  <button class="nav-btn active" onclick="showSection('s1', this)">1. Tasodifiy hodisalar</button>
  <button class="nav-btn" onclick="showSection('s2', this)">2. Qo&#39;shish va ko&#39;paytirish</button>
</nav>
<div id="s1" class="section active">
  <div class="section-title">Tasodifiy hodisalar va<br>ularning ehtimolligi</div>
  <p>Klassik ta'rif. Qarama-qarshi hodisa.</p>
</div>
<div id="s2" class="section">
  <div class="section-title">Ehtimolliklarni qoʻshish</div>
  <div class="sub-tabs">
    <button class="sub-tab active" onclick="showSubPanel('sp_add',this)">Qo'shish qoidasi</button>
    <button class="sub-tab" onclick="showSubPanel('sp_mul',this)">Ko’paytirish qoidasi</button>
  </div>
</div>
<script>const masala = "Shartli ehtimollik masalasi"</script>`

const FACTS = { model: 'm', promptModel: 'm', surfaces: [], tools: [], outputStyle: null, traits: [] }

// Buyruq odam terminalda yozgandek chaqiriladi.
const typed = (command: string) => ({
  command,
  args: '',
  origin: { kind: 'composer' as const },
  presentation: { isFullscreen: true, columns: 160 },
})

const PANE = {
  title: 'Ehtimollik',
  isFocused: false,
  bodyColumns: 60,
  placement: 'dock',
  scroll: { offset: 0, bodyRows: 40 },
  view: {},
} as const

test('reads sections with nav labels and sub-tabs', () => {
  expect(readSections(HTML)).toEqual([
    { label: '1. Tasodifiy hodisalar', subTabs: [] },
    { label: "2. Qo'shish va ko'paytirish", subTabs: ["Qo'shish qoidasi", 'Ko’paytirish qoidasi'] },
  ])
})

test('checks curriculum topics, any apostrophe, script text counted, styles ignored', () => {
  const found = Object.fromEntries(checkTopics(HTML).map(t => [t.topic, t.isOnPage]))
  expect(found["Klassik ehtimollik ta'rifi"]).toBe(true)
  expect(found['Qarama-qarshi hodisa']).toBe(true)
  expect(found["Ko'paytirish qoidasi"]).toBe(true)
  expect(found['Shartli ehtimollik']).toBe(true)
  expect(found['Bayes formulasi']).toBe(false)
  expect(found['Normal taqsimot']).toBe(false)
})

test('/ustoz toggles the teacher section of the system prompt', async ($, on) => {
  mock.store(on)
  on('prompt.compose', () => ({ sections: [{ id: 'intro', text: 'base', scope: 'shared' }] }))
  const ids = async () => (await $.prompt.compose(FACTS)).sections.map(s => s.id)

  expect(await ids()).toEqual(['intro', 'ehtimollik-ustoz:teacher'])

  const off = await $.command.run(typed('ustoz'))
  expect(off.text).toContain("o'chirildi")
  expect(await ids()).toEqual(['intro'])

  await $.command.run(typed('ustoz'))
  expect(await ids()).toEqual(['intro', 'ehtimollik-ustoz:teacher'])
})

for (const surface of ['terminal', 'desktop'] as const) {
  test(`pane switches from formulas to the page's topics (${surface})`, async ($, on) => {
    mock.store(on)
    on('session.root', () => ({ value: '/kurs' }))
    on('fs.read', () => ({ value: HTML }))
    on('ui.open', () => ({ value: { isPlaced: true } }))
    await $.command.run(typed('ehtimollik'))

    const ui = await $.ui.mount({
      plugin: 'ehtimollik-ustoz',
      surface,
      component: 'Pane',
      requestId: 'ehtimollik',
      props: PANE,
    })
    expect(await ui.findAll({ type: 'Button' })).toHaveLength(2)
    expect(await ui.findAll({ type: 'Markdown' })).toHaveLength(1)

    await ui.press({ key: 'mavzular' })
    expect(await ui.findAll({ type: 'Markdown' })).toHaveLength(0)
    const texts = (await ui.findAll({ type: 'Text' })).map(t => t.text)
    expect(texts).toContain('1. Tasodifiy hodisalar')
    expect(texts).toContain('· Bayes formulasi')
    expect(texts).toContain('✓ Shartli ehtimollik')
  })
}
