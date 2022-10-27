import '@/styles/index.scss'
import 'react-tippy/dist/tippy.css'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'

import { ThemeProvider } from '@/hooks/useTheme'
import { Store, store } from '@/store'

import * as ga from '../lib/ga'

function MyApp({ Component, pageProps }: AppProps) {
  const { query, pathname, events } = useRouter()
  const lang = query.lang === 'vi' ? 'vi' : 'en'

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      events.off('routeChangeComplete', handleRouteChange)
    }
  }, [events])

  return (
    <Provider store={store as Store}>
      {pathname !== '/blog/[slug]' && (
        <NextSeo
          openGraph={{
            url: process.env.NEXT_PUBLIC_DOMAIN,
            description:
              'Frontend Developer, Nguyen Huu Trung, Ho Chi Minh, Viet Nam, nickname Xintipi and Hire me.',
            locale: lang === 'en' ? 'en_US' : 'vi_VN',
            images: [
              {
                url: process.env.NEXT_PUBLIC_DOMAIN + 'images/avatar/me.webp',
                width: 1024,
                height: 1024,
                alt: 'Nguyen Huu Trung',
                type: 'image/webp',
              },
            ],
          }}
        />
      )}
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
