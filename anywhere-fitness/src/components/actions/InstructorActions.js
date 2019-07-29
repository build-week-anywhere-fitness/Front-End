import axios from 'axios';

export const INSTRUCTOR_LOGIN_START = 'INSTRUCTOR_LOGIN_START'
export const INSTRUCTOR_LOGIN_SUCCESS = 'INSTRUCTOR_LOGIN_SUCCESS'
export const INSTRUCTOR_LOGIN_FAILED = 'INSTRUCTOR_LOGIN_FAILED'

export const INSTRUCTOR_REGISTER_START = 'INSTRUCTOR_REGISTER_START'
export const INSTRUCTOR_REGISTER_SUCCESS = 'INSTRUCTOR_REGISTER_SUCCESS'
export const INSTRUCTOR_REGISTER_FAILED = 'INSTRUCTOR_REGISTER_FAILED'

const url = 'https://anywhere-fitness-azra-be.herokuapp.com'

export function instructorLogin(username, password) {
    return (dispatch) => {
        dispatch({ type: INSTRUCTOR_LOGIN_START })

        return axios.post(`${url}/api/auth/login`, {username, password})
            .then((res) => {
                console.log("Login Success", res)
                localStorage.setItem('token', res.data.token)
                dispatch({ type: INSTRUCTOR_LOGIN_SUCCESS })
            })
            .catch((err) => {
                console.log(err)
                dispatch({ type: INSTRUCTOR_LOGIN_FAILED })
            })
    }
}

export function instructorRegister(fullname, username, password) {
    return (dispatch) => {
        dispatch({ type:INSTRUCTOR_REGISTER_START })

        return axios.post(`${url}/api/auth/register`, { fullname, username, password })
            .then((res) => {
                console.log(res);
                dispatch({ type: INSTRUCTOR_REGISTER_SUCCESS })
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: INSTRUCTOR_REGISTER_FAILED })
            })
    }
}