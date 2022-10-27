const express = require('express')
const server =express()

let students=  {
    name:"Samira Rassas",
    id:1,
}

server.get('/emplyee', (req, res) => {
    if(!req.query.name){
        res.status(404).send("Name is not given")
    }
    else{
        console.log(students)
        let result= students.find(s=> s.name.toLowerCase()===req.query.name.toLocaleLowerCase())
        if(!result){
            res.status(404).send("student" + req.query.name +"was not found")
         } else{
                res.send(result)

            }
    }
    // res.send('<h1>hello , you are in the about</h1>')
  })
 
    server.listen(3000, ()=>{
        console.log("server is app and running on port 3000")
    })