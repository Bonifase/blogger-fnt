import axios from "axios";

export const USER_CREATED = "USER_CREATED";
export const USER_LOGGED_IN = "USER_LOGGED_IN";

export const message = (message) => {
    return {
        type: USER_CREATED,
        message
    }
  }
export const userLoggedIn = (payload) => {
    return {
        type: USER_LOGGED_IN,
        payload
    }
}

export const signup = (data) => {
    return dispatch => {
      axios.post(`http://localhost:9000/users/signup`,data, { headers: { 'Content-Type': 'application/json', } })
      .then(res => {
        dispatch(message(res.data))}).catch(err => console.log(err));
    };
  }

export const login = (data) => {
    return dispatch => {
    axios.post(`http://localhost:9000/users/login`,data, { headers: { 'Content-Type': 'application/json', } })
    .then(res => {
        const access_token = res.data.token;
        const username = res.data.username;
        localStorage.setItem("JWT", JSON.stringify(access_token));
        localStorage.setItem("username", JSON.stringify(username));
        dispatch(userLoggedIn(res.data))}).catch(err => console.log(err));
    };
}