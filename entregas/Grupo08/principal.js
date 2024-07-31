const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header ("Content-Type", "application/json; charset = utf-8")
    next();
})

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

const {conectarDB, desconectarDB} = require('./src/mongoDB');
const {buscarPorCodigo, search, obtenerDatos, agregarProducto, actualizarProducto, borrarProducto} = require('./database/computadoras.controlador')

// metodo get para obtener la lista completa
app.get('/computadoras', async (req,res)=>{
    const respuesta = await obtenerDatos();   
    res.status(respuesta[0]).send(respuesta[1]);  
})

// metodo get para buscar por codigo
app.get('/computadoras/codigo/:codigo',async (req,res)=>{
    const respuesta =  await buscarPorCodigo(parseInt(req.params.codigo))
    console.log(respuesta[1])

    res.status(respuesta[0]).send(respuesta[1]);    
})

// metodo get para filtrar por nombre o categoria
app.get('/computadoras/search',async (req,res)=>{
    const nombre = req.query.nombre? req.query.nombre.toLowerCase() : ""
    const categoria = req.query.categoria? req.query.categoria.toLowerCase() : ""
    const respuesta = await search(nombre, categoria)
    res.status(respuesta[0]).send(respuesta[1]);
   
})

// metodo post para agregar un producto
app.post('/computadoras',async (req, res) => {
const respuesta = await agregarProducto (req.body)
res.status(respuesta[0]).send(respuesta[1]);
})

// metodo put para actualizar
app.put('/computadoras/:codigo',async (req, res) => {
    const respuesta = await actualizarProducto(req.params.codigo, req.body)
    res.status(respuesta[0]).send(respuesta[1]); 
})


// metodo delete para eliminar
app.delete('/computadoras/:codigo',async (req, res) => {
    const respuesta = await borrarProducto (req.params.codigo)
    res.status(respuesta[0]).send(respuesta[1]);
})  

// rutas inexistentes
app.get('*', (req, res) => {
    res.status(404).send('Lo siento, la página que buscas no existe.'); 
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});

// Cuidado con las identaciones y los espacios en cada renglón.