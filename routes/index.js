var express = require('express');
var apisRouter = require('./apis/index');
var rootRouter = require('./root/index');
var adminRouter = require('./admin/index');
var signinRouter = require ('./signin');

var router = express.Router();

console.log('Mount signin routes');
router.use('/', signinRouter);

// Specifics paths
console.log("Mount apis routes");
router.use('/api', apisRouter);

console.log('Mount admin routes');
router.use('/admin', adminRouter);

// Default path for views
console.log("Mount root routes");
router.use('/', rootRouter);

module.exports = router;