module.exports = (app, db) => {
    app.get('/reserves', (req, res) => {
        db.reserve.findAll()
        .then((result) => {
            res.status(201).json(result)
        }).catch((err) => {
            res.status(400).json(err)
        })
    })
    app.post('/reserve', async (req, res) => {
        const boatID = req.body.boatID
        const sailorID = req.body.sailorID
        const date = req.body.date

        try {
            const boat = await db.boat.findByPk(boatID)
            const sailor = await db.sailor.findByPk(sailorID)

            const result = await boat.addSailor(sailor, { through: { date: date } })
            // const result = await sailor.addBoat(boat, { through: { date: date } })

            res.status(201).json(result)
        }
        catch (err) {
            console.log(err)
            res.status(400).json({ ErrorMessage: err.message })
        }
    })
}