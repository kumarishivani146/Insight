import { Avatar } from '@material-ui/core'
import React, { useEffect } from 'react'
import "../CSS/Post.css"
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { DockTwoTone, MoreHorizOutlined, QuestionAnswerOutlined, ShareOutlined } from "@material-ui/icons";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../features/userSlice';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Modal from 'react-modal';
import { useState } from 'react';
import { selectQuesionId, selectQuesionName, setQuestionInfo } from '../features/questionSlice';
import { serverTimestamp } from "firebase/firestore";
import db from '../firebase';
import Parser from 'html-react-parser';
import Query from './Query';

Modal.setAppElement('#root')
function Post({Id, question, imageUrl, timestamp, postUser}) {
    const [openModel, setOpenModel]=useState(false);
    const [context,setContext]=useState(question);
    const [contextUrl,setContextUrl]=useState(imageUrl);
    const [editOption,setTEditOption] =useState("none");
    const user=useSelector(selectUser);
    const dispatch= useDispatch();
    const questionId= useSelector(selectQuesionId);
    const questionName=useSelector(selectQuesionName);
    const [ans, setAns]=useState("");
    const [openQuillModel, setOpenQuillModel]=useState(false);
    const [getAns, setGetAns]=useState([]);
    useEffect(() => {
        if (questionId) {
          db.collection("questions")
            .doc(questionId)
            .collection("answers")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
              setGetAns(
                snapshot.docs.map((doc) => ({ id: doc.id, answers: doc.data() }))
              )
            );
        }
      }, [questionId]);
      const handleQuill = (value) => {
        setAns(value);
      };



    const handleEditOption=()=>{
        // console.log(editOption)
        if(editOption==="none")
        setTEditOption("block");
        else
        setTEditOption("none");
    }

    // const handleUpVote=()=>{
    //     console.log(ansId)
    // }


    const handleUpdateQuestion=(e)=>{
        e.preventDefault()
        if(questionId){
            db.collection('questions').doc(questionId).update({
                question: context,
                imageUrl: contextUrl,
            });
        }
        setOpenModel(false);
    }
    const handleDeleteQuestion=(e)=>{
        e.preventDefault()
        if(window.confirm("you sure to delete?")){
            if(questionId){
                db.collection('questions').doc(questionId).delete();
            } 
        }
        // if(questionId){
        //     db.collection('questions').doc(questionId).delete();
        // }
    }
    const handleAns=(e)=>{
        e.preventDefault()
        if(questionId){
            db.collection('questions').doc(questionId).collection('answers').add({
                questionId: questionId,
                timestamp: serverTimestamp(),
                answer: ans,
                user: user,
                upVote:0,
                downVote:0
            })
            // console.log(questionId, questionName);
            setAns("");
            setOpenQuillModel(false);
        }
    }
    
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
        <div className='post' onClick={()=>dispatch(setQuestionInfo({
            questionId: Id,
            questionName: question,
        }))}>
            <div className='post_info'>
                <Avatar src={postUser.photo}/>
                <h5>{postUser.displayName?postUser.displayName:postUser.email}</h5>
                <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
            </div>
            <div className='post_body'>
                <div className='post_ques'>
                    <p>{question}</p>
                    <button className='post_btnAns' onClick={()=>setOpenQuillModel(true)}>Answer</button>
                    <Modal isOpen={openQuillModel} onRequestClose={()=>setOpenQuillModel(false)} style={customStyles}>
                        <div className="modal_question">
                            <h1>{question}</h1>
                            <p>Asked by <strong>{postUser.displayName?postUser.displayName:postUser.email+" "}</strong>on{new Date(timestamp?.toDate()).toLocaleString()}</p>
                        </div>
                        <div className="modal_answer">
                        <ReactQuill
                            value={ans}
                            onChange={handleQuill}
                            placeholder="Enter your answer"
                        />
                        </div>
                        <div className="modal_buttons" style={{display:"flex",flexDirection:"column"}}>
                            <input class="op_btn" style={{backgroundColor:"#4DBDEB",width: "50%",padding: "15px",borderRadius:" 50px",margin:" 20px auto",}} type="submit" onClick={handleAns} placeholder='Add query'/>
                            <input class="op_btn" style={{backgroundColor:"black",color:"white",width: "50%",padding: "15px",borderRadius:" 50px",margin:" 20px auto",}}type="button" value='cancel' onClick={()=>{setOpenQuillModel(false)}}/>
                        </div>
                    </Modal>
                </div>
                <div className="post_answer">
                <div className="post_answer" style={{whiteSpace:"normal",lineHeight:"1.5"}}>
                {getAns.map(({ id, answers }) => (
                    <p key={id} style={{ position: "relative", paddingBottom: "5px" }}>
                    {Id === answers.questionId ? (
                        <span>
                        {Parser(answers.answer)}
                        {/* <br /> */}
                        <span
                            style={{
                            position: "absolute",
                            color: "gray",
                            fontSize: "small",
                            display: "flex",
                            right: "0px",
                            }}
                        >
                            <span style={{ color: "#b92b27" }}>
                            {Parser(answers.user.displayName
                                ? answers.user.displayName
                                : answers.user.email)}{" "}
                            on{" "}
                            {new Date(answers.timestamp?.toDate()).toLocaleString()}
                            </span>
                        </span>
                        <div className='post_footerAction'>
                            <ArrowUpwardOutlinedIcon onClick={()=>{
                                if(id){
                                    db.collection('questions').doc(questionId).collection('answers').doc(id).update({
                                        upVote:(answers.upVote+1),
                                    })
                                }
                                
                            }}/>{answers.upVote}
                            <ArrowDownwardOutlinedIcon onClick={()=>{
                                if(id){
                                    db.collection('questions').doc(questionId).collection('answers').doc(id).update({
                                        downVote:(answers.downVote+1),
                                    })
                                }
                                
                            }}/>{answers.downVote}
                        </div>
                        </span>
                    ) : (
                        ""
                    )}
                    </p>
                ))}
                </div>
                </div>
                {imageUrl !== "" && <img src={imageUrl} alt="url" style={{width:"100%"}}/>}
            </div>
            <div className="edit" style={{display:editOption}}>
                {/* {console.log(user, postUser)} */}
                {user.email===postUser.email?(
                    <span>
                    <input style={{backgroundColor:"black",color:"white",width: "25%",padding: "2px",borderRadius:" 50px",margin:" 20px 10px",}}type="button" value='Edit question' onClick={()=>setOpenModel(true)}/>
                    <Modal isOpen={openModel} onRequestClose={()=>setOpenModel(false)} style={customStyles}>
                        
                        <div className='modal_title'>
                            <h5>Edit gvhcjb Question</h5>
                            <div className='modal_info'>
                                <div className='modal_user_info'>
                                <Avatar className='avatar'/><h5>{user.email}</h5>
                                </div>
                                <div className='modal_body' style={{display:"flex",flexDirection:"column",justifyContent:"flex-end"}}>
                                    <input id="add_query" type="text" value={context} onChange={(e)=>setContext(e.target.value)} placeholder='Write your Query here' required/>
                                    <input id="add_link" type="text" value={contextUrl} onChange={(e)=>setContextUrl(e.target.value)}placeholder='Any link you want to insert'/>
                                    {
                                        contextUrl!==""&&<img style={{height:"40vh",
                                        objectFit:"contain"}}src={contextUrl} alt="ContextImage" />
                                    }
                                    
                                    <input class="op_btn" style={{backgroundColor:"#4DBDEB"}} type="submit" value="submit" onClick={handleUpdateQuestion}/>
                                    <input class="op_btn" style={{backgroundColor:"black",color:"white"}} type="button" value='close' onClick={()=>setOpenModel(false)}/>
                                    
                                </div>
                            </div>
                        </div>
                    </Modal> 
                    <input style={{backgroundColor:"black",color:"white",width: "25%",padding: "2px",borderRadius:" 50px",margin:" 20px auto",}}type="button" value='Delete question' onClick={handleDeleteQuestion}/>
                    </span>
                ):("")}
            </div>
            {/* <div className="test_div" >
                hsbcasjxnj
            </div> */}
            <div className='post_footer'>
                
                <RepeatOutlinedIcon />
                <ChatBubbleOutlineOutlinedIcon />
                <div className="post__footerLeft">
                    <ShareOutlined />
                    <MoreHorizOutlined onClick={handleEditOption}/>
                </div>
            </div>
        </div>
    )
}

export default Post
