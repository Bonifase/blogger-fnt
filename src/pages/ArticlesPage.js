import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { fetchArticles } from "../redux/actions/article"
import ReadMoreAndLess from 'react-read-more-less';
import NewComment from './NewComment';
import DeleteArticle from './DeleteArticle';
import UpdateArticle from './UpdateArticle';


const ArticlesPage = () => {
  const dispatch = useDispatch()
  const getArticles = () => dispatch(fetchArticles());

  useEffect(() => getArticles(), []);

  const articles = useSelector(state => state.articles);
  return (
    <div className="container">
    <div className="row">
        {articles.map((article, key) => 
        <article className="col-l-6" key={key}>
          <div className="card mb-3" >
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
        
          <div className="card-text">
          <ReadMoreAndLess
                className="read-more-content"
                charLimit={100}
                readMoreText="Read more"
                readLessText="Read less"
            >
                {article.body}
          </ReadMoreAndLess>
          </div>
          <p className="card-text"><small className="text-muted">Last updated on {moment(article.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</small></p>
          <p className="card-text"><small className="text-muted">Author:  {article.author}</small></p>
          <h6>Comments:</h6>
          <span>
            {article.comments.map((comment, key) => <pre><ul key={key} className="text-muted bg-grey">{comment.comment} by {comment.user}</ul></pre>)}
          </span>
          <NewComment articleId={article._id}/>
          <div className="article-action">
            <button href="#myModal" className="btn btn-lg btn-danger trigger-btn" data-toggle="modal">Delete Article<DeleteArticle articleId={article._id}/></button>
            <button 
            data-target="#UpdateModal" 
            className="btn btn-lg btn-info trigger-btn" 
            backdrop="static" data-keyboard="false"
            data-toggle="modal">Edit Article<UpdateArticle article={article}/></button>
          </div>
      </div>
    </div>
    </article>
        )}
    </div>
    </div>
  )
}

export default ArticlesPage;