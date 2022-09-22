const Router = require('express')
const unitController = require('../controllers/unit.controller')
const router = new Router()
const UnitController = require('../controllers/unit.controller')

router.get('/unit', unitController.getUnits)
router.post('/unit', unitController.createUnit)

module.exports = router