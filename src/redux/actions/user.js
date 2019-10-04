import axios from "axios";

export const USER_CREATED = "USER_CREATED";

export const message = (message) => {
    return {
        type: USER_CREATED,
        message
    }
  }

export const signup = (data) => {
    return dispatch => {
      axios.post(`http://localhost:9000/users/signup`,data, { headers: { 'Content-Type': 'application/json', } })
      .then(res => {
        dispatch(message(res.data))}).catch(err => console.log(err));
    };
  }
