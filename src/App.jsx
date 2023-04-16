import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ComputersCanvas} from "./components"
import ImgSlider from "./components/Carousel"
import IronManCanvas from "./components/canvas/IronMan"
import Carousel2 from "./components/Carousel2"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <div className="flex items-center justify-center pt-28 pl-16">
        <Carousel2 />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
           <Contact />
           <StarsCanvas />
        </div>
        </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
