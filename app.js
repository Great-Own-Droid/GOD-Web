var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
console.log("View engine setup");
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
console.log("Logger setup");
app.use(logger('dev'));

console.log("Body parser setup");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

console.log("Cookie parser setup");
app.use(cookieParser());


console.log("Serve static ressources setup");
app.use(express.static(path.join(__dirname, 'public')));

// Mount all routes
console.log("Mount routes setup");
var routes = require('./routes');
console.log("Access routes to mount");

// Always go verify paths
app.use(function(req, res, next){
    console.log("app.js => '" + req.path + "'");    
    console.log("app.js => '" + req.baseUrl + "'");
    routes(req, res, next);
});




// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
