import { Html, Main, NextScript, Head } from 'next/document'
import Footer from '@/pages/snippets/Footer'

export default function Document () {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
