import Head from 'next/head'
import React, { FC, ReactNode } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import ScrollToTop from 'react-scroll-to-top'

import Header from '@/layouts/Header'

interface Props {
  title?: string
  desciption?: string
  keywords?: string
  children: ReactNode
}

const Layout: FC<Props> = ({ children, title, desciption, keywords }) => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Xintipi'
  const pageTitle = title ? `${title} - ${appName}` : appName

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={desciption} />
        <meta name="keywords" content={keywords} />
      </Head>

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
