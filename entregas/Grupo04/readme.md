<h1 align="center">🖥️ Proyecto: Computadoras</h1>
 
&nbsp;

<h3 align="center">💻 Éste es nuestro 2do proyecto: Computadoras</h3>

&nbsp;

<h3 align="center">📜 Introducción</h3>

<p>💻 Este proyecto es una aplicación web de catálogo de computadoras. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los elementos del catálogo.</p>
<p>🛠️ Es un proyecto con un esfuerzo colaborativo donde cada miembro del equipo contribuyó con su experiencia y conocimientos. Trabajamos en distintas ramas, realizamos reuniones para resolver problemas en conjunto, compartir ideas y métodos de codificación, y al final, unimos todo el trabajo para completar el proyecto exitosamente.</p>

&nbsp;

<p>👩‍💻 Hecho en grupo, por las alumnas:</p>

`GitHub profiles ↓`

<ul>
        <li><a href="https://github.com/amarantaVC" target="_blank">Amaranta Villegas</a></li>
        <li><a href="https://github.com/dxniela" target="_blank">Daniela Ramírez</a></li>
        <li><a href="https://github.com/Roci16" target="_blank">Rocio Ibañez</a></li>
        <li><a href="https://github.com/silfigue" target="_blank">Silvina Figueroa</a></li>
</ul>

&nbsp;

---

&nbsp;

<h2 align="center"> Tabla de Endpoints </h2>

| Método | Endpoint                | Descripción                                                                                               |
| ------ | ----------------------- | --------------------------------------------------------------------------------------------------------- |
| GET    | `/computadoras`         | Devuelve una lista con todos los datos disponibles en el catálogo.                                        |
| GET    | `/computadoras/:codigo` | Devuelve los detalles de un elemento específico según el código proporcionado.                            |
| GET    | `/computadoras/search`  | Devuelve una lista de datos que coinciden con el nombre o la categoría proporcionados. (Búsqueda Parcial) |
| POST   | `/computadoras`         | Agrega una nuevo dato al catálogo.                                                                        |
| PUT    | `/computadoras/:codigo` | Actualiza los detalles de un elemento específico según el código proporcionado.                           |
| DELETE | `/computadoras/:codigo` | Elimina un elemento específico del catálogo según el código proporcionado.                                |

&nbsp;

---

&nbsp;

<h2 align="center">📄 Instrucciones para Ejecutar el Código</h2>
<ol>
    <li>Clonar el repositorio</li>
    <li>Instalar dependencias:
        <pre><code>npm install</code></pre>
    </li>
    <li>Ejecutar la aplicación:
        <pre><code>npm start</code></pre>
    </li>
</ol>

<h2 align="center">🤝 Contribución</h2>
<p>¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor sigue estos pasos:<p>
<ol>
        <li>Haz un fork del proyecto.</li>
        <li>Crea una rama nueva 
                <pre><code>git checkout -b feature/tu-feature</code></pre>
        </li>
        <li>Realiza tus cambios.</li>
        <li>Haz un commit de tus cambios
                 <pre><code>git commit -m 'Agrega nueva característica'</code></pre>
        </li>
        <li>Haz push a la rama 
         <pre><code>git push origin feature/tu-feature</code></pre>
        </li>
        <li>Abre un Pull Request.</li>
    </li>
</ol>
&nbsp;

---

&nbsp;

<h2 align="center">🛠 Tecnologías utilizadas</h2>

&nbsp;

<p align="center"> 
  <a href="https://www.mongodb.com/" target="_blank" style="margin: 0 10px;">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="100" height="100"/>
  </a>
  <a href="https://nodejs.org/" target="_blank" style="margin: 0 10px;"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="100" height="100"/> 
  </a>
  <a href="https://expressjs.com/" target="_blank" style="margin: 0 10px;"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="100" height="100"/> 
  </a>
  <a href="https://git-scm.com/" target="_blank" style="margin: 0 10px;"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg" alt="git" width="100" height="100"/> 
  </a> 
