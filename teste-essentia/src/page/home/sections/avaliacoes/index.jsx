import { useEffect, useMemo, useState } from 'react'
import { fetchReviews } from '../../../../services/reviews.js'

const PAGE_SIZE = 2
const DIVIDER = 'border-[#CBAB96]'

function StarRating({ value }) {
  return (
    <div className="flex gap-1" aria-label={`${value} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className="text-[1.125rem] leading-none text-stone-900 sm:text-[1.35rem]"
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default function AvaliacoesSection() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [pageIndex, setPageIndex] = useState(0)

  useEffect(() => {
    let cancelled = false
    fetchReviews().then((data) => {
      if (!cancelled) {
        setReviews(data)
        setLoading(false)
      }
    })
    return () => {
      cancelled = true
    }
  }, [])

  const pageCount = useMemo(
    () => Math.max(1, Math.ceil(reviews.length / PAGE_SIZE)),
    [reviews.length],
  )

  const visibleReviews = useMemo(() => {
    const start = pageIndex * PAGE_SIZE
    return reviews.slice(start, start + PAGE_SIZE)
  }, [reviews, pageIndex])

  useEffect(() => {
    if (pageIndex > pageCount - 1) setPageIndex(Math.max(0, pageCount - 1))
  }, [pageCount, pageIndex])

  const goPrev = () => setPageIndex((p) => Math.max(0, p - 1))
  const goNext = () => setPageIndex((p) => Math.min(pageCount - 1, p + 1))

  return (
    <section
      className="bg-[#FFF9F4]"
      aria-labelledby="secao-avaliacoes-titulo"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 md:py-20 lg:px-10">
        <div className={`flex flex-wrap items-end justify-between gap-4 border-b pb-6 ${DIVIDER}`}>
          <h2
            id="secao-avaliacoes-titulo"
            className="font-logo text-[clamp(2rem,4vw,2.75rem)] font-normal leading-tight tracking-tight text-stone-900"
          >
            Avaliações
          </h2>
          <p className="font-nav text-sm font-light text-stone-700 sm:text-base">5/5</p>
        </div>

        {loading ? (
          <div className={`py-16 text-center font-nav text-sm text-stone-500 ${DIVIDER} border-b`}>
            Carregando…
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 sm:gap-12 md:gap-14 lg:gap-16">
              {visibleReviews.map((review) => (
                <article key={review.id} className="min-w-0">
                  <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
                    <StarRating value={review.rating} />
                    <span className="font-nav text-sm font-normal text-stone-900 underline decoration-1 underline-offset-4 sm:text-[0.95rem]">
                      {review.reviewerName}
                    </span>
                  </div>
                  <p className="font-nav mt-5 text-sm font-normal leading-relaxed text-stone-800 sm:mt-6 sm:text-[0.95rem]">
                    {review.text}
                  </p>
                </article>
              ))}
            </div>

            <div
              className={`flex items-center justify-center gap-6 border-t pt-8 sm:gap-10 ${DIVIDER}`}
              aria-label="Paginação das avaliações"
            >
              <button
                type="button"
                className="font-nav text-xl text-stone-900 transition hover:opacity-70 disabled:pointer-events-none disabled:opacity-25"
                aria-label="Página anterior"
                disabled={pageIndex <= 0}
                onClick={goPrev}
              >
                ←
              </button>
              <div className="flex items-center gap-2.5 sm:gap-3" role="tablist" aria-label="Páginas">
                {Array.from({ length: pageCount }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === pageIndex}
                    aria-label={`Página ${i + 1} de ${pageCount}`}
                    className={`h-2.5 w-2.5 rounded-full border border-stone-900 transition sm:h-3 sm:w-3 ${
                      i === pageIndex ? 'bg-stone-900' : 'bg-transparent'
                    }`}
                    onClick={() => setPageIndex(i)}
                  />
                ))}
              </div>
              <button
                type="button"
                className="font-nav text-xl text-stone-900 transition hover:opacity-70 disabled:pointer-events-none disabled:opacity-25"
                aria-label="Próxima página"
                disabled={pageIndex >= pageCount - 1}
                onClick={goNext}
              >
                →
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
