import { motion, useReducedMotion } from 'framer-motion'

const easeOut = [0.22, 1, 0.36, 1]

export default function ScrollReveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.08,
        margin: '0px 0px 12% 0px',
      }}
      transition={{
        duration: 4.5,
        delay,
        ease: easeOut,
      }}
    >
      {children}
    </motion.div>
  )
}
