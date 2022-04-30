import React, { useEffect, useState } from 'react'
import "../CSS/Feed.css"
import db from '../firebase';
import InsightBox from './InsightBox'
import Post from './Post'
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
function Questions() {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        db.collection('questions').orderBy('timestamp',"desc").onSnapshot(snapshot=>setPosts(snapshot.docs.map((doc)=>(({
            id:doc.id,
            question:doc.data()
        })))))
    },[]);
    const user=useSelector(selectUser);
    return (
        <div className="feed">
            <InsightBox/>
            {
                posts.map(({id,question})=>(
                    user.email===question.user.email&&<Post
                        key={id}
                        Id={id}
                        imageUrl={question.imageUrl}
                        question={question.question}
                        timestamp={question.timestamp}
                        postUser={question.user}

                    />
                ))
            }
        </div>
    )
}

export default Questions