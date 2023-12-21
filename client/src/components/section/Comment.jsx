import React from 'react'
import CommentWrite from '../comment/CommentWrite'
import CommentList from '../comment/CommentList'

const Comment = (props) => {
    return (
        <section id="comment">
            <h2 className="blind">코멘트 섹션</h2>
            <div className="comment__wrap containerH">
                <div className="comment__title secT">
                    <img src={props.arrowImg} alt={props.arrowAlt} />
                    <h2>Comment</h2>
                    <div className="title__line"></div>
                </div>
                <div className="comment__cont">
                    <CommentWrite />
                    <CommentList />
                </div>
            </div>
        </section>
    )
}

export default Comment
