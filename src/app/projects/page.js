import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { ProjectsList } from '@/components/projects-list'

export const revalidate = 3600

export default async function Projects() {
  return (
    <ScrollArea useScrollAreaId>
      <FloatingHeader scrollTitle="Projects" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Projects" />
          <p className="mb-8 text-gray-600">Open-source things I&apos;ve built recently.</p>
          <ProjectsList />
        </div>
      </div>
    </ScrollArea>
  )
}

export function generateMetadata() {
  const title = 'Projects'
  const description = "Open-source things I've built recently."
  const siteUrl = '/projects'

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
