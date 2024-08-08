import React, { useState, useEffect } from "react";
import { getCommentsById } from "../api";
import CommentCard from "./CommentCard";

const Comments = ({ article_id }) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


useEffect(() => {
    getCommentsById(article_id)
    .then((comments) => {
        setComments(comments)
        setIsLoading(false)
    }).catch((err) => {
        setError(err.message)
        setLoading(false)
    })
}, [article_id])

if (isLoading) return <p>Loading...</p>
if (error) return <p>{error}</p>

return (
    <div className="comments-list">
        <h3>Comments</h3>
        {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />
        })}
    </div>
)
};

export default Comments