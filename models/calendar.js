const mongoose = require('mongoose');

const calendarSchema = mongoose.Schema({
    id: String,
    name: String,
    checked: Boolean, 
    color: String,
    bgColor: String,
    borderColor: String,
    dragBgColor: String,
    user: String,
});
      
const Calendar = mongoose.model('Calendar',calendarSchema);

exports.save = async(obj)=>{
    try{
    calendar = new Calendar(obj);
    const response = await calendar.save();
    return response;
    }
    catch (error) {
        throw Error(error);
    }
};

exports.getAllCal = function(user, next){
    Calendar.find(user).exec(function(err, result) {
        var calendarObjects = [];
  
        result.forEach(function(doc) {
          calendarObjects.push(doc.toObject());
        });
        
        next(calendarObjects);
      });
};