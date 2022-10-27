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
          {/*Browser favicons - 16x16*/}
          {/*Taskbar shortcut icons – 32x32*/}
          {/*Desktop shortcut icons – 96x96*/}
          {/*Apple touch icons – 180x180*/}
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
          <script
            defer
            data-domain="portfolio-xintipi.vercel.app"
            src="https://plausible.io/js/plausible.js"
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
