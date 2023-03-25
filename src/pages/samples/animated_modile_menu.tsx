// Animated mobile menu
// https://codesandbox.io/s/framer-motion-side-menu-mx2rw?from-embed

import Head from 'next/head'
import { useState, useRef } from 'react'
import MenuToggle from '@/components/MenuToggle'
import styles from '@/styles/animated_modile_menu.module.css'

export default function AnimatedMobileMenu () {
  const containerRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Head>
        <title>Animated Mobile Menu</title>
      </Head>
      <main className={styles.main} ref={containerRef}>
        <MenuToggle
          toggle={() => toggle()}
          isOpen={isOpen}
          extendHeight={300}
        />
        <section className={styles.description}>
          <h1 className='pt-5'>Animated Mobile Menu</h1>
          <a href='https://www.framer.com/motion/examples/#variants'>
            Open original Sendbox
          </a>
        </section>
      </main>
    </>
  )
}
