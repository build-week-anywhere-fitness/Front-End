import axios from "axios";

export const REGISTER_CLIENT_START = "ADD_CLIENT_START"; 
export const REGISTER_CLIENT_SUCCESS = "ADD_CLIENT_SUCCESS";
export const REGISTER_CLIENT_FAIL = "ADD_CLIENT_FAIL";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const GET_CLASS_LIST_START = "GET_CLASS_LIST_START";
export const GET_CLASS_LIST_SUCCESS = "GET_CLASS_LIST_SUCCESS";
export const GET_CLASS_LIST_FAIL = "GET_CLASS_LIST_FAIL";

// export const ADD_PUNCH_CARD_START = "ADD_PUNCH_CARD_START";
// export const ADD_PUNCH_CARD_SUCCESS = "ADD_PUNCH_CARD_SUCCESS";
// export const ADD_PUNCH_CARD_FAIL = "ADD_PUNCH_CARD_FAIL";

// export const UPDATE_PUNCH_CARD_START = "UPDATE_PUNCH_CARD_START";
// export const UPDATE_PUNCH_CARD_SUCCESS = "UPDATE_PUNCH_CARD_SUCCESS";
// export const UPDATE_PUNCH_CARD_FAIL = "UPDATE_PUNCH_CARD_FAIL";

// export const GET_INSTRUCTOR_LIST_START = "GET_INSTRUCTOR_LIST_START";
// export const GET_INSTRUCTOR_LIST_SUCCESS = "GET_INSTRUCTOR_LIST_SUCCESS";
// export const GET_INSTRUCTOR_LIST_FAIL = "GET_INSTRUCTOR_LIST_FAIL";


//Registering a new client
export function registerClient(newClient) {
    return (dispatch) => {
        dispatch({ type: REGISTER_CLIENT_START });
        
        return axios
                .post("https://anywhere-fitness-azra-be.herokuapp.com/api/auth/client-register",newClient)
                .then((response) => {
                    dispatch({ type: REGISTER_CLIENT_SUCCESS, payload: response.data });
                })
                .catch((err) => {
                    dispatch({ type: REGISTER_CLIENT_FAIL, payload: err.response.data });
                })
    }
}

//Logging in after creation
export function login(username, password) {
    return (dispatch) => {
        dispatch({ type: LOGIN_START });

        return axios
            .post("https://anywhere-fitness-azra-be.herokuapp.com/api/auth/client-login", { username, password })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                dispatch({ type: LOGIN_SUCCESS, payload: response.data.client });
            })
            .catch((err) => {
                const payload = err.response ? err.response.data : err;
                dispatch({ type: LOGIN_FAILED, payload });
            })
    }
}

//Getting a listing of classes by client id
export function getClasses(id) {
    return (dispatch) => {
        dispatch ({type: GET_CLASS_LIST_START});
        
        axios
            .get(`https://anywhere-fitness-azra-be.herokuapp.com/api/clients/${id}/classes`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            .then((response) => {
                dispatch({type: GET_CLASS_LIST_SUCCESS, payload: response.data});
            })
            .catch((err) => {
                dispatch({type: GET_CLASS_LIST_FAIL, payload: err.response.data});
            })
    }
}