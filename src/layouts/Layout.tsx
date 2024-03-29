import { NextSeo } from 'next-seo'
import { OpenGraph } from 'next-seo/lib/types'
import React, { FC, ReactNode } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import ScrollToTop from 'react-scroll-to-top'

import Footer from '@/components/partials/Footer'
import Header from '@/layouts/Header'

interface Props {
  title?: string
  description?: string
  canonical?: string
  children: ReactNode
  openGraph?: OpenGraph
}

const Layout: FC<Props> = ({ children, title, description, canonical, openGraph }) => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME
  const pageTitle = title ? `${title} - ${appName}` : appName

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={description}
        canonical={canonical}
        openGraph={openGraph}
      />

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

        <Footer />
      </div>
    </>
  )
}

export default Layout
