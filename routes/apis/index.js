console.log("API ROUTER : Start define mountable apis");
var express = require('express');
var models = require('../../models');

var contactRouter = require('./contact');
//var userRouter = require('./user');

// Router externe montable ailleurs (exporté)
var mountableRouter = express.Router();
// Router interne montant les sous routes (l'ensemble des groupes d'api)
var router = express.Router();

// Define global permission access for api
/*
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
*/

// Ajout des apis à monter
router.use(function(req, res, next){
    console.log("routes/apis/index.js => '" + req.baseUrl + "'");
    contactRouter(req, res, next);
});
//router.use(userRouter);

// Api not found
router.use(function (req, res, next) {
    res.status(404);
    res.json({
        status: 404,
        res: "not found"
    })
});

mountableRouter.use(function(req, res, next){
    console.log("routes/apis/index.js => '" + req.baseUrl + "'");
    next();
});

// Monte le router interne sur le router montable externe
mountableRouter.use('/api', function(req, res, next){
    console.log("routes/apis/index.js => '" + req.baseUrl + "'");
    router(req, res, next);
});



console.log("API ROUTER : End define mountable apis");
module.exports = mountableRouter;
