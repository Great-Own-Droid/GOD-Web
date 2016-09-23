console.log("API ROUTER : Start define mountable apis");
var express = require('express');

var models = require('../../models');
var contactRouter = require('./contact');
//var userRouter = require('./user');

var router = express.Router();

// Define global permission access for api
router.use(function (req, res, next) {
    if (!req.session.isConnected){
        res.status(501);
        res.json({
            message: "Disconnected"
        });
        return;
    }
    next();
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
