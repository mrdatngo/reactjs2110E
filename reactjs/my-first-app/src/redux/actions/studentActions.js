import { GET_LIST_STUDENTS, ADD_STUDENT } from "../const/actionTypes"
import { store } from "../store"

// action
function getStudents(params) {
    store.dispatch({ type: GET_LIST_STUDENTS, payload: params })
}

function addStudent(params) {
    return {
        type: ADD_STUDENT,
        payload: params
    }
}

export { getStudents, addStudent }