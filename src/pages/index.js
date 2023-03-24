import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'
import { Head } from 'next/document'

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <>
      <title>My First Page</title>
      <main className={styles.main}>
        <h1>Framer-Motion</h1>
        <h3>TESTING</h3>
        <motion.dev
          className={styles.sphare}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </main>
    </>
  )
}
