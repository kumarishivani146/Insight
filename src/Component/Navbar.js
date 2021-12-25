import React, { useState } from 'react'
import HomeIcon from '@material-ui/icons/Home'
import FeaturedPlayListOutlinedIcon from'@material-ui/icons/FeaturedPlayListOutlined'
import AssignmentTurnedInOutlinedIcon from'@material-ui/icons/AssignmentTurnedInOutlined'
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined'
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import { Avatar,Button } from '@material-ui/core'
import "../CSS/Navbar.css"
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Modal from 'react-modal'

function Navbar() {

    const user=useSelector(selectUser)
    const [openModel, setOpenModel]=useState(false)
    return (
        <div className="Iheader">
            <div className="Iheader_icons">
                <div className="Iheader_search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search Insight"></input>
                </div>
                <div className="Iheader_Rem">
                    <div className="Iheader_avatar">
                    <Avatar onClick={()=>auth.signOut()}src={user.photo}/>
                    <p class="text">My Profile</p>
                    </div>
                    <div className='lang_icon'>
                    <LanguageIcon/>
                    <p>Language</p></div>
                    <Button onClick={()=>setOpenModel(true)}>ADD Query</Button>
                    <Modal isOpen={openModel} onRequestClose={()=>setOpenModel(false)}>
                        <div className='modal_title'>
                            <h5>Add Question</h5>
                            <div className='modal_info'>
                                <p>Modal_body</p>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className="Iheader_icon">
                    <HomeIcon/><p>Home</p>
                </div>
                <div className="Iheader_icon">
                    <FeaturedPlayListOutlinedIcon/><p>Questions</p>
                </div>
                <div className="Iheader_icon">
                    <AssignmentTurnedInOutlinedIcon/><p>Answered</p>
                </div>
                <div className="Iheader_icon">
                    <PeopleOutlinedIcon/><p>Spaces</p>
                </div>
                <div className="Iheader_icon">
                    <NotificationsOutlinedIcon/><p>Notification</p>
                </div>
                
            </div>
            

        </div>
    )
}

export default Navbar