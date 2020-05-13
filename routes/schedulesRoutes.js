const router = require('express').Router();
const { isPrivate } = require('../middlewares/checkAuth');

//Controller
const schedulesController = require('../controllers/schedulesController');


  //add Sched
  router.post('/add', isPrivate, schedulesController.saveScheds);
  
  //Load Scheds
  router.get('/load', isPrivate, schedulesController.loadScheds);
  
  //update scheds
  router.post('/update', isPrivate, schedulesController.updateScheds);
  
  //Delete Scheds
  router.delete('/delete', isPrivate, schedulesController.deleteScheds);
  
module.exports = router;
