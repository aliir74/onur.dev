import { ImageResponse } from 'next/og'

import { OpenGraphImage } from '@/components/og-image'
import { getPageSeo } from '@/lib/contentful'
import { getRegularFont, getBoldFont } from '@/lib/fonts'
import { sharedMetadata } from '@/app/shared-metadata'

export const alt = 'Writing'
export const contentType = sharedMetadata.ogImage.type

export default async function Image() {
  const [seoData, regularFontData, boldFontData] = await Promise.all([
    getPageSeo('writing'),
    getRegularFont(),
    getBoldFont()
  ])

  const title = seoData?.seo?.title || 'Writing'
  const description = seoData?.seo?.description || 'My writings'
  const ogImageTitle = seoData?.seo?.ogImageTitle || title
  const ogImageSubtitle = seoData?.seo?.ogImageSubtitle || description

  return new ImageResponse(
    (
      <OpenGraphImage
        title={ogImageTitle}
        description={ogImageSubtitle}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
        }
        url="writing"
      />
    ),
    {
      width: sharedMetadata.ogImage.width,
      height: sharedMetadata.ogImage.height,
      fonts: [
        {
          name: 'Geist Sans',
          data: regularFontData,
          style: 'normal',
          weight: 400
        },
        {
          name: 'Geist Sans',
          data: boldFontData,
          style: 'normal',
          weight: 500
        }
      ]
    }
  )
}
