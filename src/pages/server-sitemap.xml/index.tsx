// pages/server-sitemap.xml/index.tsx

import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getServerSideSitemap, ISitemapField } from 'next-sitemap'

import { posts } from '@/data/posts'
import { works } from '@/data/works'
import { PostInterface } from '@/interface/post.interface'
import { WorkInterface } from '@/interface/work.interface'

interface Slugwise {
  slug: string
}

function escapeHtml(text: string) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }

  return text.replace(/[&<>"']/g, (m) => {
    return map[m as keyof typeof map]
  })
}

function mapFields<T extends Slugwise>(data: T[], pathname: string): ISitemapField[] {
  return data.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN}/${pathname}/${escapeHtml(item.slug)}`,
    lastmod: new Date().toISOString(),
    priority: 0.7,
    changefreq: 'daily',
  }))
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  const fieldPosts = mapFields<PostInterface>(posts, 'blog')
  const fieldWorks = mapFields<WorkInterface>(works, 'works')

  return getServerSideSitemap(ctx, [...fieldPosts, ...fieldWorks])
}

// Default export to prevent next.js errors
export default function Sitemap() {}
