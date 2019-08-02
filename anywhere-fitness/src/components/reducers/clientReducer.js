import {

    REGISTER_CLIENT_START,
    REGISTER_CLIENT_SUCCESS,
    REGISTER_CLIENT_FAIL,
    
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    
    GET_CLASS_LIST_START,
    GET_CLASS_LIST_SUCCESS,
    GET_CLASS_LIST_FAIL,

    // ADD_PUNCHCARD_START,
    // ADD_PUNCHCARD_SUCCESS,
    // ADD_PUNCHCARD_FAIL,

    // UPDATE_PUNCHCARD_START,
    // UPDATE_PUNCHCARD_SUCCESS,
    // UPDATE_PUNCHCARD_FAIL,

    // GET_INSTRUCTOR_LIST_START,
    // GET_INSTRUCTOR_LIST_SUCCESS,
    // GET_INSTRUCTOR_LIST_FAIL,
} from "../actions/index";

const intialState = {
    classes: [],

    creatingInstructorList: false,
    creatingClassList: false,
    creatingClient: false,
    creatingPunchCard: false,

    readingInstructorList: false,
    readingClassList: false,
    readingClient: false,
    readingPunchCards: false,

    updatingInstructorList: false,
    updatingClassList: false,
    updatingClient: false,
    updatingPunchCard: false,

    deletingInstructorList: false,
    deletingClassList: false,
    deletingClient: false,
    deletingPunchCard: false,

    loadingLogin: false,
    currentUser: null,
    error: null,
}

export default function clientReducer (state=intialState, action) {
    switch (action.type) {
//Processing Registration
        case REGISTER_CLIENT_START:
            return {
                ...state,
                creatingClient: true,
            }
        case REGISTER_CLIENT_SUCCESS:
            return {
                ...state,
                creatingClient: false,
                error: null,
            }
        case REGISTER_CLIENT_FAIL:
            return {
                ...state,
                creatingClient: false,
                error: action.payload.Error,
            }
//Processing Login
        case LOGIN_START:
            return {
                ...state,
                loadingLogin: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loadingLogin: false,
                error: null,
                currentUser: action.payload,
            }
        case LOGIN_FAILED:
            return {
                ...state,
                loadingLogin: false,
                error: action.payload.message
            }
//Processing Class list display
        case GET_CLASS_LIST_START:
            return {
                ...state,
                readingClassList: true,
            }
        case GET_CLASS_LIST_SUCCESS:
            return {
                ...state,
                readingClassList: false,
                error: null,
                classes: action.payload,
            }
        case GET_CLASS_LIST_FAIL:
            return {
                ...state,
                readingClassList: false,
                error: action.payload.message,
            }

            

        default:
            return state;
    }
}