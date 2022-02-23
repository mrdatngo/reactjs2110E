import React, { useState } from 'react'

/**
* @author
* @function MyFuncComponent
**/

export const MyFuncComponent = (props) => {
    // const [username, setUsername] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    const [policy, setPolicy] = useState(false)

    // solution to merge states
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const onInputChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    // const onUsernameChange = (event) => {
    //     let { value } = event.target
    //     setUsername(value)
    // }

    // const onEmailChange = (event) => {
    //     setEmail(event.target.value)
    // }

    // const onPasswordChange = (event) => {
    //     setPassword(event.target.value)
    // }

    const onPolicyChange = (event) => {
        setPolicy(event.target.checked)
    }

    const onSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <form action="/register" method="" style={{ background: props.bgColor }}>
            <h3>Register</h3>
            <label htmlFor="username">User Name</label>
            {/* <input type="text" name="username" id="username" onChange={(event) => { setUsername(event.target.vlaue) }} /> */}
            <input type="text" name="username" id="username" onChange={onInputChange} />

            <br />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" onChange={onInputChange} />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={onInputChange} />
            <br />
            <label htmlFor="accept_policy">Policy</label>
            <input type="checkbox" name="accept_policy" id="accept_policy" onChange={onPolicyChange} />
            <br />
            <button onClick={onSubmit}>Register</button>
            <input onClick={onSubmit} type="button" value="Register" id="" />
            <input onClick={onSubmit} type="submit" value="Register" id="" />
        </form>
    )
}
