const Router = require('express')
const unitController = require('../controllers/unit.controller')
const router = new Router()

router.get('/unit', unitController.getUnits)
router.get('/count', unitController.getCount)
router.post('/unit', unitController.createUnit)

module.exports = router