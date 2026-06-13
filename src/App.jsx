import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Manifesto from './components/Manifesto'
import Why from './components/Why'
import How from './components/How'
import Ladder from './components/Ladder'
import Belief from './components/Belief'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Manifesto />
      <Why />
      <How />
      <Ladder />
      <Belief />
      <FinalCTA />
      <Footer />
    </>
  )
}
