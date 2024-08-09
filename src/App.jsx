import React from "react"
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Articles from './components/Articles'
import ArticlePage from "./components/ArticlePage"
import Topics from "./components/Topics"
import ArticlesByTopic from "./components/ArticlesByTopic"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topic_slug" element={<ArticlesByTopic />} />
      </Routes>
    </>
  )
}

export default App
