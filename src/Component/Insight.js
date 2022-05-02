import React from 'react'
import '../CSS/Insight.css'
import Feed from './Feed'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Internship from './Internship'
import Development from './Development'
import Projects from './Projects'
import Science from './Science'
import Mathematics from './Mathematics'
import Coding from './Coding'
import Technology from './Technology'
import Photography from './Photography'
import Placement from './Placement'
import Startup from './Startup'
import Innovation from './Innovation'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Questions from './Questions'
import Answered from './Answered'
function Insight() {
    return (
        //tadadi1015@sofrge.com
        <Router>
        <div className="insight">
            <div className='logo-container'>
            <img src="../Images/logo.png" alt="ghhjk"/>
            </div>
            <div className='insight_container'>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Feed/>}/>
                <Route exact path="/internship" element={<Internship/>}/>
                <Route exact path="/coding" element={<Coding/>}/>
                <Route exact path="/Development" element={<Development/>}/>
                <Route exact path="/projects" element={<Projects/>}/>
                <Route exact path="/science" element={<Science/>}/>
                <Route exact path="/mathematics" element={<Mathematics/>}/>
                <Route exact path="/technology" element={<Technology/>}/>
                <Route exact path="/photography" element={<Photography/>}/>
                <Route exact path="/placement" element={<Placement/>}/>
                <Route exact path="/startup" element={<Startup/>}/>
                <Route exact path="/innovation" element={<Innovation/>}/>
                <Route exact path="/questions" element={<Questions/>}/>
                <Route exact path="/answered" element={<Answered/>}/>
            </Routes>
            <Sidebar/>
            </div>
        </div>
        </Router>
    )
}

export default Insight