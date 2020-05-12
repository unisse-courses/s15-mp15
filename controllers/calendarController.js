//Model
const Calendar = require('../models/calendar');

exports.addCal = async(req, res)=>{
   
    var calendar = ({
      id: req.body.id,
      name: req.body.tag,
      checked: true, 
      color: req.body.colorpicker,
      bgColor: req.body.colorpicker,
      borderColor: req.body.colorpicker,
      dragBgColor: req.body.colorpicker,
      user: req.body.user,
    });
    
    try {
      await Calendar.save(calendar);
      res.status(201).send(calendar);
    } catch (err) {
      res.status(500).send(err);
    }
};

exports.getAll = function(req, res) {  
    Calendar.getAllCal({user: req.params.user}, function(calendarObjects){
        res.json({calendars: calendarObjects });
    });
};
