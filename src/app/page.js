import Link from 'next/link'

import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button.jsx'
import { TalksList } from '@/components/talks-list'
import Image from 'next/image'

export const revalidate = 3600

export default async function Home() {
  // const linksUrls = ['/writing', '/journey', '/music', '/contact']
  const linksUrls = []
  return (
    <ScrollArea useScrollAreaId>
      <FloatingHeader scrollTitle="Ali Irani" />
      <div className="content-wrapper">
        <PageTitle title="Home" className="lg:hidden" />
        <div className="content mb-12 flex flex-row gap-4">
          <div className="flex flex-[2] flex-col gap-4 ">
            <p>Hi 👋</p>
            <p>I'm Ali — engineering lead at OVOU, AI-agent maximalist, occasional Persian Tar player.</p>
            <p>
              My day job is dragging a small team into a future where most of the boring work is automated. At{' '}
              <a
                href="https://ovou.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                OVOU
              </a>{' '}
              we've standardized on Claude Code and Cowork, and I spend a lot of energy showing engineers (and
              non-engineers) how much further they can push it.
            </p>
            <p>
              My night job is doing the same thing to my own life: agents that manage my inbox, my tasks, my writing, my
              second brain. An M.Sc. in AI gives me an excuse to take it seriously.
            </p>
            <p>
              Before OVOU I led teams at{' '}
              <a
                href="https://balad.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                Balad
              </a>{' '}
              (Iran's largest maps service, 20M+ users) and shipped at{' '}
              <a
                href="https://tapsi.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                Tapsi
              </a>{' '}
              (10M+). I've also had a{' '}
              <a
                href="https://youtube.com/@aliir74"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                YouTube channel
              </a>{' '}
              since 2019 where I post about programming, AI, and tech — not on any kind of schedule.
            </p>
          </div>
          <div className="flex flex-1 flex-row justify-around">
            <Image src="/assets/me.avif" alt="Ali Irani" width={300} height={300} className="object-cover" priority />
          </div>
        </div>
        <div className="content mb-12">
          <h2 className="mb-2 text-xl font-semibold tracking-tight">Talks</h2>
          <p className="mb-6 text-gray-600">
            Selected talks I&apos;ve given. See all on{' '}
            <Link href="/talks" className="text-blue-400 hover:text-blue-600">
              /talks
            </Link>
            .
          </p>
          <TalksList />
        </div>
        <div className="flex flex-row justify-around">
          {linksUrls.map((url) => (
            <Button asChild variant="secondary" className="hover:bg-blue-100 lg:hidden" key={url}>
              <Link href={url}>
                <h2>
                  {url.replace('/', '').replace('-', ' ').charAt(0).toUpperCase() +
                    url.replace('/', '').replace('-', ' ').slice(1)}
                </h2>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </ScrollArea>
  )
}
