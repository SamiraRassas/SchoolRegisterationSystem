const express = require('express')
const server =express()


server.get('/about', (req, res) => {
    res.send('<h1>hello , you are in the about</h1>')
  })
  
  server.get('/help', (req, res) => {
      res.send('hello , you are in the help')
    })
    server.get('/info', (req, res) => {
        res.send({
            name:"Samira Rassas",
            email: "samirarassas22@gmail.com",
            operation: "Register",    
        })
      })
      
    server.listen(3000, ()=>{
        console.log("server is app and running on port 3000")
    })