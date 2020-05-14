//Model
const Schedule = require('../models/schedules');

exports.saveScheds = function(req, res) {
    var schedule = ({
        calendarId: req.body.calendarId,
        email:  req.session.email,
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
            result = { success: false, message: "Schedule was not created!" }
            res.send(result);
        }
        else{
            result = { success: true, message: "Schedule created!"}
            // Sending the result as is to handle it the "AJAX-way".
            res.send(result);
        }
    })
};

exports.loadScheds = function(req, res) {
    Schedule.load({email: req.session.email}, function(scheduleObjects){
        res.json({schedules: scheduleObjects });
    });
};

exports.updateScheds = function(req, res) {
    var query = {
        calendarId: req.body.calendarId,
        email:  req.session.email,
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
        if(err) {
            console.log(err);
            result = { success: false, message: "Schedule was not updated!" }
            res.send(result);
        }
        else{
            result = { success: true, message: "Schedule updated!"}
            // Sending the result as is to handle it the "AJAX-way".
            res.send(result);
        };
    });   
};


exports.deleteScheds = function(req,res){
    var query = {
        calendarId: req.body.calendarId,
        email:  req.session.email,
        title: req.body.title,
        location: req.body.location, 
        raw: {class: req.body.raw.class},
        start: req.body.start,
        end: req.body.end,
        isAllDay: req.body.isAllDay,
        state: req.body.state,
      };

    Schedule.delete(query, function (err, sched){
        if(err) {
            console.log(err);
            result = { success: false, message: "Schedule was not deleted!" }
            res.send(result);
        }
        else{
            result = { success: true, message: "Schedule deleted!"}
            // Sending the result as is to handle it the "AJAX-way".
            res.send(result);
        }
    });
}
