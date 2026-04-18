import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../nav-links.js'

function navClassName({ isActive }) {
  return [
    'font-nav font-light text-sm tracking-wide text-stone-100 transition-colors duration-200 ease-out hover:text-[#B29B62]',
    isActive ? 'underline decoration-white/40 underline-offset-4' : '',
  ]
    .filter(Boolean)
    .join(' ')
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const closeButtonRef = useRef(null)
  const openedByUserRef = useRef(false)

  useEffect(() => {
    if (menuOpen) {
      openedByUserRef.current = true
      const id = requestAnimationFrame(() => {
        closeButtonRef.current?.focus()
      })
      return () => cancelAnimationFrame(id)
    }
    if (openedByUserRef.current) {
      openedByUserRef.current = false
      const id = requestAnimationFrame(() => {
        menuButtonRef.current?.focus()
      })
      return () => cancelAnimationFrame(id)
    }
    return undefined
  }, [menuOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-white/5 border-t-[0.5px] border-t-white bg-[#3D3935] text-stone-100 shadow-sm">
      <div
        className={`fixed inset-0 md:hidden ${
          menuOpen ? 'z-[3] pointer-events-auto' : 'z-[1] pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 transition-opacity duration-300 ease-out ${
            menuOpen ? 'bg-[#3D3935]/95 opacity-100' : 'bg-[#3D3935]/95 opacity-0'
          }`}
          aria-label="Fechar menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
        />

        <aside
          id="mobile-nav-drawer"
          className={`absolute left-0 top-0 flex h-full w-[min(100%,18rem)] flex-col border-r border-white/10 bg-[#3D3935] shadow-2xl transition-transform duration-300 ease-out ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div className="flex items-center justify-start border-b border-white/10 px-3 py-3">
            <button
              ref={closeButtonRef}
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-stone-100 hover:bg-white/10"
              aria-label="Fechar menu"
              onClick={() => setMenuOpen(false)}
            >
              <span
                className="material-symbols-outlined text-[26px]"
                style={{
                  fontVariationSettings:
                    "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                }}
                aria-hidden
              >
                close
              </span>
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 p-4 font-nav" aria-label="Mobile">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  [
                    'font-nav font-light rounded-md px-3 py-3 text-base text-stone-100 transition-colors duration-200 ease-out hover:bg-white/5 hover:text-[#B29B62]',
                    isActive ? 'bg-white/10' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </aside>
      </div>

      <div className="relative z-[2] mx-auto max-w-7xl px-5 md:px-8">
        
        <div className="grid grid-cols-[2.75rem_1fr_2.75rem] items-center py-4 md:hidden">
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center justify-self-start rounded-md text-stone-100 transition hover:bg-white/10"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className="material-symbols-outlined text-[28px] transition-transform duration-300 ease-out"
              style={{
                fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
              }}
              aria-hidden
            >
              menu
            </span>
          </button>
          <Link
            to="/"
            className="font-logo inline-block origin-center scale-y-110 justify-self-center text-[calc(1.5rem+7px)] font-light tracking-[0.02em] text-stone-50"
            onClick={() => setMenuOpen(false)}
          >
            noorskin
          </Link>
          <span className="w-11 justify-self-end" aria-hidden />
        </div>

        <div className="hidden items-center justify-start gap-10 py-4 md:flex lg:gap-14">
          <Link
            to="/"
            className="font-logo inline-block origin-center scale-y-110 shrink-0 text-[calc(1.65rem+7px)] font-light tracking-[0.02em] text-stone-50"
            onClick={() => setMenuOpen(false)}
          >
            noorskin
          </Link>
          <nav
            className="flex items-center gap-6 lg:gap-8"
            aria-label="Principal"
          >
            {navLinks.map(({ label, to }) => (
              <NavLink key={to} to={to} className={navClassName}>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
