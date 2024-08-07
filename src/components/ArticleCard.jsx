import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
    const {
        article_id,
        title,
        topic,
        author,
        created_at,
        votes,
        comment_count,
        article_img_url
    } = article

    const date = new Date(created_at).toLocaleString()

    return (
        <div className="article-card">
            <div className="article-card-header">
                <img src={article_img_url} alt={title} className="article-card-image" />
                <h2 className="article-card-title">
                    <Link to={`/articles/${article_id}`}>{title}</Link>
                </h2>
            </div>
            <div className="article-card-body">
                <p className="article-card-topic">{topic}</p>
                <div className="article-card-meta">
                    <p>By {author}</p>
                    <p>{date}</p>
                </div>
                <div className="article-review">
                    <span>{votes} votes</span>
                    <span>{comment_count} comments</span>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard