import { Avatar } from '@material-ui/core'
import React from 'react'
import "../CSS/Post.css"
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
function Post() {
    const user=useSelector(selectUser)
    return (
        <div className='post'>
            <div className='post_info'>
                <Avatar/>
                <h5>{user.email}</h5>
                <small>TimeStamp</small>
            </div>
            <div className='post_body'>
                <div className='post_ques'>
                    <p>Qusetion</p>
                    <button className='post_btnAns'>Answer</button>
                </div>
                <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210106143435/Amazon-WoW-Program-%E2%80%93-For-Batch-2021-and-2022-min.png" alt='gbnjnk'/>
            </div>
            <div className='post_footer'>
                <div className='post_footerAction'>
                    <ArrowUpwardOutlinedIcon />
                    <ArrowDownwardOutlinedIcon />
                </div>
                <RepeatOutlinedIcon />
                <ChatBubbleOutlineOutlinedIcon />
                <div className="post__footerLeft">
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post
