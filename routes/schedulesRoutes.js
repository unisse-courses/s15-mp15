const router = require('express').Router();

//Controller
const schedulesController = require('../controllers/schedulesController');


  //add Sched
  router.post('/add', schedulesController.saveScheds);
  
  //Load Scheds
  router.get('/load', schedulesController.loadScheds);
  
  //update scheds
  router.post('/update', schedulesController.updateScheds);
  
  //Delete Scheds
  router.delete('/delete', schedulesController.deleteScheds);
  
module.exports = router;
