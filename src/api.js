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