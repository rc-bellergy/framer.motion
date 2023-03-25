/* https://www.framer.com/motion/stagger/ */

import Head from 'next/head'
import { motion, stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

export default function Stagger () {
  const totalNodes = 30
  let nodes = []
  for (let i = 0; i < totalNodes; i++) {
    nodes.push(
      <motion.div key={i}>
        <Ball>{i}</Ball>
      </motion.div>
    )
  }

  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate('.ball', { x: 30 }, { delay: stagger(0.1) })
  })

  return (
    <>
      <Head>
        <title>Stagger</title>
      </Head>
      <div
        id='background'
        className='w-screen h-screen 
          bg-gradient-to-br from-orange-400 to-orange-500'
      >
        <div
          ref={scope}
          className='flex items-center justify-center flex-wrap
            h-screen'
        >
          {nodes}
        </div>
      </div>
    </>
  )
}

function Ball ({ label, children }: any) {
  return (
    <>
      <div
        className='bg-gray-50 w-40 h-40 rounded-full
        flex items-center justify-center
        ball'
      >
        <div className='text-6xl text-gray-300'>{children}</div>
      </div>
    </>
  )
}
