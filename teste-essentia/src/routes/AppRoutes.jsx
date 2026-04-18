import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layout/MainLayout.jsx'
import NotFound from '../page/not-found/NotFound.jsx'
import { routes } from './routes.config.js'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>
      <Route path="*" element={<NotFound code={404} />} />
    </Routes>
  )
}
