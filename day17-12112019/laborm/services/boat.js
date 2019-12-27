module.exports = (app, db) => {
    app.get('/boats', (req, res) => {
        db.boat.findAll()
        .then((result) => {
            res.status(201).json(result)
        }).catch((err) => {
            res.status(400).json()
        })
    })
    app.post('/boat', (req, res) => {
        boatName = req.body.name
        boatColor = req.body.color
        db.boat.create({
            name: boatName,
            color: boatColor
        }).then((result) => {
            res.status(201).json(result)
        }).catch((err) => {
            res.status(400).json({ ErrorMessage: err.message })
        })
    })
    app.put('/boat/:id', (req, res) => {
        db.boat.update(
            {
                name: req.body.name,
                color: req.body.color
            },
            {
                where: { id: req.params.id }
            }
        ).then((result) => {
            res.status(201).json('update success')
        }).catch((err) => {
            res.status(400).json('update error')
        })
    })
    app.delete('/boat/:id', (req, res) => {
        db.boat.destroy(
            {
                where: { id: req.params.id }
            }
        ).then((result) => {
            res.status(204).json('delete success')
        }).catch((err) => {
            res.status(400).json('delete error')
        })
    })
}