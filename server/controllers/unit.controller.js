const db = require('../db')

class UnitController {
    async getUnits(req, res) {
        try {
            let {column, condition, value, sortedField, sortedValue, page, limit} = req.query
            page = page || 1
            limit = limit || 5

            //отступ 
            let offset = page * limit - limit 
            let units

            //сортировка
            const sortTemplate = sortedField && sortedValue && `ORDER BY ${sortedField} ${sortedValue}`

            //фильтрация
            const filterTemplate = column && condition && value && 
                `WHERE ${column} ${condition} ${condition === 'LIKE' ? `'%${value}%'` : value}`

            units = await db.query(`SELECT * FROM unit ${filterTemplate} ${sortTemplate}`)

            res.json(units.rows.splice(offset, limit))
        } catch (e) {
            console.log(e)
        }
    }

    //общее количество строк
    async getCount(req, res){
        let count = await db.query(`SELECT COUNT(1) FROM unit`)
        res.json(count.rows[0].count)
    }

    //создание строки
    async createUnit(req, res) {
        const {name, amount, distance} = req.body
        const date = new Date().toLocaleDateString()
        
        const newUnit = await db.query(`INSERT INTO unit (date, name, amount, distance) values ($1, $2, $3, $4) RETURNING * `,
                    [date, name, amount, distance])

        res.json(newUnit.rows[0])
    }
}

module.exports = new UnitController()