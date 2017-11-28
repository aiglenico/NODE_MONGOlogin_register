/*
Import des composants du module route
*/
    const express = require('express');
    const routerGoogle = express.Router();
    const mongoDBService = require('../services/mongodb.serv');
//




/*
Définition des routes
*/
    routerGoogle.get(`/`, (req, res, next) => {
        res.json({res: `Salut API`});
    });

    // Afficher la liste des utilisateurs
    routerGoogle.get(`/users`, (req, res, next) => {

        // Utilisation du service MongoDB
        mongoDBService.getMongoData(`users`, data => {
            res.json(data)
        })
    });
//




/*
Export du module route
*/
    module.exports = routerGoogle; 
//