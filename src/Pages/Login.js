import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Axios from 'axios'
import '../Styles/Login.scss'

const Login = () => {

    const [loggedIn, setLoggedIn] = useState(false)

    const onFinish = data => {

        Axios.post('http://localhost:8081/login', data)
            .then(response => {
                setLoggedIn(true)
                localStorage.setItem("token", response.data.token)
                message
                    .loading('Authenticating..', 0.1)
                    .then(() => message.success('Authenticated', 1))

            }).catch(err => {
                console.log(err)
                message
                    .loading('Authenticating..', 0.1)
                    .then(() => message.error('Check Email or Password', 1))
            })
    };


    if (loggedIn) {
        return <Redirect to="/inbox" />
    }

    return (
        <div className="login-form-container">
            <h1>Login to your account</h1>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
        </Button>

                </Form.Item>
            </Form>
        </div>
    );
};

export default Login