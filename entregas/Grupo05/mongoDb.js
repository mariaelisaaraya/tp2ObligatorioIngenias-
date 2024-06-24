//ENVIRONMENT
const dotenv = require('dotenv');
dotenv.config()

//MONGODB: config db
const { MongoClient } = require('mongodb')
const URL = process.env.MONGO_URL_STRING || ""
const client = new MongoClient(URL)

async function connectToMongoDB(){
    try {
        await client.connect()
        console.log('conectado a mongoDB')
        return client
    } catch (error) {
        console.log('Error al conectarse a mongoDB: ' + error)
        return
    }
}

const disconnectToMongoDB = async () => {
    try {
        await client.close()
        console.log('Desconectado de MongoDB')
    } catch (error) {
        console.log('Error al desconectarse de MongoDB: ' + error)
    }
}

    module.exports ={ connectToMongoDB, disconnectToMongoDB }