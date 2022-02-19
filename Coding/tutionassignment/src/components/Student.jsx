import React from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import {UserContext} from "./Context/userContext"
import "./style.css"

export const Student = () => {
    const params = useParams();
    const { user } = React.useContext(UserContext);

    const [student, setStudent] = React.useState({});
    React.useEffect(() => {
        getStudent();
    }, [params, user.token]);

    
    const getStudent = () => {
        axios.get(`http://localhost:2345/students/${params.id}`, {
            headers : {authorization: `Bearer ${user.token}`}
        }).then((response) => {
            console.log(response.data)
            setStudent(response.data.student);
        }).catch((error) => {
            alert("Error : " + error.message);
        })
    }

    return (
        Object.keys(student).length > 0 && <div style={{ width: "60%", margin: " 50px 20%" }}>
            <h1 style={{textAlign : "center",color:"rgb(45 129 247)"}}>Student details</h1>
            <div className="singleDetails">
                <label> Name </label>
                <p> {student.Name} </p>
            </div>
            <div className="singleDetails">
                <label> Age </label>
                <p> {student.Age} </p>
            </div>
            <div className="singleDetails">
                <label> Gender </label>
                <p> {student.Gender} </p>
            </div>
            <div className="singleDetails">
                <label> Grade </label>
                <p> {student.Grade} </p>
            </div>
            <div className="singleDetails">
                <label> Teacher </label>
                <p> {student.Teacher.Name} </p>
            </div>
            <h1 style={{color : "rgb(8 189 128)"}}><b>Tests</b></h1>
            {student.Test.map((e) => {
                return (
                    <div key={e._id}>
                        <div className="singleDetails">
                            <label className="test"> Test Name : </label>
                            <p className="test">{e.Name}</p>
                        </div>
                        <div className="singleDetails">
                            <label> Subject Name : </label>
                            <p>{e.Subject}</p>
                        </div>
                        <div className="singleDetails">
                            <label> Subject Marks : </label>
                            <p>{e.Marks}</p>
                        </div>
                        <div className="singleDetails">
                            <label>Subject Grade</label>
                            <p>{e.Grade}</p>
                        </div>
                    </div>)                    
            })}
        </div>
    )
}
