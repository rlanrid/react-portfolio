import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const CommentWrite = () => {
    const [comment, setComment] = useState("");
    const user = useSelector((state) => state.user);

    const SubmitHandler = (e) => {
        e.preventDefault();

        if (!comment) {
            return alert("댓글을 작성해주세요.");
        }

        let body = {
            comment: comment,
            uid: user.uid,
        }

        axios
            .post("/api/comment/submit", body)
            .then((res) => {
                if (res.data.success) {
                    alert("댓글 작성이 성공하였습니다.");
                    window.location.reload();
                } else {
                    alert("댓글 작성이 실패했습니다.")
                }
            })
    }

    return (
        <div className="comment__form">
            <input
                placeholder="Leave a Comment"
                text="text"
                value={comment}
                onChange={(e) => { setComment(e.currentTarget.value) }}
            />
            <button
                onClick={(e) => {
                    SubmitHandler(e)
                }}
            >Write</button>
        </div>
    )
}

export default CommentWrite
