const dotenv = require('dotenv');
const express = require('express');
const app = express();
const { connectToMongoDB, disconnectToMongoDB} = require('./src/mongoDb')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;


/*      MIDDLEWARE      */ 
dotenv.config()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    next();
});

/*      WEB SERVER      */
app.listen(PORT, () => {
    console.log(`API corriendo en el puerto http://localhost:${PORT}`)
});

/*      ENDPOINTS       */
//Endpoint HOME
app.get("/", (req, res) => {
    res.set("Content-Type", "text/html");
    res.status(200).send("<html><body><h1>Bienvenid@s a HOME</h1></body></html>");
  });

//Endpoint GET para obtener todas las computadoras
app.get("/computadoras", async (req, res) => {
    res.status(500).send("NO IMPLEMENTADO");
});

//Endpoint GET para obtener una computadora por codigo
app.get("/computadoras/:codigo", async (req, res) => {
    res.status(500).send("NO IMPLEMENTADO");
});

//Endpoint GET para obtener todas las computadoras por nombre o descripcion
app.get("/computadoras/search", async (req, res) => {
    res.status(500).send("NO IMPLEMENTADO");
});

//Endpoint POST para agregar una computadora
app.post("/computadoras", async (req, res) => {
    res.status(500).send("NO IMPLEMENTADO");
});

//Endpoint PUT para modificar una computadora
app.put("/computadoras/:codigo", async (req, res) => {
    res.status(500).send("NO IMPLEMENTADO");
});

//Endpoint DELETE para eliminar una computadora 
app.delete("/computadoras/:codigo", async (req, res) => {
    res.status(500).send("NO IMPLEMENTADO");
});


//Endpoint NOT FOUND
app.get("*", (req, res) => {
    res.status(404).json({
      error: "404",
      message: "No se encuentra la ruta solicitada",
    });
  });
  
