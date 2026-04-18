
export const revealEase = [0.22, 1, 0.36, 1]

export const sectionStaggerRoot = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.14,
    },
  },
}

export const innerStaggerBlock = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
}

/** Blur + subida (estilo “blur fade”) */
export const blurFadeUp = {
  hidden: { opacity: 0, y: 22, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.15, ease: revealEase },
  },
}

/** “Máscara” / linha — subida um pouco mais marcada, sem blur */
export const textMaskReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: revealEase },
  },
}

/** Cards: scale out leve + blur (pousa no tamanho final) */
export const cardScaleBlur = {
  hidden: { opacity: 0, y: 26, scale: 1.05, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: revealEase },
  },
}

/** Variantes neutras quando prefers-reduced-motion */
export const reducedSnap = {
  hidden: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0 },
  },
}

export const reducedStaggerRoot = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0, delayChildren: 0 },
  },
}

export const reducedInnerStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0, delayChildren: 0 },
  },
}
