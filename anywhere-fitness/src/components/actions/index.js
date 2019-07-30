import axios from "axios";

export const ADD_CLIENT_START = ""; 
export const ADD_CLIENT_SUCCESS = "";
export const ADD_CLIENT_FAIL = "";

export const GET_CLIENT_START = "";
export const GET_CLIENT_SUCCESS = "";
export const GET_CLIENT_FAIL = "";

export const ADD_PUNCHCARD_START = "";
export const ADD_PUNCHCARD_SUCCESS = "";
export const ADD_PUNCHCARD_FAIL = "";

export const UPDATE_PUNCHCARD_START = "";
export const UPDATE_PUNCHCARD_SUCCESS = "";
export const UPDATE_PUNCHCARD_FAIL = "";

export const GET_INSTRUCTOR_LIST_START = "";
export const GET_INSTRUCTOR_LIST_SUCCESS = "";
export const GET_INSTRUCTOR_LIST_FAIL = "";

export const GET_CLASS_LIST_START = "";
export const GET_CLASS_LIST_SUCCESS = "";
export const GET_CLASS_LIST_FAIL = "";


export function getClients() {
    return (dispatch) => {
        dispatch ({type: GET_CLIENT_START})
        axios
            .get("")
            .then((response) => {
                dispatch({type: GET_CLIENT_SUCCESS, payload: response.data})
            })
            .catch((err) => {
                dispatchEvent({type: GET_CLIENT_FAIL, payload: err.response.data})
            })
    }
}