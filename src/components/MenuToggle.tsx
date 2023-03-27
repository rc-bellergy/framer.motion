import { motion } from 'framer-motion'
import HamburgerMenu from './HamburgerMenu'
import styles from '@/components/MenuToggle.module.css'

type MenuToggleProps = {
  toggle: React.MouseEventHandler
  isOpen: Boolean
  extendHeight: number
  corner: 'lt' | 'lb' | 'rt' | 'rb'
  children?: React.ReactNode
}

export default function MenuToggle ({
  toggle,
  isOpen,
  extendHeight,
  corner,
  children
}: MenuToggleProps) {
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
        type: 'spring',
        stiffness: 600,
        damping: 40
      }
    }
  }

  const cornerStyle = new Map()
  cornerStyle.set('lt', 'scale-100')
  cornerStyle.set('rt', '-scale-x-100')
  cornerStyle.set('lb', '-scale-y-100')
  cornerStyle.set('rb', '-scale-100')

  return (
    <>
      <motion.div
        className={`bg-blue-600 absolute w-full h-full left-0 top-0 ${cornerStyle.get(
          corner
        )}`}
        variants={background}
        animate={isOpen ? 'open' : 'closed'}
      >
        <HamburgerMenu
          onClick={toggle}
          isOpen={isOpen}
          className='h-7 w-7 bottom-[-1.2rem] right-[-1.2rem] relative'
          color='#ffffff'
        />
      </motion.div>
      {children}
    </>
  )
}
