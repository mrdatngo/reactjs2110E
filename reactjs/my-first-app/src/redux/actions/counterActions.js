import { INCREASE_COUNTER } from "../const/actionTypes"
import { store } from "../store"

// action
function increaseCounter() {
    store.dispatch({ type: INCREASE_COUNTER })
}

function increaseCounterDelay() {
    setTimeout(() => {
        store.dispatch({ type: INCREASE_COUNTER })
    }, 1000)
}

export { increaseCounter, increaseCounterDelay }