</p>

&nbsp;

<h2 align="center">🧰 Herramientas utilizadas</h2>

&nbsp;

<p align="center"> 
  <a href="https://code.visualstudio.com/" target="_blank" style="margin: 0 10px;"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original-wordmark.svg" alt="vscode" width="100" height="100"/> 
  </a>
  <a href="https://trello.com/" target="_blank" style="margin: 0 10px;"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/trello/trello-plain-wordmark.svg" alt="trello" width="100" height="100"/> 
  </a>
</p>

&nbsp;

<h2 align="center">📷 Capturas de los endpoints</h2>

<p>A continuación, podrán observar capturas de pantalla de las pruebas realizadas desde la extensión <code>Thunder Client</code> en VSCode de los diferentes endpoints.</p>

<h3>Endpoint GET<code>/computadoras</code></h3>

<p align="center"> 
  <img src="src/images/GETALL.jpg" alt="Endpoint-GET-ALL"/>
</p>

<h3>Endpoint GET<code>/computadoras/:codigo</code></h3>

<p align="center"> 
  <img src="src/images/GETBYID.jpg" alt="Endpoint-GET-BY-ID"/>
</p>

<h3>Endpoint GET<code>/computadoras/search</code></h3>

<h4>Búsqueda por nombre:</h4>

<p align="center"> 
  <img src="src/images/GET-SEARCH-NAME.jpg" alt="Endpoint-GET-SEARCH-NAME"/>
</p>

<h4>Búsqueda por categoría:</h4>

<p align="center"> 
  <img src="src/images/GET-SEARCH-CATEGORY.jpg" alt="Endpoint-GET-SEARCH-CATEGORY"/>
</p>

<h3>Endpoint POST<code>/computadoras</code></h3>

<p align="center"> 
  <img src="src/images/POST.jpg" alt="Endpoint-POST"/>
</p>

<p>Luego, al obtener todas las computadoras, se observa que se agregó correctamente el artículo a la base de datos.</p>

<p align="center"> 
  <img src="src/images/GETALL-AFTERPOST.jpg" alt="Endpoint-GET-ALL-AFTER-POST"/>
</p>

<h3>Endpoint PUT<code>/computadoras/:codigo</code></h3>

<p align="center"> 
  <img src="src/images/PUT.jpg" alt="Endpoint-PUT"/>
</p>

<p>Luego, al volver a consultar la información de este artículo se observa que la característica se actualizó correctamente, en este caso el precio, que cuando se realizó el POST estaba en 850 y ahora en 1025.</p>

<p align="center"> 
  <img src="src/images/GETBYID-AFTERPUT.jpg" alt="Endpoint-GET-BY-ID-AFTER-PUT"/>
</p>

<h3>Endpoint DELETE<code>/computadoras/:codigo</code></h3>

<p align="center"> 
  <img src="src/images/DELETE.jpg" alt="Endpoint-DELETE"/>
</p>

<p>Al consultar el codigo de dicho artículo eliminado, vemos que no existe en la base de datos.</p>

<p align="center"> 
  <img src="src/images/GETBYID-AFTER-DELETE.jpg" alt="Endpoint-GET-BY-ID-AFTER-DELETE"/>
</p>

&nbsp;

<h1 align="center">🖥️ Proyecto: Computadoras</h1>
 
&nbsp;

<h3 align="center">💻 Éste es nuestro 2do proyecto: Computadoras</h3>

&nbsp;

<h3 id="introduccion" align="center">📜 Introducción</h3>

<p>💻 Este proyecto es una aplicación web de catálogo de computadoras. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los elementos del catálogo.</p>
<p>🛠️ Es un proyecto con un esfuerzo colaborativo donde cada miembro del equipo contribuyó con su experiencia y conocimientos. Trabajamos en distintas ramas, realizamos reuniones para resolver problemas en conjunto, compartir ideas y métodos de codificación, y al final, unimos todo el trabajo para completar el proyecto exitosamente.</p>

&nbsp;

