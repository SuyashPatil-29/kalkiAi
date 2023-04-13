import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components"
import SimpleSlider from "./components/Carousel"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <SimpleSlider />
        <Hero />
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
      </BrowserRouter>
    </div>
  )
}

export default App
