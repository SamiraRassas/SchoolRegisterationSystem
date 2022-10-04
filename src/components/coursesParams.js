import { useParams } from "react-router-dom";
import { getCourse } from "../data/courses";

export default function CoursesParams() {
  let params = useParams();
  let course = getCourse(parseInt(params.courseId, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>{course.name}</h2>
      <h3>Students in this course : </h3>
      <p>
        {course.registers.map((
            register)=>(
                register + ", "

            )
        )}
        <br></br>
      </p>
    </main>
  );
}

// .replace(/\s+/g, "")
