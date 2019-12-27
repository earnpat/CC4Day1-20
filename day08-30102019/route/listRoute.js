var express = require('express')
var listController = require('../controller/listController') // .. = return 1 folder and find
var router = express.Router()

router.get('/:key', listController.getData)
router.post('/:key/:value', listController.addData)
router.patch('/:key/:value', listController.updateData)
router.delete('/:key', listController.removeData)

app.use('/list', listController)

module.exports = router