import { GetServerSideProps } from 'next'
import absoluteUrl from 'next-absolute-url'
import { FC } from 'react'

import { HostProps } from '@/interface/host.interface'
import Layout from '@/layouts/Layout'

type Props = HostProps

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { origin } = absoluteUrl(req)
  return {
    props: {
      host: `${origin}${req.url}`,
    },
  }
}

const Blog: FC<Props> = ({ host }) => {
  return (
    <Layout host={host as string} title="Blog" desciption="This is my blog page">
      <div>Blog page</div>
    </Layout>
  )
}

export default Blog
