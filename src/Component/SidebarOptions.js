import { Add } from '@material-ui/icons'
import React from 'react'
import "../CSS/SidebarOptions.css"
function SidebarOptions() {
    return (
        <div className='sidebarOptions'>
            <div className='sidebarOption'>
                <img src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/7/2015/05/theinternship.jpg" alt="Internship"/>
                <p>Internship</p>
            </div>
            <div className='sidebarOption'>
                <img src="https://getwallpapers.com/wallpaper/full/9/4/d/358396.jpg" alt="Coding"/>
                <p>Coding</p>
            </div>
            <div className='sidebarOption'>
                <img src="https://www.janets.org.uk/wp-content/uploads/2021/05/AutoCAD-Programming-with-C-.NET_.jpg" alt="Development"/>
                <p>Development</p>
            </div>
            <div className='sidebarOption'>
                <img src="https://news.tennessee.edu/wp-content/uploads/sites/2/2018/08/2018-08-CFIC-AUBO-Robotics-UT-Mechanical-Engineering-Student-Project.jpg" alt="Projects"/>
                <p>Projects</p>
            </div>
            <div className='sidebarOption'>
                <img src="https://www.telegraph.co.uk/content/dam/education/SPARK/stem-awards/energy/young-people-engineering-girl-xlarge.jpg" alt="Science"/>
                <p>Science</p>
            </div>
            <div className='sidebarOption'>
                <img src="https://www.capital-staff.com/wp-content/uploads/2017/11/shutterstock_291048176.jpg" alt="Mathematics"/>
                <p>Mathematics</p>
            </div>
            <div className='sidebarOption'>
                <img src="https://www.connectria.com/wp-content/uploads/2019/06/cloud_technology_trends.jpeg" alt="Technology"/>
                <p>Technology</p>
            </div>
            <div className='sidebarOption'>
                <img src="https://s3.amazonaws.com/fjwp/blog/wp-content/uploads/2018/01/04062352/6-Careers-in-Photography-That-Offer-Work-Flexibility.jpg" alt="Photography"/>
                <p>Photography</p>
            </div>
            <div className='sidebarOption'>
                <img src="https://seofiles.s3.amazonaws.com/seo/media/uploads/2018/08/10/placement-officer-or-placement-cell.jpg" alt="Placement"/>
                <p>Placement</p>
            </div>
            <div className='sidebarOption'>
                <img src="http://pureresiduals.com/wp-content/uploads/mechanical-engineering-startup-SOCIAL.jpg" alt="StartUp"/>
                <p>StartUp</p>
            </div>
            <div className='sidebarOption'>
                <img src="https://sacitcentral.com/wp-content/uploads/2019/07/https-_s3.amazonaws.com_wp-media-ss_2019_07_05184523_light-bulb-getty.jpg" alt="Innovation"/>
                <p>Innovation</p>
            </div>
            <div className="sidebarOption">
                <Add />
                <p className="text">Discover Spaces</p>
            </div>
        </div>
    )
}

export default SidebarOptions
