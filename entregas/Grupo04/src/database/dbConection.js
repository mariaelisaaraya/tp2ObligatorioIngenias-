const dotenv = require('dotenv');
dotenv.config();

const { MongoClient } = require('mongodb');

const URL = process.env.MONGO_URL_STRING || "";
const client = new MongoClient(URL);

// Conectar conexión
const connectToMongoDB = async () => {
    try {
        // Conectar al servidor MongoDB
        await client.connect();
        console.log("Conexion a MongoDB correcta");
        return client;
    } catch (error) {
        // Manejar cualquier error
        console.error("Error al intentar conectarse a MongoDB", error);
        return null;
    }
};

// Desconectar conexión
const disconnectMongoDB = async () => {
    try {
        // Cerrar la conexión con el servidor
        await client.close();
        console.log("Se ha deconectado la conexion a MongoDB");
        return client;
    } catch (error) {
        // Manejo de error que ocurra durante la desconexión
        console.error("Error al desconectar", error);
        return null;
    }
};

module.exports = { connectToMongoDB, disconnectMongoDB };

/*
Excelente código! Proporciona una estructura clara y eficaz para conectar y desconectar de MongoDB de manera asincrónica,
con manejo adecuado de errores y mensajes de estado informativos.

 */