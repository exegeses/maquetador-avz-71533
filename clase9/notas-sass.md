# SASS (Syntacally Awesome Style Sheet)

> SASS es un lenguaje similar al CSS que sirve para escribir código que luego compilaremos y producirá CSS

> El lenguaje SASS implementa variables, funciones (mixins) e importación de archivos parciales.

## Instalación
### Desde la terminal 

> Para instalar SASS primero necesitamos tener instalado node.js  
> Chequear que esté instalado node.js  

    node --version

> Si no tenemos instalado node.js debemos instalarlo del sitio oficial
> https://nodejs.org/en

> Chequear que esté instalado sass

    sass --version


> Instalar SASS

    npm install -g sass


### Utilizando aplicaciones

#### Aplicaciones pagas

- Codekit https://codekitapp.com/  
- Hammer https://hammerformac.com/docs/index.html

#### Aplicaciones gratuitas

- Prepros https://prepros.io/
- Koala  https://koala-app.com/
- Scout https://scout-app.io/


## Compilar SASS 

    sass origin:destination  

    sass ./sass/estilos.scss:./css/estilos.css


### Compilar SASS con watcher

    sass --watch ./sass/estilos.scss:./css/estilos.css

    