import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getArticleById, getUsers } from "../api"
import Comments from "./Comments"
import CommentForm from "./CommentForm"

const ArticlePage = () => {
    const { article_id } = useParams()
    const [article, setArticle] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [users, setUsers] = useState([])
    const [loggedInUser, setLoggedInUser] = useState("")
    const [comments, setComments] = useState("")

    useEffect(() => {
        getArticleById(article_id)
            .then((article) => {
                setArticle(article)
                setIsLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setIsLoading(false)
            })
    }, [article_id])

    useEffect(() => {
        getUsers()
            .then((users) => {
                setUsers(users);
                setLoggedInUser(users[0].username || "")
            })
            .catch((err) => {
                setError(err.message)
            });
    }, []);

    const handleNewComment = (comment) => {
        setComments((comments) => [comment, ...comments]);
        setArticle((article) => ({
            ...article,
            comment_count: article.comment_count + 1
        }));
    };

    const handleUserChange = (event) => {
        setLoggedInUser(event.target.value)
    };

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    const {
        title,
        topic,
        author,
        body,
        created_at,
        votes,
        article_img_url,
    } = article

    const date = new Date(created_at).toLocaleString()

    return (
        <div className="article-detail">
            <div className="article-meta">
                <p>By {author}</p>
                <p>{date}</p>
            </div>
            <h2>{title}</h2>
            <p className="article-topic">{topic}</p>
            <img src={article_img_url} alt="article image" className="article-image" />
            <div className="article-content">
                {body}
            </div>
            <div className="article-review">
                <span>{votes} votes</span>
            </div>
            <div className="user-login-container">
                <label htmlFor="user-login" className="user-login-label">Select Username</label>
                <select id="user-login" value={loggedInUser} onChange={handleUserChange} className="user-login">
                    {users.map((user) => {
                       return <option key={user.username} value={user.username}>{user.username}</option>
                    })}
                </select>
            </div>
            <CommentForm article_id={article_id} username={loggedInUser} onNewComment={handleNewComment} />
            <Comments article_id={article_id} comments={comments} setComments={setComments} username={loggedInUser} />
        </div>
    );
};

export default ArticlePage