import React, { useState } from 'react';
import { useDispatch, useStore } from "react-redux";
import { login } from '../redux/actions/user';
import { SuccessMessage } from '../messages/success';


const NewUser = (props) => {
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const dispatch = useDispatch();
    const dispatchAction = (data) => dispatch(login(data))
    
    const handleChange = (e) => {
        e.preventDefault();
        setData({...data, [e.target.name]:e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchAction(data)
        props.history.push('/article-list');
    }
  return (
    <>
    <div className="container-fluid bg-light py-3">
    <div className="row">
        <div className="col-md-6 mx-auto">
                <div className="card card-body">
                    <h3 className="text-center mb-4">Log-in</h3>
                    <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div className="form-group has-error">
                            <input className="form-control input-lg" placeholder="E-mail Address" 
                            name="email" 
                            value={data.email}
                            onChange={handleChange} 
                            type="text"/>
                        </div>
                        <div className="form-group has-success">
                            <input className="form-control input-lg" placeholder="Password" 
                            name="password" 
                            value={data.password}
                            onChange={handleChange}  
                            type="password"/>
                        </div>
                        <button className="btn btn-md btn-primary btn-block" value="Sign Me Up" type="submit">Login</button>
                    </fieldset>
                    </form>
                </div>
        </div>
    </div>
</div>
      </>
  )
}

export default NewUser
