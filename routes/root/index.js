var express = require('express');
var root = require('./root');
var userRouter = require('./user');


var router = express.Router();

// Define global permission access for views
router.use(function (req, res, next) {
    // TODO: permissions d'accés aux vues
    next();
});

router.get('/', root.root);
// Define all views
router.use('/user', userRouter);


// Leave default path not found handle the respond

module.exports = router;