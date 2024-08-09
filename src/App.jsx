import React from "react"
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Articles from './components/Articles'
import Home from "./components/Home"
import ArticlePage from "./components/ArticlePage"

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Articles />} />
      <Route path="/articles/:article_id" element={<ArticlePage/>} />
      </Routes>
    </>
  )
}

export default App
