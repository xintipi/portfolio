import '@/styles/index.scss'
import 'tippy.js/dist/tippy.css'

import type { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'

import { ThemeProvider } from '@/hooks/useTheme'
import { Store, store } from '@/store'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store as Store}>
      <ThemeProvider>
        <Head>
          <link type="image/png" sizes="16x16" rel="icon" href="/favicon-16.png" />
          <link type="image/png" sizes="32x32" rel="icon" href="/favicon-32.png" />
          <link type="image/png" sizes="96x96" rel="icon" href="/favicon-96.png" />
          <link type="image/png" sizes="120x120" rel="icon" href="/favicon-120.png" />

          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="57x57"
            href="/apple-touch-icon-57.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="60x60"
            href="/apple-touch-icon-60.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="72x72"
            href="/apple-touch-icon-72.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="76x76"
            href="/apple-touch-icon-76.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="114x114"
            href="/apple-touch-icon-114.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="120x120"
            href="/apple-touch-icon-120.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="144x144"
            href="/apple-touch-icon-144.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="152x152"
            href="/apple-touch-icon-152.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="180x180"
            href="/apple-touch-icon-180.png"
          />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
