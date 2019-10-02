import React from 'react'

const ArticlePage = () => {
  const article = 
    {
      title: "This is awesome",
      body: "This is some awesome articles that I am reading",
      author: "bonny",
    }
  return (
    <>
          <ul>
            <li>{article.title}</li>
            <li>{article.body}</li>
            <li>{article.author}</li>
          </ul>
        
    </>
  )
}
export default ArticlePage;