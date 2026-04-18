import Button from './Button.jsx'

export default function ProductCard({ imageSrc, nameLine1, nameLine2, price, imageAlt }) {
  return (
    <article className="flex h-full flex-col items-center bg-[#FFF9F4] px-4 py-[calc(1.75rem+25px)] sm:px-5 sm:py-9">
      <img
        src={imageSrc}
        alt={imageAlt ?? `${nameLine1} ${nameLine2}`}
        className="mx-auto h-auto w-full max-w-[7.5rem] object-contain sm:max-w-[7.75rem]"
        loading="lazy"
        decoding="async"
      />
      <h3 className="font-nav mt-[calc(1.5rem+10px)] flex flex-col items-center gap-0.5 text-center text-xs font-medium leading-tight tracking-tighter text-stone-900 sm:text-[0.8125rem]">
        <span className="block max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
          {nameLine1}
        </span>
        <span className="block max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
          {nameLine2}
        </span>
      </h3>
      <p className="font-logo mt-[calc(1rem-15px)] text-[calc(1rem+5px)] font-medium tracking-tight text-stone-900 [font-variant-numeric:oldstyle-nums] underline decoration-1 underline-offset-[0.2em]">
        {price}
      </p>
      <div className="mt-[calc(1.25rem-15px)] w-full sm:mt-[calc(1.5rem-10px)]">
        <Button type="button">Adicionar ao carrinho</Button>
      </div>
    </article>
  )
}
