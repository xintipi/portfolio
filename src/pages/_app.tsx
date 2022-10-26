import '@/styles/index.scss'
import 'react-tippy/dist/tippy.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Provider } from 'react-redux'

import { Favicon, favicon } from '@/data/favicon'
import { ThemeProvider } from '@/hooks/useTheme'
import { Store, store } from '@/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store as Store}>
      <ThemeProvider>
        <Head>
          <meta charSet="utf-8" key="charset" />
          <meta name="viewport" content="width=device-width" key="viewport" />
          <meta name="robots" content="noindex" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
