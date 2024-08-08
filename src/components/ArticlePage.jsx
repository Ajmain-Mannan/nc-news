import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { getArticleById } from "../api"
import Comments from "./Comments"

const ArticlePage = () => {
    const { article_id } = useParams()
    const [article, setArticle] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

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
        <Comments article_id={article_id} />
    </div>
)

}

export default ArticlePage