export function getSiteOrigin() {
  const env = import.meta.env.VITE_SITE_URL
  if (typeof env === 'string' && env.trim()) {
    return env.replace(/\/$/, '')
  }
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin
  }
  return ''
}

export const SITE_NAME = 'noorskin'

export const PAGE_SEO = {
  '/': {
    title: `${SITE_NAME} — Renasça com nutrição e cuidado com a pele`,
    description:
      'Linha Renaissance e Living in Consciousness: nutrição para pele, cabelos e unhas, com transparência e cuidado diário.',
  },
}
