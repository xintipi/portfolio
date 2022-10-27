import '@/styles/index.scss'
import 'react-tippy/dist/tippy.css'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'

import { ThemeProvider } from '@/hooks/useTheme'
import { Store, store } from '@/store'

function MyApp({ Component, pageProps }: AppProps) {
  const { query, pathname } = useRouter()
  const lang = query.lang === 'vi' ? 'vi' : 'en'

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

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
