const {
    getAllComputer,
    addNewComputer,
    getComputerId,
    updateComputer,
} = require('./src/controller/computerController.js');
const dotenv = require('dotenv');
dotenv.config()

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3008;

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8');
    next();
})

// Rutas

// GET Endpoint / (Raíz)
app.get('/', (req, res) => {
    res.header('Content-Type', 'text/html; charset=utf-8');
    res.status(200).end('<h1>Bienvenid@s</h1><p>Este es nuestro catálogo de computadoras</p>')
});

// GET Endpoint /computadoras
app.get('/computadoras', async (req, res) => {
    try {
        const result = await getAllComputer();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// GET Endpoint /computadoras/:codigo
app.get('/computadoras/:codigo', async (req, res) => {
    const compuID = parseInt(req.params.codigo) || 0
    const result = await getComputerId(compuID);
    res.json(result);
})


// GET Endpoint /computadoras/search
app.get('/computadoras/search', async (req, res) => {
})

// POST Endpoint /computadoras
app.post('/computadoras', async (req, res) => {
    const newData = req.body;

    if (!newData) {
        res.status(400).send('Error en el formato de los datos')
    }

    const result = await addNewComputer(newData);
    res.status(result.status).send(result.msj);
})

// PUT Endpoint /computadoras/:codigo
app.put('/computadoras/:codigo', async (req, res) => {
    try {
        const id = parseInt(req.params.codigo) || 0
        const newData = req.body;

        // Se valida que newData no esté vacío
        if (Object.keys(newData).length === 0) {
            return res.status(400).send('Error en el formato de los datos')
        }

        // Se valida que newData no sea false
        if (!newData) {
            return res.status(400).send('Error en el formato de los datos')
        }

        const result = await updateComputer(id, newData);
        res.status(result.status).send(result.msj);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// DELETE Endpoint /computadoras/:codigo
app.delete('/computadoras/:codigo', async (req, res) => {
})

// GET Endpoint /*
app.get('*', (req, res) => {
    res.json({
        error: "404",
        message: "No se encuentra la ruta solicitada",
      });
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});