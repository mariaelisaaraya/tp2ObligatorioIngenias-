# **API RESTful Grupo 2**

Este proyecto es una API RESTful para gestionar una colección de productos de computación utilizando Node.js, Express y MongoDB.


## Tabla de Contenidos
- [**API RESTful Grupo 2**](#api-restful-grupo-2)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Integrantes del grupo de trabajo](#integrantes-del-grupo-de-trabajo)
  - [Configuraciones iniciales](#configuraciones-iniciales)
  - [Uso](#uso)
  - [Endpoints](#endpoints)
  - [Ejemplos de uso](#ejemplos-de-uso)
    - [Obtener todos los productos](#obtener-todos-los-productos)
    - [Obtener el producto con código = 9](#obtener-el-producto-con-código--9)
    - [Buscar un producto por su nombre y/o categoría](#buscar-un-producto-por-su-nombre-yo-categoría)
    - [Agregar un nuevo producto](#agregar-un-nuevo-producto)
    - [Eliminar el producto con el código 1234](#eliminar-el-producto-con-el-código-1234)
  - [Manejo de Errores](#manejo-de-errores)

## Integrantes del grupo de trabajo
- Viviana Beatriz Aguilera Valenzuela 
- Delfina Schlossberg 
- Quimey Fernandez Yaryura
- Paula Carolina Serrano

## Configuraciones iniciales
- Detalle de las variables de entorno del archivo .env:
```
PORT=3000
MONGO_URL_STRING=mongodb+srv://vivianaaguilera15:IngeniasVivi2024@clusteringenias.chsesoe.mongodb.net/?retryWrites=true&w=majority&appName=ClusterIngenias
```
- Instalación de dependencias:
```bash
npm install
```

## Uso
1. Iniciar el servidor con alguno de los siguientes comandos:
```bash
npm start
npm run dev
```
2. Acceder a la url del servidor de la forma que creas más conveniente. Recomendamos el uso de Thunder Client.
   
   http://localhost:3000

## Endpoints

| Método | URL                        | Descripción                                                                 | Parámetros                                    | Cuerpo de la Solicitud                      |
|--------|----------------------------|-----------------------------------------------------------------------------|----------------------------------------------|---------------------------------------------|
| GET    | `/`                        | Retorna un mensaje de bienvenida                                            | N/A                                          | N/A                                         |
| GET    | `/computadoras`            | Retorna todos los productos                                                 | N/A                                          | N/A                                         |
| GET    | `/computadoras/:codigo`    | Retorna un producto específico por su código                                | `codigo`: código del producto                | N/A                                         |
| GET    | `/computadoras/search`     | Retorna productos cuyo nombre y/o categoría coincida o contenga el/los parámetro/s especificado/s | `nombre`: Nombre del producto, `categoría`: Categoría del producto | N/A         |
| GET    | `/computadoras/precio/:precio` | Retorna productos cuyo precio es igual o mayor al precio especificado       | `precio`: Precio del producto                | N/A                                         |
| POST   | `/computadoras`            | Crea un nuevo producto                                                      | N/A                                          | Producto en formato JSON*                   |
| PUT    | `/computadoras/:codigo`    | Actualiza un producto existente por su código                               | `codigo`: Código del producto                | Datos del producto en formato JSON*         |
| DELETE | `/computadoras/:codigo`    | Elimina un producto existente por su código                                 | `codigo`: Código del producto                | N/A                                         |


___*Ejemplos de código para el body:___ 
   ```json
   //POST: para agregar un nuevo producto
{
    "codigo": 1234,
    "nombre": "Mega Desk",
    "precio": 50000,
    "categoria": "Desktop"
  }

  //PUT: para modificar, por ejemplo, el precio del producto.
  {
     "precio": 75000
  }
```
## Ejemplos de uso
### Obtener todos los productos
GET -> http://localhost:3000/computadoras

![Obtener todos los productos](./img/get.png)

### Obtener el producto con código = 9
GET -> http://localhost:3000/computadoras/9
![Obtener el producto con el código 9](./img/get_id.png)

### Buscar un producto por su nombre y/o categoría
GET -> http://localhost:3000/computadoras/search?nombre=mouse&categoria=acce
![Obtener el producto con nombre=mouse y categoría=acce](./img/search_2p.png)
GET -> http://localhost:3000/computadoras/search?nombre=tecla
![Obtener el producto con nombre=tecla](./img/search_nomb.png)
GET -> http://localhost:3000/computadoras/search?categoria=impres
![Obtener el producto con categoría=impres](./img/search_cat.png)

### Agregar un nuevo producto
POST -> http://localhost:3000/computadoras
![Agregar un nuevo producto](./img/post.png)


### Eliminar el producto con el código 1234
DELETE -> http://localhost:3000/computadoras/1234
![Eliminar un producto](./img/delete.png)

## Manejo de Errores
- 500: Error al conectarse a MongoDB
- 404: Producto no encontrado
- 400: Error en el formato de los datos (parámetros, body)


