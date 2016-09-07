var path = require('path');
var express = require('express');

var getHttpMethodsRouter = require('../../utility/getHttpMethodsRouter.js');


// Router externe montable ailleurs (exporté)
var mountableRouter = express.Router();

// Récupère les sous-routes correspondants aux méthodes HTTP sur un router montable
getHttpMethodsRouter(__dirname, function(router){
    // Monte les sous-routes sur le router du module contact
    mountableRouter.use('/contact', function(req, res, next){
        console.log(path.join(__dirname, __filename) + " => '" + req.baseUrl + "'");
        router(req, res, next);
    });
});

/*
TODO: A SUPPRIMER (Chaque portion de chemin doit être défini dans les fichiers correspondants)
router.get('/:id', get);

router.get('/', getAll);
router.post('/:id', post);
router.put('/', put);
router.delete('/:id', del);
*/

// TODO: ATTENTION: les routes n'existent pas au moment ou le module export
module.exports = mountableRouter;
console.log("Contact API ROUTER : End define mountable methods");
