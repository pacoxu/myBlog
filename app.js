var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var article = require('./routes/article');
// var bird = require('./bird');

var app = express();

// app.use("/bird",bird)
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// // uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'public')));
app.use("/static",express.static('public'));
app.use("/public",express.static('public'));
app.use("/projects",express.static('public'));
app.use("/literature",express.static('public'));

//这些是由于路由的相对路径导致的，暂时只能用这种办法，我还没找到更好的办法
app.use("/article/static",express.static('public'));//problem
app.use("/article/techs/static",express.static('public'));//problem
app.use("/article/projects/static",express.static('public'));//problem
app.use("/article/literature/static",express.static('public'));//problem

// 绑定路由
app.use('/', index);
app.use('/article/techs', index);
app.use('/article/projects', index);
app.use('/article/literature', index);
app.use('/article/techs/*', article);
app.use('/article/literature/*', article);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
