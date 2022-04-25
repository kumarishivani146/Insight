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
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Modal from 'react-modal';
import { useState } from 'react';
function Post({id, question, image, timestamp, postUser}) {
    const user=useSelector(selectUser);
    const [openModel, setOpenModel]=useState(false);
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right:'auto',
          bottom:'auto',
          width:'40%',
          height:'70%',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    return (
        <div className='post'>
            <div className='post_info'>
                <Avatar src={postUser.photo}/>
                <h5>{postUser.displayName?postUser.displayName:postUser.email}</h5>
                <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
            </div>
            <div className='post_body'>
                <div className='post_ques'>
                    <p>{question}</p>
                    <button className='post_btnAns' onClick={()=>setOpenModel(true)}>Answer</button>
                    <Modal isOpen={openModel} onRequestClose={()=>setOpenModel(false)} style={customStyles}>
                        <div className="modal_question">
                            <h1>This is a test Question</h1>
                            <p>asked by {""}<span>user</span>{" "}on{" "}timestamp</p>
                        </div>
                        <div className="modal_answer">
                            <ReactQuill style={{minHeight:"10em"}}placeholder='Enter your answer'/>
                        </div>
                        <div className="modal_buttons" style={{display:"flex",flexDirection:"column"}}>
                            <input class="op_btn" style={{backgroundColor:"#4DBDEB",width: "50%",padding: "15px",borderRadius:" 50px",margin:" 20px auto",}} type="submit" placeholder='Add query'/>
                            <input class="op_btn" style={{backgroundColor:"black",color:"white",width: "50%",padding: "15px",borderRadius:" 50px",margin:" 20px auto",}}type="button" value='cancel' />
                        </div>
                    </Modal>
                </div>
                <img src={image} alt='gbnjnk'/>
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
