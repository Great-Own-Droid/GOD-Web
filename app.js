var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config/config.json');
var models = require('./models');
var logger = require('./controller/logger')

var app = express();

// view engine setup
logger.info("View engine setup");
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

logger.info("Body parser setup");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

logger.info("Cookie parser setup");
app.use(cookieParser());


logger.info("Serve static ressources setup");
app.use(express.static(path.join(__dirname, 'public')));

// Mount all routes
logger.info("Mount routes setup");
var routes = require('./routes');
logger.info("Access routes to mount");
app.use('/', routes);

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

models.sequelize
    .authenticate()
    .then(function () {
        /**
         * Syncrhonise all sequelize models
         */
        models.sequelize
            .sync()
            .then(function () {
                /**
                 * Create HTTP server and listen on provided port
                 */
                var server = app.listen(config.port, function () {
                    console.log('Express server listening on port ' + server.address().port);
                });
            });
    }).catch(function (err) {
    console.log('Impossible to connect to the database :', err.message);
});

