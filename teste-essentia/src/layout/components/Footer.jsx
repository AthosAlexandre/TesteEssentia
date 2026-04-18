export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#3D3935] text-stone-300" aria-label="Rodapé">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-8 md:flex-row md:px-8">
        <p className="font-nav text-sm tracking-wide">
          © {new Date().getFullYear()} noorskin. Todos os direitos reservados.
        </p>
        <p className="font-nav text-xs text-stone-500">
          Cuidado que transforma a pele.
        </p>
      </div>
    </footer>
  )
}
