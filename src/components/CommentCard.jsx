import React from "react";

const CommentCard = ({ comment }) => {

    const {
        body,
        votes,
        author,
        created_at
    } = comment


    const date = new Date(created_at).toLocaleString()

    return (
        <div className="comment-card">
            <p className="comment-body">{body}</p>
            <div className="comment-meta">
                <span className="comment-author">By {author}</span>
                <span className="comment-date">{date}</span>
                <span className="comment-votes">{votes} votes</span>
            </div>
        </div>
    );
};

export default CommentCard