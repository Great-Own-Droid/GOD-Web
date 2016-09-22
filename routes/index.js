var express = require('express');
var apisRouter = require('./apis');
var rootRouter = require('./root');
var adminRouter = require('./admin');

var router = express.Router();

// Specifics paths
console.log("Mount apis routes");
router.use('/api', apisRouter);

console.log('Mount admin routes');
router.use('/admin', adminRouter);

// Default path for views
console.log("Mount root routes");
router.use('/', rootRouter);

module.exports = router;