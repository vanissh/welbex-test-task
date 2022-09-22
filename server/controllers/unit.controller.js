const db = require('../db')

class UnitController {
    async getUnits(req, res) {
        const units = await db.query(`SELECT * FROM unit`)
        res.json(units.rows)
    }

    async createUnit(req, res) {
        const {name, amount, distance} = req.body
        const date = new Date().toLocaleDateString()
        
        const newUnit = await db.query(`INSERT INTO unit (date, name, amount, distance) values ($1, $2, $3, $4) RETURNING * `,
                    [date, name, amount, distance])

        res.json(newUnit.rows[0])
    }
}

module.exports = new UnitController()