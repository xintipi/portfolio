import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

import { Favicon, favicon } from '@/data/favicon'

export default function Document(props: { lang: string }) {
  const { lang } = props
  return (
    <Html lang={lang}>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://i.ibb.co/58BpJgP/favicon-16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://i.ibb.co/VqNBMxR/favicon-32.png"
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

export async function getInitialProps(ctx: { pathname: never }) {
  const initialProps = await Document.getInitialProps(ctx)
  const { pathname } = ctx
  const lang = pathname.startsWith('/vi') ? 'vi' : 'en'
  return { ...initialProps, lang }
}
