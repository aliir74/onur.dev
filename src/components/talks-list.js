import { ArrowUpRightIcon } from 'lucide-react'

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

export async function TalksList() {
  const decks = await fetchDecks()

  if (decks.length === 0) {
    return <p className="text-gray-500">No talks available right now. Check back soon.</p>
  }

  return (
    <ul className="flex flex-col">
      {decks.map((deck) => (
        <li key={deck.slug}>
          <a
            href={`https://talks.aliirani.com/${deck.slug}/`}
            target="_blank"
            rel="noopener noreferrer"
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
  )
}
