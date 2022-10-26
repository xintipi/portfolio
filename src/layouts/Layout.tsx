import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import ScrollToTop from 'react-scroll-to-top'

import Menu from '@/components/partials/Menu'

interface Props {
  title?: string
  desciption?: string
  children: ReactNode
}

const Layout: FC<Props> = ({ children, title, desciption }) => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME
  const pageTitle = title ? `${title} - ${appName}` : appName

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="description" content={desciption} />
        <title>{pageTitle}</title>
      </Head>

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
        <Menu />
        <div className="mt-16">{children}</div>
      </div>
    </>
  )
}

export default Layout
