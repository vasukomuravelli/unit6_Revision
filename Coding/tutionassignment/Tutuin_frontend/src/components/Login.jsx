import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import {UserContext} from "./Context/userContext"

export const Login = () => {
    const [details, setDetails] = React.useState({});
    const {handleUser} = React.useContext(UserContext);
    const navigate = useNavigate();
    const handleChange = (event) => {
        let { id, value } = event.target;
        id = id === "normal_login_username" ? "Email" : "Password";
        setDetails({ ...details, [id]: value });
    };
    const handleSubmit = (e) => {
        // console.log(details);
        e.preventDefault();
        axios.post("http://localhost:2345/login", details).then((res) => {
            handleUser(res.data);
            navigate("/");
        }).catch(e => {
            alert("Error: " + e.message);
        })
    }
    return (
        <div className="formcentre">
            <h1 style={{color: "rgb(8 189 128)"}}>Login</h1>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Username!',
                  },
                    ]}
                    onChange={(e) => handleChange(e)}
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
                    onChange={(e) => handleChange(e)}
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
        
                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>
        
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" onClick={(e)=>handleSubmit(e)}>
                  Log in
                </Button>
                Or <Link to="/register">register now!</Link>
              </Form.Item>
            </Form>
            </div>
          );
}