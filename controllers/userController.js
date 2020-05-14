//Model
const User = require('../models/user');
const Calendar = require('../models/calendar');

//Security
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

exports.loadUserCal = function(req,res){
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const {
        username,
        password
      } = req.body;
    
      User.findUser({email: req.body.username}, function(err, user){
        if (err) {
          // Database error occurred...
          req.flash('error_msg', 'Something happened! Please try again.');
          res.redirect('/');
        } else {
          // Successful query
          if (user.length == 1) {
            // User found!
            bcrypt.compare(req.body.password, user[0].password, (err, result) =>{
                if(result){
                    req.session.user = user[0]._id;
                    req.session.email = user[0].email;
                
                    console.log(req.session);
    
                    return res.status(200).render('calendar', {
                      title:  'doetal',
                  })
                }
                else{
                    req.flash('error_msg', 'Incorrect password. Please try again.');
                    res.redirect('/');
                }
                    });
            }
            else {
            // No user found
            req.flash('error_msg', 'No registered user with that email. Please register.');
            res.redirect('/register');
          }
        }
      });
    } else {
      const messages = errors.array().map((item) => item.msg);
    
      req.flash('error_msg', messages.join(' '));
      res.redirect('/');
    }
  };

 

  exports.register = function(req, res) {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { username, password } = req.body;
    
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err){
          req.flash('error_msg', 'Something happened! Please try again.');
          res.redirect('/register');
        } 
        else{
            var user = ({
                email: req.body.username,
                password: hash
            });
    
            User.reg(user, function(err, result){
                    if(err){
                      req.flash('error_msg', 'Email is already Registered/Server Error. Please Try Again!');
                      res.redirect('/register');
                    }
                    else
                    {
                        console.log(result);
                        var calendar = ({
                          id: 1,
                          name: 'My Calendar',
                          checked: true, 
                          color: '#ffffff',
                          bgColor: '#4d5c6c',
                          borderColor:'#4d5c6c',
                          dragBgColor: '#4d5c6c',
                          user:  req.body.username,
                        });
                        
                        try {
                          Calendar.save(calendar);
                          res.status(201).redirect('/');
                        } catch (err) {
                          res.status(500).send(err);
                        }
                    }
            });
           }
      });
    } else {
      const messages = errors.array().map((item) => item.msg);
    
      req.flash('error_msg', messages.join(' '));
      res.redirect('/register');
    }
  };

  exports.logoutUser = (req, res) => {
    if (req.session) {
      req.session.destroy(() => {
        res.clearCookie('connect.sid');
        res.redirect('/');
      });
    }
  };