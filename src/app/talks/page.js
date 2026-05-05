import { ArrowUpRightIcon } from 'lucide-react'

import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'

export const revalidate = 3600

const TALKS_INDEX_URL = process.env.TALKS_INDEX_URL || 'https://talks.aliirani.com/decks.json'

async function fetchDecks() {
  try {
    const res = await fetch(TALKS_INDEX_URL, { next: { revalidate: 3600 } })
    if (!res.ok) return []
    const data = await res.json()
    return Array.isArray(data) ? data : []
  } catch {
    return []
  }
}

export default async function Talks() {
  const decks = await fetchDecks()

  return (
    <ScrollArea useScrollAreaId>
      <FloatingHeader scrollTitle="Talks" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Talks" />
          <p className="mb-8 text-gray-600">Selected talks I&apos;ve given.</p>
          {decks.length === 0 ? (
            <p className="text-gray-500">No talks available right now. Check back soon.</p>
          ) : (
            <ul className="flex flex-col">
              {decks.map((deck) => (
                <li key={deck.slug}>
                  <a
                    href={`https://talks.aliirani.com/${deck.slug}/`}
                    className="flex items-baseline justify-between gap-4 border-b border-gray-200 py-4 first:border-t hover:text-blue-600"
                  >
                    <span className="flex items-baseline gap-2">
                      <span className="text-base font-semibold">{deck.title}</span>
                      <ArrowUpRightIcon size={14} className="self-center text-gray-400" />
                    </span>
                    <span className="font-mono text-xs text-gray-400">/{deck.slug}/</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </ScrollArea>
  )
}

export function generateMetadata() {
  const title = 'Talks'
  const description = "Selected talks I've given."
  const siteUrl = '/talks'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: siteUrl
    },
    alternates: {
      canonical: siteUrl
    }
  }
}
