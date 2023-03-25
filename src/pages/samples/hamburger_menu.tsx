import Head from 'next/head'
import HamburgerMenu from '@/components/HamburgerMenu'
import { useState } from 'react'

export default function NewPage () {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = (e: Event) => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <>
      <Head>
        <title>Testing Page</title>
      </Head>
      <div className='flex items-center justify-center h-screen'>
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
