import Head from 'next/head'
import { NextSeo } from 'next-seo'
import React, { FC, ReactNode } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import ScrollToTop from 'react-scroll-to-top'

import Header from '@/layouts/Header'

interface Props {
  title?: string
  desciption?: string
  children: ReactNode
}

const Layout: FC<Props> = ({ children, title, desciption }) => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Xintipi'
  const pageTitle = title ? `${title} - ${appName}` : appName

  return (
    <>
      <NextSeo title={pageTitle} description={desciption} />

      <Header />

      <div className="flex min-h-screen flex-col">
        <ScrollToTop
          className="scroll-top"
          component={
            <div className="flex justify-center">
              <FiArrowUp />
            </div>
          }
          smooth
        />

        <div className="mt-16">{children}</div>
      </div>
    </>
  )
}

export default Layout
