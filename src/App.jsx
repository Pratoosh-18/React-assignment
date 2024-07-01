import CardsPage from "./components/CardsPage"
import Footer from "./components/Footer"
import FooterBanner from "./components/FooterBanner"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Scrollupbutton from "./components/Scrollupbutton"
import Testimonials from "./components/Testimonials"


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <CardsPage/>
      <Testimonials/>
      <FooterBanner/>
      <Footer/>
      <Scrollupbutton/>
    </>
  )
}

export default App
