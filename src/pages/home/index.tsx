import { GetStaticProps } from 'next'
import { SocialProfileJsonLd } from 'next-seo'
import { FC, Fragment } from 'react'

import AboutSection from '@/components/partials/AboutSection'
import HeroSection from '@/components/partials/HeroSection'
import { AboutMeInterface } from '@/interface/aboutMe.interface'
import { SocialInterface } from '@/interface/social.interface'
import Layout from '@/layouts/Layout'
import { getAboutMe } from '@/utils/about-me'
import { readData } from '@/utils/read-data'

type Props = {
  socials: SocialInterface[]
  about: AboutMeInterface[]
}

const Home: FC<Props> = ({ socials, about }) => {
  return (
    <Fragment>
      <Layout
        title="XIN - Developer"
        description="Frontend Developer, UI Designer, and Open Source Advocate.">
        <HeroSection socials={socials} />

        <section className="container pt-20 pb-10">
          <AboutSection about={about[0].description} />
        </section>
      </Layout>
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { socials } = await readData<Props>('src/data/socials.json')
  const about = await getAboutMe()

  const props: Props = {
    socials,
    about,
  }

  return {
    props,
  }
}

export default Home
