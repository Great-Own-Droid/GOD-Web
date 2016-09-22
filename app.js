var express = require('express');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');

var config = require('./config/config.json');
var models = require('./models');
var logger = require('./controller/logger')
var routes = require('./routes');
var userManager = require('./controller/manager/userManager');


var app = express();

// view engine setup
logger.info("View engine setup");
app.set('views', 'views');
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon('public/favicon.ico'));

logger.info("Serve static ressources setup");
app.use(express.static('public'));

logger.info("Body parser setup");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

logger.info("Cookie parser setup");
app.use(cookieParser());

app.use(session({
    secret: config.secret,
    saveUninitialized: true,
    resave: true,
}));

app.use(flash());

app.use(function(req, res, next){
    logger.info(req.method + " -> " + req.originalUrl);
    next();
});

app.use(userManager.setUser);

// Mount all routes
logger.info("Mount routes setup");
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

