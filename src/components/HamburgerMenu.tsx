import { motion } from 'framer-motion'

type HamburgerMenuProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  isOpen: Boolean
  color: string
  className?: string
}

export default function HamburgerMenu ({
  onClick,
  isOpen,
  color,
  className
}: HamburgerMenuProps) {
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

type PathProps = {
  status: 'open' | 'closed'
  variants: {
    open: Object
    closed: Object
  }
  color?: string
  d?: string
  transition?: Object
}

function Path (props: PathProps) {
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
