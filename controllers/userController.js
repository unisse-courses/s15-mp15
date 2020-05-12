//Model
const User = require('../models/user');
//Security
const bcrypt = require('bcryptjs');

exports.loadUserCal = function(req,res){
    User.findUser({email: req.body.username}, function(err, user){
        if(err)
        {
            console.log(err);
            res.status(500).json({
              error: err
            });
        }
        else
        {
            if(user.length < 1){
                return res.status(401).json({
                    message: 'Auth failed'
                });
              }
              bcrypt.compare(req.body.password, user[0].password, (err, result) =>{
                if(err){
                  return res.status(401).json({
                      message: 'Auth failed'
                  });
                }
                  if(result){
                    return res.status(200).render('calendar', {
                      title:  'My Calendar',
                      email: user[0].email,
                  })
                  }
                  else{
                      return res.status(401).json({
                        message: 'Auth failed'
                    });
                  }
              });
        }
    });
  };

  exports.register = function(req, res) {
    if(req.body.password === req.body.passwordConfirm){
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err){
          return res.status(500).json({
              error: err
          });
        } 
        else{
            var user = ({
                email: req.body.username,
                password: hash
            });
    
            User.reg(user, function(err, result){
                    if(err){
                        res.status(500).json({
                            error: err
                        });
                    }
                    else
                    {
                        console.log(result);
                        res.status(201).redirect('/');
                    }
            });
           }
      });
    }
    else{
      return res.status(500).json({
        message: "Passwords do not match"
      });
    }
  };