import axios from "axios";

const api = axios.create({
    baseURL: "https://be-nc-news-pvkk.onrender.com/api"
});

export const getArticles = () => {
    return api.get("/articles")
        .then((response) => {
            return response.data.articles
        })
        .catch((error) => {
            throw error
        })
}

export const getArticleById = (article_id) => {
    return api.get(`/articles/${article_id}`)
        .then((response) => {
            return response.data.article
        })
        .catch((error) => {
            throw error
        })
}

export const getCommentsById = article_id => {
    return api.get(`/articles/${article_id}/comments`)
        .then(response => {
            return response.data.comments
        })
}

export const postComment = (article_id, username, body) => {
    return api.post(`/articles/${article_id}/comments`, { username, body })
        .then((response) => response.data.comment)
        .catch((error) => {
            throw error
        });
};

export const getUsers = () => {
    return api.get("/users")
        .then((response) => response.data.users)
        .catch((error) => {
            throw error
        });
};