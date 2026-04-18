import { useId, useState } from 'react'

const ACCORDION_ITEMS = [
  {
    id: 'tabela',
    title: 'Tabela nutricional',
    lines: [
      'Porção (4 cápsulas): valores nutricionais proporcionais à dose diária.',
      'Energia declarada: apoia a integração do produto ao planejamento alimentar.',
      'Macronutrientes: discriminados na embalagem para transparência.',
      'Micronutrientes: percentuais de referência (%VD) conforme rotulagem.',
    ],
  },
  {
    id: 'vitaminas',
    title: 'Vitaminas',
    lines: [
      'Complexo B: auxilia no metabolismo e na saúde da pele.',
      'Biotina: contribui para cabelo e pele.',
      'Vitamina C: auxilia na formação de colágeno.',
      'Vitamina E: ação antioxidante.',
    ],
  },
  {
    id: 'minerais',
    title: 'Minerais',
    lines: [
      'Zinco: contribui para a manutenção de cabelos, pele e unhas.',
      'Selênio: participa da proteção celular frente aos radicais livres.',
      'Magnésio: auxilia no funcionamento normal do sistema nervoso.',
      'Cálcio: importante para a manutenção de ossos e dentes.',
    ],
  },
  {
    id: 'aminoacidos',
    title: 'Aminoácidos',
    lines: [
      'Lisina: participa da síntese de proteínas e do processo de recuperação.',
      'Metionina: fornece enxofre para a formação de queratina e colágeno.',
      'Glicina: apoia a estrutura de tecidos conjuntivos e a vitalidade da pele.',
      'Prolina: associada à formação e estabilidade do colágeno.',
    ],
  },
  {
    id: 'ativos',
    title: 'Ativos especiais',
    lines: [
      'Ácido hialurônico: ajuda na hidratação e na sensação de conforto da pele.',
      'Ceramidas: contribuem para a barreira cutânea e a integridade da epiderme.',
      'Colágeno hidrolisado: proteína estrutural para firmeza e elasticidade.',
      'Resveratrol: ação antioxidante complementar na rotina diária.',
    ],
  },
]

export default function InformacaoNutricionalSection() {
  const baseId = useId()
  const [openId, setOpenId] = useState('vitaminas')

  return (
    <section
      className="bg-[#22211F]"
      aria-labelledby="secao-informacao-nutricional-titulo"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 md:py-20 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-16">
          <div className="hidden md:block" aria-hidden />
          <div className="w-full max-w-xl md:max-w-none md:justify-self-end lg:max-w-[28rem]">
            <h2
              id="secao-informacao-nutricional-titulo"
              className="font-nav text-[clamp(1.85rem,4.2vw,2.65rem)] font-light leading-[1.08] tracking-tight text-white"
            >
              Informação
              <br />
              Nutricional
            </h2>
            <p className="font-nav mt-5 text-sm font-light leading-relaxed text-white/90 sm:mt-6 sm:text-base">
              Porções por embalagem: 30 (120 cápsulas)
            </p>

            <div className="mt-8 border-t border-[#BD8457] sm:mt-10">
              {ACCORDION_ITEMS.map((item) => {
                const isOpen = openId === item.id
                const panelId = `${baseId}-${item.id}-panel`
                const buttonId = `${baseId}-${item.id}-button`
                return (
                  <div key={item.id} className="border-b border-[#BD8457]">
                    <h3 className="font-nav text-base font-normal text-white sm:text-[1.05rem]">
                      <button
                        id={buttonId}
                        type="button"
                        className="flex w-full items-center justify-between gap-4 py-4 text-left transition hover:text-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD8457] focus-visible:ring-offset-2 focus-visible:ring-offset-[#22211F] sm:py-[1.125rem]"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenId(isOpen ? null : item.id)}
                      >
                        <span>{item.title}</span>
                        <span
                          className="shrink-0 font-nav text-2xl font-light leading-none text-[#BD8457] sm:text-[1.65rem]"
                          aria-hidden
                        >
                          {isOpen ? '\u2212' : '+'}
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                    >
                      {item.lines.length > 0 ? (
                        <div className="font-nav space-y-3 pb-5 text-sm font-light leading-relaxed text-white/85 sm:text-[0.95rem]">
                          {item.lines.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
