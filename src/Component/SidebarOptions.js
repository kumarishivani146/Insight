import { Add } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/SidebarOptions.css"

function SidebarOptions() {
    return (
        <div className='sidebarOptions'>
            <Link to="/internship" style={{ textDecoration: 'none' }}>
            <div className='sidebarOption' >
                <img src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/7/2015/05/theinternship.jpg" alt="Internship" style={{width:"90px",height:"100px"}}/>
                <p>Internship</p>
            </div>
            </Link>
            <Link to="/coding" style={{ textDecoration: 'none' }}>
            <div className='sidebarOption'>
                <img src="https://getwallpapers.com/wallpaper/full/9/4/d/358396.jpg" alt="Coding" style={{width:"90px",height:"100px"}}/>
                <p>Coding</p>
            </div>
            </Link>
            <Link to="/development" style={{ textDecoration: 'none' }}>
            <div className='sidebarOption'>
                <img src="https://www.janets.org.uk/wp-content/uploads/2021/05/AutoCAD-Programming-with-C-.NET_.jpg" alt="Development" style={{width:"90px",height:"100px"}}/>
                <p>Development</p>
            </div>
            </Link>
            <Link to="projects" style={{ textDecoration: 'none' }}>
            <div className='sidebarOption'>
                <img src="https://news.tennessee.edu/wp-content/uploads/sites/2/2018/08/2018-08-CFIC-AUBO-Robotics-UT-Mechanical-Engineering-Student-Project.jpg" alt="Projects" style={{width:"90px",height:"100px"}}/>
                <p>Projects</p>
            </div>
            </Link>
            <Link to="/science" style={{ textDecoration: 'none' }}>
            <div className='sidebarOption'>
                <img src="https://www.telegraph.co.uk/content/dam/education/SPARK/stem-awards/energy/young-people-engineering-girl-xlarge.jpg" alt="Science" style={{width:"90px",height:"100px"}}/>
                <p>Science</p>
            </div>
            </Link>
            <Link to="/mathematics" style={{ textDecoration: 'none' }}>
            <div className='sidebarOption'>
                <img src="https://www.capital-staff.com/wp-content/uploads/2017/11/shutterstock_291048176.jpg" alt="Mathematics" style={{width:"90px",height:"100px"}}/>
                <p>Mathematics</p>
            </div>
            </Link>
            <Link to="/technology" style={{ textDecoration: 'none' }}>
            <div className='sidebarOption'>
                <img src="https://www.connectria.com/wp-content/uploads/2019/06/cloud_technology_trends.jpeg" alt="Technology" style={{width:"90px",height:"100px"}}/>
                <p>Technology</p>
            </div>
            </Link>
            <Link to="/photography" style={{ textDecoration: 'none' }}>
            <div className='sidebarOption'>
                <img src="https://s3.amazonaws.com/fjwp/blog/wp-content/uploads/2018/01/04062352/6-Careers-in-Photography-That-Offer-Work-Flexibility.jpg" alt="Photography" style={{width:"90px",height:"100px"}}/>
                <p>Photography</p>
            </div>
            </Link>
            <Link to="/placement" style={{ textDecoration: 'none' }}>
            <div className='sidebarOption'>
                <img src="https://seofiles.s3.amazonaws.com/seo/media/uploads/2018/08/10/placement-officer-or-placement-cell.jpg" alt="Placement" style={{width:"90px",height:"100px"}}/>
                <p>Placement</p>
            </div>
            </Link>
            <Link to="/startup" style={{ textDecoration: 'none' }}>
            <div className='sidebarOption'>
                <img src="http://pureresiduals.com/wp-content/uploads/mechanical-engineering-startup-SOCIAL.jpg" alt="StartUp" style={{width:"90px",height:"100px"}}/>
                <p>StartUp</p>
            </div>
            </Link>
            <Link to="/innovation" style={{ textDecoration: 'none' }}>
            <div className='sidebarOption'>
                <img src="https://sacitcentral.com/wp-content/uploads/2019/07/https-_s3.amazonaws.com_wp-media-ss_2019_07_05184523_light-bulb-getty.jpg" alt="Innovation" style={{width:"90px",height:"100px"}}/>
                <p>Innovation</p>
            </div>
            </Link>
            <div className="sidebarOption">
                <Add />
                <p className="text">Discover Spaces</p>
            </div>
        </div>
    )
}

export default SidebarOptions
