import { GetStaticProps } from 'next'
import { FC } from 'react'

import HeroSection from '@/components/partials/HeroSection'
import { social, SocialObject } from '@/data/social'
import Layout from '@/layouts/Layout'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      social,
    },
  }
}

const Home: FC<{ social: SocialObject[] }> = ({ social }) => {
  return (
    <Layout
      title="Home"
      desciption="Hi, I am Nguyen Huu Trung, I am a frontend developer. I work from Ho Chi Minh city, Vietnam."
      keywords="Nguyen Huu Trung, Xintipi, Frontend Developer, Mail me">
      {/*<HeroSection content={social} />*/}
    </Layout>
  )
}

export default Home
