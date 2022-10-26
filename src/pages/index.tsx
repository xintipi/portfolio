import type { NextPage } from 'next'

import HeroSection from '@/components/partials/HeroSection'
import Layout from '@/layouts/Layout'

const Home: NextPage = () => {
  return (
    <Layout
      title="Home"
      desciption="Hi, I am Nguyen Huu Trung, I am a frontend developer. I work from Ho Chi Minh city, Vietnam.">
      <HeroSection />
    </Layout>
  )
}

export default Home
