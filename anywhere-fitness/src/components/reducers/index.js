import { 
    INSTRUCTOR_LOGIN_SUCCESS,
    INSTRUCTOR_CLASSES_SUCCESS
     } from '../actions/InstructorActions'

const initialState = {
    instructorId: null,
    classes: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case INSTRUCTOR_LOGIN_SUCCESS: {
            console.log(action.payload.instructor[0].id)
            return {
                ...state,
                instructorId: action.payload.instructor[0].id
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