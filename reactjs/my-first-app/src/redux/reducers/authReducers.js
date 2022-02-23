import axios from "axios"
import { saveToken } from "../../utils/tokenHandler"
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from "../const/actionTypes"

const initialState = {
  auth: {
    data: {},
    token: "",
    message: "",
    isLoading: false,
  }
}

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        auth: {
          data: {},
          token: "",
          message: "",
          isLoading: true
        }
      }

    case LOGIN_SUCCESS:
      saveToken(action.payload.token)
      axios.defaults.headers.common.authorization = `Bearer ${action.payload.token}`;
      return {
        ...state,
        auth: {
          data: {
            email: action.payload.email,
          },
          token: action.payload.token,
          message: "",
          isLoading: false
        }
      }

    case LOGIN_FAILED:
      let message = "Something went wrong!"
      if (action.payload && action.payload.data && action.payload.data.message) {
        message = action.payload.data.message
      }
      return {
        ...state,
        auth: {
          data: {},
          token: "",
          message,
          isLoading: false
        }
      }
  }
  return state
}

export { authReducer }