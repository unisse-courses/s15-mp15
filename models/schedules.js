const mongoose = require('mongoose');
 
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
  
module.exports = mongoose.model('Schedule',scheduleSchema);
