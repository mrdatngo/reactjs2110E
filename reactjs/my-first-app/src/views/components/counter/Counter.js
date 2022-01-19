import React, { useEffect, useState } from 'react'
import { increaseCounter, increaseCounterDelay } from '../../../redux/actions/counterActions'
import { store } from '../../../redux/store'

/**
* @author
* @function Counter
**/


export const Counter = (props) => {
    const [counter, setCounter] = useState(store.getState().counter)
    // componentDidMount
    useEffect(() => {
        let updateState = () => {
            let state = store.getState()
            setCounter(state.counterData.counter)
        }
        store.subscribe(updateState)
    }, [])

    const increase = () => {
        increaseCounter()
    }

    const increaseDelay = () => {
        increaseCounterDelay()
    }

    return (
        <div>Counter: {counter}
            <br />
            <button onClick={increase}>Increase</button>
            <button onClick={increaseDelay}>Increase After 1 seconds</button>
        </div>
    )
}
