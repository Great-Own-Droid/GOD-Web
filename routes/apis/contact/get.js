// natives requires
// libraries requires
var express = require('express');
// customs requires
var models = require('../../../models');



var router = express.Router();

router.get('/:id', function(req, res) {
    models.Contact.findOne({
        where: {
            id: req.params.id,
            // INFO: UserId en dur le temps que la gestion des utilisateurs soit totalement opérationnelle
            UserId: 1//res.locals.userId 
        }
    }).then(function (contact) {        
        // TODO: Mettre en place des tests si pas de type object et si ne contient pas une propriété attendue => lancer un code retour du style erreur interne et mettre en log
        if (contact == null) {
            res.status(404);
            res.json({
                status: 404,
                message: "The contact requested is either not existing or not your."
            })
        } 
        else {
            res.json(contact);
        }
    });
});

module.exports = router;