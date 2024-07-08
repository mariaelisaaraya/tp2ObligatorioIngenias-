// ENVIRONMENT
const dotenv = require('dotenv');
dotenv.config();

// Importación del driver oficial de MongoDB.
const {MongoClient} = require('mongodb');

// Instancia del driver.
const URL = process.env.MONGODB_URLSTRING || "";
const client = new MongoClient(URL);

// Se debe usar un modelo asincrónico ya que los tiempos de respuesta de un servidor Cloud escapan a nuestro control.

// Función para conectar a la db.
async function connectToMongoDB(){
    try {
        await client.connect();
        console.log("Conectado a MongoDB");
        return client;
    }catch(error){
        console.error('Error al conectar con MongoDB: ', error);
        return null;
    }
}

// Función para desconectarse de la db.
async function disconnectFromMongoDB(){
    try{
        await client.close();
        console.log("Desconectado de MongoDB");
    }catch(error){
        console.error('Error al desconectar de MongoDB: ', error);
    }
}

// En el caso de qué el código siga creciendo siempre recomiendo de está forma ya que tiene lo siguientes beneficios:
//-Más legible y organizada, especialmente cuando se exportan múltiples elementos.
//-Facilita la adición de comentarios o documentación para cada elemento exportado.
//-Hace más fácil agregar o eliminar elementos exportados en el futuro. 
module.exports = {
    // Conecta a la base de datos MongoDB
    connectToMongoDB,
      // Desconecta de la base de datos MongoDB
    disconnectFromMongoDB
  };