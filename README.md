1.-Instalé las dependencias y creé el proyecto:
Desde la terminal, navegué a una carpeta específica y creé un proyecto usando el comando npx create-react-app my-app --template typescript.
Navegué a la carpeta del proyecto recién creado usando el comando cd my-app.
Instalé las dependencias necesarias para el proyecto ejecutando los siguientes comandos:
npm i bootstrap
npm i font-awesome
npm i redux react-redux
npm i react-router-dom

2.- Inicié el proyecto:
Abrí Visual Studio Code ejecutando el comando code . en la terminal.
Inicié el proyecto ejecutando el comando npm start.

3.-Organicé y preparé el proyecto:
Borré el contenido de los archivos App.tsx y App.css.
Agregué las hojas de estilo CSS de Bootstrap y Font Awesome al archivo index.tsx.
Creé una carpeta llamada components dentro de la carpeta src. 

4.-Creé el componente Navbar:
Creé un archivo llamado Navbar.tsx dentro de la carpeta components.
Agregué el contenido del componente Navbar utilizando el snippet rafce.
Cambié class por className y agregué Link.
Importé el componente Navbar en App.tsx y lo envolví con Router.
Agregué una ruta a Routes que renderice el componente Home.
Creé el componente Home.tsx dentro de la carpeta components.
Edité los estilos del Navbar utilizando className y App.css.

5.-Creé el componente Products y conecté con la API:
Creé un archivo llamado Products.tsx dentro de la carpeta components.
Creé el estado data, filter y loading utilizando el hook useState.
Utilicé el hook useEffect para realizar una llamada a la API de Fake Store y actualizar los estados de data, filter y loading en función de la respuesta de la API.
Creé la variable componentMounted y la utilicé para verificar si el componente estaba montado antes de actualizar los estados.
Los datos de la respuesta de la API se convirtieron en JSON y se establecieron en los estados data y filter.
Establecí loading en false cuando los datos se cargaron y estuvieron listos para mostrarse en la página web.
Definí el tipo de objeto Product que se espera para los estados data y filter.
Cambié la inicialización de los estados data y filter para que sean del tipo Product[].

Añadí la definición del componente Loading que muestra un mensaje mientras se cargan los productos.

Añadí la definición del componente ShowProducts que muestra la lista de productos y los botones para filtrar por categoría.
Copié el diseño de la tarjeta de Bootstrap y edité los estilos para ajustarlos a mis necesidades.
Importé la librería Link de react-router-dom.

Cambié el contenido del componente return para incluir los nuevos componentes Loading y ShowProducts, y los elementos HTML necesarios para la estructura de la página.
