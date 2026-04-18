const REVIEW_BODY =
  'Nutricosméticos são suplementos orais que fornecem nutrientes essenciais para a saúde da pele, cabelos e unhas. Seus micronutrientes auxiliam na formação de colágeno e oferecem proteção antioxidante contra radicais livres, atuando de forma concentrada para preservar sua beleza natural.'

const MOCK_REVIEWS = [
  { id: '1', reviewerName: 'Maria', rating: 5, text: REVIEW_BODY },
  { id: '2', reviewerName: 'Maria', rating: 5, text: REVIEW_BODY },
  { id: '3', reviewerName: 'Ana', rating: 5, text: REVIEW_BODY },
  { id: '4', reviewerName: 'Carla', rating: 5, text: REVIEW_BODY },
  { id: '5', reviewerName: 'Juliana', rating: 5, text: REVIEW_BODY },
  { id: '6', reviewerName: 'Patrícia', rating: 5, text: REVIEW_BODY },
  { id: '7', reviewerName: 'Fernanda', rating: 5, text: REVIEW_BODY },
  { id: '8', reviewerName: 'Beatriz', rating: 5, text: REVIEW_BODY },
]

export function fetchReviews() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_REVIEWS), 320)
  })
}
