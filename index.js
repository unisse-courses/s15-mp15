// All imports needed here
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const User = require('./models/user')
// Creates the express application
const app = express();
const port = 9090;

//database connection constants
const databaseURL = "mongodb://G15:1234@calendar-shard-00-00-xd9qk.gcp.mongodb.net:27017,calendar-shard-00-01-xd9qk.gcp.mongodb.net:27017,calendar-shard-00-02-xd9qk.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Calendar-shard-0&authSource=admin&retryWrites=true&w=majority";
const options = { useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false };
mongoose.connect(databaseURL, options);

/**
  Creates an engine called "hbs" using the express-handlebars package.
**/
app.engine( 'hbs', exphbs({
    extname: 'hbs', // configures the extension name to be .hbs instead of .handlebars
    defaultView: 'main', // this is the default value but you may change it to whatever you'd like
    layoutsDir: path.join(__dirname, '/views/layouts'), // Layouts folder
    partialsDir: path.join(__dirname, '/views/partials'), // Partials folder
  }));
  
  // Setting the view engine to the express-handlebars engine we created
  app.set('view engine', 'hbs');
  
  // Configuration for handling API endpoint data
  app.use(bodyParser.json()); // support json encoded bodies
  app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


  // Home route
app.get('/', function(req, res) {
    // The render function takes the template filename (no extension - that's what the config is for!)
    // and an object for what's needed in that template
    res.render('login', {
      title: 'login',
    })
});

app.get('/calendar', function(req,res){
    res.render('calendar', {
        title:  'My Calendar',
    })
});

app.get('/register', function(req,res){
    res.render('register', {
        title:  'Register',
    })
});


app.post('/addUser', function(req, res) {
  if(req.body.password === req.body.passwordConfirm){
  var user = new User({
    _id:new mongoose.Types.ObjectId(),
    username: req.body.username,
    password: req.body.password,
    
  });

  user.save(function(err, user) {
    var result;

    if (err) {
      //
      
    } else {
      res.status(200).redirect('/');
    }
  }); 
}
});

app.post('/checkUser', function(req, res) {
  // TODO
  if (req.body.password === "aaa" && req.body.username == "bbb") {
  res.status(200).redirect('/calendar');
  }
  else {
    res.send('Incorrect Username and/or Password!');
  }
});

  /**
  To be able to render images, css and JavaScript files, it's best to host the static files
  and use the expected path in the data and the imports.

  This takes the contents of the public folder and makes it accessible through the URL.
  i.e. public/css/styles.css (in project) will be accessible through http://localhost:9090/css/styles.css
**/
app.use(express.static('public'));
// app.use(express.static(__dirname + '/public'));

// Listening to the port provided
app.listen(port, function() {
  console.log('App listening at port '  + port)
});

