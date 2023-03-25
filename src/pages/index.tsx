import Head from 'next/head'
import Link from 'next/link'

export default function Home () {
  return (
    <>
      <Head>
        <title>Framer Motion Sample Pages</title>
      </Head>

      <h1>Index Page</h1>
      <ul>
        <li>
          <Link href='/animated-modile-menu'>Animated Mobile Menu</Link>
        </li>
      </ul>
    </>
  )
}
