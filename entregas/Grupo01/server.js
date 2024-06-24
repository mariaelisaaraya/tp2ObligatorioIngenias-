// Servidor. 
const express = require('express');
const { getAllComputers,getComputer,searchComputer,nuevaComputadora,
        updateComputer,borrarComputer} = require('./controller/computerController');
const app = express();
const PORT = process.env.PORT || 3008;

// Para evitar TypeError: Cannot read property '_id' of undefined.
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware.
app.use((req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8');
    next();
})

// Ruta raiz.
app.get('/', (req, res) => {
    res.status(200).end('Bienvenid@ a la API de Coleccion de computadoras')
});

// Se obtienen todas las computadoras de la base de datos.
app.get('/api/computadoras', async (req, res) => {
    res.status(200).json(await getAllComputers());
});

// Se obtiene la computadora con el id ingresado.
app.get('/api/computadoras/:id', async (req, res) => {
    // la verificacion del id se hace en datacontroller.js
    // la conversion del string id a number id se hace en computerController.js
    let id = req.params.id;
    const resultado=await getComputer(id);
    res.status(resultado.status).send(resultado.msj);
});

// Obtener un documento por su nombre o categoría.
// http://localhost:3008/api/computadoras/buscar/:search
//Parámetros de consulta:
//nombre: El nombre de la computadora.
//descripcion: La descripción de la computadora.
app.get('/api/computadoras/buscar/:search', async (req, res) => {
    const dataSearch = req.params.search;//recibe parametros de busqueda
    console.log(dataSearch)
    const resultado = await searchComputer(dataSearch); // envia data recibida, como paramtro a funcion
    
    res.status(resultado.status).send(resultado.msj);
});

// http://localhost:3008/api/computadoras
// POST =  crea una computaora nueva 
app.post('/api/computadoras',async (req,res)=>{
    const computadora = req.body;
    const resultado = await nuevaComputadora(computadora);
    res.status(resultado.status).send(resultado.msj);
})

// PUT
app.put('/api/computadoras/:id',async (req, res) => {
    const code = req.params.id;
    const data = req.body;

    // Si probamos ingresar por ejemplo "77a" me devuelve "77" (Error solucionado en data.controller)
    // console.log(parseInt(req.params.id))
    
    if(Object.keys(data).length === 0 && data.constructor === Object){
        res.status(500).send('No se obtuvieron datos!');
    }else{
        const result = await updateComputer(code, data);
        res.status(result.status).send(result.msj);
    }
});

// DELETE
app.delete('/api/computadoras/:id',async (req,res) => {
    const id = req.params.id; // id del elemento a eliminar
    const resultado = await borrarComputer(id);
    res.status(resultado.status).send(resultado.msj);
})

//respuesta para rutas inexistentes 


app.get('*', (req, res) => {
    res.status(404).send('Lo siento, la página que buscas no existe.'); 
});

// Inicia el servidor.
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});
