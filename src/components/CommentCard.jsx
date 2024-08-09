import React from "react";

const CommentCard = ({ comment, username, onDelete }) => {

    const {
        comment_id,
        body,
        votes,
        author,
        created_at,
    } = comment

    const handleDelete = () => {
        onDelete(comment_id)
    }


    const date = new Date(created_at).toLocaleString()

    return (
        <div className="comment-card">
            <p className="comment-body">{body}</p>
            <div className="comment-meta">
                <span className="comment-author">By {author}</span>
                <span className="comment-date">{date}</span>
                <span className="comment-votes">{votes} votes</span>
                {author === username && (<button onClick={handleDelete} className="delete-comment-button">Delete Comment</button>)}
            </div>
        </div>
    );
};

export default CommentCard