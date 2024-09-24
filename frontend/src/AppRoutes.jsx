import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppNavbar from './Components/Navbar/Navbar'
import Pages from './Pages'
import Footer from './Components/Footer/Footer'

const AppRoutes = () => {
    return (
        <div>
            <Router>
                <AppNavbar />
                <Routes>
                    <Route path="/" element={<Pages />} />
                </Routes>
                <Footer/>
            </Router>
        </div>
    )
}

export default AppRoutes
