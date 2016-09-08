// natives requires
var path = require('path');
// libraries requires
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// customs requires
var routes = require('./routes');



// create the server app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// log all requests received
app.use(logger('dev'));

// parse body request from json
app.use(bodyParser.json());
// parse url encoded request
app.use(bodyParser.urlencoded({ extended: false }));

// parse cookies received
app.use(cookieParser());

// serve static ressources
app.use(express.static(path.join(__dirname, 'public')));



// Mount all routes
app.use(routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



// error handlers
if (app.get('env') === 'development') {
    // development error handler
    // will print stacktrace
    app.use(function (err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
else{
    // production error handler
    // no stacktraces leaked to user
    app.use(function (err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}


module.exports = app;
