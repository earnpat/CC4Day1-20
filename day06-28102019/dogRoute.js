var express = require('express')
var router = express.Router() // function Router

router.get('/walk', function (req, res) {
  res.send('dog walk')
})

router.get('/play', function (req, res) {
  res.send('dog play')
})

router.get('/eat', function (req, res) {
  res.send('dog eat')
})

router.get('/sleep', function (req, res) {
  res.send('dog sleep')
})

module.exports = router