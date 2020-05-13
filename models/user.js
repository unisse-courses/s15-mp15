const mongoose = require('mongoose');
 
const userSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true} , 
    password: {type: String, required: true} ,
  });
  
  const User = mongoose.model('User',userSchema);
  
  exports.findUser = function(email, next){
    User.find(email, (err, user) => {
        next(err,user);
    });
  }

  exports.reg = function(obj, next){
    user = new User(obj);
    user.save(function(err, result){
      next(err,result);
  });
  }