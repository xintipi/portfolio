import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import absoluteUrl from 'next-absolute-url/index'
import { ArticleJsonLd } from 'next-seo'
import React, { FC, Fragment, useMemo } from 'react'
import { FiFacebook, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'

import CommentBox from '@/components/partials/CommentBox'
import RecentComment from '@/components/partials/RecentComment'
import { posts } from '@/data/posts'
import { PostInterface } from '@/interface/post.interface'
import Layout from '@/layouts/Layout'

type Props = {
  post: PostInterface
  host: string
}

const BlogSingle: FC<Props> = ({ post, host }) => {
  const openGraph = useMemo(() => {
    return {
      description: post.description,
      title: `Blog | ${process.env.NEXT_PUBLIC_APP_NAME}`,
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
    }
  }, [host])

  return (
    <Fragment>
      <ArticleJsonLd
        key={`blogJSON-${post.id}`}
        type="BlogPosting"
        url="https://example.com/blog"
        title="Blog headline"
        images={[
          'https://example.com/photos/1x1/photo.jpg',
          'https://example.com/photos/4x3/photo.jpg',
          'https://example.com/photos/16x9/photo.jpg',
        ]}
        datePublished="2015-02-05T08:00:00+08:00"
        dateModified="2015-02-05T09:00:00+08:00"
        authorName="Jane Blogs"
        description="This is a mighty good description of this blog."
      />

      <Layout
        title="Blog"
        canonical={`${host}/blog/${post.slug}`}
        description={post.description}
        openGraph={openGraph}>
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
