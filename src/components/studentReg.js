import { Outlet, Link, Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import "./style.css";

export default function StudentReg() {
  const [studentlist, setStudentlist] = useState([]);
  const fetchData = async () => {
    await fetch(`http://127.0.0.1:3000/students/`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        //let Data = JSON.stringify(data);
        // setStudentlist(Data);
        // let map = new Map(Object.entries(data));
        // console.log(data);
        setStudentlist(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);


  const updateData = async (props) => {
    const params = {
      id: 123
    }
    const studentId = props.studentid;
    await fetch(`http://localhost:3001/student/${studentId}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
       },
       body: JSON.stringify(params) // We send data in JSON format
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(`data ${data}`);
        setStudentlist(data);
      });
  };
  return (
    <div className="all">
      <nav id="navv">
        {studentlist.map((student) => (
          <div className="studentrow">
            <Link id="link" to={`/studentreg/${student.id}`} key={student.id}>
              {student.name}
            </Link>
            <button id="deletebtn">
              DELETE
            </button>
            <button id="updatebtn" onClick={()=>updateData()}>UPDATE</button>
          </div>
        ))}

        <Link id="addlink" to={`/addnewstudent`}>
          Add New Student
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
