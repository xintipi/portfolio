import type { NextPage } from 'next'
import { GetStaticProps } from 'next'

import HeroSection from '@/components/partials/HeroSection'
import { social, SocialObject } from '@/data/social'
import Layout from '@/layouts/Layout'

// @ts-ignore
const Home: NextPage = ({ social }: { social: SocialObject[] }) => {
  return (
    <Layout
      title="Home"
      desciption="Hi, I am Nguyen Huu Trung, I am a frontend developer. I work from Ho Chi Minh city, Vietnam.">
      <HeroSection content={social} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      social,
    },
  }
}

export default Home
