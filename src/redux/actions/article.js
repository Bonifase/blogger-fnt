import axios from "axios";

export const ARTICLES = "ARTICLES";
export const ITEM_ADDED = "ITEM_ADDED";
export const ARTICLE_DELETED = "ARTICLE_DELETED";

export const articles = (articles) => {
    return {
        type: "ARTICLES",
        articles: articles
    }
}
export const message = (message) => {
  return {
      type: ITEM_ADDED,
      message
  }
}
export const articleDeleted = (message) => {
  return {
      type: ARTICLE_DELETED,
      message
  }
}

// const TOKEN = JSON.parse(localStorage.getItem("JWT"));

export const fetchArticles = () => {
    return dispatch => {
      axios.get("http://localhost:9000/articles")
      .then(data => dispatch(articles(data.data.articles))).catch(err => console.log(err));
    };
  }

  export const addArticle = (data) => {
    return dispatch => {
      const TOKEN = JSON.parse(localStorage.getItem("JWT"))
      axios.post('http://localhost:9000/articles/add-article',data, { headers: { 'Content-Type': 'application/json', Authorization: "Bearer " + TOKEN, } })
      .then(res => {
        console.log(res.data)
        dispatch(message(res.data))}).catch(err => console.log(err));
    };
  }

  export const deleteArticle = (articleId) => {
    return dispatch => {
      const TOKEN = JSON.parse(localStorage.getItem("JWT"))
      axios.delete(`http://localhost:9000/articles/${articleId}`, { headers: { 'Content-Type': 'application/json',  Authorization: "Bearer " + TOKEN, } })
      .then(res => {
        dispatch(articleDeleted(res.data))})
    };
  }

  export const addComment = (data, articleId) => {
    return dispatch => {
      const TOKEN = JSON.parse(localStorage.getItem("JWT"))
      axios.post(`http://localhost:9000/articles/add-comment/${articleId}`,data, { headers: { 'Content-Type': 'application/json',  Authorization: "Bearer " + TOKEN, } })
      .then(res => {
        dispatch(message(res.data))})
    };
  }