import { call, put, takeEvery } from 'redux-saga/effects'
import { StudentsApi } from '../../apis';
import { GET_LIST_STUDENTS, GET_LIST_STUDENTS_FAILED, GET_LIST_STUDENTS_SUCCESS } from '../const/actionTypes';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchStudents(action) {
   try {
      const listStudent = yield call(StudentsApi.listStudents);
      yield put({type: GET_LIST_STUDENTS_SUCCESS, payload: listStudent});
   } catch (e) {
      yield put({type: GET_LIST_STUDENTS_FAILED, message: e.message});
   }
}

function* studentSaga() {
  yield takeEvery(GET_LIST_STUDENTS, fetchStudents);
}

export default studentSaga;