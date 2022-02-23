import { ADD_STUDENT, ADD_STUDENT_FAILED, ADD_STUDENT_SUCCESS, GET_LIST_STUDENTS, GET_LIST_STUDENTS_FAILED, GET_LIST_STUDENTS_SUCCESS } from "../const/actionTypes"

const initialState = {
    students: {
        list: [],
        total: 0,
        isLoading: false,
    },
    addStudent: {
        data: {},
        isLoading: false,
        message: "",
        success: false
    }
}

function studentReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LIST_STUDENTS:
            return {
                ...state,
                students: {
                    list: [],
                    total: 0,
                    isLoading: true
                }
            }

        case GET_LIST_STUDENTS_SUCCESS:
            return {
                ...state,
                students: {
                    list: action.payload.list,
                    total: action.payload.total,
                    isLoading: false
                }
            }

        case GET_LIST_STUDENTS_FAILED:
            return {
                ...state,
                students: {
                    list: [],
                    total: 0,
                    isLoading: false
                }
            }
        // addStudent
        case ADD_STUDENT:
            return {
                ...state,
                addStudent: {
                    data: {},
                    isLoading: true,
                    success: false,
                    message: ""
                }
            }
        case ADD_STUDENT_SUCCESS:
            return {
                ...state,
                addStudent: {
                    data: action.payload.data,
                    isLoading: false,
                    success: true,
                    message: "Add student success."
                }
            }
        case ADD_STUDENT_FAILED:
            return {
                ...state,
                addStudent: {
                    data: {},
                    isLoading: false,
                    success: false,
                    message: "Add student failed!"
                }
            }
    }
    return state
}

export { studentReducer }