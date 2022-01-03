import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { AddStudent } from '../components/students/AddStudent/AddStudent'
import { ListStudent } from '../components/students/ListStudent/ListStudent'

/**
* @author
* @function DefaultLayout
**/

export const DefaultLayout = (props) => {
    return (
        <div>
            <header>Header</header>
            <nav>
                <Link to="/add-student">Add Student</Link>
                <br />
                <Link to="/list-student">List Student</Link>
            </nav>
            <section>
                <Routes>
                    <Route path="/add-student" element={<AddStudent />}></Route>
                    <Route path="/list-student" element={<ListStudent />}/>
                </Routes>
            </section>
            <footer>Footer</footer>
        </div>
    )
}
