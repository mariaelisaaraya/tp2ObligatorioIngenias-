const dotenv = require('dotenv');
dotenv.config()
const { MongoClient } = require('mongodb')
const URL = process.env.MONGO_URL_STRING|| ""
const client = new MongoClient(URL)


async function connectToMongoDB(){
    try {
        await client.connect()
        console.log('Connecting to mongoDB...')
        return client
    } catch (error) {
        console.log('Error to connect with mongoBB: ' + error)
        return
    }
}

const disconnectToMongoDB = async () => {
    try {
        await client.close()
        console.log('Disconnecting to mongoDB...')
    } catch (error) {
        console.log('Error to disconnect with mongoDB: ' + error)
    }
}

module.exports = { connectToMongoDB, disconnectToMongoDB}

/*
Adjunto consejos:
Consistencia en los nombres: Usar nombres de funciones consistentes, como disconnectFromMongoDB en lugar de disconnectToMongoDB, para mantener claridad y coherencia.
Modularización: Pueden considerar separar la configuración de dotenv y la creación del cliente MongoDB en módulos distintos para una mejor organización del código, 
lo vimos en clase.
Validación: Verificar que process.env.MONGO_URL_STRING esté definido y no vacío antes de crear el cliente de MongoDB para evitar errores en tiempo de ejecución.En
este caso funciona perfecto.
 */