import { ImageResponse } from 'next/og'

import { OpenGraphImage } from '@/components/og-image'
import { getPageSeo } from '@/lib/contentful'
import { getRegularFont, getBoldFont } from '@/lib/fonts'
import { sharedMetadata } from '@/app/shared-metadata'

export const alt = 'Journey'
export const contentType = sharedMetadata.ogImage.type

export default async function Image() {
  const [seoData, regularFontData, boldFontData] = await Promise.all([
    getPageSeo('journey'),
    getRegularFont(),
    getBoldFont()
  ])

  const title = seoData?.seo?.title || 'Journey'
  const description = seoData?.seo?.description || 'My journey'
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
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
          </svg>
        }
        url="journey"
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
