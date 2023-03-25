import { motion } from 'framer-motion'

export default function HamburgerMenu ({
  onClick,
  isOpen,
  color,
  className
}: any) {
  return (
    <button className={className} onClick={onClick}>
      <svg width='100%' viewBox='0 0 23 23'>
        <Path
          status={isOpen ? 'open' : 'closed'}
          color={color}
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' }
          }}
        />
        <Path
          status={isOpen ? 'open' : 'closed'}
          color={color}
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          status={isOpen ? 'open' : 'closed'}
          color={color}
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' }
          }}
        />
      </svg>
    </button>
  )
}

function Path (props: any) {
  const color = props.color ? props.color : '#ff0000'

  return (
    <motion.path
      fill='transparent'
      strokeWidth='3'
      stroke={color}
      strokeLinecap='round'
      animate={props.status}
      {...props}
    />
  )
}
