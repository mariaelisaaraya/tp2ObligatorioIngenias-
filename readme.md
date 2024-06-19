# Documentación del Proyecto Node.js + MongoDB

## Introducción

La pre-entrega 2 requiere que elabores un proyecto utilizando Node.js y MongoDB. Este proyecto debe incluir diferentes endpoints funcionales que utilicen los métodos GET, POST, PUT y DELETE. 

Temática de la Base de Datos
La temática elegida para la base de datos es una colección de "Computadoras" y está en compuntación.json

### Endpoints 

- Obtener todos los documentos
    - URL: /computadoras
    - Método: GET
    - Descripción: Deben aclararlo en el readme.

- Obtener un documento por su Codigo
    - URL: /computadoras/:codigo
    - Método: GET
    - Descripción: Deben aclararlo en el readme.

- Obtener un documento por su nombre o categoría.
    - URL: /computadoras/search
    - Método: GET
    - Descripción: Deben aclararlo en el readme.

    - Parámetros de consulta:
        - nombre: El nombre de la computadora.
        - descripcion: La descripción de la computadora.

- Crear un nuevo documento
    - URL: /computadoras
    - Método: POST
    - Descripción: Deben aclararlo en el readme.

- Actualizar un documento existente
    - URL: /computadoras/:codigo
    - Método: PUT
    - Descripción: Deben aclararlo en el readme.

- Manejo de Errores
Por cada endpoint, es importante controlar los posibles errores y retornar el código de estado correspondiente. Aquí hay algunos ejemplos:

    - 404 Not Found: Cuando no se encuentra una computadora con el CODIGO proporcionado.
    - 400 Bad Request: Cuando los datos enviados en el cuerpo de la solicitud no son válidos.

## Tabla de Endpoints

| Método | Endpoint               | Descripción                                      |
|--------|------------------------|--------------------------------------------------|
| GET    | `/computadoras`        | Explicar ustedes                   |
| GET    | `/computadoras/:codigo`    | Explicar ustedes                |
| GET    | `/computadoras/search` | Explicar ustedes     |
| POST   | `/computadoras`        | Explicar ustedes                      |
| PUT    | `/computadoras/:codigo`    | Explicar ustedes             |
| DELETE | `/computadoras/:codigo`    | Explicar ustedes               |

#### Metodología de Entrega:
- Realizar PR como lo veniamos haciendo.
  
> [!Important]
> **Nueva Fecha de Entrega** aprovechen el fin de largo.
> 
> Lunes 24/06/2024 17pm
