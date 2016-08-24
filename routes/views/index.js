var express = require('express');

var userRouter = require('./user');


var router = express.Router();

// Define global permission access for views
router.use(function(req, res, next){
	// TODO: permissions d'accès aux vues
	next();
});


// Define all views
router.use('/user', userRouter);


// Leave default path not found handle the respond

module.exports = router;