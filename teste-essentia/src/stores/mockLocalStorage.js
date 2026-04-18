
export const MOCK_STORAGE_KEYS = {
  reviews: 'teste-essentia:mock:reviews',
  livingProducts: 'teste-essentia:mock:living-products',
}

function isBrowser() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'
}

/**
 * Lê o JSON guardado; se não existir ou for inválido, grava o seed e devolve-o.
 * @template T
 * @param {string} key
 * @param {T} seed
 * @returns {T}
 */
export function loadMockOrSeed(key, seed) {
  if (!isBrowser()) {
    return seed
  }
  try {
    const raw = window.localStorage.getItem(key)
    if (raw != null && raw !== '') {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed
      }
    }
  } catch {
    /* ignora JSON corrompido e re-seeda */
  }
  try {
    window.localStorage.setItem(key, JSON.stringify(seed))
  } catch {
    /* quota excedida ou modo privado restrito */
  }
  return seed
}

/** Atualiza o mock persistido (ex.: após um POST simulado no futuro). */
export function saveMock(key, data) {
  if (!isBrowser()) return
  try {
    window.localStorage.setItem(key, JSON.stringify(data))
  } catch {
    /* noop */
  }
}

/** Limpa caches de mock (útil em dev no console ou após mudar o seed). */
export function clearAllMockCaches() {
  if (!isBrowser()) return
  Object.values(MOCK_STORAGE_KEYS).forEach((key) => {
    try {
      window.localStorage.removeItem(key)
    } catch {
      /* noop */
    }
  })
}
