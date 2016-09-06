var express = require('express');
var apisRouter = require('./apis');
//var viewsRouter = require('./views');

var router = express.Router();

// Specifics paths
console.log("Mount apis routes");
router.use(function(req, res, next){
    console.log("routes/index.js => '" + req.baseUrl + "'");
    apisRouter(req, res, next);
});

// Default path for views
console.log("Mount views routes");
//router.use(viewsRouter);

module.exports = router;