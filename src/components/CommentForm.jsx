import React, {useState, useEffect} from "react";
import { postComment } from "../api";

const CommentForm = ({article_id, username, onNewComment}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [body, setBody] = useState("")
    const [success, setSuccess] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!body.trim()) {
            setError('Please enter comment')
            return;
        }
        setIsLoading(true)
        setError(null)
        setSuccess(false)

        postComment(article_id, username, body).then((comment) => {
            setBody("")
            setSuccess(true)
            onNewComment(comment)
            setIsLoading(false)
        })
        .catch((err) => {
            setError(err.message)
            setIsLoading(false)
        });
    };

    return (
        <form onSubmit={handleSubmit} className="comment-form">
            <textarea value={body} onChange={(event) => setBody(event.target.value)}
                placeholder="enter comment here" disabled={isLoading} />
                <button type="submit" disabled={isLoading}>Submit</button>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">Thank you for your Comment!</p>}
        </form>
    )

};


export default CommentForm