export interface TeaCardProps {
  name: string
  kind: string
  description: string
  price: string
  image: string
  tag: string
}
export function TeaCard({ name, kind, description, price, image, tag }: TeaCardProps) {
  return (
    <article className="min-w-0 bg-[#fffefa]">
      <div
        className="relative h-64 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to top, rgb(27 31 21 / 25%), transparent 55%), url("${image}")` }}
        role="img"
        aria-label={`${name} tea`}
      >
        <span className="absolute left-4 top-4 bg-[#fffefa]/95 px-2 py-1.5 text-[9px] tracking-[1px] text-[#565b45]">{tag}</span>
      </div>

      <div className="px-1 pb-4 pt-4">
        <div className="flex justify-between gap-2 text-[9px] tracking-[1px] text-[#7c806e]">
          <span>{kind}</span>
          <span className="shrink-0 text-xs tracking-normal text-[#454b3c]">{price}</span>
        </div>
        <h2 className="mb-2 mt-2 font-serif text-2xl font-normal text-[#293126]">{name}</h2>
        <div className="border-t border-[#e9e8df] pt-3">
          <p className="text-[8px] tracking-[1.25px] text-[#8a8d7d]">DESCRIPTION</p>
          <p className="mt-1 min-h-[60px] text-xs leading-relaxed text-[#77796f]">{description}</p>
        </div>
        <a href="#collection" className="mt-4 inline-flex gap-3 border-b border-[#c5c9ba] pb-1 text-[11px] text-[#505943] no-underline">
          Discover this tea <span aria-hidden="true">&#8599;</span>
        </a>
      </div>
    </article>
  )
}
