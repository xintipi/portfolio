import { GetStaticProps } from 'next'
import { FC } from 'react'

import HeroSection from '@/components/partials/HeroSection'
import { social, SocialObject } from '@/data/social'
import { HostProps } from '@/interface/host.interface'
import Layout from '@/layouts/Layout'

const Home: FC<{ social: SocialObject[] }> = ({ social }) => {
  return (
    <Layout
      title="Home"
      desciption="Hi, I am Nguyen Huu Trung, I am a frontend developer. I work from Ho Chi Minh city, Vietnam.">
      <HeroSection />
    </Layout>
  )
}

export default Home
