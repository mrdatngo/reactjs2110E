import { call, put, takeEvery } from 'redux-saga/effects'
import { StudentsApi } from '../../apis';
import { ADD_STUDENT, ADD_STUDENT_FAILED, ADD_STUDENT_SUCCESS, GET_LIST_STUDENTS, GET_LIST_STUDENTS_FAILED, GET_LIST_STUDENTS_SUCCESS } from '../const/actionTypes';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchStudents(action) {
   try {
      const listStudent = yield call(StudentsApi.listStudents, action.payload);
      yield put({ type: GET_LIST_STUDENTS_SUCCESS, payload: listStudent });
   } catch (e) {
      yield put({ type: GET_LIST_STUDENTS_FAILED, message: e.message });
   }
}

function* addStudent(action) {
   try {
      const result = yield call(StudentsApi.addStudent, action.payload);
      yield put({ type: ADD_STUDENT_SUCCESS, payload: result });
   } catch (e) {
      yield put({ type: ADD_STUDENT_FAILED, message: e.message });
   }
}

function* studentSaga() {
   yield takeEvery(GET_LIST_STUDENTS, fetchStudents);
   yield takeEvery(ADD_STUDENT, addStudent)
}

export default studentSaga;