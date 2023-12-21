import React from 'react'

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
                    <div className="comment__form">
                        <input type="text" placeholder="Write Your Name" />
                        <textarea placeholder="Leave a Comment"></textarea>
                        <button>Write</button>
                    </div>
                    <div className="comment__list">
                        <div className="list__col c1">
                            <div className="list">
                                <div className="co__title">
                                    안녕하세요
                                </div>
                                <div className="co__author">
                                    글쓴이
                                </div>
                            </div>
                            <div className="list">
                                <div className="co__title">
                                    안녕하세요
                                </div>
                                <div className="co__author">
                                    글쓴이
                                </div>
                            </div>
                        </div>
                        <div className="list__col c2">
                            <div className="list">
                                <div className="co__title">
                                    안녕하세요
                                </div>
                                <div className="co__author">
                                    글쓴이
                                </div>
                            </div>
                        </div>
                        <div className="list__col c3">
                            <div className="list">
                                <div className="co__title">
                                    안녕하세요
                                </div>
                                <div className="co__author">
                                    글쓴이
                                </div>
                            </div>
                        </div>
                        <div className="list__col c4">
                            <div className="list">
                                <div className="co__title">
                                    안녕하세요
                                </div>
                                <div className="co__author">
                                    글쓴이
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comment
