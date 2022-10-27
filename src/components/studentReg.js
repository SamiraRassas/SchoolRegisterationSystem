import { getStudents } from "../data/student";
import { Outlet, Link, Router ,Route,Routes} from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function StudentReg() {
  const [studentlist, setStudentlist] = useState([]);
  const fetchData = async () => {
    await fetch(`http://127.0.0.1:3000/students/`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        let Data = JSON.stringify(data);
        // setStudentlist(Data);
        let map = new Map(Object.entries(data));
        console.log(map);
        setStudentlist(map);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  // console.log(`>>>+ ${studentlist}`);

  studentlist.forEach((student) => {
    console.log(student.name);
  });
  return (
    // <>
    // <Routes>
    //   <li>
    //     <Link to={`/studentreg/`}>hello</Link>
    //   </li>
    //      <Route path="/studentreg" component={StudentReg}/>
    //      </Routes>
    // </>
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {studentlist.forEach((student) => {
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/studentreg/${student.id}`}
            key={student.id}
          >
            {student.name}
          </Link>
        })}
          <button>DELETE</button>
          <button>UPDATE</button>
        <Link
          style={{ display: "block", margin: "1rem 0", fontSize: "20px" }}
          to={`/addnewstudent`}
        >
          Add New Student
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}