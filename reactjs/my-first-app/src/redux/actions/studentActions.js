import { StudentsApi } from "../../apis"
import { GET_LIST_STUDENTS, GET_LIST_STUDENTS_FAILED, GET_LIST_STUDENTS_SUCCESS } from "../const/actionTypes"
import { store } from "../store"

// action
function getStudents() {
    store.dispatch({ type: GET_LIST_STUDENTS })
    // StudentsApi.listStudents().then((data) => {
    //     store.dispatch({ type: GET_LIST_STUDENTS_SUCCESS, payload: data })
    // }).catch(() => {
    //     store.dispatch({ type: GET_LIST_STUDENTS_FAILED })
    // })
}


export { getStudents }