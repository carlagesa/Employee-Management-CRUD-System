import React from 'react'
import TeamLeads from './Components/TeamLeads'
import About from './Components/About'
import App from './App'
import { Route, Routes } from 'react-router-dom'

function Handler() {
    return (
        <div>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<App />} />
                <Route path="/teamleads" element={<TeamLeads />} />
            </Routes>
        </div>
    )
}
export default Handler