import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class MyClassComponent
**/

export class MyClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            policy: false,
        }
    }

    onUsernameChange = (event) => {
        let { value } = event.target
        this.setState({ username: value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onPolicyChange = (event) => {
        this.setState({ policy: event.target.checked })
    }

    onSubmit = (event) => {
        event.preventDefault()
        console.log("Submit")
        // call api
        console.log("call api with data: ", this.state)
    }

    render() {
        return (
            <form action="/register" method="" style={{background: this.props.bgColor}}>
                <h3>Register</h3>
                <label htmlFor="username">User Name</label>
                <input type="text" name="username" id="username" onChange={this.onUsernameChange}/>
                <br />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" onChange={this.onEmailChange}/>
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={this.onPasswordChange}/>
                <br />
                <label htmlFor="accept_policy">Policy</label>
                <input type="checkbox" name="accept_policy" id="accept_policy" onChange={this.onPolicyChange}/>
                <br />
                <button onClick={this.onSubmit}>Register</button>
                <input onClick={this.onSubmit} type="button" value="Register" id="" />
                <input onClick={this.onSubmit} type="submit" value="Register" id="" />
            </form>
        )
    }
}


MyClassComponent.propTypes = {}