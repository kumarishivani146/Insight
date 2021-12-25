import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import "../CSS/InsightBox.css"
import { selectUser } from '../features/userSlice'
function InsightBox() {
    const user=useSelector(selectUser)
    return (
        <div className='insightBox'>
            <div className="InsightBox__info">
                <Avatar/>
                <h5>{user.email}</h5>
            </div>
            <div className="InsightBox__insight">
                <p>What is your question or link?</p>
            </div>
        </div>
    )
}

export default InsightBox
