# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Tienda Mimas Muebles

La pagina consiste en una tienda de muebles a pedido, para todos los ambientes del hogar.

## Comenzando

Mediante el link al repositorio de Github se puede acceder al proyecto, que siendo publico puede ser utilizado como referencia. https://github.com/Octavio-Borelli/Proyecto-React-Borelli.git. Una vez que se accede al repositorio del proyecto, se puede visualizar la lista de los archivos que lo componen y al hacer click sobre alguno de ellos, se puede copiar el codigo y hacer uso del mismo.


## Pre-requisitos

Para poder hacer uso del proyecto se debe instalar un editor de codigo, como por ejemplo el Visual Studio Code en mi caso.

## Instalación

Para visualizar el proyecto en el buscador, se debe abrir el Visual Studio Code y dentro de este acceder a la carpeta que contiene los archivos del proyecto.
Una vez hecho esto, dentro de las opciones del menu del VSC presionar en "Terminal" y luego "Nuevo Terminal".
De esta manera se desplegara dicha Terminal en la parte inferior del entorno de trabajo. Para iniciar el proyecto se debe escribir 'npm start', y luego el proyecto se desplegara en [http://localhost:3000](http://localhost:3000).

## Construido con

* Visual Studio Code para la edicion del codigo y la aplicacion de estilos CSS.
* Google Chrome para visualizar en el navegador. 

## Ubicación de los archivos del proyecto

El proyecto esta dividido en varias carpetas para su fácil localización. Dentro de la carpeta SRC se encuentran otras cuatro, "components", "context", "firebase y "hooks". 
*La primera contiene todos los componentes de React que corresponden a las diferentes secciones de la aplicación, ventanas modales, botones, etc, cada uno con su respectiva subcarpeta y su nombre para identificarlo.
*La segunda contiene el componente React context llamado "CartProveedor" del cual todos los demás componentes son hijos y a los cuales se les pasan atributos directamente, sin necesidad de tener que pasar explícitamente una prop a través de cada nivel del árbol.  
*La tercera contiene el código para la instalación del Firebase de Google, que es una base de datos donde se almacena toda la información de los productos de la tienda y al cual realizamos peticiones para que nos devuelva dicha información según sea necesario. 
*La cuarta contiene los hooks propios de Firebase que nos permiten desde el VSCode, hacer las peticiones mencionadas anteriormente. 

## Autor

Octavio Borelli
