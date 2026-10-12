export type Tab = 'formulalar' | 'mavzular'

export type PageSection = { label: string; subTabs: string[] }

export type TopicCheck = { topic: string; isOnPage: boolean }

export type PageSummary = {
  path: string
  isFound: boolean
  sections: PageSection[]
  topics: TopicCheck[]
}

declare module 'claude-code' {
  interface PluginState {
    'ehtimollik-ustoz': { tab: Tab; page: PageSummary | null }
  }
}
