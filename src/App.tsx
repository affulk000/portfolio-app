import { Data, ScrollDown, Social } from './components'
import { About } from './components/About'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />

      <section id="home">
        <div className="grid gap-y-28">
          <div className="grid pt-[5.5rem] lg:grid-cols-[116px_repeat(2,1fr)] md:grid-cols-[100px_repeat(2, 1fr)] md:gap-x-8 gap-x-8 items-center">
            <Social />

            <div className="bg-[url('src/lib/images/profile2.jpeg')] bg-no-repeat bg-cover bg-center shadow-[inset_0_0_0_9px_#f7f7f721] lg:order-1 lg:h-80 lg:w-80 lg:justify-self-center animate-[profile_8s_infinite_1s] ease-in-out sm:order-[initial] sm:jusitfy-self-[initial] sm:w-[200px] sm:h-[200px]" />
            <Data />
          </div>
          <ScrollDown />
        </div>
      </section>
      <About />

    </>
  )
}

export default App
