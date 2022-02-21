import { INCREASE_COUNTER } from "../const/actionTypes"

const initialState = {
    counter: 0
}

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            }
    }
    return state
}

export { counterReducer }