import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StudentsApi } from '../../../../apis';

/**
* @author
* @class ListStudentClassComp
**/

export class ListStudentClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            loading: false,
            timer: "--:--"
        }
        this.timerRun()
    }

    timerRun = () => {
        this.timerInterval = setInterval(() => {
            console.log("Run....")
            this.setState({ timer: new Date().toLocaleTimeString() })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval)
    }

    componentDidMount() {
        this.setState({ loading: true })
        StudentsApi.listStudents()
            .then(data => {
                this.setState({ students: data, loading: false })
            })
            .catch(() => {
                this.setState({ loading: false })
            })
    }

    componentDidUpdate() {
        // never call setState
        console.log("componentDidUpdate")
        console.log(this.state)
    }

    render() {
        let { students, loading } = this.state
        return (
            <div>
                { this.state.timer }
                <hr />
                ListStudent:
                { loading && "Loading...."}
                {
                    students.map(student => {
                        return <p>{student.name}</p>
                    })
                }
            </div>
        )
    }
}


ListStudentClassComp.propTypes = {}