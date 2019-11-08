const mongoClient = require('mongodb').MongoClient;
const mongoDbUrl = "mongodb://localhost:27017/";
let mongodb;

function connect(){
    mongoClient.connect(mongoDbUrl, (err, db) => {
        dbo = db.db('mean');
        mongodb = dbo;
        console.log("Connected to Mongo Client");
        //callback();
    });
}
function get(){
    return mongodb;
}

function close(){
    mongodb.close();
}

module.exports = {
    connect,
    get,
    close
};