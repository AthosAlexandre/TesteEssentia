import { motion, useReducedMotion } from 'framer-motion'
import parallaxRenaissanceImg from '../../../../assets/parallax-renaissance.jpg'
import SectionContentReveal from '../../../../components/SectionContentReveal.jsx'
import { blurFadeUp, reducedSnap } from '../../../../lib/sectionRevealVariants.js'

export default function SuaForcaVemDeDentroSection() {
  const reduce = useReducedMotion()
  const fade = reduce ? reducedSnap : blurFadeUp

  return (
    <section
      className="relative isolate flex w-full min-h-[min(22rem,48svh)] items-center justify-center overflow-hidden sm:min-h-[26rem] md:min-h-[28rem] lg:min-h-[30rem]"
      aria-labelledby="secao-sua-forca-titulo"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url(${parallaxRenaissanceImg})` }}
        aria-hidden
      />
      <SectionContentReveal className="flex w-full justify-center px-0">
        <motion.h2
          variants={fade}
          id="secao-sua-forca-titulo"
          className="font-nav px-6 text-center font-normal leading-snug tracking-tight text-white [text-shadow:0_1px_18px_rgba(0,0,0,0.35)] max-md:whitespace-nowrap max-md:text-[clamp(calc(0.8125rem+10px),calc(3.4vw+10px),calc(1rem+10px))] md:text-[clamp(calc(1.5rem+15px),calc(3.5vw+15px),calc(2.5rem+15px))]"
        >
          Sua força vem de dentro.
        </motion.h2>
      </SectionContentReveal>
    </section>
  )
}
