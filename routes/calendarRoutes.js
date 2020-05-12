const router = require('express').Router();

//Controller
const calendarController = require('../controllers/calendarController');

   //add calendar
  router.post('/add', calendarController.addCal);
  
  //Load Calendars
  router.get('/:user', calendarController.getAll);

  module.exports = router;