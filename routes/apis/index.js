console.log("API ROUTER : Start define mountable apis");
var express = require('express');

var contactRouter = require('./contact');
//var userRouter = require('./user');

var router = express.Router();


// Define global permission access for api
router.use(function(req, res, next){
	// TODO: permissions d'accès aux apis
	next();
});


// Define all apis
console.log("Mount contact api");
//router.use('/contact', contactRouter);
//router.use('/user', userRouter);



// Api not found
router.use(function (req, res, next) {
    res.status(404);
    res.render('error', {
        message: 'API NOT FOUND',
        error: 'GO ELSEWHERE'
    });
});

console.log("API ROUTER : End define mountable apis");
module.exports = router;
