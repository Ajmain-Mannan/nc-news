import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

const Topics = () => {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getTopics().then((topics) => {
            setTopics(topics)
            setIsLoading(false)
        })
        .catch((err) => {
            setError(err.message)
            setIsLoading(false)
        });
    }, []);

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
<div className="container">
            <div className="topics-list">
                <h2>Topics</h2>
                <div className="topics-cards">
                    {topics.map((topic) => (
                        <div key={topic.slug} className="topic-card">
                            <h3 className="topic-title">
                                <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Topics;