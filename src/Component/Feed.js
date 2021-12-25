import React from 'react'
import "../CSS/Feed.css"
import InsightBox from './InsightBox'
import Post from './Post'
function Feed() {
    return (
        <div className="feed">
            <InsightBox/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Feed
