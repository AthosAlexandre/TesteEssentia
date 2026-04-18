import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NotFound({ code = 404, message }) {
  const { pathname } = useLocation()
  const isNotFound = code === 404

  const defaultMessage = isNotFound
    ? 'Esta rota não está cadastrada em routes.config.js.'
    : 'Algo deu errado ao carregar esta página.'

  useEffect(() => {
    document.title = `${code} · ${isNotFound ? 'Não encontrado' : 'Erro'}`
    return () => {
      document.title = 'teste-essentia'
    }
  }, [code, isNotFound])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-zinc-950 px-4 text-center">
      <p className="font-mono text-7xl font-bold tracking-tight text-zinc-600 md:text-8xl">
        {code}
      </p>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-zinc-100">
          {isNotFound ? 'Rota inexistente' : 'Erro'}
        </h1>
        <p className="max-w-md text-zinc-400">{message ?? defaultMessage}</p>
        {isNotFound && (
          <p className="text-sm text-zinc-500">
            Caminho tentado:{' '}
            <code className="rounded bg-zinc-900 px-2 py-0.5 text-zinc-300">
              {pathname}
            </code>
          </p>
        )}
      </div>
      <Link
        to="/"
        className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
      >
        Voltar para a home
      </Link>
    </div>
  )
}
