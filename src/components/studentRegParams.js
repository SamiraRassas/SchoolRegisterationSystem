import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStudent } from "../data/student";

export default function StudentRegParams() {
  // let student = getStudent(parseInt(params.studentId, 10));
  let params= useParams();
  const studentId = JSON.stringify(params.studentId);
  const id=studentId.replace(/^"(.*)"$/, '$1');
  // console.log(id);
  const [student, setStudent] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://127.0.0.1:3000/students/?id=${id}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(`data ${data}`);
          setStudent(data);
        });
    };
    fetchData();
  }, [id]);
  return (
    <main style={{ padding: "1rem" }}>
      <h2>{student.name}</h2>
      <p>
        ID: {student.id}
        <br></br>
        {/* Courses: {student.courses.map((course) => course + ", ")} */}
        <br></br>
        Email : {student.email}
        <br></br>
      </p>
    </main>
  );
}
