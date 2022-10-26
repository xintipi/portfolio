import { GetServerSideProps } from 'next'
import absoluteUrl from 'next-absolute-url'
import { FC } from 'react'

import HeroSection from '@/components/partials/HeroSection'
import { social, SocialObject } from '@/data/social'
import { HostProps } from '@/interface/host.interface'
import Layout from '@/layouts/Layout'

type Props = HostProps & {
  social: SocialObject[]
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { origin } = absoluteUrl(req)
  return {
    props: {
      host: `${origin}${req.url}`,
      social,
    },
  }
}

const Home: FC<Props> = ({ host, social }) => {
  return (
    <Layout
      host={host as string}
      title="Home"
      desciption="Hi, I am Nguyen Huu Trung, I am a frontend developer. I work from Ho Chi Minh city, Vietnam.">
      <HeroSection content={social} />
    </Layout>
  )
}

export default Home
