import {
    ADD_CLIENT_START,
    ADD_CLIENT_SUCCESS,
    ADD_CLIENT_FAIL,

    GET_CLIENT_START,
    GET_CLIENT_SUCCESS,
    GET_CLIENT_FAIL,
    
    ADD_PUNCHCARD_START,
    ADD_PUNCHCARD_SUCCESS,
    ADD_PUNCHCARD_FAIL,

    UPDATE_PUNCHCARD_START,
    UPDATE_PUNCHCARD_SUCCESS,
    UPDATE_PUNCHCARD_FAIL,

    GET_INSTRUCTOR_LIST_START,
    GET_INSTRUCTOR_LIST_SUCCESS,
    GET_INSTRUCTOR_LIST_FAIL,

    GET_CLASS_LIST_START,
    GET_CLASS_LIST_SUCCESS,
    GET_CLASS_LIST_FAIL,

} from "../actions/index";

const intialState = {
    clients: [],

    creatingInstructorList: false,
    creatingClassList: false,
    creatingClients: false,
    creatingPunchCard: false,

    readingInstructorList: false,
    readingClassList: false,
    readingClients: false,
    readingPunchCard: false,

    updatingInstructorList: false,
    updatingClassList: false,
    updatingClients: false,
    updatingPunchCard: false,

    deletingInstructorList: false,
    deletingClassList: false,
    deletingClients: false,
    deletingPunchCard: false,

    error: null,
}

export default function clientReducer (state=intialState, action) {
    switch (action.type){
        case ADD_CLIENT_START
        case ADD_CLIENT_SUCCESS
        case ADD_CLIENT_FAIL

        case GET_CLIENT_START
        case GET_CLIENT_SUCCESS
        case GET_CLIENT_FAIL
    }
}

