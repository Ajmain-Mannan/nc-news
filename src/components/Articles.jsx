import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";

const Articles = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getArticles()
            .then((articles) => {
                setArticles(articles);
                setIsLoading(false)
            }).catch((err) => {
                setError(err.message)
                setIsLoading(false)
            });
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div className="container">
            <div className="articles-list">
                <h2>Articles</h2>
                <ul>
                    {articles.map((article) => {
                        return <li key={article.article_id}>
                            <ArticleCard article={article} />
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )

}

export default Articles