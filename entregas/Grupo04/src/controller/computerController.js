const { connectToMongoDB, disconnectMongoDB } = require('../database/dbConection');

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

module.exports = { getAllComputer };