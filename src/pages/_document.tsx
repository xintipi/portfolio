import Document, {
  DocumentContext,
  DocumentInitialProps,
  DocumentProps,
  Html,
  Main,
  NextScript,
} from 'next/document'
import React from 'react'

import DocumentHead from '@/components/shared/DocumentHead'
import { GA_TRACKING_ID } from '@/lib/analytics'

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
        <DocumentHead>
          <link rel="stylesheet" href={`${process.env.NEXT_PUBLIC_DOMAIN}/style/nprogress.css`} />
          <link rel="shortcut icon" href="https://i.ibb.co/58BpJgP/favicon-16.png" />
          <link rel="apple-touch-icon" href="https://i.ibb.co/25ZVR47/apple-touch-icon-180.png" />

          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
            }}
          />
        </DocumentHead>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
