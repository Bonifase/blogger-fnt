import axios from "axios";

export const ITEM_CREATED = "ITEM_CREATED";

export const message = (message) => {
    return {
        type: "ITEM_CREATED",
        message
    }
  }

export const signup = (data) => {
    return dispatch => {
      axios.post(`http://localhost:9000/user/signup`,data, { headers: { 'Content-Type': 'application/json', } })
      .then(res => {
        console.log(res.data)
        dispatch(message(res.data))}).catch(err => console.log(err));
    };
  }
