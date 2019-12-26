// var express = require('express')
// var app = express()

// app.get('/bye',function(req,res) {
//     res.send('Good bye') // respond request
// })
// app.listen(5555) // port:5555 part:/bye

// ---------------------------------------------------------------

// var express = require('express')
// var app = express()

// var userRoute = require('./userRoute')
// app.use('/user', userRoute)

// app.listen(3000)

// ---------------------------------------------------------------

// var express = require('express')
// var app = express()

// var dogRoute = require('./dogRoute')
// app.use('/dog', dogRoute)

// var catRoute = require('./catRoute')
// app.use('/cat', catRoute)

// app.listen(3000)

// ---------------------------------------------------------------

// var express = require('express')
// var app = express()

// app.use(express.static('./public/'))

// var userRoute = require('./userRoute')
// app.use('/user', userRoute)

// // app.use('',function(req,res,next) {
// //     res.send('404 Not Found')
// // })

// app.listen(3000)

// ---------------------------------------------------------------

var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
	extended: true // set value in request.body
}))
var userRoute = require('./userRoute')
app.use('/user', userRoute)

app.listen(3100)
