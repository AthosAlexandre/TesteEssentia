import { BrowserRouter } from 'react-router-dom'
import { TopToastProvider } from './context/TopToastContext.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <TopToastProvider>
        <AppRoutes />
      </TopToastProvider>
    </BrowserRouter>
  )
}
