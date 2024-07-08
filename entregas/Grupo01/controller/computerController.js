const {connectToMongoDB, disconnectFromMongoDB} = require('../database/mongodb');
const {checkCodeAndData,checkCode,checkComputadora,checkSearch} = require('./dataController');
// Si están utilizando las funciones en inglés que queden todas en inglés o todas en español.
//checkComputadora vs checkSearch

async function getAllComputers(){
    const db = await connectToMongoDB();
    const data = db.db('ComputersCollection');

    const result = await data.collection('computers').find().toArray();
    await disconnectFromMongoDB();

    //console.log(result);
    return result;
}

// METODO PUT (actualizar) ACLARACION: como es nosql no tuvimos en cuenta que nos ingresen un campo que no exista 
// en la coleccion, igualmente se creo codigo por si se desea modificar sin agregar campos nuevos. 
async function updateComputer(code, computer){

    // checkCodeAndData: funcion que corrobora los datos ingresados.
    let dataOk = checkCodeAndData(code,computer);
    if(!dataOk.state){
        return dataOk
    }
    
    const db = await connectToMongoDB();
    const data = db.db('ComputersCollection'); 
    const collection = data.collection('computers');

    // ****** CODIGO QUE SIRVE POR SI SE DESEA PARA MODIFICAR UNA COMPUTADORA SIN AGREGAR NUEVOS CAMPOS ******
    
    // Modelo del objeto computadora. Servira para saber si en los datos que ingresaron hay un campo
    // que no exista para no agregarlo al modificar.
    //const modelComputer = {"codigo": 1, "codigo": 1,
    //                       "nombre": "Desktop Gaming",
    //                       "precio": 999.99,
    //                       "categoria": "Desktop"}
                       
    // En uniqueProps se guardan las keys de computer(datos ingresados para modificar) que no se encuentren 
    // en modelComputer en forma de array. 
    //const uniqueProps = Object.keys(computer).filter(key1 => !(key1 in modelComputer))

    // Si se encontro una key que no se esncuentra en nuestro modelo, retorna un error.
    //if(!(uniqueProps.length == 0)){
    //    return {'status': 400, 'msj': 'Error al actualizar computadora. Se quiere actualizar uno o varios campos que no existen!'}
    //}
    // **************** FIN **********************

    let result;

    await collection.updateOne({codigo: parseInt(code)}, {$set: computer})
    .then( async e => {

        // updateOne retorna resultados. Uno de ellos es matchedCount el cual vale 1 si se modifico algun dato y
        // 0 si no lo hizo. Esto es para cuando me ingresen un codigo que no exista, me retorne un error.
        if(e.matchedCount===0){
            result = {'status': 404, 'msj': 'Error al actualizar computadora, codigo ' + code + ' no encontrado!'}
        }else{
            result = {'status': 201, 'msj': 'Computadora actualizada exitosamente!'}
        }
    }).catch(err => { 
        console.error(err)
        result = {'status': 400, 'msj': 'Error al actualizar computadora!'}
    }).finally(async () => { 
        await disconnectFromMongoDB(); 
    })

    return result;
}

// La clave es realizar la verificación antes de proceder con la actualización, pueden probar con eso.

/*


async function updateComputer(code, computer) {
    // Verificar que el código y los datos sean válidos.
    const dataOk = checkCodeAndData(code, computer);
    if (!dataOk.state) {
        return dataOk;
    }

    try {
        const db = await connectToMongoDB();
        const collection = db.db('ComputersCollection').collection('computers');
        
        // Verificación de campos no permitidos
        // Modelo del objeto computadora
        const modelComputer = {
            codigo: 1,
            nombre: "Desktop Gaming",
            precio: 999.99,
            categoria: "Desktop"
        };

        // Verificar que los campos ingresados existen en el modelo
        const uniqueProps = Object.keys(computer).filter(key => !(key in modelComputer));
        if (uniqueProps.length > 0) {
            return { status: 400, msj: 'Error al actualizar computadora. Se quiere actualizar uno o varios campos que no existen!' };
        }

        // Actualizar la computadora
        const result = await collection.updateOne(
            { codigo: parseInt(code) },
            { $set: computer }
        );

        // Verificar si se encontró y actualizó la computadora
        if (result.matchedCount === 0) {
            return { status: 404, msj: `Error al actualizar computadora, código ${code} no encontrado!` };
        }

        return { status: 200, msj: 'Computadora actualizada exitosamente!' };

    } catch (err) {
        console.error(err);
        return { status: 500, msj: 'Error al actualizar computadora!' };
    } finally {
        await disconnectFromMongoDB();
    }
}


*/

