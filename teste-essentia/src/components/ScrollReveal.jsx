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
      /* Só opacidade no wrapper: translateY altera o rect e o whileInView da secção seguinte
         pode disparar no meio da animação da primeira (once: true “gasta” o efeito). */
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        once: true,
        amount: 0.2,
        margin: '0px 0px -14% 0px',
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
