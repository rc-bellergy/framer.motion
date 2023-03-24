import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useState, useRef } from 'react'
import MenuToggle from '@/components/MenuToggle'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  const containerRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Head>
        <title>My First Page</title>
      </Head>
      <main className={styles.main} ref={containerRef}>
        <MenuToggle
          toggle={() => toggle()}
          isOpen={isOpen}
          extendHeight={300}
        />
        <section className={styles.description}>
          <h1>Framer.Motion Testing</h1>
          <h3>A Zoom Menu Toggle</h3>
          <a href='https://www.framer.com/motion/examples/#variants'>
            Reference
          </a>
        </section>
      </main>
    </>
  )
}
