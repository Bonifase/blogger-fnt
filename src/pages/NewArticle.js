import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addArticle } from "../redux/actions/article"

const NewArticle = () => {
    const [data, setData ] = useState({
            title:"",
            body:"",
            category:""
        });
    const dispatchAction = useDispatch();
    const submitArticle = (data) => dispatchAction(addArticle(data));

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
    return (
      <div className="container-fluid bg-light py-3">
      <form id="registration-form" onSubmit={handleSubmit} >
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
              <div className="col-md-12">
                  <input type="submit" className="btn btn-success btn-send" value="Post Article"/>
              </div>
          </div>
          <div className="row">
              <div className="col-md-12">
                  <p className="text-muted"><strong>*</strong> These fields are required.</p>
              </div>
          </div>
      </form>
  </div>
    );
}

export default NewArticle;