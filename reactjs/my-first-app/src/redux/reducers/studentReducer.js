import { GET_LIST_STUDENTS, GET_LIST_STUDENTS_FAILED, GET_LIST_STUDENTS_SUCCESS } from "../const/actionTypes"

const initialState = {
    students: {
        list: [],
        isLoading: false,
    }
}

function studentReducer(state = initialState, action) {
    console.log(state, action)
    switch(action.type) {
        case GET_LIST_STUDENTS:
            return {
                ...state,
                students: {
                    list: [],
                    isLoading: true
                }
            }

        case GET_LIST_STUDENTS_SUCCESS:
            return {
                ...state,
                students: {
                    list: action.payload,
                    isLoading: false
                }
            }

        case GET_LIST_STUDENTS_FAILED:
            return {
                ...state,
                students: {
                    list: [],
                    isLoading: false
                }
            }
    }
    return state
}

export { studentReducer }