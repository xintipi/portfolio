import { GetServerSideProps } from 'next'
import { DocumentContext } from 'next/document'
import { getPlaiceholder } from 'plaiceholder'

import PageTitle from '@/components/shared/PageTitle'
import Pagination from '@/components/shared/Pagination'
import Post from '@/components/shared/Post'
import { posts } from '@/data/posts'
import { PostInterface } from '@/interface/post.interface'
import Layout from '@/layouts/Layout'
import { pageCount, PER_PAGE } from '@/utils'

type Props = {
  data: PostInterface[]
  placeholders: string[]
  page: string | number
  perPage: string | number
  totalCount: string | number
}

const Blog = (props: Props) => {
  return (
    <Layout
      title="Blog"
      description="Blog - News, pictures, LATEST BLOG or programming articles, update personal stories at Xintipi.xyz">
      <PageTitle
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Blog', path: '' },
        ]}>
        Blog
      </PageTitle>
      <div className="container py-10">
        <div className="grid gap-8 sm:gap-4 md:grid-cols-3 lg:gap-8">
          {props.data.map((post, index) => (
            <Post
              key={post.id}
              href={`/blog/${post.slug}`}
              thumbnailUrl={post.thumbnailUrl}
              title={post.title}
              publishedAt={post.publishedAt}
              placeholders={props.placeholders[index]}
            />
          ))}
        </div>
        <div className="mt-12">
          <Pagination totalCount={props.totalCount} page={props.page} perPage={props.perPage} />
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async (context: DocumentContext) => {
  const page = context.query.page || 1
  const data = posts

  // let posts = await fetch(`https://jsonplaceholder.typicode.com/posts?page=${page}`);
  // posts = await posts.json();

  const placeholders = await Promise.all(
    data.map(async (url) => {
      const { base64 } = await getPlaiceholder(url.thumbnailUrl)
      return base64
    })
  )

  const totalCount = pageCount(data.length)
  return {
    props: {
      data,
      placeholders,
      page,
      perPage: PER_PAGE,
      totalCount,
    },
  }
}

export default Blog
