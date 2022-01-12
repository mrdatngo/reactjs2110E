import React, { useState, useEffect } from 'react'
import { StudentsApi } from '../../../../apis'

/**
* @author
* @function ListStudent
**/

export const ListStudent = (props) => {

    const [students, setStudents] = useState([])

    // componentDidMount
    useEffect(() => {
        StudentsApi.listStudents().then(data => {
            console.log(data)
            setStudents(data)
        })
        // return () => {
        //     cleanup
        // }
    }, [])

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
        </div>
    )
}
