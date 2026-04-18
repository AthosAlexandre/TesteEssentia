import { Outlet } from 'react-router-dom'
import SEOHead from '../components/SEOHead.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-100 text-stone-900">
      <SEOHead />
      <a
        href="#conteudo-principal"
        className="pointer-events-auto absolute left-3 top-0 z-[100] -translate-y-full rounded-b-md bg-white px-3 py-2 text-sm font-medium text-stone-900 shadow-md outline-none ring-2 ring-stone-900/15 transition-transform focus:translate-y-[4.75rem] focus:outline-none md:focus:translate-y-[5.25rem]"
      >
        Ir para o conteúdo principal
      </a>
      <Header />
      <main
        id="conteudo-principal"
        tabIndex={-1}
        className="flex-1 pt-[4.75rem] outline-none md:pt-[5.25rem]"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
