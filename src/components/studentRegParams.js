import { useParams } from "react-router-dom";
import { getStudent } from "../data/student";

export default function StudentRegParams() {
  let params = useParams();
  //   console.log(params);
  let student = getStudent(parseInt(params.studentId, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>{student.name}</h2>
      <p>
        ID: {student.id}
        <br></br>
        Courses: {student.courses.map((course) => course + ", ")}
        <br></br>
        Email : {student.email}
        <br></br>
      </p>
    </main>
  );
}

// .replace(/\s+/g, "")
