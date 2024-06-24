>  # Nuestra API de Computadoras
1. Comenzamos instalando las dependencias para el correcto funcionamiento de nuestra API de computadoras.
``` 
npm install express
            dotenv
            body-parser
            mongodb
```               

2. Ejecutamos la aplicacion mediante el comando

``` 
npm run dev 
```


## Organización de los pasos Realizados:

- [x] ***Nuestro proyecto fue desarrollado con Node.JS + MongoDB.***

- Los ENDPOINTS agregados son los siguientes:
  - [x] MÉTODO GET:
    - URL: /computadoras
    - URL: /computadoras/:codigo
    - URL: /computadoras/:search
  - [x] MÉTODO POST:
    - URL: /computadoras/:codigo
  - [x] MÉTODO PUT:
    - URL: /computadoras/codigo
  - [x] MÉTODO DELETE:
    - URL: /computadoras/codigo

- [X] Manejo de Errores Por cada endpoint,



## Tabla de Endpoints

| Método | Endpoint | Descripción |
|----------|----------|----------|
| GET    | [/](http://localhost:3000)   | Ruta raiz, solo devuelve un mensaje de bienvenida. |
| GET    | [/computadoras](http://localhost:3000/computadoras)   | Primeramente conecta con MongoDB. Luego por medio del método find() interactúa con MongoDB, realiza la búsqueda en nuestra base de datos desde nuestra colección ya cargada previamente, una vez que obtiene los elementos encontrados, se desconecta MongoDB y a través del método toArray() nos muestra por pantalla como resultado la lista array en modo json de las computadoras. |
| GET    |  [/computadoras/:codigo](http://localhost:3000/computadoras/codigo/4)  | Esta ruta es para obtener un producto mediante el codigo que solicitemos   |
| GET    |  [/computadoras/:search/:key](http://localhost:3000/computadoras/search/moni)  | Esta ruta es para buscar productos por su nombre o descripcion.  |
| POST    |   [/computadoras/:codigo](https://www.../) | Ruta para agregar un producto a nuestra base de datos mediante un codigo.   |
| PUT    |   [/computadoras/:codigo](https://www.../) | Ruta para actualizar el producto seleccionado de la base de datos con los datos nuevos que se escriban en el body.  |
| DELETE    |  [/computadoras/:codigo](https://www.../)  | Mediante esta ruta se borra el producto designado de la base de datos por medio de el codigo que proporcionemos.  |


## Pasos visuales de los endpoints.

1. Ruta Raíz.

   ![](/src/views/1.%20ruta%20raiz.png)

2. Lista todas las computadoras en modo json.

   ![](/src/views/2.%20metodo%20get.%20lista%20array%20json-computadoras.png)

3.  Muestra la búsqueda de computadora por su código.

   ![](/src/views/3.%20metodo%20get.%20busca%20computadora%20por%20su%20codigo.png)

4.  Muestra la búsqueda parcial, por letra o palabra entre el nombre o la descripción.

   ![](/src/views/4.%20metodo%20get.%20search%20-%20busca%20parcial,%20por%20letra,%20y%20palabra%20del%20contenido%20de%20nombre%20o%20descripcion.png)

5.  Muestra cuando se agrega una nueva computadora.

   ![](/src/views/5.%20metodo%20post.%20agrega%20nueva%20computadora.png)

6.  Muestra cuando se actualiza un nuevo producto.

   ![](/src/views/6.%20metodo%20put%20actualiza%20producto.png)

7. Muestra cuando elimina el producto de la base de datos.
   
  ![](/src/views/7.metodo%20delete%20elimina%20producto.png)

  ## Integrantes del equipo:
  ```
  Natalia Cisnero
  
  Estefania Vago

  Daniela Escobar
  
  Yanina Lujan Velazquez
  ```