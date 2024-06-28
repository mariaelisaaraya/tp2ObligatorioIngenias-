
const {conectarDB, desconectarDB} = require('../src/mongoDB');


//////////////////////////////////////////////////////////////////////////////////////////////////

async function obtenerDatos(){
    const cliente = await conectarDB();
    if (!cliente){
        return [500 , ['Error al conectarse']]
    }
    const db = cliente.db('Ingenias');
    const computadoras = await db.collection('computacion').find().toArray();
    
    await desconectarDB();
    return [200, computadoras];
}

////////////////////////////////////////////////////////////////////////////////////////

async function buscarPorCodigo(codigoBuscado){

    const computadoras = await obtenerDatos()
    if (computadoras[0]!==200){
        return computadoras
    }
    const resultadoPorCodigo = await computadoras[1].find(item => item.codigo==codigoBuscado) 

        if (!resultadoPorCodigo) {
           return [200, 'Lo siento. No se encontraron productos con el código indicado']
        
        }else {    
            return [200, resultadoPorCodigo]
        }
}


////////////////////////////////////////////////////////////////////////////////////////

async function search(nombre, categoria){
    const computadoras = await obtenerDatos()
        if (!computadoras[0]==200){
            return computadoras
        }
 

        const resultadoSearch = computadoras[1].filter(item=>(item.nombre.toLowerCase()).includes(nombre) && (item.categoria.toLowerCase()).includes(categoria))
    if (resultadoSearch.length ==0) {
        return [200, 'Lo siento. No se encontraron productos con los parámetros buscados']
     }
     
  return [200, resultadoSearch]


}


////////////////////////////////////////////////////////////////////////////////////////


async function agregarProducto (nuevoProducto){
 
    if (!nuevoProducto) {
        console.log('No hay datos')
        return [204, 'No hay datos para agragar']
  
    }
     const client = await conectarDB();
     if (!client) {
        console.log('Error al conectar')
         return [500, 'Error al conectarse a MongoDB'];
    }
     const db = client.db('Ingenias') 
     const computadoras = await db.collection('computacion');

 try{
    await computadoras.insertOne(nuevoProducto)
    return [200, 'Se agregó un nuevo producto']
}catch(err){ console.error(err)
    return [500, 'Error al agregar']
}finally{ await desconectarDB() }

    
}


////////////////////////////////////////////////////////////////////////////////////////


async function actualizarProducto(codigo, datosActualizados){

if (!datosActualizados) {
     return [400, 'Error. No hay datos a modificar'];  
}

    const client = await conectarDB();

if (!client) { 
    return [500, 'Error al conectarse a MongoDB' ];
}

const db = client.db('Ingenias') 
const collection = await db.collection('computacion')
console.log (datosActualizados, codigo)
await collection.updateOne({codigo: parseInt(codigo)}, {$set: datosActualizados})



try {
    console.log('Datos actualizados')
    return [200, 'Datos actualizados']
}catch(err) { 
    console.error(err)
    return [500, 'Error al actualizar']
}finally{ 
    await desconectarDB() }
}


////////////////////////////////////////////////////////////////////////////////////////


async function borrarProducto(codigo){
    const client = await conectarDB();
    if (!client) {
        return [500, 'Error al conectarse a MongoDB'];
    }
    const db = client.db('Ingenias') 
    const collection = await db.collection('computacion')
    
    try{
    await collection.deleteOne({codigo: parseInt(codigo)})
  
           console.log('Producto eliminado')
           return [200,'Se eliminó el item']
       
    }catch(err){ 
        console.error(err)
        return [500, 'Error al eliminar']
     
    }finally { await desconectarDB() }
}


////////////////////////////////////////////////////////////////////////////////////////

module.exports = { buscarPorCodigo, search, obtenerDatos, agregarProducto, actualizarProducto, borrarProducto}