// servidor
const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT ?? 3000;
// incluyo funciones declaradas en mongoDb.js
const { 
    connectToMongoDB, 
    disconnectToMongoDB 
} = require("./src/mongoDb");

// para evitar TypeError: Cannot read property '_id' of undefined
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Middleware
app.use((req, res, next) => {
  res.header("Content-Type", "application/json; charset=utf-8");
  next();
});

//GET
app.get("/", (req, res) => {
  res.status(200).end("Bienvenido a la API de productos de computación del Grupo 2!");
});

// Acá no hay un bloque try-catch para capturar y manejar excepciones que puedan ocurrir durante las operaciones asíncronas.
app.get("/computadoras", async (req, res) => {
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("Error al conectarse a MongoDB");
    return;
  }
  const db = client.db("productos");
  const computadoras = await db.collection("Computadoras").find().toArray();
  await disconnectToMongoDB();
  res.status(200).json(computadoras);
});

//Acá pueden considerar separar la lógica en funciones más pequeñas y reutilizables para mejorar la legibilidad y el mantenimiento del código.
//Pueden mejorar el registro de errores incluyendo más información contextual sobre el error.
app.get("/computadoras/search", async (req, res) => {
  const { nombre, categoria } = req.query;
  let computadoras;
  if (!nombre && !categoria) {
    return res
      .status(400)
      .send(
        "Se requieren parámetros para realizar una búsqueda. Ingrese nombre y/o categoría"
      );
  }
  try {
    const client = await connectToMongoDB();
    if (!client) {
      res.status(500).send("Error al conectarse a MongoDB");
      return;
    }
    const db = client.db("productos");
    let query = {};

    if (nombre) {
      query.nombre = { $regex: new RegExp(nombre, "i") };
    }
    if (categoria) {
      query.categoria = { $regex: new RegExp(categoria, "i") };
    }
    const computadoras = await db.collection("Computadoras").find(query).toArray();
    await disconnectToMongoDB();
    computadoras.length > 0
      ? res.status(200).json(computadoras)
      : res.status(404).send("No se han encontrado productos");
  } catch (e) {
    console.error(e);
    return res.status(500).send(e);
  }
});

app.get("/computadoras/:codigo", async (req, res) => {
  const computadoraID = req.params.codigo || 0;
  let parsedId;
  try {
    parsedId = parseInt(computadoraID);
    if (isNaN(parsedId)) {
      return res.status(400).send("Código no válido");
    }
  } catch (err) {
    return res.status(400).send("Código no válido");
  }
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("Error al conectarse a MongoDB");
    return;
  }
  const db = client.db("productos");
  const compu = await db
    .collection("Computadoras")
    .findOne({ codigo: parsedId });
  await disconnectToMongoDB();
  !compu
    ? res
        .status(404)
        .send("No se ha encontrado el producto con el código: " + computadoraID)
    : res.status(200).json(compu);
});

app.get("/computadoras/precio/:precio", async (req, res) => {
  const preciocompu = parseInt(req.params.precio) || 0;
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("Error al conectarse a MongoDB");
    return;
  }
  const db = client.db("productos");
  // gte: mayor o igual a
  const computadoras = await db
    .collection("Computadoras")
    .find({ precio: { $gte: preciocompu } })
    .toArray();
  await disconnectToMongoDB();
  computadoras.length == 0
    ? res
        .status(404)
        .send("No se ha encontrado el producto con el precio: " + preciocompu)
    : res.status(200).json(computadoras);
});
/*
- Validación de Datos de Entrada:
    - La validación de nuevosDatos se realiza adecuadamente, pero podrían mejorar el mensaje de error y asegurarse de que la respuesta termine con un return para evitar continuar 
      con el procesamiento.
    - Consideren también validar que nuevosDatos tenga los campos necesarios para actualizar la computadora.

- Uso de Promesas:
    - Usar promesas (.then(), .catch(), .finally()) es válido, pero podría ser más consistente utilizar async/await para mantener un estilo uniforme.

- Estructura de la Respuesta:
    - La respuesta se envía correctamente en caso de éxito. Podrían incluir un chequeo para verificar si la actualización realmente afectó algún documento (por ejemplo, usando matchedCount).
*/

// POST
app.post("/computadoras", async (req, res) => {
  const nuevacompu = req.body;
  console.log(req.body);
  if (!nuevacompu) {
    res.status(400).send("Error en el formato de los datos del producto");
  }
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("Error al conectarse a MongoDB");
    return;
  }
  const db = client.db("productos");
  const collection = await db.collection("Computadoras");
  collection
    .insertOne(nuevacompu)
    .then(() => {
      console.log("Nuevo producto creado");
      res.status(201).send(nuevacompu);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error al crear");
    })
    .finally(async () => {
      await disconnectToMongoDB();
    });
});

//Antes de intentar actualizar la base de datos, se puede asegurar de validar que nuevosDatos contenga todos los campos necesarios y que sean del tipo esperad
// PUT
app.put("/computadoras/:codigo", async (req, res) => {
  const nuevocod = req.params.codigo;
  const nuevosDatos = req.body;
  console.log(req.body);
  if (!nuevosDatos) {
    res.status(400).send("Error en el formato de los datos del producto");
  }
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("Error al conectarse a MongoDB");
    return;
  }
  const db = client.db("productos");
  const collection = await db.collection("Computadoras");
  collection
    .updateOne({ codigo: parseInt(nuevocod) }, { $set: nuevosDatos })
    .then(() => {
      console.log("Producto actualizado");
      res.status(200).send(nuevosDatos);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error al actualizar");
    })
    .finally(async () => {
      await disconnectToMongoDB();
    });
});

// Deberían de validar que el parámetro codigo pasado en la URL sea un número válido antes de intentar convertirlo con parseInt(). Esto puede prevenir errores si el parámetro no es numérico.

// Delete
app.delete("/computadoras/:codigo", async (req, res) => {
  const eliminarcompu = req.params.codigo;
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("Error al conectarse a MongoDB");
    return;
  }
  const db = client.db("productos");
  const collection = await db.collection("Computadoras");
  collection
    .deleteOne({ codigo: parseInt(eliminarcompu) })
    .then(() => {
      console.log("Producto eliminado");
      res.status(200).send("Producto eliminado");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error al eliminar");
    })
    .finally(async () => {
      await disconnectToMongoDB();
    });
});

app.get("*", (req, res) => {
  res.json({
    error: "404",
    message: "No se encuentra la ruta solicitada",
  });
});

//Inicia el servidor
app.listen(PORT, () =>
  console.log(
    `API de Productos de computación del Grupo 2 escuchando en http://localhost:${PORT}`
  )
);

/*
Para mantener un estilo de código uniforme, podrían considerar usar async/await en lugar de .then() y .catch() para manejar las promesas en ambos endpoints, es una recomendación pero igualmente funciona.
*/