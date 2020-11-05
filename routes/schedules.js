var express = require('express');
var router = express.Router();
var scheduleController = require('../controllers/schedules')

/* GET users listing. */
router.get('/:id', scheduleController.getSchedule);
router.get('/', scheduleController.getAllSchedules);
router.post('/', scheduleController.createSchedule);
router.patch('/:id', scheduleController.updateSchedule);
router.delete('/:id', scheduleController.deleteSchedule);

module.exports = router;