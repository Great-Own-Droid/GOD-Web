console.log("API ROUTER : Start define mountable apis");
var express = require('express');

var contactRouter = require('./contact');
//var userRouter = require('./user');

var router = express.Router();

var models = require('../../models');


// Define global permission access for api
router.use(function (req, res, next) {
    models.Token.findOne({
        where: {
            token: req.query.token,
        }
    }).then(function (token) {
        if (token == null) {
            res.status(401);
            res.json({
                status: 401,
                res: "the token cannot identify you"
            });
            res.end();
        } else {
            res.locals.userId = token.dataValues.UserId;
            next();
        }
    });
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
