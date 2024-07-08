const { connectToMongoDB, disconnectMongoDB } = require('../database/dbConection');

// GET ALL
//Acá se pueden asegurar de devolver la respuesta (res) en el catch cuando ocurra un error de obtención de datos para evitar 
//errores adicionales de res.status(...).send(...) fuera del contexto de la función de enrutamiento.
const getAllComputer = async () => {
    const db = await connectToMongoDB();

    if (!db) {
        return res.status(500).send('Error al conectar a la base de datos');
    }

    try {
        const data = db.db('Tecnología');
        const computer = await data.collection('Computadoras').find().toArray()
        return computer;
    } catch (error) {
        console.error("Error al obtener los datos", error);
        res.status(500).send('Error al obtener los datos');
    } finally {
        // Desconectar de MongoDB
        await disconnectMongoDB();
    }
}

// GET COMPUTADORA POR CODIGO
//Acá pueden revisar si es necesario el uso de findOne y 
//asegurarse de manejar correctamente los casos en los que computer pueda ser null para evitar errores inesperados.
async function getComputerId(compuID) {
    const db = await connectToMongoDB();
    if (!db) {
        return res.status(500).send('Error al conectar a la base de datos');
    }
    const data = db.db('Tecnología');
    const computer = await data.collection('Computadoras').findOne({ codigo: compuID })
    await disconnectMongoDB();

    if (!computer) {
        return { success: false, status: 404, msj: 'No se encontro la computadora con el CODIGO ' + compuID };
    } else {
        return (computer);
    }

}

// GET COMPUTADORA POR NOMBRE Y DESCRIPCION
//Acá pueden revisar si pueden simplificar la lógica condicional para mejorar la legibilidad y reducir la complejidad del código
async function getComputerNameAndCategory(compuName, compuCategory) {
    const db = await connectToMongoDB();
    if (!db) {
        return res.status(500).send('Error al conectar a la base de datos');
    }
    const data = db.db('Tecnología');
    let query = {};
    if (compuName && compuCategory) {
        query = {
            $or: [
                { nombre: { $regex: compuName, $options: 'i' } }, 
                { categoria: { $regex: compuCategory, $options: 'i' } }
            ]
        };
    } else if (compuName) {
        query = { nombre: { $regex: compuName, $options: 'i' }};
    } else if (compuCategory) {
        query = { categoria: { $regex: compuCategory, $options: 'i' }  };
    } else {
        await disconnectMongoDB();
        return ('La búsqueda debe contener un nombre o una descripción');
    }
    const cursor = await data.collection('Computadoras').find(query);
    const computer = await cursor.toArray();
    await disconnectMongoDB();

    if (!computer) {
        return ('No se encontro la computadora con el NOMBRE ' + compuName + ' o DESCRIPCION ' + compuCategory);
    } else {
        return (computer);
    }

}

// POST
const addNewComputer = async (newData) => {
    let result = {};

    try {
        const db = await connectToMongoDB();

        if (!db) {
            return res.status(500).send('Error al conectar a la base de datos');
        }

        const data = db.db('Tecnología');
        const collection = data.collection('Computadoras');

        await collection.insertOne(newData);
        result = { success: true, status: 201, msj: 'Dato agregado exitosamente!' };

    } catch (error) {
        console.error('Error al crear un nuevo dato', error);
        res.status(500).send('Error al crear un nuevo dato!');
    } finally {
        // Desconectar de MongoDB
        await disconnectMongoDB();
    }

    console.log(result);
    return result;
};

// PUT computadora por id
const updateComputer = async (id, newData) => {
    try {
        const db = await connectToMongoDB();

        if (!db) {
            return { success: false, status: 500, msj: 'Error al conectar a la base de datos' };
        }

        const data = db.db('Tecnología');
        const collection = data.collection('Computadoras');

        // Se verifica si el articulo existe
        const computerExists = await collection.findOne({ codigo: id });
        if (!computerExists) {
            return { success: false, status: 404, msj: 'Artículo no encontrado!' };
        }

        // Si el articulo existe se actualiza
        await collection.updateOne({ codigo: id }, { $set: newData });
        return { success: true, status: 201, msj: 'Artículo actualizado exitosamente!' };

    } catch (error) {
        console.error('Error al actualizar el artículo', error);
        return { success: false, status: 500, msj: 'Error al actualizar el artículo!' };
    } finally {
        // Desconectar de MongoDB
        await disconnectMongoDB();
    }
};

// DELETE computadora por id
const deleteComputer = async (id) => {
    let result = {};

    try {
        const db = await connectToMongoDB();

        if (!db) {
            return res.status(500).send('Error al conectar a la base de datos');
        }

        const data = db.db('Tecnología');
        const collection = data.collection('Computadoras');

        await collection.deleteOne({ codigo: id });
        result = { success: true, status: 200, msj: 'Computadora eliminada exitosamente!' };

    } catch (error) {
        console.error('Error al eliminar la computadora', error);
        res.status(500).send('Error al eliminar la computadora!');
    } finally {
        // Desconectar de MongoDB
        await disconnectMongoDB();
    }

    console.log(result);
    return result;
};

//Organizar las funciones uno abajo del otro mejora la legibilidad, la navegación y el mantenimiento del código promoviendo buenas prácticas de desarrollo y colaboración en equipo.
module.exports = { 
    getAllComputer, 
    addNewComputer, 
    getComputerId, 
    updateComputer, 
    deleteComputer, 
    getComputerNameAndCategory 
};
//Esta forma de exportación es una práctica común y recomendada en Node.js para proyectos que requieren múltiples funciones.