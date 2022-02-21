import React from 'react'
import { Form, Input, Button, Checkbox, Card } from 'antd';

import { useSelector } from 'react-redux'

import "./login.css"
import { UserApi } from '../../../apis';
import { saveToken } from '../../../utils/tokenHandler';
import { login } from '../../../redux/actions/authActions';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

/**
* @author
* @function LoginPage
**/

export const LoginPage = (props) => {

    const { isLoading, message, token } = useSelector((state) => {
        return state.authData.auth;
    })

    let navigate = useNavigate();

    useEffect(() => {
        if (token && isLoading === false) {
            // window.location = "/"
            navigate("/")
        }
    }, [token])

    const onFinish = (values) => {
        console.log('Success:', values);
        login(values)
        // UserApi.signIn(values)
        //     .then(data => {
        //         console.log(data)
        //         saveToken(data.token)
        //         // redirect to dashboard(home)
        //         // use react-router-dom push
        //         window.location = "/"
        //     })
        //     .catch(err => {
        //         let message = "Something went wrong!"
        //         if (err.response && err.response.data && err.response.data.message) {
        //             message = err.response.data.message
        //         }
        //         alert(message)
        //     })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login-container">
            <Card title="Login" extra={<a href="#">Or Register</a>}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            {
                                type: "email",
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    {/* <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item> */}
                    <div className="error-message">
                        {message}
                    </div>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" loading={isLoading} disabled={isLoading}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>

    );
}
