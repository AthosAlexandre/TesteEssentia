import { Outlet } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-100 text-stone-900">
      <Header />
      <main className="flex-1 pt-[4.75rem] md:pt-[5.25rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
