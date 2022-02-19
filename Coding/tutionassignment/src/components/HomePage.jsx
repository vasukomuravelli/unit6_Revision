import React from "react";
import { UserContext } from "./Context/userContext"
import { Button } from 'antd';
import axios from 'axios';
import {Link} from "react-router-dom"
import "./style.css";
import { Pagination,Select } from 'antd';

const {Option} = Select;
export const HomePage = () => {
    const { user } = React.useContext(UserContext);
    
    const [data, setData] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [total, setTotal] = React.useState(0);
    const [sorted, setSorted] = React.useState();
    const [filter, setFilter] = React.useState("");
    React.useEffect(() => { getData() }, [page,sorted]);

    const getData = () => {
        axios.get(`http://localhost:2345/students/?page=${page}&sort=${sorted}`, {
            headers : {authorization: `Bearer ${user.token}`}
        }).then((response) => {
            setTotal(response.data.totalPages)
            setData(response.data.student);
        }).catch((error) => {
            alert("Error: " + error.message);
        })
    }
        return (
            <div>
                <div style={{display: 'flex'}}>
                <div style={{width : "85%"}}>
                    {user.user?.Role === "admin" ? <div><h1 style={{color : "rgb(8 189 128)"}}>Welcome to admins workspace</h1>
                    <Button type="primary">Add students</Button></div> : <h1 style={{color : "rgb(8 189 128)"}}> Welcome to HomePage </h1>}
                    <div className="details heading">
                        <p>Student Name</p>
                        <p>Student Grade</p>
                        <p>Teacher</p>
                    </div>
                    <div>
                    {data.map((e) => {
                        return (
                            <Link to={`/student/${e._id}`}><div className="details content" key = {e._id}>
                                <p>{e.Name}</p>
                                <p>{e.Grade}</p>
                                <p>{e.Teacher.Name}</p>
                            </div></Link>
                        )
                    })}
                    </div>
                    </div>
                    <div>
                        <h3>Sort By age</h3>
                        <Select placeholder="Please select sort order" name="Role" onChange={(value)=>setSorted(value)}>
                        <Option value="1">Ascending</Option>
                        <Option value="-1">Descending</Option>
                        </Select><br /> 
                        <h3>Filter By gender</h3>
                        <Select placeholder="Please select filter gender" name="Role" onChange={(value)=>setFilter(value)}>
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                    </Select><br/> 
                    </div>

                </div>
            <Pagination defaultCurrent={1} defaultPageSize={5} total={data.length*total} />
        </div>
          )  
}