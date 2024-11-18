import { Route, Routes } from "react-router-dom"

import NavBar from "./components/NavBar"
import FooterSection from "./components/FooterSection"
import HomePage from "./pages/HomePage"
import ProjectSection from "./components/ProjectSection"
import AboutSection from "./components/AboutSection"

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NavBar />
      <div className="flex-grow mx-5 md:mx-10 lg:container lg:mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectSection />} />
          <Route path="/about" element={<AboutSection />} />
        </Routes>
      </div>
      <FooterSection />
    </div>
  );
}


export default App