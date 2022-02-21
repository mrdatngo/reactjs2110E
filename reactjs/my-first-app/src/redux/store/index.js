import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { composeWithDevTools } from "redux-devtools-extension"

import { counterReducer } from '../reducers/counterReducers'
import { studentReducer } from '../reducers/studentReducer'
import studentSaga from '../sagas/studentSaga'
import { authReducer } from '../reducers/authReducers'
import authSaga from '../sagas/authSaga'

const reducersAll = combineReducers({
  counterData: counterReducer,
  studentData: studentReducer,
  authData: authReducer
})

const sagaMiddleware = createSagaMiddleware()

let store = createStore(reducersAll, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(authSaga)
sagaMiddleware.run(studentSaga)

export { store }
