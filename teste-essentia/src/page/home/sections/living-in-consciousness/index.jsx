import { useEffect, useState } from 'react'
import naturalLightImg from '../../../../assets/natural-light.png'
import ProductCard from '../../../../components/ProductCard.jsx'
import { fetchLivingConsciousnessProducts } from '../../../../services/livingConsciousnessProducts.js'

const IMAGE_MAP = {
  'natural-light': naturalLightImg,
}

export default function LivingInConsciousnessSection() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

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
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:flex lg:flex-row lg:items-stretch lg:justify-center lg:gap-5 lg:px-5 lg:py-16 xl:gap-8">
        <div className="flex w-full justify-center lg:w-auto lg:min-w-0 lg:flex-none">
          {loading ? (
            <div className="flex min-h-[14rem] w-full max-w-[23.875rem] items-center justify-center border border-[#CBAB96] bg-[#FFF9F4] font-nav text-sm text-stone-500 sm:max-w-[35.875rem]">
              Carregando…
            </div>
          ) : (
            <div className="mx-auto flex w-full max-w-[23.875rem] flex-col divide-y divide-[#CBAB96] border border-[#CBAB96] sm:max-w-[min(100%,35.875rem)] sm:flex-row sm:divide-x sm:divide-y-0">
              {products.map((product) => (
                <div key={product.id} className="min-w-0 flex-1">
                  <ProductCard
                    imageSrc={IMAGE_MAP[product.imageKey]}
                    nameLine1={product.nameLine1}
                    nameLine2={product.nameLine2}
                    price={product.price}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 w-full bg-[#FFF9F4] pt-10 lg:mt-0 lg:flex lg:w-[min(100%,24rem)] lg:flex-none lg:flex-col lg:items-start lg:justify-end lg:pt-0 xl:w-[min(100%,26rem)]">
          <h2
            id="secao-living-in-consciousness-titulo"
            className="font-logo text-[clamp(1.85rem,4vw,2.75rem)] font-normal leading-tight tracking-tight text-stone-900"
          >
            Living in
            <br />
            Consciousness
          </h2>
          <p className="font-nav mt-6 max-w-prose text-base font-normal leading-relaxed text-stone-800 sm:text-[1.05rem]">
            Uma linha desenvolvida para atuar no seu dia a dia, ajudando sua pele a receber os
            nutrientes e cuidados necessários para manter sua saúde, equilíbrio e vitalidade.
          </p>
          <p className="font-nav mt-6 w-full max-w-[11.75rem] text-[0.625rem] font-normal leading-relaxed text-stone-800 sm:mt-8 sm:max-w-[12rem] sm:text-[0.750rem]">
            Nossa linha oferece uma poderosa união de ativos para contribuir com a sua rotina de
            cuidados diários com os cabelos e com as unhas.
          </p>
        </div>
      </div>
    </section>
  )
}
