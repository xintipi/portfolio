import '@/styles/index.scss'
import 'react-tippy/dist/tippy.css'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import NextNProgress from 'nextjs-progressbar'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'

import { ThemeProvider } from '@/hooks/useTheme'
// import * as ga from '@/lib/analytics'
import { Store, store } from '@/store'

function MyApp({ Component, pageProps }: AppProps) {
  const { query } = useRouter()
  const lang = query.lang === 'vi' ? 'vi' : 'en'

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <>
      <NextNProgress color="rgb(230, 68, 86)" height={3} options={{ showSpinner: false }} />
      <GoogleAnalytics
        trackPageViews
        strategy="lazyOnload"
        gaMeasurementId={process.env.NEXT_PUBLIC_GA_TRACKING_ID}
      />
      <Provider store={store as Store}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default MyApp