// Pueden ir probando, igualmente si tienen alguna duda lo podemos ver en clase.

async function getComputer(id){
    let result = {}
    const db = await connectToMongoDB();
    const data = db.db('ComputersCollection');
    
    
    let IdCheck= checkCode(id);
    
    if(IdCheck.state){
        //result retorna status 404 si no hay computadoras
        const computerAct=await data.collection('computers')
                    .findOne({codigo:parseInt(id)})
        computerAct == null ? result={'status':404,'msj':'Lo siento, no hay resultado para ese ID'}:
                            result={'status':200,'msj':computerAct}; 
    } else{
        
        result=IdCheck;
        console.log(result)
    }
    await disconnectFromMongoDB();
    return result;
}

async function searchComputer(dataSearch){
    let result = {}
    // verificacion de los campos de computadora 
    const cS = checkSearch(dataSearch);
    const db = await connectToMongoDB();
    const data = db.db('ComputersCollection');
    if (cS.state){
        const regex = new RegExp(dataSearch,'i');
        const searchName = await data.collection('computers')
        .find({$or:[{ nombre: regex},{ categoria: regex}]}).toArray();
        if ((searchName.length) == 0){
            result = {'status':404,'msj':'Lo siento, no hay resultados coincidentes'}
        }else{
            result={'status':200,'msj':searchName};
        }
    } else{
        result = cS;
        console.log(result)
    }
    await disconnectFromMongoDB();
    return result;
}

async function nuevaComputadora(computadora){
    let result = {}

    const db = await connectToMongoDB();
    const data = db.db('ComputersCollection');

    // verificacion de los campos de computadora 
    const computadoraCheck = checkComputadora(computadora)
   
    if (! computadoraCheck.state  ){
        result=computadoraCheck;
        await disconnectFromMongoDB();
    }else {
         await data.collection('computers').insertOne(computadora)
                    .then(()=>{
                        result={'status':200,'msj':computadora}
                    })
                    .catch(error=>{
                        console.error(error)
                        result={'status':400,'msj':'Error al crear nueva computadora'}
                    })
                    .finally(async()=>{
                        await disconnectFromMongoDB();
                    });
        console.log(computadora)
    }
    return result;
}


async function borrarComputer(id){
    let result = {}
    const db = await connectToMongoDB();
    const data = db.db('ComputersCollection');
    
    
    let IdCheck = checkCode(id);
    
    if(IdCheck.state){
        //result retorna status 404 si no hay computadoras con el id ingresado
       //db.connect()
       //.then(() => {
            const computerAct = data.collection('computers');
            await computerAct.deleteOne({ codigo: parseInt(id)})
       //})
       .then((resultado) =>{
        if(resultado.deletedCount === 0){
            result={'status':404,'msj':'Lo siento, no hay resultado para ese ID'};
        }else {
            console.log('Equipo borrado.');
            result={'status':200,'msj':'Equipo borrado.'};
        }
        })
        .catch(error => {
            result={'status':400,'msj':'Error al eliminar ruta'};
        })
        .finally(async() =>{
            await disconnectFromMongoDB(); 
        });
       
    } else{
        result = IdCheck;
        await disconnectFromMongoDB();
    }
    
    return result;
}


module.exports = {getAllComputers,updateComputer,getComputer,searchComputer,nuevaComputadora,borrarComputer};
