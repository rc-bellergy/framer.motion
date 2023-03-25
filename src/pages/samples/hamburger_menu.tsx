import Head from 'next/head'
import HamburgerMenu from '@/components/HamburgerMenu'
import { useState } from 'react'

export default function NewPage () {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = (e: Event) => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Head>
        <title>Hamburger Menu Testing</title>
      </Head>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='p-20'>Hamburger Menu Testing</h1>
        <HamburgerMenu
          className='w-10 h-10'
          color='#1d4ed8'
          onClick={toggle}
          isOpen={isOpen}
        />
      </div>
    </>
  )
}
