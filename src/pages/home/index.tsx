import HeroSection from '@/components/partials/HeroSection'
import { social } from '@/data/social'
import Layout from '@/layouts/Layout'

const Home = () => {
  return (
    <Layout
      title="Home"
      desciption="Hi, I am Nguyen Huu Trung, I am a frontend developer. I work from Ho Chi Minh city, Vietnam."
      keywords="Nguyen Huu Trung, Xintipi, Frontend Developer, Mail me">
      <HeroSection content={social} />
    </Layout>
  )
}

export default Home
