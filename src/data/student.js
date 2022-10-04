let students=[
    {
        name:"Samira Rassas",
        id:1,
        email: "samirarassas22@gmail.com",
        courses: ["English","Hebrew"],
        operation: "Register",
        paid:true,
    },

{
    name:"Sandra Murad ",
    id:2,
    email: "sandra@gmail.com",
    courses: ["Arabic","Hebrew"],
    operation: "Register",
    paid:true,
},
{
  name:"Khalil Rassas ",
  id:3,
  email: "khalil@gmail.com",
  courses: ["Math","English", "Hebrew"],
  operation: "Unregister",
  paid:false,
},
{
  name:"Wael ",
  id:4,
  email: "wael@gmail.com",
  courses: ["Arabic","Math"],
  operation: "Register",
  paid:true,
},
{
  name:"Nadine Abu Omar ",
  id:5,
  email: "nadine@gmail.com",
  courses: ["Arabic","Math","English"],
  operation: "Unregister",
  paid:false,
}

]
export function getStudents() {
    return students;
  }

  export function getStudent(id) {
    return students.find(
      (student) => student.id === id
    );
  }
  export function getRegisters() {
    return  students.filter(
      (student) => student.operation === "Register"
    );
  }
  export function getUnregisters() {
    return  students.filter(
      (student) => student.operation === "Unregister"
    );
  }