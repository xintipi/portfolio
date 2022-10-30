// pages/server-sitemap.xml/index.tsx

import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getServerSideSitemap, ISitemapField } from 'next-sitemap'

import { posts } from '@/data/posts'

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  const fields: ISitemapField[] = posts.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN}blog/${item.slug}`,
    lastmod: new Date().toISOString(),
    priority: 0.7,
    changefreq: 'daily',
  }))

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {}
