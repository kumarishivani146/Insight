import React from 'react'
import '../CSS/Insight.css'
import Feed from './Feed'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
function Insight() {
    return (
        <div className="insight">
            <div className='logo-container'>
            <img src="../Images/logo.png" alt="ghhjk"/>
            </div>
            <div className='insight_container'>
            <Navbar/>
            <Feed/>
            <Sidebar/>
            </div>
        </div>
    )
}

export default Insight