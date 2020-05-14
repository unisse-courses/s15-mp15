//Model
const Calendar = require('../models/calendar');

exports.addCal = async(req, res)=>{
   
  if(req.body.id <=15)
  {
    var calendar = ({
      id: req.body.id,
      name: req.body.tag,
      checked: true, 
      color: req.body.textcolorpicker,
      bgColor: req.body.colorpicker,
      borderColor: req.body.colorpicker,
      dragBgColor: req.body.colorpicker,
      user:  req.session.email,
    });
    
    try {
      await Calendar.save(calendar);
      res.status(201).send(calendar);
    } catch (err) {
      res.status(500).send({status: false, count: 0});
    }
    }
    else{
      res.status(500).send({status: false, count: 11});
    }
};

exports.getAll = function(req, res) {  
    Calendar.getAllCal({user:  req.session.email}, function(calendarObjects){
        res.json({calendars: calendarObjects });
    });
};
