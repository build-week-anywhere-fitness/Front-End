import { INSTRUCTOR_LOGIN_SUCCESS } from '../actions/InstructorActions'

const initialState = {
    instructorId: null
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
        default:
            return state
    }
}