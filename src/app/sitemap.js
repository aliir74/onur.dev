import { getAllPosts, getAllPageSlugs } from '@/lib/contentful'
import { getBookmarks } from '@/lib/raindrop'
import { getSortedPosts } from '@/lib/utils'
import { BASE_URL } from '@/constants'
export default async function sitemap() {
  const [allPosts, bookmarks, allPages] = await Promise.all([getAllPosts(), getBookmarks(), getAllPageSlugs()])

  const sortedWritings = getSortedPosts(allPosts)
  const writings = sortedWritings.map((post) => {
    return {
      url: `${BASE_URL}/writing/${post.slug}`,
      lastModified: post.sys.publishedAt,
      changeFrequency: 'yearly',
      priority: 0.5
    }
  })

  const pages = allPages.map((page) => {
    let changeFrequency = 'yearly'
    if (['writing', 'journey'].includes(page.slug)) changeFrequency = 'monthly'

    let lastModified = page.sys.publishedAt
    if (['writing', 'journey'].includes(page.slug)) lastModified = new Date()

    let priority = 0.5
    if (['writing', 'journey'].includes(page.slug)) priority = 0.8

    return {
      url: `${BASE_URL}/${page.slug}`,
      lastModified,
      changeFrequency,
      priority
    }
  })

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    ...pages,
    ...writings
  ]
}
