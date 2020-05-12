const router = require('express').Router();

//Controller
const userController = require('../controllers/userController');



//Get User Calendar
router.post('/calendar', userController.loadUserCal);
  
  
  
  //USER SIGN UP
  router.post('/add', userController.register);
  
module.exports = router;
  
  