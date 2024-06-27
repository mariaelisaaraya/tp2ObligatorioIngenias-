
# API de Consulta de Productos Informáticos

Esta API permite obtener información sobre productos informáticos, como computadoras, periféricos y accesorios. Proporciona endpoints para listar productos, buscar productos por código, filtrar productos por nombre o categoría, agregar nuevos productos, actualizar productos existentes y eliminar productos.
Ha sido desarrollada utilizando las siguientes tecnologías:

- Lenguaje de programación: JavaScript
- Framework de desarrollo: Node.js
- Framework de enrutamiento: Express.js
- Base de datos: MongoDB
- API Testing: Thunder Client 

## Endpoints

## Tabla de Endpoints

| Método | Endpoint               | Descripción                                      | 
|--------|------------------------|--------------------------------------------------|
| GET    |[`/computadoras`](#obtener-la-lista-completa-de-productos)      | [Obtener la lista completa de productos](#obtener-la-lista-completa-de-productos) |
| GET    | [`/computadoras/codigo/:codigo`](#buscar-productos-por-código)    | [Buscar productos por código](#buscar-productos-por-código)  |
| GET    | [`/computadoras/search`](#filtrar-productos-por-nombre-o-categoría) | [Buscar productos por nombre o categoría](#filtrar-productos-por-nombre-o-categoría)    |
| POST   | [`/computadoras`](#agregar-un-nuevo-producto)        | [Agregar un nuevo producto](#agregar-un-nuevo-producto)                    |
| PUT    | [`/computadoras/:codigo`](#actualizar-un-producto-existente)    | [ctualizar un producto existente](#actualizar-un-producto-existente)           |
| DELETE | [`/computadoras/:codigo`](#eliminar-un-producto-existente)    | [Eliminar un producto existente](#eliminar-un-producto-existente)              |

### Obtener la lista completa de productos

Este endpoint te permite obtener la lista completa de productos informáticos.

- Método: GET
- Ruta: `/computadoras`
- Respuesta exitosa:
  - Código de estado: 200
  - Cuerpo de la respuesta: Lista de productos informáticos en formato JSON

Ejemplo de uso:

```
GET /computadoras
```

Ejemplo de respuesta exitosa:

```json
[
  {
    "codigo": 1,
    "nombre": "Laptop",
    "categoria": "Computadoras",
    "precio": 1000
  },
  {
    "codigo": 2,
    "nombre": "Monitor",
    "categoria": "Periféricos",
    "precio": 200
  },
  ...
]
```

### Buscar productos por código

Este endpoint te permite buscar un producto informático por su código.

- Método: GET
- Ruta: `/computadoras/codigo/{codigo}`
- Respuesta exitosa:
  - Código de estado: 200
  - Cuerpo de la respuesta: Producto informático encontrado en formato JSON

Ejemplo de uso:

```
GET /computadoras/codigo/1
```

Ejemplo de respuesta exitosa:

```json
{
  "codigo": 1,
  "nombre": "Laptop",
  "categoria": "Computadoras",
  "precio": 1000
}
```

### Filtrar productos por nombre o categoría

Este endpoint te permite filtrar productos informáticos por nombre o categoría.

- Método: GET
- Ruta: `/computadoras/search`
- Parámetros de consulta:
  - `nombre`: El nombre del producto (opcional)
  - `categoria`: La categoría del producto (opcional)
- Respuesta exitosa:
  - Código de estado: 200
  - Cuerpo de la respuesta: Lista de productos informáticos filtrados en formato JSON

Ejemplo de uso:

```
GET /computadoras/search?nombre=laptop&categoria=computadoras
```

Ejemplo de respuesta exitosa:

```json
[
  {
    "codigo": 1,
    "nombre": "Laptop",
    "categoria": "Computadoras",
    "precio": 1000
  },
  {
    "codigo": 3,
    "nombre": "Laptop gaming",
    "categoria": "Computadoras",
    "precio": 1500
  }
]
```

### Agregar un nuevo producto

Este endpoint te permite agregar un nuevo producto informático.

- Método: POST
- Ruta: `/computadoras`
- Parámetros de cuerpo de la solicitud: Datos del producto en formato JSON
- Respuesta exitosa:
  - Código de estado: 200
  - Cuerpo de la respuesta: Mensaje de éxito

Ejemplo de uso:

```
POST /computadoras
```

Parámetros de cuerpo de la solicitud:

```json
{
  "codigo": 4,
  "nombre": "Teclado",
  "categoria": "Periféricos",
  "precio": 50
}
```

Ejemplo de respuesta exitosa:

```json
"Producto agregado exitosamente"
```

### Actualizar un producto existente

Este endpoint te permite actualizar la información de un producto existente.

- Método: PUT
- Ruta: `/computadoras/{codigo}`
- Parámetros de cuerpo de la solicitud: Datos actualizados del producto en formato JSON
- Respuesta exitosa:
  - Código de estado: 200
  - Cuerpo de la respuesta: Mensaje de éxito

Ejemplo de uso:

```
PUT /computadoras/1
```

Parámetros de cuerpo de la solicitud:

```json
{
  "nombre": "Laptop actualizada",
  "precio": 1200
}
```

Ejemplo de respuesta exitosa:

```json
"Producto actualizado exitosamente"
```

### Eliminar un producto existente

Este endpoint te permite eliminar un producto existente.

- Método: DELETE
- Ruta: `/computadoras/{codigo}`
- Respuesta exitosa:
  - Código de estado: 200
  - Cuerpo de la respuesta: Mensaje de éxito

Ejemplo de uso:

```
DELETE /computadoras/2
```

Ejemplo de respuesta exitosa:

```json
"Producto eliminado exitosamente"
```

## Grupo 8

- Tatiana  Garay
- Gabriela Espinach Ros
- Brenda Diaz
- Amparo Blanco de la Vega