import type { PageSection, TopicCheck } from '../types'

// 11-sinf ehtimollik dasturidagi mavzular va sahifa matnida ularni topadigan so'zlar.
const CURRICULUM: { topic: string; pattern: RegExp }[] = [
  { topic: 'Tasodifiy hodisalar', pattern: /tasodifiy hodisa/ },
  { topic: "Klassik ehtimollik ta'rifi", pattern: /klassik/ },
  { topic: 'Kombinatorika (Pₙ, Aₙᵏ, Cₙᵏ)', pattern: /kombinator|o'rinlashtirish|guruhlash/ },
  { topic: 'Geometrik ehtimollik', pattern: /geometrik ehtimol/ },
  { topic: 'Qarama-qarshi hodisa', pattern: /qarama-qarshi/ },
  { topic: 'Eyler-Venn diagrammalari', pattern: /venn/ },
  { topic: "Qo'shish qoidasi", pattern: /qo'shish/ },
  { topic: "Ko'paytirish qoidasi", pattern: /ko'paytirish/ },
  { topic: 'Shartli ehtimollik', pattern: /shartli/ },
  { topic: "To'la ehtimollik formulasi", pattern: /to'la ehtimol/ },
  { topic: 'Bayes formulasi', pattern: /bayes/ },
  { topic: 'Bernulli sxemasi', pattern: /bernulli/ },
  { topic: 'Binomial taqsimot', pattern: /binomial/ },
  { topic: 'Normal taqsimot', pattern: /normal taqsimot/ },
  { topic: 'Matematik kutilma va dispersiya', pattern: /kutilma|dispersiya/ },
]

// O'zbek apostroflarining har xil yozilishini (ʻ ʼ ’ ‘ `) bittaga keltiradi.
const normalize = (text: string) => text.toLowerCase().replace(/[ʻʼ’‘`]/g, "'")

const decode = (text: string) =>
  text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .trim()

export function readSections(html: string): PageSection[] {
  const labels = new Map<string, string>()
  for (const [, id = '', text = ''] of html.matchAll(/showSection\('([\w-]+)'[^>]*>([^<]+)</g)) {
    labels.set(id, decode(text))
  }

  const sections: PageSection[] = []
  const starts = [...html.matchAll(/<div id="([\w-]+)" class="section[" ]/g)]
  starts.forEach((start, i) => {
    const id = start[1] ?? ''
    const body = html.slice(start.index, starts[i + 1]?.index ?? html.length)
    const title = body.match(/class="section-title">([\s\S]*?)<\/div>/)?.[1]
    const label =
      labels.get(id) ??
      (title === undefined ? id : decode(title.replace(/<br\s*\/?>/g, ' ')))
    const subTabs = [...body.matchAll(/class="sub-tab(?: [^"]*)?"[^>]*>([^<]+)</g)]
      .map(m => decode(m[1] ?? ''))
      .filter(label => label !== '')
    sections.push({ label, subTabs })
  })

  return sections
}

export function checkTopics(html: string): TopicCheck[] {
  const text = normalize(
    // Skriptlar qoldiriladi: masalalar matni ko'pincha JavaScript ichida turadi.
    html.replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' '),
  )

  return CURRICULUM.map(({ topic, pattern }) => ({ topic, isOnPage: pattern.test(text) }))
}
