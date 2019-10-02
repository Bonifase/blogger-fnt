import axios from "axios";

export const ARTICLES = "ARTICLES";
export const ITEM_ADDED = "ITEM_ADDED";

export const articles = (articles) => {
    return {
        type: "ARTICLES",
        articles: articles
    }
}
export const message = (message) => {
  return {
      type: "ITEM_ADDED",
      message
  }
}


export const fetchArticles = () => {
    return dispatch => {
      axios.get("http://localhost:9000/articles")
      .then(data => dispatch(articles(data.data.articles))).catch(err => console.log(err));
    };
  }

  export const addArticle = (data) => {
    return dispatch => {
      axios.post('http://localhost:9000/articles/add-article',data, { headers: { 'Content-Type': 'application/json', } })
      .then(res => {
        console.log(res.data)
        dispatch(message(res.data))}).catch(err => console.log(err));
    };
  }

  export const addComment = (data, articleId) => {
    return dispatch => {
      axios.post(`http://localhost:9000/article/add-comment/${articleId}`,data, { headers: { 'Content-Type': 'application/json', } })
      .then(res => {
        console.log(res.data)
        dispatch(message(res.data))}).catch(err => console.log(err));
    };
  }