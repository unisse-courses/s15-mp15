//Model
const Schedule = require('../models/schedules');

exports.saveScheds = function(req, res) {
    var schedule = ({
        calendarId: req.body.calendarId,
        email: req.body.email,
        title: req.body.title,
        location: req.body.location, 
        raw: {class: req.body.raw.class},
        start: req.body.start,
        end: req.body.end,
        isAllDay: req.body.isAllDay,
        state: req.body.state,
       });

    Schedule.save(schedule, function(err, result){
        if(err) {
            console.log(err);
            res.status(500).json({
            error: err
            });
        }
        else{
            res.status(201);
            console.log(result);
        }
    })
};

exports.loadScheds = function(req, res) {
    Schedule.load({email: req.query.email}, function(scheduleObjects){
        res.json({schedules: scheduleObjects });
    });
};

exports.updateScheds = function(req, res) {
    var query = {
        calendarId: req.body.calendarId,
        email: req.body.email,
        title: req.body.title,
        location: req.body.location, 
        raw: {class: req.body.raw.class},
        start: req.body.start,
        end: req.body.end,
        isAllDay: req.body.isAllDay,
        state: req.body.state,
      };
      
      var update = {
        $set: req.body.new
      };

    Schedule.update(query, update, function(err, user){
        if (err) throw err;
        console.log(user);
        res.send(user);
    });   
};


exports.deleteScheds = function(req,res){
    var query = {
        calendarId: req.body.calendarId,
        email: req.body.email,
        title: req.body.title,
        location: req.body.location, 
        raw: {class: req.body.raw.class},
        start: req.body.start,
        end: req.body.end,
        isAllDay: req.body.isAllDay,
        state: req.body.state,
      };

    Schedule.delete(query, function (err, sched){
        if (err) throw err
        console.log(sched);
        res.status(200).send();
    });
}
