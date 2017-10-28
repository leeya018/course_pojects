var cons = require('consolidate');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var jobs = require('./routes/jobs');
var login = require('./routes/login');
var locations = require('./routes/locations');
var skills = require('./routes/skills');

var app = express();

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public/javascripts')));
// app.use(express.static(path.join(__dirname, 'public/javascripts/components')));
// app.use(express.static(path.join(__dirname, 'public/javascripts/components')));
// app.use(express.static(path.join(__dirname, 'node_modules/angularjs-dropdown-multiselect')));

app.use(express.static(path.join(__dirname, 'client/public')));
app.use(express.static(path.join(__dirname, 'client/public/javascripts')));
app.use(express.static(path.join(__dirname, 'client/public/javascripts/components')));
app.use(express.static(path.join(__dirname, 'client/public/javascripts/components')));



app.use('/api', users);
// app.use('/', jobs);
app.use('/api', jobs);
app.use('/api', login);
app.use('/', index);
// app.use('/api',register);
app.use('/api',locations);
app.use('/api',skills);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

//my function authorization
// app.use(authMiddleware)


module.exports = app;
