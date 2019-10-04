import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addArticle } from "../redux/actions"

const NewArticle = () => {
    const [data, setData ] = useState({
            title:"",
            body:"",
            category:""
        });
    const dispatchAction = useDispatch();
    const submitArticle = (data, userId) => dispatchAction(addArticle(data, userId));

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
        <>
      <form onSubmit={handleSubmit} className="form-group needs-validation" noValidate>
        <label htmlFor="title">
          Title:
          <input 
            type="text"
            className="form-control" 
            name="title" 
            value={data.title} 
            onChange={handleChange} 
            required 
          />
        </label><br/>
        <label>
          Body:
          <textarea 
          type='text' 
          name="body" 
          placeholder="Remember, make it interesting" 
          cols="100" rows="5" 
          value={data.body} onChange={handleChange} 
          className="form-control"
          required
          />
        </label><br/>
        <label>
        Category:
        <input 
          name="category" 
          className="form-control" 
          value={data.category} 
          onChange={handleChange}
          required
        />
        </label><br/>
        <input type="submit" value="Submit" />
      </form>
      </>
    );
}

export default NewArticle;