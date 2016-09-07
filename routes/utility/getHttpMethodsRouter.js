var fs = require('fs');
var path = require('path');
var express = require('express');

// TODO: Ajouter toutes les autres méthodes
// Liste des méthodes HTTP que l'utilitaire récupérera (correspont aux noms des fichiers .js)
var availableHttpMethods = ['get'];


/**
 * Renvoi un router en callback contenant l'ensemble des methodes HTTP d'un dossier
 * @param dirPath Le chemin du dossier dans lesquel chercher les fichier .js correspondant aux méthodes HTTP à inclure
 * @param callback Fonction lancée lorsque le router à été créé contenant celui ci en paramètre
 */
function getHttpMethodsRouter(dirPath, callback){
    // Router qui contiendra l'ensemble des méhodes http
    var router = express.Router();

    console.log("DEBUT ajout contact method aux routes");
    fs.readdir(dirPath, function(err, files){
        if (err){
            console.error(err);
            callback(false);
            return;
        } 
        
        // Détermine si le fichier trouvé doit être monté 
        var available;

        // TODO: Filtrer uniquement les fichiers et de type js
        // Ajout des méthodes HTTP à monter
        for (var i = 0, len = files.length; i < len; i++){            
            available = false;
            for (var j = 0, jlen = availableHttpMethods.length; j < jlen; j++){
                if ((availableHttpMethods[j]+".js") === files[i]){
                    available = true;
                    break;
                }
            }
            // Go check next file if current not have to be include in the router
            if (!available){
                continue;
            }            
            filePath = path.join(dirPath, files[i]);
            console.log("file to add to route : '" + filePath + "'");
            var httpMethod = require(filePath);
            if (typeof(httpMethod) == 'function'){
                router.use(httpMethod);                   
            } 
        } 
    
        // Renvoi le router ayant fini d'être construit
        callback(router);
    });
}


module.exports = getHttpMethodsRouter;