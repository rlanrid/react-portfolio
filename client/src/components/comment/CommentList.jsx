import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CommentContent from './CommentContent';

const CommentList = () => {
    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        axios
            .post("/api/comment/getComment")
            .then((res) => {
                if (res.data.success) {
                    setCommentList([...res.data.commentList]);
                    console.log(commentList)
                }
            })
    }, [])

    return (
        <div className="comment__list">
            {commentList.map((comment, idx) => {
                return (
                    <CommentContent comment={comment} key={idx} />
                )
            })}
        </div>
    )
}

export default CommentList
