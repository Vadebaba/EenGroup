import Hero from './sections/Hero'
import Header from './components/Header'
import About from './sections/About'
import PopularArea from './sections/PopularArea'
import Properties from './sections/Properties'
import Service from './sections/Service'
import Client from './sections/Client'
import Contact from './sections/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <PopularArea />
      <Properties />
      <Service />
      <Client />
      <Contact />
      <Footer />
    </>
  )
}

export default App