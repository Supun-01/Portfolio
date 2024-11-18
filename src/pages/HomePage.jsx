import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'
import Technologies from '../components/Technologies'

function HomePage() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <Technologies />
        </div>
    )
}

export default HomePage
