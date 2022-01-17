import React, { useState, useEffect } from 'react'
import { StudentsApi } from '../../../../apis'

/**
* @author
* @function ListStudent
**/

export const ListStudent = (props) => {

    const [students, setStudents] = useState([])
    const [count, setCount] = useState(0)

    // call when anytime state(props) change => combine componenDidmount + componentDidUpdate
    // can replace for componentDidUpdate
    useEffect(() => {
        // console.log("Count: ", count)
    })

    // never do this
    // if (count > 0) {
    //     useEffect(() => {
    //         // console.log("Count: ", count)
    //     })
    // }

    // componentDidMount
    useEffect(() => {
        // console.log("Count: ", count)
        return () => {
            // componentWillUnMount
        }
    }, [])

    // watching count
    useEffect(() => {
        console.log("watching count")
        // open connect
        return () => {
            console.log("Component will update!")
            // close connect
        }
    }, [count])

    // watching students
    useEffect(() => {
        // console.log("watching students")
    }, [students])

    // componentDidMount
    // useEffect(() => {
    //     StudentsApi.listStudents().then(data => {
    //         console.log(data)
    //         setStudents(data)
    //     })
    //     // return () => {
    //     //     cleanup
    //     // }
    // }, [])

    // StudentsApi.listStudents().then(data => {
    //     console.log(data)
    //     setStudents(data)
    // })

    return (
        <div>ListStudent:
            {
                students.map(student => {
                    return <p>{student.name}</p>
                })
            }
            <hr />
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}
