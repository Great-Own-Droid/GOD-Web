var express = require('express');
var apisRouter = require('./apis');
//var viewsRouter = require('./views');

var router = express.Router();

// Specifics paths
console.log("Mount apis routes");
router.use('/api', apisRouter);

// Default path for views
console.log("Mount views routes");
//router.use('/', viewsRouter);

module.exports = router;