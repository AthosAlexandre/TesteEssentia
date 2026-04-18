import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import naturalLightImg from '../../../../assets/natural-light.png'
import ProductCard from '../../../../components/ProductCard.jsx'
import SectionContentReveal from '../../../../components/SectionContentReveal.jsx'
import {
  blurFadeUp,
  cardScaleBlur,
  innerStaggerBlock,
  reducedInnerStagger,
  reducedSnap,
  textMaskReveal,
} from '../../../../lib/sectionRevealVariants.js'
import { fetchLivingConsciousnessProducts } from '../../../../services/livingConsciousnessProducts.js'

const IMAGE_MAP = {
  'natural-light': naturalLightImg,
}

export default function LivingInConsciousnessSection() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const reduce = useReducedMotion()
  const line = reduce ? reducedSnap : textMaskReveal
  const fade = reduce ? reducedSnap : blurFadeUp
  const carouselBlock = reduce ? reducedSnap : cardScaleBlur
  const inner = reduce ? reducedInnerStagger : innerStaggerBlock

  useEffect(() => {
    let cancelled = false
    fetchLivingConsciousnessProducts().then((data) => {
      if (!cancelled) {
        setProducts(data)
        setLoading(false)
      }
    })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section
      className="bg-[#FFF9F4]"
      aria-labelledby="secao-living-in-consciousness-titulo"
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-5 lg:py-16">
        {loading ? (
          <div className="flex w-full justify-center lg:w-auto lg:min-w-0 lg:flex-none">
            <div className="-mx-5 overflow-x-auto px-5 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-auto sm:max-w-[min(100%,35.875rem)] sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
              <div className="flex w-max flex-nowrap sm:w-full">
                <div className="flex min-h-[14rem] w-[min(82vw,19.5rem)] shrink-0 items-center justify-center border border-[#CBAB96] bg-[#FFF9F4] font-nav text-sm text-stone-500 sm:w-full sm:max-w-none sm:shrink">
                  Carregando…
                </div>
              </div>
            </div>
          </div>
        ) : (
          <SectionContentReveal className="flex w-full flex-col lg:flex-row lg:items-stretch lg:justify-center lg:gap-5 xl:gap-8">
            <motion.div
              variants={carouselBlock}
              className="flex w-full justify-center lg:w-auto lg:min-w-0 lg:flex-none"
            >
              <div
                className="-mx-5 snap-x snap-mandatory overflow-x-auto overflow-y-visible scroll-pl-5 scroll-pr-5 px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-auto sm:max-w-[min(100%,35.875rem)] sm:snap-none sm:overflow-visible sm:scroll-pl-0 sm:scroll-pr-0 sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden"
                role="region"
                aria-roledescription="carrossel"
                aria-label="Produtos Living in Consciousness"
              >
                <div className="flex w-max flex-nowrap gap-3 sm:w-full sm:max-w-none sm:gap-0 sm:border sm:border-[#CBAB96]">
                  {products.map((product, index) => (
                    <div
                      key={product.id}
                      className={`w-[min(82vw,19.5rem)] shrink-0 snap-center bg-[#FFF9F4] max-sm:border max-sm:border-[#CBAB96] sm:w-auto sm:min-w-0 sm:flex-1 sm:shrink ${index > 0 ? 'sm:border-l sm:border-[#CBAB96]' : ''}`}
                    >
                      <ProductCard
                        imageSrc={IMAGE_MAP[product.imageKey]}
                        nameLine1={product.nameLine1}
                        nameLine2={product.nameLine2}
                        price={product.price}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={inner}
              className="mt-10 w-full bg-[#FFF9F4] pt-10 lg:mt-0 lg:flex lg:w-[min(100%,24rem)] lg:flex-none lg:flex-col lg:items-start lg:justify-end lg:pt-0 xl:w-[min(100%,26rem)]"
            >
              <motion.h2
                variants={line}
                id="secao-living-in-consciousness-titulo"
                className="font-logo text-[clamp(1.85rem,4vw,2.75rem)] font-normal leading-tight tracking-tight text-stone-900"
              >
                Living in
                <br />
                Consciousness
              </motion.h2>
              <motion.p
                variants={fade}
                className="font-nav mt-6 max-w-prose text-base font-normal leading-relaxed text-stone-800 sm:text-[1.05rem]"
              >
                Uma linha desenvolvida para atuar no seu dia a dia, ajudando sua pele a receber os
                nutrientes e cuidados necessários para manter sua saúde, equilíbrio e vitalidade.
              </motion.p>
              <motion.p
                variants={fade}
                className="font-nav mt-6 w-full max-w-[11.75rem] text-[0.625rem] font-normal leading-relaxed text-stone-800 sm:mt-8 sm:max-w-[12rem] sm:text-[0.750rem]"
              >
                Nossa linha oferece uma poderosa união de ativos para contribuir com a sua rotina de
                cuidados diários com os cabelos e com as unhas.
              </motion.p>
            </motion.div>
          </SectionContentReveal>
        )}
      </div>
    </section>
  )
}
