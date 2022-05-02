import React, { useEffect, useState } from 'react'
import db from '../firebase';
import InsightBox from './InsightBox'
import Post from './Post'
import { useSelector} from 'react-redux';
import { selectUser } from '../features/userSlice';
import { selectQuesionId, selectQuesionName, setQuestionInfo } from '../features/questionSlice';

function Answered() {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        db.collection('questions').orderBy('timestamp',"desc").onSnapshot(snapshot=>setPosts(snapshot.docs.map((doc)=>(({
            id:doc.id,
            question:doc.data()
        })))))
    },[]);

    const questionId= useSelector(selectQuesionId);

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

    const [getAns, setGetAns]=useState([]);
    const user=useSelector(selectUser);
    const arr=[];
    return (
        <div className="feed">
            <InsightBox/>
            {
                posts.map(({id,question})=>(
                    question.answeredUser.includes(user.email)&&<Post
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

export default Answered