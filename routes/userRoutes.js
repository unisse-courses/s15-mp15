const router = require('express').Router();
const { isPublic, isPrivate } = require('../middlewares/checkAuth');

//Controller
const userController = require('../controllers/userController');
const { registerValidation, loginValidation } = require('../validators.js');


//Get User Calendar
router.post('/calendar', isPublic, loginValidation, userController.loadUserCal);
  
// logout
router.get('/logout', isPrivate, userController.logoutUser);
  
//USER SIGN UP
router.post('/add', isPublic,  registerValidation, userController.register);
  
module.exports = router;
  
  