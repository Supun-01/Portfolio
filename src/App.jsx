import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import HomePage from "./pages/HomePage"
import ProjectSection from "./components/ProjectSection"
import AboutSection from "./components/AboutSection"
import RootLayout from "./pageLayout/RootLayout"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutSection />} />
        <Route path="project" element={<ProjectSection />} />
      </Route>
    )
  )


  return (
    <RouterProvider router={router} />
  );
}


export default App