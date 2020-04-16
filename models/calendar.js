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
      
module.exports = mongoose.model('Calendar',calendarSchema);