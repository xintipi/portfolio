import '@/styles/index.scss'
import 'react-tippy/dist/tippy.css'

import type { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'

import { ThemeProvider } from '@/hooks/useTheme'
import { Store, store } from '@/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store as Store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
