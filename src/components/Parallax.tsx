// Reference: https://samuelkraft.com/blog/spring-parallax-framer-motion-guide
// Parallax concept: https://developer.chrome.com/blog/performant-parallaxing/

import { useState, useRef, useLayoutEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

type ParallaxProps = {
  children: React.ReactNode
  offset?: number
}

export default function Parallax ({
  children,
  offset = 50
}: ParallaxProps): JSX.Element {
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const containerRef = useRef(null)

  const { scrollY } = useScroll()

  // start animating our element when we've scrolled it into view
  const initial = elementTop - clientHeight

  // end our animation when we've scrolled the offset specified
  const final = elementTop + offset

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset])

  // apply a spring to ease the result
  const y = useSpring(yRange, { stiffness: 400, damping: 90 })

  useLayoutEffect(() => {
    const element = containerRef.current
    // save our layout measurements in a function in order to trigger
    // it both on mount and on resize
    const onResize = () => {
      // use getBoundingClientRect instead of offsetTop in order to
      // get the offset relative to the viewport
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset
      )
      setClientHeight(window.innerHeight)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [containerRef])

  return (
    <motion.div ref={containerRef} style={{ y }}>
      {children}
    </motion.div>
  )
}
