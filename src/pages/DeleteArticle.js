import React from 'react'
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { deleteArticle, fetchArticles } from '../redux/actions/article';

const DeleteArticle = (articleId) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteArticle(articleId.articleId));
        dispatch(fetchArticles());
        return <Redirect to="/login" />;
    }

  return (
    <div id="myModal" className="modal fade">
	<div className="modal-dialog modal-confirm">
		<div className="modal-content">
			<div className="modal-header">
				<div className="icon-box">
					<i className="material-icons">&#xE5CD;</i>
				</div>				
				<h4 className="modal-title">Are you sure?</h4>	
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			</div>
			<div className="modal-body">
				<p>Do you really want to delete these Aricle? This process cannot be undone.</p>
			</div>
			<div className="modal-footer">
				<button type="button" className="btn btn-info" data-dismiss="modal">Cancel</button>
                <button 
                type="button" 
                className="btn btn-danger" 
                onClick={handleDelete}
                >Delete</button>
			</div>
		</div>
	</div>
</div> 
  )
}

export default DeleteArticle

