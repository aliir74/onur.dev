import NextLink from 'next/link'
import { BASE_URL } from '@/constants'
import { isExternalLink } from '@/lib/utils'

export const Link = ({ href = '#', ...rest }) => {
  const isExternal = isExternalLink(href)
  if (isExternal) {
    return (
      <a
        href={href + `?ref=${BASE_URL}`}
        target="_blank"
        rel="noopener noreferrer"
        className="link break-words after:content-['_↗']"
        {...rest}
      />
    )
  }

  return <NextLink href={href} className="link" {...rest} />
}
