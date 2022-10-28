import '@/styles/index.scss'
import 'react-tippy/dist/tippy.css'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { NextSeo, SocialProfileJsonLd } from 'next-seo'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'

import { ThemeProvider } from '@/hooks/useTheme'
import { Store, store } from '@/store'

import * as ga from '../lib/ga'

function MyApp({ Component, pageProps }: AppProps) {
  const { query, events } = useRouter()
  const lang = query.lang === 'vi' ? 'vi' : 'en'

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url)
    }

    events.on('routeChangeComplete', handleRouteChange)

    return () => {
      events.off('routeChangeComplete', handleRouteChange)
    }
  }, [events])

  return (
    <Provider store={store as Store}>
      {/*Social profile json*/}
      <SocialProfileJsonLd
        key="social-profile"
        type="Person"
        name="Nguyen Huu Trung"
        url={`${process.env.NEXT_PUBLIC_DOMAIN}`}
        sameAs={[
          'https://www.facebook.com/huutrung.mmt',
          'https://www.instagram.com/n.h.trung_xinn/',
          'https://www.linkedin.com/in/nguy%E1%BB%85n-h%E1%BB%AFu-trung-75859621a/',
        ]}
      />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
