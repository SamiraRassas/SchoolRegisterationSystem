import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

export default function DeleteData() {
    const [studentlist, setStudentlist] = useState([]);
    let params= useParams();
    const studentId = JSON.stringify(params.studentId);
    const id=studentId.replace(/^"(.*)"$/, '$1');


     useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://127.0.0.1:3000/student/${studentId} `, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(`data ${data}`);
          setStudentlist(data);
        });
    };
    fetchData();
  }, [id]);
}
