import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CommentContent from './CommentContent';
import { useSelector } from 'react-redux';

const CommentList = (props) => {
    const [commentList, setCommentList] = useState([]);
    const user = useSelector((state) => state.user)

    const getCommentList = () => {

        axios
            .post("/api/comment/list")
            .then((res) => {
                if (res.data.success) {
                    console.log(res);
                    if (props.state === true) {
                        const myComments = commentList.filter(comment => comment.author.uid === user.uid);
                        setCommentList(myComments);
                    } else {
                        setCommentList([...res.data.commentList]);
                    }

                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getCommentList();
    }, [user])

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
