import { Routes, Route } from 'react-router-dom'
import { routes } from './routes.config.js'

export default function AppRoutes() {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  )
}
