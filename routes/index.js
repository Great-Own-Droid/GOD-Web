var express = require('express');
var ApisRouter = require('./apis');
var ViewsRouter = require('./views');

var router = express.Router();

// Specifics paths
router.use('/api', ApisRouter);

// Default path for views
router.use('/', ViewsRouter);

module.exports = router;
