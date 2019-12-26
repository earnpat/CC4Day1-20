var listModel = require('../model/listModel')

module.exports.getData = function(req, res) {
	const { key } = req.params
	
	var value = listModel.get(key)
    if (value)
    {
		res.status(200).send(value)
    }
    else
    {
		res.status(404).send(key + ' is not found')
	}
}

module.exports.addData = function(req, res) {
	const { key, value } = req.params // key = req.params.key & value = req.params.value
	
	listModel.set(key, value)
	res.status(200).send('Success')
}

module.exports.updateData = function(req, res) {
	const { key, value } = req.params
	
    if (listModel.has(key))
    {
		listModel.set(key, value)
		res.status(200).send('Success')
    }
    else
    {
		res.status(404).send(key + ' is not found')
	}
}

module.exports.removeData = function(req, res) {
	const { key } = req.params
	
    if (listModel.has(key))
    {
		listModel.delete(key)
		res.status(200).send('Success')
    }
    else
    {
		res.status(404).send(key + ' is not found')
	}
}

module.exports = router