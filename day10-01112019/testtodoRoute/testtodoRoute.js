const router = require('express').Router()

let todo = []
router.put('/:a',function(req,res) {
    let list = String(req.params.a)
    todo.push(list)
    res.send(todo)
})

module.exports = router