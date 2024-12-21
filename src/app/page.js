import Link from 'next/link'

import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button.jsx'
import Image from 'next/image'

export default async function Home() {
  const linksUrls = ['/writing', '/journey', '/music', '/contact']
  return (
    <ScrollArea useScrollAreaId>
      <FloatingHeader scrollTitle="Ali Irani" />
      <div className="content-wrapper">
        <PageTitle title="Home" className="lg:hidden" />
        <div className="content mb-12 flex flex-row gap-4">
          <div className="flex flex-[2] flex-col gap-4">
            <p>Hi 👋</p>
            <p>I'm Ali, a Fullstack Software Engineer, Consultant, Musician and Content Creator.</p>
            <p>
              I'm working currently as a Senior Fullstack Software Engineer at{' '}
              <a href="https://ovou.com" target="_blank" rel="noopener noreferrer">
                OVOU
              </a>{' '}
              and Helping{' '}
              <a href="https://aztaclub.ir" target="_blank" rel="noopener noreferrer">
                Azta
              </a>{' '}
              bookclub as a consultant for their agile processes and their technical stuff.
            </p>
            {/* <p>
              Previously, I worked as a Senior Software Engineer and Team Lead at{' '}
              <a href="https://balad.ir" target="_blank" rel="noopener noreferrer">
                Balad
              </a>{' '}
              (The most popular Iranian map service with 20M+ users) and a Software Engineer at{' '}
              <a href="https://tapsi.com" target="_blank" rel="noopener noreferrer">
                Tapsi
              </a>{' '}
              (The second most popular Iranian uber-like service with 10M+ users).
            </p> */}
            <p>
              I'm also a musician and a content creator at{' '}
              <a href="https://youtube.com/@aliir74" target="_blank" rel="noopener noreferrer">
                Youtube
              </a>
              . I started my Youtube channel in 2019 to make technology and programming content.
            </p>
          </div>
          <div className="flex flex-1 flex-row justify-around">
            <Image src="/assets/me.avif" alt="Ali Irani" width={300} height={300} className="object-cover" priority />
          </div>
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
