import ScrollReveal from '../../components/ScrollReveal.jsx'
import AvaliacoesSection from './sections/avaliacoes'
import InformacaoNutricionalSection from './sections/informacao-nutricional'
import LivingInConsciousnessSection from './sections/living-in-consciousness'
import RenascaComNutricaoSection from './sections/renasca-com-nutricao'
import SuaForcaVemDeDentroSection from './sections/sua-forca-vem-de-dentro'

export default function Home() {
  return (
    <>
      <h1 className="sr-only">noorskin — nutrição, pele e bem-estar</h1>
      <ScrollReveal>
        <RenascaComNutricaoSection />
      </ScrollReveal>
      <ScrollReveal>
        <LivingInConsciousnessSection />
      </ScrollReveal>
      <div className="flex flex-col-reverse md:contents">
        <ScrollReveal>
          <InformacaoNutricionalSection />
        </ScrollReveal>
        <ScrollReveal>
          <SuaForcaVemDeDentroSection />
        </ScrollReveal>
      </div>
      <ScrollReveal>
        <AvaliacoesSection />
      </ScrollReveal>
    </>
  )
}
