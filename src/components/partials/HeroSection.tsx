import Tippy from '@tippyjs/react'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import Typed from 'react-typed'

import styles from '@/styles/modules/Button.module.scss'

import HeroBackground from './HeroBackground'

const HeroSection = () => {
  return (
    <div className="hero relative -mt-16 flex items-center justify-center">
      <HeroBackground />
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-full">
          <Image src="/images/avatar/avatar-3.png" width={180} height={180} alt="avatar" />
        </div>
        <h1 className="mt-4 text-3xl font-bold ">Nguyen Huu Trung</h1>
        <div className="mt-2 flex gap-1">
          {' '}
          I'm a <Typed strings={['Frontend Developer']} typeSpeed={70} backSpeed={40} loop />
        </div>
        <div className="mt-4 flex gap-5">
          <Tippy content="Instagram">
            <a
              href="https://www.instagram.com/n.h.trung_xinn/"
              target="_blank"
              className="cursor-pointer text-gray-700 transition-colors duration-150 hover:text-primary-500 dark:text-primary-500"
              rel="noreferrer">
              <FiInstagram size={25} />
            </a>
          </Tippy>
          <Tippy content="Facebook">
            <a
              href="https://www.facebook.com/huutrung.mmt/"
              target="_blank"
              className="cursor-pointer text-gray-700 transition-colors duration-150 hover:text-primary-500 dark:text-primary-500"
              rel="noreferrer">
              <FiFacebook size={25} />
            </a>
          </Tippy>
          <Tippy content="Linkedin">
            <a
              href="https://www.linkedin.com/in/nguy%E1%BB%85n-h%E1%BB%AFu-trung-75859621a/"
              target="_blank"
              className="cursor-pointer text-gray-700 transition-colors duration-150 hover:text-primary-500 dark:text-primary-500"
              rel="noreferrer">
              <FiLinkedin size={25} />
            </a>
          </Tippy>
          <Tippy content="Github">
            <a
              href="https://github.com/xintipi"
              target="_blank"
              className="cursor-pointer text-gray-700 transition-colors duration-150 hover:text-primary-500 dark:text-primary-500"
              rel="noreferrer">
              <FiGithub size={25} />
            </a>
          </Tippy>
        </div>
        <a
          className={clsx([styles.btn, 'mt-5 px-8'])}
          href="mailto:huutrung.mmt@gmail.com"
          target="_blank"
          rel="noreferrer">
          Mail me
        </a>
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
