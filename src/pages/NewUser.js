import React, { useState } from 'react';
import { useDispatch, useStore } from "react-redux";
import { signup } from '../redux/actions/user';
import { SuccessMessage } from '../messages/success';


const NewUser = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
    })
    const [message, setMessage] = useState({})

    const store = useStore()

    const dispatch = useDispatch();
    const dispatchAction = (data) => dispatch(signup(data))
    const handleChange = (e) => {
        e.preventDefault();
        setData({...data, [e.target.name]:e.target.value});
        console.log(data)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchAction(data)
        setMessage(store.getState().signupSuccess)
        SuccessMessage(message);
    }
  return (
    <>
      <form onSubmit={handleSubmit} className="form-group needs-validation" noValidate>
        <label htmlFor="title">
          Username:
          <input 
            type="text"
            className="form-control" 
            name="username" 
            value={data.username} 
            onChange={handleChange} 
            required 
          />
        </label><br/>
        <label htmlFor="title">
          Email:
          <input 
            type="email"
            className="form-control" 
            name="email" 
            value={data.email} 
            onChange={handleChange} 
            required 
          />
        </label><br/>
        
        <label>
        Password:
        <input 
          name="password" 
          type="password"
          className="form-control" 
          value={data.password} 
          onChange={handleChange}
          required
        />
        </label><br/>
        <input type="submit" value="Submit" />
      </form>
      </>
  )
}

export default NewUser
