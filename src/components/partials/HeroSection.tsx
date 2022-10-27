import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React, { memo } from 'react'
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { Tooltip } from 'react-tippy'
import Typed from 'react-typed'

import { SocialInterface } from '@/interface/social.interface'
import styles from '@/styles/modules/Button.module.scss'

import HeroBackground from './HeroBackground'

type Props = { socials: SocialInterface[] }

const components = {
  FiInstagram: <FiInstagram size={25} />,
  FiFacebook: <FiFacebook size={25} />,
  FiLinkedin: <FiLinkedin size={25} />,
  FiGithub: <FiGithub size={25} />,
}

const HeroSection = ({ socials }: Props) => {
  return (
    <div className="hero relative -mt-16 flex items-center justify-center">
      <HeroBackground />
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-full">
          <Image
            src="/images/avatar/xin2.webp"
            width={180}
            height={180}
            alt="avatar"
            priority={process.env.NODE_ENV !== 'production'}
          />
        </div>
        <h1 className="mt-4 text-3xl font-bold ">Nguyen Huu Trung</h1>
        <div className="mt-2 flex gap-1">
          {' '}
          I'm a <Typed strings={['Frontend Developer']} typeSpeed={55} backSpeed={45} loop />
        </div>
        <div className="mt-4 flex gap-5">
          {socials.map((social: SocialInterface) => (
            <Tooltip key={social.title} title={social.title} trigger="mouseenter" animation="scale">
              <a
                href={social.href}
                target="_blank"
                className="cursor-pointer text-gray-700 transition-colors duration-150 hover:text-primary-500 dark:text-primary-500"
                aria-label={social.title}
                rel="noreferrer">
                {components[social.icon as keyof typeof components]}
              </a>
            </Tooltip>
          ))}
        </div>
        <Link href="https://xintipi.github.io" legacyBehavior>
          <a className={clsx([styles.btn, 'mt-5 px-8'])} target="_blank" rel="noreferrer">
            Hire me
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

export default memo(HeroSection)
