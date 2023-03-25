import Head from 'next/head'
import Link from 'next/link'

export default function Home () {
  return (
    <>
      <Head>
        <title>Framer Motion Sample Pages</title>
      </Head>

      <section className='p-10'>
        <h1>Framer Motion Samples</h1>
        <ul>
          <li>
            <Link href='/samples/animated_modile_menu'>
              Animated Mobile Menu
            </Link>
          </li>
          <li>
            <Link href='/samples/stagger'>stagger</Link>
          </li>
        </ul>
      </section>
    </>
  )
}
