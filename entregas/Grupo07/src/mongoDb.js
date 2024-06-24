const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.MONGODB_URI;

let client;

async function connectToMongoDB() {
    client = new MongoClient(uri);
    try {
        await client.connect();
        console.log('Conectado a MongoDB Atlas');
        return client.db('computacion'); // Retorna la base de datos aquí
    } catch (error) {
        console.error('Error al conectarse a MongoDB Atlas:', error);
        throw error;
    }
}

async function disconnectToMongoDB() {
    try {
        await client.close();
        console.log('Desconectado de MongoDB');
    } catch (error) {
        console.error('Error al desconectarse de MongoDB:', error);
    }
}

module.exports = { connectToMongoDB, disconnectToMongoDB };
