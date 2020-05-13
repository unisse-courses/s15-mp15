// All imports needed here
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo')(session);
const { isPublic } = require('./middlewares/checkAuth');
const { envPort, dbURL, sessionKey} = require('./config');

//Routers
const userRouter = require('./routes/userRoutes');
const schedulesRouter = require('./routes/schedulesRoutes');
const calendarRouter = require('./routes/calendarRoutes');


// Creates the express application
const app = express();
const port = envPort || 9090;

//database connection constants
//const databaseURL = "mongodb://G15:1234@calendar-shard-00-00-xd9qk.gcp.mongodb.net:27017,calendar-shard-00-01-xd9qk.gcp.mongodb.net:27017,calendar-shard-00-02-xd9qk.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Calendar-shard-0&authSource=admin&retryWrites=true&w=majority";
const options = { useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false };
mongoose.connect(dbURL, options);

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

  app.use(function(req, res, next) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
  });


  /**
  To be able to render images, css and JavaScript files, it's best to host the static files
  and use the expected path in the data and the imports.

  This takes the contents of the public folder and makes it accessible through the URL.
  i.e. public/css/styles.css (in project) will be accessible through http://localhost:9090/css/styles.css
**/
app.use(express.static('public'));
// app.use(express.static(__dirname + '/public'));

//express session
app.use(session({
  secret: sessionKey,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 * 7 }
}));

// Flash
app.use(flash());

// Global messages vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

// Listening to the port provided
app.listen(port, function() {
  console.log('App listening at port '  + port)
});


//Home route (Login Page)
app.get('/', isPublic, function(req, res) {
  // The render function takes the template filename (no extension - that's what the config is for!)
  // and an object for what's needed in that template
  res.render('login', {
    title: 'login',
  })
});

//Register Page
app.get('/register', isPublic, function(req,res){
res.render('register', {
    title:  'Register',
})
});

app.use('/user', userRouter);
app.use('/schedules', schedulesRouter);
app.use('/calendar', calendarRouter);