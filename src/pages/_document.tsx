import { NextPageContext } from 'next'
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  static async getInitialProps(ctx: NextPageContext) {
    const initialProps = await Document.getInitialProps(ctx as DocumentContext)
    const { query } = ctx
    const lang = query.lang === 'vi' ? 'vi' : 'en'
    return { ...initialProps, lang }
  }

  render() {
    // @ts-ignore
    const { lang } = this.props
    return (
      <Html dir={lang === 'en' ? 'ltr' : 'rtl'}>
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
}

export default MyDocument
