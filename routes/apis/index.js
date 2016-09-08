// natives requires
// libraries requires
var express = require('express');
// customs requires
var contactRouter = require('./contact');
//var userRouter = require('./user');



// Router externe montable ailleurs (exporté)
var mountableRouter = express.Router();

// Router interne montant les sous routes (l'ensemble des groupes d'api)
var router = express.Router();

// Ajout des apis à monter
router.use(contactRouter);
//router.use(userRouter);

// Api not found
router.use(function (req, res, next) {
    res.status(404);
    res.json({
        status: 404,
        res: "Api not found"
    })
});

// Monte le router interne sur le router montable externe
mountableRouter.use('/api', router);


module.exports = mountableRouter;
