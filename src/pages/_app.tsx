import '@/styles/index.scss'
import 'react-tippy/dist/tippy.css'

import type { AppProps } from 'next/app'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar'
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'

import GoogleAnalytics from '@/components/partials/GoogleAnalytics'
import { ThemeProvider } from '@/hooks/useTheme'
import { Store, store } from '@/store'

function MyApp({ Component, pageProps }: AppProps) {
  const [pageTitle, setPageTitle] = useState<string>('')
  const pathname = usePathname()
  const { query } = useRouter()
  const lang = query.lang === 'vi' ? 'vi' : 'en'

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    if (document.title) {
      const [title, _generalTitle] = document.title.split('-')
      setPageTitle(title)
    }
  }, [pathname])

  return (
    <>
      <GoogleAnalytics pageTitle={pageTitle} />

      <NextNProgress color="rgb(230, 68, 86)" height={3} options={{ showSpinner: false }} />

      <Provider store={store as Store}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default MyApp
