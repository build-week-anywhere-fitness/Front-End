import axios from 'axios';

export const INSTRUCTOR_LOGIN_START = 'INSTRUCTOR_LOGIN_START'
export const INSTRUCTOR_LOGIN_SUCCESS = 'INSTRUCTOR_LOGIN_SUCCESS'
export const INSTRUCTOR_LOGIN_FAILED = 'INSTRUCTOR_LOGIN_FAILED'

const url = 'https://anywhere-fitness-azra-be.herokuapp.com'

export function login(username, password) {
    return (dispatch) => {
        dispatch({ type: INSTRUCTOR_LOGIN_START })

        return axios.post(`${url}/api/auth/login`, {username, password})
            .then((res) => {
                console.log(res)
                dispatch({ type: INSTRUCTOR_LOGIN_SUCCESS })
            })
            .catch((err) => {
                console.log(err)
                dispatch({ type: INSTRUCTOR_LOGIN_FAILED })
            })
    }
}