import React from 'react';
import { UserContext } from "./Context/userContext"
import { Link } from "react-router-dom";
import { Dropdown, Menu } from 'antd';
import "./style.css";

export const Navbar = () => {
    const { user, handleUser } = React.useContext(UserContext);
    const menu = (
        <Menu onClick={()=>handleUser({})}>
          <Menu.Item key="1">Logout</Menu.Item>
        </Menu>
      );
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', margin : "10px 20px"}}>
            <div>
                <Link to="/"><img src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256" alt="logo" /></Link>
            </div>
            {user.user ? <div style={{display: 'flex', justifyContent:'space-between',width : "300px"}}>
                <Dropdown.Button overlay={menu} >Welcome {user.user.Name}</Dropdown.Button>
            </div> : <Link to="/login"><div>Login or Register</div></Link>}
        </div>
    )
}