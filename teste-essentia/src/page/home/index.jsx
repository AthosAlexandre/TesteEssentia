import AvaliacoesSection from './sections/avaliacoes'
import InformacaoNutricionalSection from './sections/informacao-nutricional'
import LivingInConsciousnessSection from './sections/living-in-consciousness'
import RenascaComNutricaoSection from './sections/renasca-com-nutricao'
import SuaForcaVemDeDentroSection from './sections/sua-forca-vem-de-dentro'

export default function Home() {
  return (
    <>
      <RenascaComNutricaoSection />
      <LivingInConsciousnessSection />
      <InformacaoNutricionalSection />
      <SuaForcaVemDeDentroSection />
      <AvaliacoesSection />
    </>
  )
}
