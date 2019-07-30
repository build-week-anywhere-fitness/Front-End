import {
    ADD_CLIENT_START,
    ADD_CLIENT_SUCCESS,
    ADD_CLIENT_FAIL,

    GET_CLIENT_START,
    GET_CLIENT_SUCCESS,
    GET_CLIENT_FAIL,
    
    // ADD_PUNCHCARD_START,
    // ADD_PUNCHCARD_SUCCESS,
    // ADD_PUNCHCARD_FAIL,

    // UPDATE_PUNCHCARD_START,
    // UPDATE_PUNCHCARD_SUCCESS,
    // UPDATE_PUNCHCARD_FAIL,

    // GET_INSTRUCTOR_LIST_START,
    // GET_INSTRUCTOR_LIST_SUCCESS,
    // GET_INSTRUCTOR_LIST_FAIL,

    // GET_CLASS_LIST_START,
    // GET_CLASS_LIST_SUCCESS,
    // GET_CLASS_LIST_FAIL,

} from "../actions/index";

const intialState = {
    clients: [],

    creatingInstructorList: false,
    creatingClassList: false,
    creatingClient: false,
    creatingPunchCard: false,

    readingInstructorList: false,
    readingClassList: false,
    readingClients: false,
    readingPunchCards: false,

    updatingInstructorList: false,
    updatingClassList: false,
    updatingClient: false,
    updatingPunchCard: false,

    deletingInstructorList: false,
    deletingClassList: false,
    deletingClient: false,
    deletingPunchCard: false,

    error: null,
}

export default function clientReducer (state=intialState, action) {
    switch (action.type) {
        case ADD_CLIENT_START:
            return {
                ...state,
                creatingClient: true,
            }
        
        case ADD_CLIENT_SUCCESS:
            return {
                ...state,
                creatingClient: false,
                error: null,
                clients: action.payload,
            }

        case ADD_CLIENT_FAIL:
            return {
                ...state,
                creatingClient: false,
                error: action.payload.Error,
            }

        case GET_CLIENT_START:
            return {
                ...state,
                readingClients: true,
            }

        case GET_CLIENT_SUCCESS:
            return {
                ...state,
                readingClients: false,
                error: null,
                clients: action.payload,
            }

        case GET_CLIENT_FAIL:
            return {
                ...state,
                readingClients: false,
                error: action.payload.message,
            }
        default:
            return state;
    }
}

