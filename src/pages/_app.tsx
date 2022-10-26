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
        {/*<Head>*/}
        {/*  {favicon.icon.map((link: Favicon) => (*/}
        {/*    <link*/}
        {/*      key={link.href}*/}
        {/*      type={link.type}*/}
        {/*      sizes={link.sizes}*/}
        {/*      rel={link.rel}*/}
        {/*      href={link.href}*/}
        {/*    />*/}
        {/*  ))}*/}
        {/*  {favicon.appleIcon.map((link: Favicon) => (*/}
        {/*    <link*/}
        {/*      key={link.href}*/}
        {/*      type={link.type}*/}
        {/*      sizes={link.sizes}*/}
        {/*      rel={link.rel}*/}
        {/*      href={link.href}*/}
        {/*    />*/}
        {/*  ))}*/}
        {/*</Head>*/}
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
