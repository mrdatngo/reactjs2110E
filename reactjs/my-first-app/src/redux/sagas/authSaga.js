import { call, put, takeEvery } from 'redux-saga/effects'
import { UserApi } from '../../apis';
import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from '../const/actionTypes';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* login(action) {
  try {
    const res = yield call(UserApi.signIn, action.payload);
    yield put({ type: LOGIN_SUCCESS, payload: res });
  } catch (e) {
    yield put({ type: LOGIN_FAILED, payload: e.response });
  }
}

function* authSaga() {
  yield takeEvery(LOGIN, login);
}

export default authSaga;