import React, { useState } from "react";

export const AddNewStudent = ({adding}) => {
    // export default function AddNewStudent() {
    const [student, setStudent] = useState({
      name: "",
      id: 0,
      courses: [""],
      email: "",
      operation: "",
      paid: false,
    });
    const handleName = (event) => {
      setStudent((previousState) => {
        return { ...previousState, name: event.target.value };
      });
    };
    // const handleId = (event) =>{
    //     setStudent(previousState => {
    //         return { ...previousState, id: student.id+1 }
    //       });
    // }
    const handleEmail = (event) => {
      setStudent((previousState) => {
        return { ...previousState, email: event.target.value };
      });
    };
    const handleCourse = (event) => {
      setStudent((previousState) => {
        return { ...previousState, courses: event.target.value };
      });
    };

    const handleOperation = (event) => {
      setStudent((previousState) => {
        return { ...previousState, operation: event.target.value };
      });
    };

    const handlePaid = (event) => {
      setStudent((previousState) => {
        return { ...previousState, paid: event.target.value };
      });
    };

    const handleClick = () => {
        student.id=student.id+1;
      const newStudent = student;
      console.log(newStudent);
      adding(newStudent);
    };

    return (
      <div>
        <div>{JSON.stringify(student)}</div>
        <br></br>
        <br></br>
        <label>
          Enter your name:
          <input type="text" value={student.name} onChange={handleName} />
        </label>
        <br></br>
        <br></br>
        <label>
          Enter courses want to register:
          <input type="text" value={student.courses} onChange={handleCourse} />
        </label>
        <br></br>
        <br></br>
        <label>
          Enter your operation:
          <input
            type="text"
            value={student.operation}
            onChange={handleOperation}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Enter your payment status:
          <input type="text" value={student.paid} onChange={handlePaid} />
        </label>
        <br></br>
        <br></br>
        <label>
          Enter your email:
          <input type="text" value={student.email} onChange={handleEmail} />
        </label>
        <br></br>
        <br></br>
        <button onClick={handleClick}>Submit Student</button>
      </div>
    );
  }
  
