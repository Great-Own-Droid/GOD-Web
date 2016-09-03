console.log("API ROUTER : Start define mountable apis");
var express = require('express');

var auth = require('../../controller/auth');

var contactRouter = require('./contact');
//var userRouter = require('./user');

var router = express.Router();

var models = require('../../models');


// Define global permission access for api
router.use(function (req, res, next) {
    auth.isBearerAuthenticated(req, res, next);
});

// Define all apis
console.log("Mount contact api");
router.use('/contact', contactRouter);
//router.use('/user', userRouter);

// Api not found
router.use(function (req, res, next) {
    res.status(404);
    res.json({
        status: 404,
        res: "not found"
    })
});

console.log("API ROUTER : End define mountable apis");
module.exports = router;
