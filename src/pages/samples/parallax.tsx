// Reference: https://www.framer.com/templates/hellostudio/

import Head from 'next/head'
import Image from 'next/image'
import { useScroll } from 'framer-motion'
import styles from './parallax.module.css'
import dummyImage01 from '/public/images/01.jpg'
import dummyImage02 from '/public/images/02.webp'
import dummyImage03 from '/public/images/03.webp'
import dummyImage04 from '/public/images/04.webp'
import Parallax from '@/components/Parallax'

export default function ParallaxPage () {
  return (
    <>
      <Head>
        <title>Parallax Page</title>
      </Head>
      <section className='flex flex-col bg-black'>
        <div className={styles.frame}>
          <div className='flex flex-col justify-end h-full p-10 bg-slate-900'>
            <h1>HelloParalax</h1>
            <h2 className='pt-3 font-thin'>
              You have to think up class names all the time — nothing will slow
              you down or drain your energy like coming up with a class name for
              something that doesn’t deserve to be named.
            </h2>
          </div>
        </div>

        <div className={styles.frame}>
          <div className='basis-full'>
            <Parallax offset={80}>
              <Image src={dummyImage01} alt='dummy image 01' />
            </Parallax>
          </div>
        </div>

        <div className={`flex flex-row ${styles.frame}`}>
          <div
            className='flex flex-col justify-end h-full 
            bg-slate-900 text-white p-10 
              basis-1/2'
          >
            <h1 className='font-thin'>
              This is most commonly used to remove a border radius that was
              applied at a smaller breakpoint.
            </h1>
          </div>
          <div className='basis-1/2'>
            <Parallax offset={80}>
              <Image src={dummyImage02} alt='dummy image 02' />
            </Parallax>
          </div>
        </div>

        <div className={styles.frame}>
          <div className='bg-slate-500 h-full'>
            <h1>Parallax</h1>
          </div>
        </div>

        <div className={styles.frame}>
          <Parallax offset={80}>
            <Image src={dummyImage03} alt='dummy image 03' />
          </Parallax>
        </div>
      </section>
    </>
  )
}
