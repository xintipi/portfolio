import { GetStaticProps } from 'next'
import React, { FC, useMemo } from 'react'

import AboutSection from '@/components/partials/AboutSection'
import ExperienceSection from '@/components/partials/ExperienceSection'
import HeroSection from '@/components/partials/HeroSection'
import RecentWorkSection from '@/components/partials/RecentWorkSection'
import { AboutMeInterface } from '@/interface/aboutMe.interface'
import { SocialInterface } from '@/interface/social.interface'
import Layout from '@/layouts/Layout'
import { getAboutMe } from '@/utils/about-me'
import { readData } from '@/utils/read-data'

export type SocialProps = {
  socials: SocialInterface[]
  about: AboutMeInterface[]
}

const Index: FC<SocialProps> = ({ socials, about }) => {
  const openGraph = useMemo(() => {
    return {
      title: 'XIN Developer',
      description: 'Frontend Developer, UI Designer, and Open Source Advocate.',
      url: process.env.NEXT_PUBLIC_DOMAIN,
      type: 'profile',
      profile: {
        firstName: 'Trung',
        lastName: 'Nguyen Huu',
        gender: 'male',
      },
      images: [
        {
          url: process.env.NEXT_PUBLIC_DOMAIN + '/images/avatar/me.webp',
          width: 1024,
          height: 1024,
          alt: 'Profile photo',
        },
      ],
    }
  }, [])

  return (
    <>
      <Layout
        title="XIN Developer"
        description="Frontend Developer, UI Designer, and Open Source Advocate."
        openGraph={openGraph}>
        <HeroSection socials={socials} />
        <section className="container pt-20 pb-10">
          <AboutSection about={about[0].description} />
        </section>
        <section className="container py-16">
          <ExperienceSection />
        </section>
        <section className="container py-16">
          <RecentWorkSection />
        </section>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<SocialProps> = async () => {
  const { socials } = await readData<SocialProps>('src/data/socials.json')
  const about = await getAboutMe()

  const props: SocialProps = {
    socials,
    about,
  }

  return {
    props,
  }
}

export default Index
