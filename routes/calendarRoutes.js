const router = require('express').Router();
const { isPrivate } = require('../middlewares/checkAuth');

//Controller
const calendarController = require('../controllers/calendarController');

   //add calendar
  router.post('/add', isPrivate, calendarController.addCal);
  
  //Load Calendars
  router.get('/:user', isPrivate, calendarController.getAll);

  module.exports = router;