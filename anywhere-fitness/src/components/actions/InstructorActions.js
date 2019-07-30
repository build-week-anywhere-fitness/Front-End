import axios from 'axios';

export const INSTRUCTOR_LOGIN_START = 'INSTRUCTOR_LOGIN_START'
export const INSTRUCTOR_LOGIN_SUCCESS = 'INSTRUCTOR_LOGIN_SUCCESS'
export const INSTRUCTOR_LOGIN_FAILED = 'INSTRUCTOR_LOGIN_FAILED'

export const INSTRUCTOR_REGISTER_START = 'INSTRUCTOR_REGISTER_START'
export const INSTRUCTOR_REGISTER_SUCCESS = 'INSTRUCTOR_REGISTER_SUCCESS'
export const INSTRUCTOR_REGISTER_FAILED = 'INSTRUCTOR_REGISTER_FAILED'

export const INSTRUCTOR_CLASSES_START = 'INSTRUCTOR_CLASSES_START'
export const INSTRUCTOR_CLASSES_SUCCESS = 'INSTRUCTOR_CLASSES_SUCCESS'
export const INSTRUCTOR_CLASSES_FAILED = 'INSTRUCTOR_CLASSES_FAILED'

const url = 'https://anywhere-fitness-azra-be.herokuapp.com'

export function instructorLogin(username, password) {
    return (dispatch) => {
        dispatch({ type: INSTRUCTOR_LOGIN_START })

        return axios.post(`${url}/api/auth/login`, {username, password})
            .then((res) => {
                console.log("Login Success", res)
                localStorage.setItem('token', res.data.token)
                dispatch({ type: INSTRUCTOR_LOGIN_SUCCESS, payload: res.data })
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
                dispatch({ type: INSTRUCTOR_REGISTER_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: INSTRUCTOR_REGISTER_FAILED })
            })
    }
}

export function instructorClasses(id) {
    return (dispatch) => {
        dispatch({ type: INSTRUCTOR_CLASSES_START })

        const headers = {
			Authorization: localStorage.getItem('token'),
		}

        axios.get(`${url}/api/instructors/${id}/classes`, { headers })
            .then((res) => {
                console.log("classes", res.data);
                dispatch({ type: INSTRUCTOR_CLASSES_SUCCESS, payload: res.data})
            })
            .catch((err) => {
                console.log(err)
                dispatch({ type: INSTRUCTOR_CLASSES_FAILED})
            })
    }
}