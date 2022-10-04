import React, { useState } from "react"
import { AddNewStudent } from "./AddNewStudent"
import { students } from "../data/student";

export  const StudentsList = () => {

    const [studentss, setStudentss] = useState(students)

    const adding = (newStudent) => {
        const newList = studentss.concat(newStudent)
        setStudentss(newList)
        students.push(newStudent)
        console.log("HELLO"+ students);
    }
    console.log(studentss);

    return (
        <div>
           <AddNewStudent adding={adding} />
           <div> Student was added correctly</div>
        </div>
    )
}