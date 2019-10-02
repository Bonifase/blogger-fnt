import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchArticles } from "../redux/actions"
import ReadMoreAndLess from 'react-read-more-less';
import NewComment from './NewComment';


class ArticlesPage extends React.Component {
  componentWillMount() {
    this.props.fetchArticles();
  }
  render(){
    return (
      <div className="container">
      <div className="row">
          {this.props.articles.map((article, key) => 
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
            <p className="card-text"><small className="text-muted">Last updated at {article.updatedAt}</small></p>
            <h6>Comments:</h6>
            <span>
              {article.comments.map((comment, key) => <ul key={key} className="text-muted bg-grey">{comment.comment}</ul>)}
            </span>
            <NewComment articleId={article._id}/>
        </div>
      </div>
      </article>
          )}
      </div>
      </div>
    )
  } 
}
ArticlesPage.propTypes = {
  fetchArticles: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    articles: state.articles,
  };
}
export default connect(
  mapStateToProps, 
  { fetchArticles }
)(ArticlesPage);