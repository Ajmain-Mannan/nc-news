import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";
import axios from "axios";

const ArticlesByTopic = () => {
    const { topic_slug } = useParams();
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://be-nc-news-pvkk.onrender.com/api/articles?topic=${topic_slug}`)
            .then((response) => {
                setArticles(response.data.articles)
                setIsLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setIsLoading(false)
            })
    }, [topic_slug]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container">
        <div className="articles-by-topic-list">
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
    );
};

export default ArticlesByTopic