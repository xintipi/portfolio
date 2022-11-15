import Document, {
  DocumentContext,
  DocumentInitialProps,
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import React from 'react'

type Props = DocumentInitialProps & {
  lang: string
}

class MyDocument extends Document<DocumentProps | unknown> {
  static async getInitialProps(ctx: DocumentContext): Promise<Props> {
    const originalRenderPage = ctx.renderPage
    const initialProps = await Document.getInitialProps(ctx)
    const { query } = ctx
    const lang = query.lang === 'vi' ? 'vi' : 'en'

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => <App {...props} />,
        })
    } catch (error) {
      console.log(error)
    }
    return {
      ...initialProps,
      lang,
      styles: <>{initialProps.styles}</>,
    }
  }

  render() {
    // @ts-ignore
    const { lang } = this.props
    return (
      <Html dir={lang === 'en' ? 'ltr' : 'rtl'}>
        <Head>
          <link rel="shortcut icon" href="https://i.ibb.co/58BpJgP/favicon-16.png" />
          <link rel="apple-touch-icon" href="https://i.ibb.co/25ZVR47/apple-touch-icon-180.png" />
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
