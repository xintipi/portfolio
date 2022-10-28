import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import absoluteUrl from 'next-absolute-url/index'
import { ArticleJsonLd } from 'next-seo'
import React, { FC, Fragment, useMemo } from 'react'
import { FiFacebook, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'

import CommentBox from '@/components/partials/CommentBox'
import RecentComment from '@/components/partials/RecentComment'
import StructuredData from '@/components/partials/StructuredData'
import { posts } from '@/data/posts'
import { PostInterface } from '@/interface/post.interface'
import Layout from '@/layouts/Layout'

type Props = {
  post: PostInterface
  host: string
}

const BlogSingle: FC<Props> = ({ post, host }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'article',
    headline: post.title,
    description: post.description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_DOMAIN}blog/${post.slug}`,
    },
    author: [
      {
        '@type': 'Person',
        name: post.authorName,
        url: '',
      },
    ],
    image: [`${process.env.NEXT_PUBLIC_DOMAIN}${post.imageUrl}`],
    datePublished: post.publishedAt,
    dateModified: '',
  }

  return (
    <Fragment>
      {/*<ArticleJsonLd*/}
      {/*  key={`blogJSON-${post.id}`}*/}
      {/*  url={`${process.env.NEXT_PUBLIC_DOMAIN}blog/${post.slug}`}*/}
      {/*  title={post.title}*/}
      {/*  images={[`${process.env.NEXT_PUBLIC_DOMAIN}${post.imageUrl}`]}*/}
      {/*  datePublished={post.publishedAt}*/}
      {/*  authorName={post.authorName}*/}
      {/*  description={post.description}*/}
      {/*  isAccessibleForFree={true}*/}
      {/*/>*/}

      <StructuredData data={structuredData} />

      <Layout
        title={post.title}
        description={post.description}
        openGraph={{
          description: post.description,
          title: `${post.title} - ${process.env.NEXT_PUBLIC_APP_NAME}`,
          url: `${host}/blog/${post.slug}`,
          type: 'article',
          article: {
            publishedTime: post.publishedAt,
            tags: ['NextJS', 'ReactJS'],
          },
          images: [
            {
              url: `${host}${post.imageUrl}`,
              width: 1280,
              height: 720,
            },
          ],
        }}>
        <div className="container mb-10">
          <div className="mt-24 flex flex-col items-center justify-center">
            <h1 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 flex items-center text-gray-400">
              <span>{post.publishedAt}</span>
              <span className="mx-2 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
              <span>{post.authorName}</span>
            </p>
          </div>
          <div>
            <div className="mt-10 overflow-hidden rounded-xl">
              <Image src={post.imageUrl} height={720} width={1280} alt={post.title} />
            </div>
            <article
              className="prose mt-10 max-w-full dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: post.content }}></article>
            <div className="mt-10  flex">
              <Link href="#" legacyBehavior>
                <a>
                  <FiTwitter className="mr-3" />
                </a>
              </Link>
              <Link href="#" legacyBehavior>
                <a>
                  <FiFacebook className="mx-3" />
                </a>
              </Link>
              <Link href="#" legacyBehavior>
                <a>
                  <FiLinkedin className="mx-3" />
                </a>
              </Link>
              <Link href="#" legacyBehavior>
                <a>
                  <FiMail className="mx-3" />
                </a>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="mt-10">
                <RecentComment />
              </div>
              <div className="mt-10">
                <CommentBox />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { origin } = absoluteUrl(context.req)
  const slug = context.params?.slug as string
  const post = posts.find((post) => post.slug === slug)
  if (post) {
    return {
      props: {
        post,
        host: origin,
      },
    }
  }

  return {
    notFound: true,
  }
}

export default BlogSingle
