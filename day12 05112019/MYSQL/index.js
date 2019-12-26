const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '987654321',
    database: 'boatrental'
})

db.connect()

app.get('/boats', (req, res) => {
    let query = "select * from boats"
    db.query(query, (err, results) => {
        res.json(results)
    })
})

app.get('/addboat', (req, res) => {
    let query = `insert into boats(bid, bname, color) values (${req.query.bid},"${req.query.bname}","${req.query.color}")`
    db.query(query, (err, results) => {
        if(err) console.log(err)
        else res.json("success")
    })
})

app.get('/deleteboatbyid', (req, res) => {
    let query = `delete from boats where bid = ${req.query.deleteboatid}`
    db.query(query, (err, results) => {
        if(err) console.log(err)
        else res.json(`deleted boat id: ${req.query.deleteboatid} already.`)
    })
})

app.get('/updateboat', (req, res) => {
    let query = `update boats set bname = "${req.query.bname}", color = "${req.query.color}" where bid = "${req.query.bid}"`
    db.query(query, (err, results) => {
        if(err) console.log(err)
        else res.json(`update boat id: ${req.query.bid} already.`)
    })
})

app.listen(3001, () => {
    console.log("start server at port 3001")
})