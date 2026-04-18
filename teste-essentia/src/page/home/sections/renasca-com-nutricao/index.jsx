export default function RenascaComNutricaoSection() {
  return (
    <section
      className="bg-stone-100"
      aria-labelledby="secao-renasca-com-nutricao-titulo"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-nav text-xs font-light uppercase tracking-[0.2em] text-stone-500">
          Nutrição
        </p>
        <h2
          id="secao-renasca-com-nutricao-titulo"
          className="font-logo mt-3 max-w-3xl text-[clamp(2rem,5vw,3.25rem)] font-light leading-tight tracking-tight text-[#3D3935]"
        >
          Renasça com nutrição
        </h2>
        <p className="font-nav mt-6 max-w-2xl text-base font-light leading-relaxed text-stone-600 md:text-lg">
          Um convite a reencontrar equilíbrio e vitalidade através do que você consome — com
          consciência, gentileza e ciência ao seu lado.
        </p>
      </div>
    </section>
  )
}
