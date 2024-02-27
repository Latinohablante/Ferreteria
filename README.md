# Ferreteria ACME
Este trabajo consiste en desarrollar el sitio web para una ferretería, que permita a todos los clientes de la ferretería comprar a través de una tienda virtual.


## Este proyecto fue elaborado por KKs Tech y sus integrantes son:
* Christian Celis -> Backend
* Camilo Hernandez-> Frontend
* Carlos Aguilar -> Frontend
* Elkin Gabriel -> Scrum Master
* Carlos Rueda -> Product Owner

# Documentación del proyecto



## Primera reunión SCRUM

Revisamos los requerimientos y escogimos el proyecto mínimo viable a desarrollar.

Los primeros objetivos elegidos por el product owner son:

* Landing page creada con Bulma
* crear la base de datos de los productos utilizando Firebase
* Cargar productos en la landing page con una tarjeta de producto
* Filtrar los productos con un primer nivel de filtrado

Según estos requerimientos decidimos utilizar el modelo, vista, controlador para desarrollar todo el sitio web, para ello el scrum master se encargó de crear el repositorio en github y también el entorno en Notion para llevar un orden en las tareas y los sprints. También, decidimos asignar las tareas aprovechando las fortalezas de cada uno de los integrantes del equipo de desarrollo.

Por eso, el encargado de la landing page fue Camilo Hernandez quien tuvo que aprender bulma, para eso revisó toda la documentación:

* https://bulma.io/documentation/columns/responsiveness/

En donde se destaca el manejo de colores a través del código en el siguiente link:

* https://bulma.io/documentation/helpers/color-helpers/

También el uso de formularios que se encuentran en este link:

* https://bulma.io/documentation/form/general/

Para la visualización de los productos creó el archivo mostrarProductos.js en la carpeta views. En este archivo utilizó la función creada por christian llamada Mostrarproductos(data) y le agregó la funcionalidad de 


...

El encargado de la base de datos y el controlador fue Christian Celis quien tuvo que aprender Firebase para cumplir con el requerimiento de utilizar la base de datos con este método. Para ello se registró en la siguiente página web:

* https://firebase.google.com/?gad_source=1&gclid=CjwKCAiAivGuBhBEEiwAWiFmYX1I0EjfMa3OpLrOCnC0Pj8zZdWDPTbRRV3WzK-6qARekzjjq1KzDRoCAgsQAvD_BwE&gclsrc=aw.ds&hl=es-419


Y siguió los pasos de las siguiente documentación proveída por Firebase:

* https://firebase.google.com/docs/firestore/quickstart?hl=es&authuser=0

Usó FireStore Database, en donde creó la entidad llamada productos y asignó los id's en los documentos correspondientes junto con los campos de cada producto donde se incluye cantidad, categoría, nombre, precio y dirección relativa de la imagen. Luego, agregó el código correspondiente en  el archivo db.js ubicado en la carpeta db. También fue el encargado de hacer la conexión entre la base de datos y la vista a través del controlador utilizando el método get el cuál se encuentra definido en el archivo get.js en la carpeta models. Este archivo solicita la información de todos los productos a la base de datos Firebase y se guardan en un Array llamado data.

Creó el archivo mostrarProductos.js y 
El controlador ejecuta la función MostrarProductos(datos) que se encarga de mostrar los productos en la landing page.

...

El encargado de la funcionalidad de filtrado fue Carlos Aguilar quien tuvo que aprender a utilizar el modelo, vista, controlador para comprender el funcionamiento del sitio web y crear la función para hacer el filtrado por categorías.