import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { Tooltip } from 'react-tippy'
import Typed from 'react-typed'

import { SocialObject } from '@/data/social'
import styles from '@/styles/modules/Button.module.scss'

import HeroBackground from './HeroBackground'

type ContentProps = { content: SocialObject[] }

const HeroSection = () => {
  const components = {
    FiInstagram: <FiInstagram size={25} />,
    FiFacebook: <FiFacebook size={25} />,
    FiLinkedin: <FiLinkedin size={25} />,
    FiGithub: <FiGithub size={25} />,
  }

  return (
    <div className="hero relative -mt-16 flex items-center justify-center">
      <HeroBackground />
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-full">
          <Image src="/images/avatar/avatar-3.png" width={180} height={180} alt="avatar" priority />
        </div>
        <h1 className="mt-4 text-3xl font-bold ">Nguyen Huu Trung</h1>
        <div className="mt-2 flex gap-1">
          {' '}
          I'm a <Typed strings={['Frontend Developer']} typeSpeed={55} backSpeed={45} loop />
        </div>
        <Link href="mailto:huutrung.mmt@gmail.com" legacyBehavior>
          <a className={clsx([styles.btn, 'mt-5 px-8'])} target="_blank" rel="noreferrer">
            Mail me
          </a>
        </Link>
      </div>

      <div className="absolute bottom-0 flex flex-col items-center ">
        <p className="mb-3 text-sm">Scroll Down</p>
        <div className="relative flex h-7 w-5 justify-center rounded-full border-2 border-gray-600 dark:border-gray-100">
          <div className="animate-scroll absolute top-[6px] h-1 w-1 bg-gray-600 dark:bg-gray-100"></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
