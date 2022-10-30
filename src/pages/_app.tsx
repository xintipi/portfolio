import '@/styles/index.scss'
import 'react-tippy/dist/tippy.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { SocialProfileJsonLd } from 'next-seo'
import NProgress from 'nprogress'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'

import { ThemeProvider } from '@/hooks/useTheme'
import * as ga from '@/lib/analytics'
import { Store, store } from '@/store'

NProgress.configure({ showSpinner: false })

function MyApp({ Component, pageProps }: AppProps) {
  const { query, events } = useRouter()
  const lang = query.lang === 'vi' ? 'vi' : 'en'

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url)
      NProgress.done()
    }

    events.on('routeChangeStart', () => NProgress.start())
    events.on('routeChangeComplete', handleRouteChange)
    events.on('routeChangeError', () => NProgress.done())

    return () => {
      events.off('routeChangeComplete', handleRouteChange)
    }
  }, [events])

  return (
    <Provider store={store as Store}>
      <Head>
        <link rel="stylesheet" href={`${process.env.NEXT_PUBLIC_DOMAIN}/style/nprogress.css`} />
        <link rel="icon" href="https://i.ibb.co/58BpJgP/favicon-16.png" />
        <link rel="apple-touch-icon" href="https://i.ibb.co/25ZVR47/apple-touch-icon-180.png" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
