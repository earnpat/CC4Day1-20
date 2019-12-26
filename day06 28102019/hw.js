var express = require('express')
var app = express()
// 1 //
app.get('/static',function(req,res) {
    res.send('Hello World')
})
// 2 //
app.get('/staticJSON',function(req,res) {
    let hello = 'Hello World';
    res.send(hello)
})
// 3 //
var hwRoute = require('./hwRoute')
app.use('/echo', hwRoute)
// 4  //
app.get('/plus',function(req,res) {
    var a = parseInt(req.query.a)
    var b = parseInt(req.query.b)
    res.send(String(a + b))
})
// 5 //
app.get('/plusByJSON',function(req,res) {
    var c = JSON.parse(req.query.jsonText)
    var d = c.a + c.b;
    res.send(String(d))
})
// 6 //
var hwRoute = require('./hwRoute')
app.use('/plus', hwRoute)
// 7 //
var hwRoute = require('./hwRoute')
app.use('/checkEvenNumber', hwRoute)
// 10 //
var hwRoute = require('./hwRoute')
app.use('/number', hwRoute)
// 20 //
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.post('/countFields',function(req,res) {
    let obj = req.body;
    let count = 0;
    for(key in obj)
    {
        count++;
    }
    res.send(String(count))
})

app.listen(3000)