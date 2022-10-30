// pages/server-sitemap.xml/index.tsx

import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getServerSideSitemap, ISitemapField } from 'next-sitemap'

import { posts } from '@/data/posts'
import { works } from '@/data/works'

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  const fields: ISitemapField[] = posts.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN}blog/${item.slug}`,
    lastmod: new Date().toISOString(),
  }))

  works.map((item) => {
    fields.push({
      loc: `${process.env.NEXT_PUBLIC_DOMAIN}works/${item.slug}`,
      lastmod: new Date().toISOString(),
    })
  })

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {}
