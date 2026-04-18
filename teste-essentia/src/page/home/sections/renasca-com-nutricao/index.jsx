import mulherSegurandoSerumFacial from '../../../../assets/mulher-segurando-serum-facial.jpg'

export default function RenascaComNutricaoSection() {
  return (
    <section
      aria-labelledby="secao-renasca-com-nutricao-titulo"
      className="min-h-[calc(100svh-4.75rem)] md:min-h-[calc(100svh-5.25rem)]"
    >
      <div className="flex min-h-[calc(100svh-4.75rem)] flex-col md:min-h-[calc(100svh-5.25rem)] md:flex-row">
        <div className="flex min-h-0 flex-1 flex-col bg-[#22211F] md:w-1/2 md:min-h-full">
          <div className="flex flex-1 flex-col items-center justify-end px-5 pb-12 pt-8 sm:px-8 md:pb-14 md:pt-12">
            <div className="w-full max-w-[min(22.5rem,calc(100vw-2.5rem))] text-left sm:max-w-[min(24rem,calc(100vw-3rem))] md:max-w-[21rem]">
              <h2
                id="secao-renasca-com-nutricao-titulo"
                className="font-nav text-[clamp(calc(1.65rem+7px),calc(3.8vw+7px),calc(2.75rem+7px))] font-light leading-[1.05] tracking-tight text-white md:text-[clamp(1.65rem,3.8vw,2.75rem)]"
              >
                Renasça{'\u00A0'}com
                <br />
                nutrição
              </h2>
              <p className="font-nav mt-6 text-left text-[calc(0.75rem+7px)] font-light leading-relaxed text-white/90 sm:mt-7 sm:text-[calc(0.875rem+7px)] md:mt-8 md:text-[calc(0.78rem+4px)] md:leading-[1.58]">
                Renaissance resgata a integridade da queratina, reconstruindo a arquitetura de fios
                e unhas contra os desgastes do cotidiano. Uma nutrição essencial que cura a fibra
                profundamente, devolvendo a força e o brilho que nascem de dentro.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex min-h-0 w-full flex-1 flex-shrink-0 overflow-hidden md:w-1/2 md:min-h-full">
          <img
            src={mulherSegurandoSerumFacial}
            alt="Mulher segurando sérum facial, iluminação suave e acolhedora."
            className="block h-full min-h-0 w-full min-w-full object-cover object-center md:absolute md:inset-0 md:h-full md:w-full md:object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
