import { motion } from 'framer-motion'
import styles from '@/components/MenuToggle.module.css'

export default function MenuToggle ({ toggle, isOpen, extendHeight }: any) {
  const background = {
    open: (height = extendHeight) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 80,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: 'circle(42px at 30px 30px)',
      transition: {
        delay: 0.15,
        type: 'spring',
        stiffness: 600,
        damping: 40
      }
    }
  }

  const Path = (props: any) => (
    <motion.path
      fill='transparent'
      strokeWidth='3'
      stroke='hsl(0, 0%, 100%)'
      strokeLinecap='round'
      {...props}
    />
  )

  return (
    <>
      <motion.div
        className={styles.background}
        variants={background}
        animate={isOpen ? 'open' : 'closed'}
      />
      <button onClick={toggle} className={styles.button}>
        <motion.svg
          width='23'
          height='23'
          viewBox='0 0 23 23'
          className='mx-auto'
          animate={isOpen ? 'open' : 'closed'}
        >
          <Path
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' }
            }}
          />
          <Path
            d='M 2 9.423 L 20 9.423'
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' }
            }}
          />
        </motion.svg>
      </button>
    </>
  )
}
