let courses=[
    {
        name:"Math",
        id: 1,
        registers:['Nadine Abu Omar','Khalil Rassas','Wael'],
    },
    {
        name:"Arabic",
        id: 2,
        registers:['Samira Rassas', 'Sandra Murad', 'Nadine Abu Omar','Wael'],
    },
    {
        name:"English",
        id: 3,
        registers:['Nawal Karaki', 'Nadine Abu Omar','Khalil Rassas','Samira Rassas' ],
    },
    {
        name:"Hebrew",
        id: 4,
        registers:['Khalil Rassas','Sandra Murad', 'Samira Rassas'],
    }
]
export function getCourses() {
    return courses;
  }

  export function getCourse(id) {
    return courses.find(
      (course) => course.id === id
    );
  }
