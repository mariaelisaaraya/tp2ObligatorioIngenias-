# TP2 OBLIGATORIO - INGENIAS
## Grupo 06
- Andrea Ayelén Diaz

- Daniela Soto

- Ana Santos

- Magalí Giles

La preentrega 2 requiere un proyecto utilizando Node.js y MongoDB. Este proyecto debe incluir diferentes puntos finales funcionales que utilizan los métodos GET, POST, PUT y DELETE.

 La temática elegida para la base de datos es una colección de "Computadoras" y está en formato json

## Requisitos

Antes de comenzar, asegúrarse de tener instalado lo siguiente en tu entorno de desarrollo:

-   Node.js
-   MongoDB
-   npm (Node Package Manager)

## Instalación
    
1.  **Instala las dependencias**
    Abre la terminal ` Ctrl + ñ` en Visual Studio Code 
  
    
    `npm install` 
    
 **Dependencias en este proyecto :**

-   **body-parser**: Middleware para parsear cuerpos de solicitudes HTTP en Express.js.
   
-   **dotenv**: Carga variables de entorno desde un archivo `.env` a `process.env`.
    
-   **express**: Framework web rápido, minimalista y flexible para Node.js.
    
-   **mongodb**: Driver oficial de MongoDB para Node.js.
    
-   **nodemon**: Utilidad que monitorea cambios en los archivos y automáticamente reinicia la aplicación.
    
    
2.  **Configura las variables de entorno**
    
    Creamos un archivo `.env` en la raíz del proyecto y configuramos las variables de entorno necesarias:
    
    - En nuestro proyecto fueron las siguientes:
    `  PORT=3008` 
    `MONGO_URL_STRING=mongodb+srv://anasantossofiacerpa:Ingeniasgrupo06@tp2.u9yr54o.mongodb.net/`
    
    
    Asegúrate de ajustar el valor de `MONGO_URI` según tu configuración de MongoDB.
    

## Uso
**Herramienta utilizada para probar APIs :**
` Thunder Client`  y ` Postman` 

### Endpoints

-   **GET /computadoras**: Obtener todas las computadoras.
-   **GET /computadoras/:codigo**: Obtener una computadora por su código.
-   **GET /computadoras/search/:search**: Obtener una computadora por su código.
-   **POST /computadoras**: Agregar una nueva computadora.
-   **PUT /computadoras/:codigo**: Actualizar una computadora existente.
-   **DELETE /computadoras/**: Eliminar una computadora 


### Ejemplos de Respuestas

Se adjunta en la carpeta **assets** los archivos de imagen con los endpoints y los codigos de errores.
La carpeta se encuentra disponible en `tp2ObligatorioIngenias-/entregas/Grupo06/assets`

    

## Contribución del grupo mediante git

1.  Se realiza un fork del proyecto.
2.  Reliza actualización de repositorio remoto en tu repositorio local (`git pull`)
3.  Realiza tus cambios y haz commit ( `git add . `- `git commit -am 'Agrega nueva característica'`).
4.  Sube tus cambios a la rama (`git push`)


## Glosario de Errores



|Código   | Descripción  |
|--|--|
| 200  |OK - Respuesta estándar para solicitudes correctas.|
| 201 | Created - La solicitud ha tenido éxito y se ha creado o actualizado un recurso. |
| 400 | Bad Request - La solicitud contiene una sintaxis incorrecta o no puede procesarse. |
| 404 | Not Found - El servidor no pudo encontrar el contenido solicitado.  |
| 500 | Internal Server Error - Indica un error interno del servidor. |
| 501 | Not Implemented - La solicitud no se ha implementado. |
| 503 | Service Unavailable - El servidor no está disponible. |

