// SERVIDOR
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//INCLUYO FUNCIONES DECLARADAS DESDE MONGODB.JS
const { connectToMongoDB, disconnectToMongoDB } = require('./src/mongoDb')

//BODY-PARSER
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MIDDLEWARE
app.use((req, res, next) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    next();
});

//RUTA RAIZ
app.get('/', (req, res) => {
    res.status(200).end("Bienvenido a mi API de COMPUTADORAS-GRUPO 5");
});

//METODO GET PARA OBTENER TODAS LAS COMPUTADORAS DE LA DB
app.get('/computadoras', async (req, res) => {
    const client = await connectToMongoDB();
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }
    const db = client.db('elementos')
    const computadoras = await db.collection('computadoras').find().toArray()
    await disconnectToMongoDB()
    res.status(200).json(computadoras);
})

//METODO GET PARA OBTENER UNA COMPUTADORA POR SU ID
app.get("/computadoras/codigo/:id", async (req, res) => {
    const computadoraID = parseInt(req.params.id) || 0
    const client = await connectToMongoDB();
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }
    const db = client.db('elementos')
    const computadoras = await db.collection('computadoras').findOne({ codigo: computadoraID })
    await disconnectToMongoDB()
    !computadoras ? res.status(404).send('No se encuentra el producto con id ' + computadoraID) : res.status(200).json(computadoras)
});

//METODO GET PARA BUSCAR COMPUTADORAS POR NOMBRE O DESCRIPCIÓN
app.get('/computadoras/search/:key', async (req, res) => {
    try {
        const client = await connectToMongoDB();
        const db = client.db('elementos');
        const computadorasCollection = db.collection('computadoras');

        const searchTerm = req.params.key;
        const data = await computadorasCollection.find({
            $or: [
                { nombre: { $regex: searchTerm, $options: 'i' } },
                { categoria: { $regex: searchTerm, $options: 'i' } }
            ]
        }).toArray();

        await disconnectToMongoDB();

        if (data.length === 0) {
            res.status(404).send(`No se encontraron resultados para '${searchTerm}'`);
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        console.error('Error al buscar computadoras por nombre o descripción:', error);
        res.status(500).send('Error interno al buscar computadoras');
    }
});

//POST
app.post("/computadoras/:codigo", async (req, res) => {
    const newComputer = req.body;

    try {
        const client = await connectToMongoDB();
        if (!client) {
            return res.status(500).send('Error al conectarse a MongoDB');
        }

        const db = client.db('elementos');
        const collection = db.collection('computadoras');

        //Insertar la nueva computadora en la base de datos
        await collection.insertOne(newComputer)
        console.log('Nueva computadora agregada:', newComputer);
        await disconnectToMongoDB();
        res.status(201).send('Computadora agregada correctamente');
    } catch (error) {
        console.error('Error al agregar computadora:', error);
        res.status(500).send('Error interno al agregar computadora');
    }
});

// PUT
app.put('/computadoras/:codigo', async (req, res) => {
    const codigo = req.params.codigo;
    const updatedComputer = req.body;

    try {
        const client = await connectToMongoDB();
        if (!client) {
            return res.status(500).send('Error al conectarse a MongoDB');
        }

        const db = client.db('elementos');
        const collection = db.collection('computadoras');

        const filter = { codigo: parseInt(codigo) };
        const updateDoc = {
        //actualizo con set
            $set: updatedComputer
        };

        const result = await collection.updateOne(filter, updateDoc);

        if (result.matchedCount === 0) {
            res.status(404).send(`No se encontró la computadora con código ${codigo}`);
        } else {
            res.status(200).send(`Computadora con código ${codigo} actualizada correctamente`);
        }

        await disconnectToMongoDB();
    } catch (error) {
        console.error('Error al actualizar computadora:', error);
        res.status(500).send('Error interno al actualizar computadora');
    }
});

// DELETE
app.delete("/computadoras/:codigo", async (req, res) => {

    const codigo = req.params.codigo;

    const client = await connectToMongoDB();
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }

    const db = client.db('elementos')
    const collection = await db.collection('computadoras')

    collection.deleteOne({ codigo: parseInt(codigo) })


        .then((result) => {

            if (result.deletedCount === 0) {
                if (isNaN(parseInt(codigo))) {
                    console.log('Formato invalido')
                    res.status(400).send('El formato no es válido');
                    return;
                } else {
                    console.log('No existe');
                    res.status(404).send('No se encontro la computadora con el codigo: ' + codigo);
                    return;
                }
            }else{
                    console.log('Computadora eliminada')
                    res.status(200).send('Se elimino correctamente la computadora')
                    return;
        }})
        .catch((error) => {
            console.error(error);
            res.status(500).send('Se produjo un error al intentar eliminar');
        })

        .finally(async () => { await disconnectToMongoDB() });
});

// RUTA PREDETERMINADA PARA MANEJAR RUTAS INEXISTENTES
app.get("*", (req, res) => {
    res.json({
        error: "404",
        message: "No se encuentra la ruta solicitada",
    });
});

//INICIA EL SERVIDOR
app.listen(PORT, () => console.log(`API de computadoras escuchando en http://localhost:${PORT}`));

