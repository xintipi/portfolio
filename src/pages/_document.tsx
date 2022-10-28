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
          {/*Social profile json*/}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
                "@context":"https://schema.org",
                "@type":"Person",
                "name":"Nguyen Huu Trung",
                "url":"${process.env.NEXT_PUBLIC_DOMAIN}",
                "sameAs":[
                  "https://www.facebook.com/huutrung.mmt",
                  "https://www.instagram.com/n.h.trung_xinn/",
                  "https://www.linkedin.com/in/nguy%E1%BB%85n-h%E1%BB%AFu-trung-75859621a/"
                  ]
              `,
            }}
          />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `,
            }}
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
