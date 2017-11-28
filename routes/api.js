/*
Import des composants du module route
*/
const express = require('express');
const routerGoogle = express.Router();
//




/*
Définition des routes
*/
routerGoogle.get(`/`, (req, res, next) => {
    res.json({res: `Salut API`});
});
//




/*
Export du module route
*/
    module.exports = routerGoogle; 
//