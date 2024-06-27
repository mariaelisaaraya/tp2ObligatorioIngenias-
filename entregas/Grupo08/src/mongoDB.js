const dotenv = require('dotenv');
dotenv.config

const {MongoClient} = require('mongodb');

const URI = process.env.MONGODB_URL
const cliente = new MongoClient(URI);

async function conectarDB() {
   try{
    await cliente.connect();
    console.log('Conectado a BD');
    return cliente
   }catch (error){
        console.log('Error al conectar a BD: ' , error);
        return null;
   }
}


async function desconectarDB () {
   try{
      await cliente.close();
      console.log('Desconectado exitosamente');
     }catch (error){
          console.log('Error al desconectar de BD: ' , error);
     }
}

module.exports = {conectarDB, desconectarDB}