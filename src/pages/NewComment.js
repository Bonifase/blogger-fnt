import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addComment } from "../redux/actions/article"

const NewComment = (props) => {
    const [data, setData ] = useState({
            comment:"",
            err: {}
        
    });
    const articleId = props.articleId
    const dispatch = useDispatch();
    const dispatchAddComment = (data, articleId) => dispatch(addComment(data, articleId))
    
    const handleChange = e => {
    e.preventDefault();
    setData({
        comment: e.target.value
    });
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatchAddComment(data,articleId)
        console.log(this)
        return <Redirect push to='/article-list' />;
        
      }
        return (
            <>
          <form className="clearfix" id="add-comment-form" onSubmit={handleSubmit}>
                    <textarea 
                        className="form-control" 
                        col="2"
                        value={data.comment}
                        onChange={handleChange} 
                        required
                        placeholder="Your comment"
                        
                    />
                    <br />
                    <button className="comment-btn btn-info pull-right">
                        Add Comment
                    </button>
            </form>
          </>
        );
}

export default NewComment;