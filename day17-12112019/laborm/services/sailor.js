module.exports = (app, db) => {
    app.get('/sailors', (req, res) => {
        db.sailor.findAll({ include: [db.boat] })
        .then((result) => {
            res.status(201).json(result)
        }).catch((err) => {
            res.status(400).json()
        })
    })
    app.post('/sailor', (req, res) => {
        sailorName = req.body.name
        sailorRating = req.body.rating
        sailorAge = req.body.age
        db.sailor.create({
            name: sailorName,
            rating: sailorRating,
            age: sailorAge
        }).then((result) => {
            res.status(201).json(result)
        }).catch((err) => {
            console.log(err)
            res.status(400).json({ ErrorMessage: err.message })
        })
    })
    app.put('/sailor/:id', (req, res) => {
        db.sailor.update(
            {
                name: req.body.name,
                rating: req.body.rating,
                age: req.body.age
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
    app.delete('/sailor/:id', (req, res) => {
        db.sailor.destroy(
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