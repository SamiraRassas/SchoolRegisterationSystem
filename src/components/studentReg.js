import { getStudents } from "../data/student";
import { Outlet, Link } from "react-router-dom";

export default function StudentReg() {
  let studentList = getStudents();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {studentList.map((student) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/studentreg/${student.id}`}
            key={student.id}
          >
            {student.name}
          </Link>

        ))}
           <Link
            style={{ display: "block", margin: "1rem 0" , fontSize:"20px"}}
            to={`/addnewstudent`}
          >
           Add New Student
          </Link>
       
      </nav>
      <Outlet/>
    </div>
  );
}
