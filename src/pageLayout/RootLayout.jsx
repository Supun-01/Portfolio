import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import FooterSection from '../components/FooterSection'

function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <NavBar />
            <div className="flex-grow mx-5 md:mx-10 lg:container lg:mx-auto">
                <Outlet />
            </div>
            <FooterSection />
        </div>
    )
}

export default RootLayout
