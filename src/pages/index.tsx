import Head from 'next/head'
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <>
      <Head>
      <title>My First Page</title>
      </Head>
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
