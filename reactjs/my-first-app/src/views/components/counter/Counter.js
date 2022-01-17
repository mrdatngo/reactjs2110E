import React, { useState } from 'react'
import { increaseCounter, increaseCounterDelay, store } from '../../../redux/store'

/**
* @author
* @function Counter
**/


export const Counter = (props) => {

    const [counter, setCounter] = useState(0)

    const increase = () => {
        // let resultCounter = counter + 1
        // setCounter(resultCounter)
        // increaseCounter()
    }

    const increaseDelay = () => {
        let resultCounter = counter + 1
        setCounter(resultCounter)
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
