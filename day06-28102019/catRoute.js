var express = require('express')
var router = express.Router() // function Router

router.get('/walk', function (req, res) {
  res.send('cat walk')
})

router.get('/play', function (req, res) {
  res.send('cat play')
})

router.get('/eat', function (req, res) {
  res.send('cat eat')
})

router.get('/sleep', function (req, res) {
  res.send('cat sleep')
})

module.exports = router