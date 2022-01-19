import React, { useState, useEffect } from 'react'
import { StudentsApi } from '../../../../apis'
import { getStudents } from '../../../../redux/actions/studentActions'
import { store } from '../../../../redux/store'

/**
* @author
* @function ListStudent
**/

export const ListStudent = (props) => {

    const [students, setStudents] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const [count, setCount] = useState(0)

    // componentDidMount
    useEffect(() => {
        getStudents()
        store.subscribe(() => {
            console.log(store.getState())
            let { list, isLoading } = store.getState().studentData.students
            setStudents(list)
            setIsLoading(isLoading)
        })
    }, [])

    /*
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

    */
    return (
        <div>ListStudent:            
            {
                isLoading ? "Loading...." : students.map(student => {
                    return <p>{student.name}</p>
                })
            }
            <hr />
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}
