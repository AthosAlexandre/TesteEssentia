import { loadMockOrSeed, MOCK_STORAGE_KEYS } from '../stores/mockLocalStorage.js'

const MOCK_PRODUCTS = [
  {
    id: '1',
    nameLine1: 'Natural Light',
    nameLine2: 'Hyaluronic Serum Complex',
    price: 'R$ 184,00',
    imageKey: 'natural-light',
  },
  {
    id: '2',
    nameLine1: 'Natural Light',
    nameLine2: 'Hyaluronic Serum Complex',
    price: 'R$ 184,00',
    imageKey: 'natural-light',
  },
  {
    id: '3',
    nameLine1: 'Natural Light',
    nameLine2: 'Hyaluronic Serum Complex',
    price: 'R$ 184,00',
    imageKey: 'natural-light',
  },
]

export function fetchLivingConsciousnessProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = loadMockOrSeed(MOCK_STORAGE_KEYS.livingProducts, MOCK_PRODUCTS)
      resolve(data)
    }, 280)
  })
}
