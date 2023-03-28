import { Manrope } from 'next/font/google'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'

const defaultFont = Manrope({ subsets: ['latin'] })

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={defaultFont.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
