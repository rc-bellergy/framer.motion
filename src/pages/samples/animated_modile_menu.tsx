// Animated mobile menu
// https://codesandbox.io/s/framer-motion-side-menu-mx2rw?from-embed

import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useAnimate, stagger, motion } from 'framer-motion'

import MenuToggle from '@/components/MenuToggle'
import styles from './animated_modile_menu.module.css'

export default function AnimatedMobileMenu () {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const [scope, animate] = useAnimate()
  useEffect(() => {
    animate(
      '.menu-item',
      isOpen
        ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
        : { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
      {
        duration: 0.2,
        delay: isOpen ? stagger(0.1, { startDelay: 0.15 }) : 0
      }
    )
  })

  return (
    <>
      <Head>
        <title>Animated Mobile Menu Page</title>
      </Head>
      <main className={styles.main}>
        <MenuToggle
          toggle={() => toggle()}
          isOpen={isOpen}
          extendHeight={300}
          corner='rt'
        >
          <ul
            ref={scope}
            className='absolute my-16 space-y-8 
            flex flex-col w-full pl-5'
          >
            <MenuItem href='#'>Process Mining</MenuItem>
            <MenuItem href='#'>Solutions</MenuItem>
            <MenuItem href='#'>Careers</MenuItem>
            <MenuItem href='#'>Company</MenuItem>
            <MenuItem href='#'>Resources</MenuItem>
          </ul>
        </MenuToggle>
        <section className={styles.description}>
          <h2 className='pt-5 text-center'>
            Animated Mobile Menu
            <br />
            Testing Page
          </h2>
          <a
            className='pt-3'
            href='https://www.framer.com/motion/examples/#variants'
            target='_blank'
          >
            Open original Sendbox
          </a>
        </section>
      </main>
    </>
  )
}

interface MenuItemProps {
  children?: React.ReactNode
  href?: string
}

function MenuItem ({ children, href }: MenuItemProps) {
  return (
    <li className='text-4xl font-light menu-item'>
      <a className='text-white cursor-pointer' href={href}>
        {children}
      </a>
    </li>
  )
}
