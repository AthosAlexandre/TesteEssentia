import { motion, useReducedMotion } from 'framer-motion'
import { reducedStaggerRoot, sectionStaggerRoot } from '../lib/sectionRevealVariants.js'

const VIEWPORT = {
  once: true,
  amount: 0.22,
  /* Margem inferior negativa: exige mais entrada na viewport (evita disparo ao “biscar” a secção de baixo). */
  margin: '0px 0px -14% 0px',
}

/**
 * Stagger + whileInView no conteúdo interno da secção (complementa o ScrollReveal externo).
 */
export default function SectionContentReveal({ children, className = '' }) {
  const reduce = useReducedMotion()
  const variants = reduce ? reducedStaggerRoot : sectionStaggerRoot

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  )
}
