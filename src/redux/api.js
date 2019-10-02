import axios from 'axios';
import { articles } from "./actions";

export const api = {
    articles: axios.get("http://localhost:9000/articles")
    .then(articles(data.articles))
    .catch(err => console.log(err))
}