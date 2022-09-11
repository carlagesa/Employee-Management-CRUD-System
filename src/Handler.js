import React from 'react'
import TeamLeads from './Components/TeamLeads'
import About from './Components/About'
import App from './App'
import Home from './Home'
import Contact from './Components/Contact'
import { Route, Routes } from 'react-router-dom'

function Handler() {
    return (
        <div>
            <Routes>
            <Route path="/" element={<Home />} />
                <Route path="/app" element={<App />} />
                <Route path="/teamleads" element={<TeamLeads />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact-us" element={<Contact />} />

            </Routes>
        </div>
    )
}
export default Handler