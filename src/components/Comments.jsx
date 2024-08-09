import React, { useState, useEffect } from "react";
import { getCommentsById, deleteComment } from "../api";
import CommentCard from "./CommentCard";

const Comments = ({ article_id, username, comments, setComments }) => {
    const [isDeletingComment, setIsDeletingComment] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (!comments.length) {
            getCommentsById(article_id)
                .then((comments) => {
                    setComments(comments)
                    setIsLoading(false)
                }).catch((err) => {
                    setError(err.message)
                    setIsLoading(false)
                });
        } else {
            setIsLoading(false)
        }
    }, [article_id, comments, setComments])

    const handleDelete = (comment_id) => {
        if (isDeletingComment) return;
        setIsDeletingComment(true);

        deleteComment(comment_id).then(() => {
            setComments((comments) => comments.filter((comment) => comment.comment_id !== comment_id))
            setIsDeletingComment(false);
        })
            .catch((err) => {
                setError(err.message)
                setIsDeletingComment(false)
            });
    };

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <div className="comments-list">
            <h3>Comments</h3>
            {comments.map((comment) => {
                return <CommentCard key={comment.comment_id} comment={comment} username={username} onDelete={handleDelete} />
            })}
        </div>
    )
};

export default Comments