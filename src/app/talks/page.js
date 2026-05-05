import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { TalksList } from '@/components/talks-list'

export const revalidate = 3600

export default async function Talks() {
  return (
    <ScrollArea useScrollAreaId>
      <FloatingHeader scrollTitle="Talks" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Talks" />
          <p className="mb-8 text-gray-600">Selected talks I&apos;ve given.</p>
          <TalksList />
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
