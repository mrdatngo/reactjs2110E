import { LOGIN } from "../const/actionTypes"
import { store } from "../store"

// action
function login(data) {
  store.dispatch({ type: LOGIN, payload: data })
}

export { login }