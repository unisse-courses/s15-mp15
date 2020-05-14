const mongoose = require('./connection');
 
const scheduleSchema = mongoose.Schema({
    email: String,
    calendarId: String,
    title: String,
    location: String, 
    raw: {class: String },
    start: String,
    end: String,
    isAllDay: Boolean,
    state: String,
  });
  
const Schedule = mongoose.model('Schedule',scheduleSchema);

exports.delete = function(query, next){
  Schedule.deleteOne(query, function (err, sched) {
      next(err, sched);
  });

};

exports.update = function(query, update, next){
  Schedule.findOneAndUpdate(query, update, { new: true }, function(err, user) {
    next(err, user);
  });
};

exports.load = function(email, next){
  Schedule.find(email).exec(function(err, result) {
    var scheduleObjects = [];

    result.forEach(function(doc) {
      scheduleObjects.push(doc.toObject());
    });
    
    next(scheduleObjects);
  });
}

exports.save = function(obj, next){
  const schedule = new Schedule(obj);
   
  schedule.save(function(err, result){
      next(err,result);
  });
};


