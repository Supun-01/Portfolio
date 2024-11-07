import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import Technologies from "./components/Technologies"
import FooterSection from "./components/FooterSection"
import ProjectSection from "./components/ProjectSection"
import AboutSection from "./components/AboutSection"

function App() {
  return (
    <div className="bg-gray-50">
      <NavBar />
      <div className="mx-5 md:mx-10 lg:container lg:mx-auto">
        <HeroSection />
        <AboutSection />
        <Technologies />
        <ProjectSection />
      </div>
      <FooterSection />
    </div>
  )
}

export default App