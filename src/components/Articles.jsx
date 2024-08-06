import React, {useState, useEffect} from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";

const Articles = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios
        .get("https://be-nc-news-pvkk.onrender.com/api/articles")
        .then((response) => {
            setArticles(response.data.articles)
            setIsLoading(false)
        }).catch((err) => {
            setError(err.message)
            setIsLoading(false)
        });
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div className="articles-list">
            <h2>Articles</h2>
            <ul>
            {articles.map((article) => {
                return <li key={article.article_id}>
                    <ArticleCard article={article}/>
                </li>            
            })}
            </ul>
        </div>
    )

}

export default Articles