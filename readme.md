** Documentación del Proyecto Node.js + MongoDB **

Introducción

La pre-entrega 2 requiere que elabores un proyecto utilizando Node.js y MongoDB. Este proyecto debe incluir diferentes endpoints funcionales que utilicen los métodos GET, POST, PUT y DELETE. 

Temática de la Base de Datos
La temática elegida para la base de datos es una colección de "Computadoras" y está en compuntación.json

** Endpoints **

- Obtener todos los documentos
    - URL: /computadoras
    - Método: GET
    - Descripción: Deben aclararlo en el readme

- Obtener un documento por su ID
    - URL: /computadoras/:id
    - Método: GET
    - Descripción: Obtiene una computadora específica por su ID.

- Obtener un documento por su nombre o descripción
    - URL: /computadoras/search
    - Método: GET
    - Descripción: Obtiene computadoras que coincidan con el nombre o la descripción proporcionada.
    - Parámetros de consulta:
        - nombre: El nombre de la computadora.
        - descripcion: La descripción de la computadora.

- Crear un nuevo documento
    - URL: /computadoras
    - Método: POST
    - Descripción: Crea una nueva computadora en la base de datos

- Actualizar un documento existente
    - URL: /computadoras/:id
    - Método: PUT
    - Descripción: Actualiza los detalles de una computadora existente.

- Manejo de Errores
Por cada endpoint, es importante controlar los posibles errores y retornar el código de estado correspondiente. Aquí hay algunos ejemplos:

    - 404 Not Found: Cuando no se encuentra una computadora con el ID proporcionado.
    - 400 Bad Request: Cuando los datos enviados en el cuerpo de la solicitud no son válidos.

Tabla de Endpoints
Método	Endpoint	Descripción
GET	/computadoras	Obtener todas las computadoras
GET	/computadoras/:id	Obtener una computadora por su ID
GET	/computadoras/search	Buscar computadoras por nombre o descripción
POST	/computadoras	Crear una nueva computadora
PUT	/computadoras/:id	Actualizar una computadora existente
DELETE	/computadoras/:id	Eliminar una computadora por su ID
