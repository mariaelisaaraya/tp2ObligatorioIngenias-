const { connectToMongoDB, disconnectMongoDB } = require('../database/dbConection');

// GET ALL
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

module.exports = { getAllComputer, addNewComputer };