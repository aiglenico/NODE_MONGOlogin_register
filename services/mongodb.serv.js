/*
Configuration de MongoDB
*/
    let mongodb = require('mongodb');
    let ObjectId = mongodb.ObjectId;
    let MongoClient = mongodb.MongoClient;
    let mongodbUrl = 'mongodb://localhost:27017/chatbot';
//


/*
Définition du service
Le service est une classe qui contient des méthodes
*/
class MongoDBService {

    static getMongoData(collectionName, callBack){
        // Ouvrir la connexion à la base MongoDB
        MongoClient.connect(mongodbUrl, (err, db) => {
        
            // tester la connexion
            if(err) { res.send(err) }
            else{
                
                // Récupération de la collection
                db.collection(collectionName).find().toArray( (err, data) => {
                    // Tester la commande
                    if(err) { callBack( err ) }
                    else{
                        // Envoyer la collection dans la vue
                        callBack( data )
                    }
                })
            }
    
            // Fermer la connexion
            db.close();
        })
    }
}
// 

/*
Exporter le service
*/
    module.exports = MongoDBService
//