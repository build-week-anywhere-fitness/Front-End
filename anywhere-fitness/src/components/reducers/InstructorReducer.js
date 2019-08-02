import { 
    INSTRUCTOR_LOGIN_SUCCESS,
    INSTRUCTOR_CLASSES_SUCCESS
     } from '../actions/InstructorActions'

const initialState = {
    instructorId: null,
    instructorFullname: "",
    instructorUsername: "",
    classes: []
};

export default function instructorReducer(state = initialState, action) {
    switch (action.type) {
        case INSTRUCTOR_LOGIN_SUCCESS: {
            console.log("Login", action.payload.instructor[0])
            return {
                ...state,
                instructorId: action.payload.instructor[0].id,
                instructorFullname: action.payload.instructor[0].fullname,
                instructorUsername: action.payload.instructor[0].username,
            }
        }
        case INSTRUCTOR_CLASSES_SUCCESS: {
            return {
                ...state,
                classes: action.payload
            }
        }
        default:
            return state
    }
}