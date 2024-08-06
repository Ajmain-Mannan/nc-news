import React from "react";

const ArticleCard = ({ article }) => {
    const {
        title,
        topic,
        author,
        created_at,
        votes,
        comment_count
    } = article

    const date = new Date(created_at).toLocaleString()

    return (
        <div className="article-card">
        <h2>{title}</h2>
        <div className="article-info">
        <p>{topic}</p>
        <p>{author}</p>
        <p>{date}</p>
        <div className="article-review">
        <span>Votes: {votes}</span>
        <span>comments: {comment_count}</span>
        </div>
        </div>
        </div>
    );
};

export default ArticleCard