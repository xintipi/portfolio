import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

import { Favicon, favicon } from '@/data/favicon'

export default function Document(props: { __NEXT_DATA__: { locale: string } }) {
  return (
    <Html dir={props.__NEXT_DATA__.locale === 'en' ? 'ltr' : 'rtl'}>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://i.ibb.co/58BpJgP/favicon-16.png"
        />
        <link
          rel="applue-touch-icon"
          type="image/png"
          sizes="180x180"
          href="https://i.ibb.co/25ZVR47/apple-touch-icon-180.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
