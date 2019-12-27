var express = require('express')
var router = express.Router() // function Router
// // 3 //
// router.get('/', function (req, res) {
//   res.send(req.query.text)
// })
// // 7 //
// router.get('/:c', function (req, res) {
//   var c = parseInt(req.params.c)
//   if(c%2==0) res.sendStatus(200)
//   else res.sendStatus(400)
// })
// // 6 //
// router.get('/:a/:b', function (req, res) {
//   var a = parseInt(req.params.a)
//   var b = parseInt(req.params.b)
//   res.send(String(a + b))
// })
// // 10 //
// let arr10 = [];
// router.post('/:d', function (req, res) {
//   var d = parseInt(req.params.d)
//   arr10.push(d)
//   res.send(arr10)
// })
// // 11 //
// router.delete('/:d', function (req, res) {
//   var d = parseInt(req.params.d)
//   if(arr10.includes(d))
//   {
//     arr10.splice(arr10.indexOf(d),1)
//   }
//   res.send(arr10)
// })
// // 17 //
// let arr10 = [];
// router.put('/:e/:f',function(req,res) {
//   var e = parseInt(req.params.e)
//   var f = parseInt(req.params.f)
//   arr10.push(e)
//   arr10.splice(arr10.indexOf(e),1,f)
//   res.send(arr10)
// })


module.exports = router