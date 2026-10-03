import { TeaCollection } from './components/TeaCollection'

function App() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl bg-[#fbfaf6] px-5 py-12 text-[#293126] sm:px-8">
      <header className="mb-10 border-b border-[#e9e8df] pb-6">
        <a className="font-serif text-3xl text-[#293126] no-underline" href="#home">
          stillroom
        </a>
        <p className="mt-2 text-sm text-[#77796f]">
          Thoughtfully sourced teas for a slower moment.
        </p>
      </header>
      <TeaCollection />
    </main>
  )
}

export default App
