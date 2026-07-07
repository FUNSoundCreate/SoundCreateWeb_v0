import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Cloudflareで設定した「wwwあり」のドメインを指定してください
  const baseUrl = 'https://www.soundcreate.org' 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/member`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/release`,
      lastModified: new Date(),
      changeFrequency: 'weekly', // 更新頻度が高いならweekly、低ければmonthlyでOK
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...(await getAllPosts()).map((post) => ({
      url: `${baseUrl}/news/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}