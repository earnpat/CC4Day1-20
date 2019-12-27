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

app.get('/reserves', (req, res) => {
    let query = "select * from reserves"
    db.query(query, (err, results) => {
        res.json(results)
    })
})

app.get('/addreserve', (req, res) => {
    let query = `insert into reserves(sid, bid, day) values (${req.query.sid},${req.query.bid},"${req.query.day}")`
    db.query(query, (err, results) => {
        if(err) console.log(err)
        else res.json("success")
    })
})

app.get('/deletereservebyid', (req, res) => {
    let query = `delete from reserves where sid = ${req.query.deletereserveid}`
    db.query(query, (err, results) => {
        if(err) console.log(err)
        else res.json(`deleted reserve id: ${req.query.deletereserveid} already.`)
    })
})

app.get('/updatereserve', (req, res) => {
    let query = `update reserves set bid = "${req.query.bid}", day = "${req.query.day}" where sid = "${req.query.sid}"`
    db.query(query, (err, results) => {
        if(err) console.log(err)
        else res.json(`update reserve id: ${req.query.sid} already.`)
    })
})

app.listen(3002, () => {
    console.log("start server at port 3001")
})