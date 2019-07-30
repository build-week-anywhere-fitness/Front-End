import axios from "axios";

export const ADD_CLIENT_START = "ADD_CLIENT_START"; 
export const ADD_CLIENT_SUCCESS = "ADD_CLIENT_SUCCESS";
export const ADD_CLIENT_FAIL = "ADD_CLIENT_FAIL";

export const GET_CLIENT_START = "GET_CLIENT_START";
export const GET_CLIENT_SUCCESS = "GET_CLIENT_SUCCESS";
export const GET_CLIENT_FAIL = "GET_CLIENT_FAIL";

// export const ADD_PUNCH_CARD_START = "ADD_PUNCH_CARD_START";
// export const ADD_PUNCH_CARD_SUCCESS = "ADD_PUNCH_CARD_SUCCESS";
// export const ADD_PUNCH_CARD_FAIL = "ADD_PUNCH_CARD_FAIL";

// export const UPDATE_PUNCH_CARD_START = "UPDATE_PUNCH_CARD_START";
// export const UPDATE_PUNCH_CARD_SUCCESS = "UPDATE_PUNCH_CARD_SUCCESS";
// export const UPDATE_PUNCH_CARD_FAIL = "UPDATE_PUNCH_CARD_FAIL";

// export const GET_INSTRUCTOR_LIST_START = "GET_INSTRUCTOR_LIST_START";
// export const GET_INSTRUCTOR_LIST_SUCCESS = "GET_INSTRUCTOR_LIST_SUCCESS";
// export const GET_INSTRUCTOR_LIST_FAIL = "GET_INSTRUCTOR_LIST_FAIL";

// export const GET_CLASS_LIST_START = "GET_CLASS_LIST_START";
// export const GET_CLASS_LIST_SUCCESS = "GET_CLASS_LIST_SUCCESS";
// export const GET_CLASS_LIST_FAIL = "GET_CLASS_LIST_FAIL";


export function getClients() {
    return (dispatch) => {
        dispatch ({type: GET_CLIENT_START})
        axios
            .get("https://anywhere-fitness-azra-be.herokuapp.com/clients")
            .then((response) => {
                dispatch({type: GET_CLIENT_SUCCESS, payload: response.data})
            })
            .catch((err) => {
                dispatchEvent({type: GET_CLIENT_FAIL, payload: err.response.data})
            })
    }
}

export function addClient(newClient) {
    return (dispatch) => {
        dispatch({ type: ADD_CLIENT_START })
        axios
            .post("https://anywhere-fitness-azra-be.herokuapp.com/clients",newClient)
            .then((response) => {
                dispatch({ type: ADD_CLIENT_SUCCESS, payload: response.data })
            })
            .catch((err) => {
                dispatchEvent({ type: ADD_CLIENT_FAIL, payload: err.response.data })
            })
    }
}