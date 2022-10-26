import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

import { Favicon, favicon } from '@/data/favicon'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" key="charSet" />
        <meta name="viewport" content="width=device-width" key="viewport" />
        <meta name="robots" content="noindex" />
        {favicon.icon.map((link: Favicon) => (
          <link
            key={link.href}
            type={link.type}
            sizes={link.sizes}
            rel={link.rel}
            href={link.href}
          />
        ))}
        {favicon.appleIcon.map((link: Favicon) => (
          <link
            key={link.href}
            type={link.type}
            sizes={link.sizes}
            rel={link.rel}
            href={link.href}
          />
        ))}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
