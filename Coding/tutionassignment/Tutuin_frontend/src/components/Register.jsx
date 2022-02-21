import React from "react";
import { Form, Input, Button, Select } from 'antd';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
const { Option } = Select;

export const Register = () => {
    const [form, setForm] = React.useState({});
    const navigate = useNavigate();
    const handleChange = (e) => {
        let { name , value } = e.target;
        setForm({ ...form, [name]: value });
    }
    const handleSubmit = () => {
        axios.post("http://localhost:2345/register", form).then((res) => {
            navigate("/login");
        }).catch(e => {
            alert("Error: " + e.message);
        })
    }
    return (
        <div className="formcentre">
            <h1 style={{color : "rgb(8 189 128)"}}>Register</h1>
            <Form>
                <div className="formlabel">
                    <label>Name</label>
                    <Input type="text" name="Name" placeholder="Enter your Name" onChange={handleChange} />
                </div>
                <div className="formlabel">
                    <label>Email</label>            
                    <Input type="text" name="Email" placeholder="Enter your Email" onChange={handleChange} />
                </div>
                <div className="formlabel">
                    <label>Password</label>
                    <Input type="password" name="Password" placeholder="Enter your Password" onChange={handleChange} />
                </div>
                <div className="formlabel">
                    <label>Age</label>
                    <Input name="Age" type = "age" placeholder="Enter your Age" onChange={handleChange}/>
                </div>
                <div className="formlabel">
                    <label>Gender</label>
                    <Select placeholder="Please select your gender" name="Gender" onChange={(value)=>setForm({...form,Gender: value})}>
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                    </Select><br />
                </div>
                <div className="formlabel">
                    <label>Role</label>
                    <Select placeholder="Please select Role" name="Role" onChange={(value)=>setForm({...form, Role : value})}>
                        <Option value="admin">Admin</Option>
                        <Option value="teacher">Teaching</Option>
                    </Select><br/>   
                </div>
                <Button type="primary" htmlType="submit" onClick = {handleSubmit}>Submit</Button>
            </Form>
            </div>
      );
    };