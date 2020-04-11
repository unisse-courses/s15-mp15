const mongoose = require('mongoose');
 
const scheduleSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    CalendarId: String,
    title: String,
    location: String, 
    raw: {class: String },
    start: Date,
    end: Date,
    isAllDay: Boolean,
    state: String,
  });
  
module.exports = mongoose.model('Schedule',scheduleSchema);
