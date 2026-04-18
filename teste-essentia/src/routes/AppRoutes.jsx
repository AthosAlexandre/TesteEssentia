import { Routes, Route } from 'react-router-dom'
import NotFound from '../page/not-found/NotFound.jsx'
import { routes } from './routes.config.js'

export default function AppRoutes() {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<NotFound code={404} />} />
    </Routes>
  )
}
