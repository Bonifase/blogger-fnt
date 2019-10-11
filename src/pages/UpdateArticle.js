import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteArticle } from '../redux/actions/article';

const UpdateArticle = (article) => {
    const [data, setData ] = useState({
        title: article.article.title,
        body: article.article.body,
        category: article.article.category
    });
    const dispatchAction = useDispatch();
    const submitArticle = (data) => dispatchAction(deleteArticle(data));

    const handleChange = e => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value }
    );
    };

    const handleSubmit = (e) => {
    e.preventDefault();
        submitArticle(data)
        console.log(data);
        
    }
   console.log(article)   
  return (
    
    <div id="UpdateModal" className="modal fade">
	<div className="modal-dialog modal-confirm update" role="document">
		<div className="modal-content">
			<div className="modal-header">			
				<h4 class="modal-title">Update Article?</h4>	
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			</div>
			<div className="modal-body">
				
            <form id="registration-form" className="md-form mb-5" onSubmit={handleSubmit} >
          <div className="controls">
              <div className="row">
                  <div className="col-sm-4">
                      <div className="form-group">
                          <label for="form_name">Title *</label>
                          <input
                            type="text" 
                            name="title"
                            value={data.title}
                            onChange={handleChange} 
                            className="form-control" 
                            placeholder="Article title" 
                            required
                          />
                      </div>
                  </div>  
              </div>
              <div className="row">
                  <div className="col-sm-4">
                      <div className="form-group">
                          <label for="form_name">Category *</label>
                          <input 
                            type="text" 
                            name="category"
                            value={data.category}
                            onChange={handleChange} 
                            className="form-control" 
                            placeholder="Article category" 
                            required
                          />
                      </div>
                  </div>  
              </div>
          </div>
          <div className="clearfix"></div>
          <div className="row">
              <div className="col-md-11">
                  <div className="form-group">
                      <label for="form_message">Body *</label>
                      <textarea 
                       name="body" 
                       className="form-control" 
                       placeholder="Make it interesting" 
                       rows="8" 
                       value={data.body}
                       onChange={handleChange} 
                       required ></textarea>
                      <div className="help-block with-errors"></div>
                  </div>
              </div>
              
          </div>
          <div class="modal-footer">
				<button type="submit" class="btn btn-info" data-dismiss="modal">Cancel</button>
                <button 
                type="button" 
                class="btn btn-success"
                >Update Article</button>
			</div>
      </form>

			</div>
			
		</div>
	</div>
</div> 
  )
}

export default UpdateArticle;


