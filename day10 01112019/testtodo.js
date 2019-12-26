const express = require('express')
const app = express()

const testtodoRoute = require('./testtodoRoute/testtodoRoute')
app.use('/getTodolist',testtodoRoute)

// let todolist = []
// app.get('/getTodolist', (req,res) => {
//     res.send(todolist)
// })

app.listen(3000, () => {
    console.log('runningggg')
})