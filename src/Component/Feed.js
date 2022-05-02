import React, { useEffect, useState } from 'react'
import "../CSS/Feed.css"
import db from '../firebase';
import InsightBox from './InsightBox'
import Post from './Post'
function Feed() {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        db.collection('questions').orderBy('timestamp',"desc").onSnapshot(snapshot=>setPosts(snapshot.docs.map((doc)=>(({
            id:doc.id,
            question:doc.data()
        })))))
    },[])
    return (
        <div className="feed">
            <InsightBox/>
            {
                
                posts.map(({id,question})=>(
                    <Post
                        key={id}
                        Id={id}
                        imageUrl={question.imageUrl}
                        question={question.question}
                        timestamp={question.timestamp}
                        postUser={question.user}
                        answeredUser={question.answeredUser}
                    />
                ))
            }
            
            
        </div>
    )
}

export default Feed
