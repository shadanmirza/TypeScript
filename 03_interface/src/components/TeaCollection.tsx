import { teas } from '../data/teas'
import { TeaCard } from './TeaCard'

export function TeaCollection() {
  return (
    <section id="collection" aria-labelledby="collection-heading">
      <p className="text-xs tracking-[1.65px] text-[#7b806e]">THE DAILY RITUAL</p>
      <h1 id="collection-heading" className="mb-7 mt-2 font-serif text-3xl text-[#30382c]">
        A cup to come back to.
      </h1>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {teas.map((tea) => <TeaCard key={tea.name} {...tea} />)}
      </div>
    </section>
  )
}
