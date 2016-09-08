// natives requires
// libraries requires
var express = require('express');
// customs requires
var apisRouter = require('./apis');
//var viewsRouter = require('./views');



var router = express.Router();

// Specifics paths
router.use(apisRouter);

// Default path for views
//router.use(viewsRouter);

module.exports = router;