<h2 id="tabla-de-contenidos" align="center">🔗 Tabla de Contenidos</h2>

- [Introducción](#introduccion)
- [Tabla de Endpoints](#tabla-de-endpoints)
- [Instrucciones para Ejecutar el Código](#instrucciones-para-ejecutar-el-codigo)
- [Contribución](#contribucion)
- [Tecnologías utilizadas](#tecnologias-utilizadas)
- [Herramientas utilizadas](#herramientas-utilizadas)
- [Capturas de los Endpoints](#capturas-de-los-endpoints)

&nbsp;

<p>👩‍💻 Hecho en grupo, por las alumnas:</p>

`GitHub profiles ↓`

<ul>
        <li><a href="https://github.com/amarantaVC" target="_blank">Amaranta Villegas</a></li>
        <li><a href="https://github.com/dxniela" target="_blank">Daniela Ramírez</a></li>
        <li><a href="https://github.com/Roci16" target="_blank">Rocio Ibañez</a></li>
        <li><a href="https://github.com/silfigue" target="_blank">Silvina Figueroa</a></li>
</ul>

&nbsp;

---

&nbsp;

<h2 id="tabla-de-endpoints" align="center">🔗 Tabla de Endpoints </h2>

| Método | Endpoint                | Descripción                                                                                               | Parámetros                               | Cuerpo de la Solicitud                                                                                  |
| ------ | ----------------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| GET    | `/computadoras`         | Devuelve una lista con todos los datos disponibles en el catálogo.                                        | N/A                                      | N/A                                                                                                     |
| GET    | `/computadoras/:codigo` | Devuelve los detalles de un elemento específico según el código proporcionado.                            | `codigo` (en la URL)                     | N/A                                                                                                     |
| GET    | `/computadoras/search`  | Devuelve una lista de datos que coinciden con el nombre o la categoría proporcionados. (Búsqueda Parcial) | `compuName`, `compuCategory` (en la URL) | N/A                                                                                                     |
| POST   | `/computadoras`         | Agrega un nuevo dato al catálogo.                                                                         | N/A                                      | <pre>{<br>"codigo": number,<br>"nombre": string,<br>"precio": number,<br>"categoria": string<br>}</pre> |
| PUT    | `/computadoras/:codigo` | Actualiza los detalles de un elemento específico según el código proporcionado.                           | `codigo` (en la URL)                     | <pre>{<br>"nombre": string,<br>"precio": number,<br>"categoria": string<br>}</pre>                      |
| DELETE | `/computadoras/:codigo` | Elimina un elemento específico del catálogo según el código proporcionado.                                | `codigo` (en la URL)                     | N/A                                                                                                     |

&nbsp;

---

&nbsp;

<h2 id="instrucciones-para-ejecutar-el-codigo" align="center">📄 Instrucciones para Ejecutar el Código</h2>
<ol>
    <li>Clonar el repositorio</li>
    <li>Instalar dependencias:
        <pre><code>npm install</code></pre>
    </li>
    <li>Ejecutar la aplicación:
        <pre><code>npm start</code></pre>
    </li>
</ol>

<h2 id="contribucion" align="center">🤝 Contribución</h2>
<p>¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor sigue estos pasos:<p>
<ol>
        <li>Haz un fork del proyecto.</li>
        <li>Crea una rama nueva 
                <pre><code>git checkout -b feature/tu-feature</code></pre>
        </li>
        <li>Realiza tus cambios.</li>
        <li>Haz un commit de tus cambios
                 <pre><code>git commit -m 'Agrega nueva característica'</code></pre>
        </li>
        <li>Haz push a la rama 
         <pre><code>git push origin feature/tu-feature</code></pre>
        </li>
        <li>Abre un Pull Request.</li>
    </li>
</ol>
&nbsp;

---

&nbsp;

<h2 id="tecnologias-utilizadas" align="center">🛠 Tecnologías utilizadas</h2>

&nbsp;

<p align="center"> 
  <a href="https://www.mongodb.com/" target="_blank" style="margin: 0 10px;">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="100" height="100"/>
  </a>
  <a href="https://nodejs.org/" target="_blank" style="margin: 0 10px;"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="100" height="100"/> 
  </a>
  <a href="https://expressjs.com/" target="_blank" style="margin: 0 10px;"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="100" height="100"/> 
  </a>
  <a href="https://git-scm.com/" target="_blank" style="margin: 0 10px;"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg" alt="git" width="100" height="100"/> 
  </a> 
</p>

&nbsp;

<h2 id="herramientas-utilizadas" align="center">🧰 Herramientas utilizadas</h2>

&nbsp;

<p align="center"> 
  <a href="https://code.visualstudio.com/" target="_blank" style="margin: 0 10px;"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original-wordmark.svg" alt="vscode" width="100" height="100"/> 
  </a>
  <a href="https://trello.com/" target="_blank" style="margin: 0 10px;"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/trello/trello-plain-wordmark.svg" alt="trello" width="100" height="100"/> 
  </a>
</p>

&nbsp;

<h2 id="capturas-de-los-endpoints" align="center">📷 Capturas de los endpoints</h2>

&nbsp;

<p>A continuación, podrán observar capturas de pantalla de las pruebas realizadas desde la extensión <code>Thunder Client</code> en VSCode de los diferentes endpoints.</p>

&nbsp;

<h3>Endpoint GET<code>/computadoras</code></h3>

<p align="center"> 
  <img src="src/images/GETALL.jpg" alt="Endpoint-GET-ALL"/>
</p>

&nbsp;

<h3>Endpoint GET<code>/computadoras/:codigo</code></h3>

<p align="center"> 
  <img src="src/images/GETBYID.jpg" alt="Endpoint-GET-BY-ID"/>
</p>

&nbsp;

<h3>Endpoint GET<code>/computadoras/search</code></h3>

&nbsp;

<h4>Búsqueda por nombre:</h4>

&nbsp;

<p align="center"> 
  <img src="src/images/GET-SEARCH-NAME.jpg" alt="Endpoint-GET-SEARCH-NAME"/>
</p>

&nbsp;

<h4>Búsqueda por categoría:</h4>

&nbsp;

<p align="center"> 
  <img src="src/images/GET-SEARCH-CATEGORY.jpg" alt="Endpoint-GET-SEARCH-CATEGORY"/>
</p>

&nbsp;

<h3>Endpoint POST<code>/computadoras</code></h3>

&nbsp;

<p align="center"> 
  <img src="src/images/POST.jpg" alt="Endpoint-POST"/>
</p>

<p>Luego, al obtener todas las computadoras, se observa que se agregó correctamente el artículo a la base de datos.</p>

<p align="center"> 
  <img src="src/images/GETALL-AFTERPOST.jpg" alt="Endpoint-GET-ALL-AFTER-POST"/>
</p>

&nbsp;

<h3>Endpoint PUT<code>/computadoras/:codigo</code></h3>

<p align="center"> 
  <img src="src/images/PUT.jpg" alt="Endpoint-PUT"/>
</p>

<p>Luego, al volver a consultar la información de este artículo se observa que la característica se actualizó correctamente, en este caso el precio, que cuando se realizó el POST estaba en 850 y ahora en 1025.</p>

<p align="center"> 
  <img src="src/images/GETBYID-AFTERPUT.jpg" alt="Endpoint-GET-BY-ID-AFTER-PUT"/>
</p>

&nbsp;

<h3>Endpoint DELETE <code>/computadoras/:codigo</code></h3>

&nbsp;

<p align="center"> 
  <img src="src/images/DELETE.jpg" alt="Endpoint-DELETE"/>
</p>

<p>Al consultar el codigo de dicho artículo eliminado, vemos que no existe en la base de datos.</p>

<p align="center"> 
  <img src="src/images/GETBYID-AFTER-DELETE.jpg" alt="Endpoint-GET-BY-ID-AFTER-DELETE"/>
</p>

&nbsp;
