console.log("Contact API ROUTER : Start define mountable methods");
var fs = require('fs');
var express = require('express');
var path = require('path');

// Router externe montable ailleurs (exporté)
var mountableRouter = express.Router();
// Router interne montant les sous routes (l'ensemble des méthodes http)
var router = express.Router();


// Monte le router interne sur le router montable externe
mountableRouter.use('/contact', function(req, res, next){
    console.log("routes/apis/contact/index.js => '" + req.baseUrl + "'");
    router(req, res, next);
});

// TODO: Faire les autres méthodes
var availableMethods = ['get'];

// TODO: Passer cette portion de code dans un module réutilisable
// TODO: Faire la même chose mais pour des groupes d'api (donc chercher tous les dossiers)
// TODO: il faudra passer en paramètre le __dirname & __filename à la fonction du module qui en aura nécessairement des différents
console.log("DEBUT ajout contact method aux routes");
fs.readdir(__dirname, function(err, files){
    console.log("callback check files")
    if(err){
       console.error(err);
       return;
    } 
    
    // TODO: Filtrer uniquement les fichiers et de type js
    // Ajout des méthodes http à monter
    for(var i = 0, len = files.length; i < len; i++){
        if(files[i] != __filename){
            var available = false;
            for(var j = 0, jlen = availableMethods.length; j < jlen; j++){
                if((availableMethods[j]+".js") === files[i]){
                    available = true;
                    break;
                }
            }
            if(!available){
                continue;
            }            
            filePath = path.join(__dirname, files[i]);
            console.log("file to add to route : '" + filePath + "'");
            var method = require(filePath);
            if (typeof(method) == 'function'){
                router.use(method);                   
            }         
        }
    } 
   
   console.log("FIN ajout contact method aux routes");
    // TODO: Vérifier si c'est génant le fonctionnement de l'asynchrone & voir si il faut un callback quand c'est terminé
});

/*
TODO: A SUPPRIMER (Chaque portion de chemin doit être défini dans les fichiers correspondants)
router.get('/:id', get);

router.get('/', getAll);
router.post('/:id', post);
router.put('/', put);
router.delete('/:id', del);
*/


module.exports = mountableRouter;
console.log("Contact API ROUTER : End define mountable methods");
