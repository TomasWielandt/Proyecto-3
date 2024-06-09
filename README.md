![](https://github.com/UDDBootcamp/7M_FULLSTACK_M3_PROY/blob/master/images/banner.png)

# PROYECTO 3: Landing de Negocio

## Planteamiento y Requisitos
Este proyecto está enfocado en construir una página landing para un negocio.

Se pide que sea una sola página que permita establecer:

- Realizar un prototipado simple, en papel o utilizando un programa de dibujo, sobre cómo trabajarás tu sitio.
- Muestra de los mensajes de negocio
- Breve catálogo de productos
- Incluir estas secciones en la interfaz:
**a. Header** Sección que involucra el logo y las áreas principales del sitio.
**b. Main** Sección de presentación del producto al usuario. Debe de incluir su título, descripción y un elemento para introducir tu correo.
**c. Products** Sección para mostrar los artículos del sitio web. O en su caso, artículos de catálogo de productos
**d. Footer** Sección que incluye todas las áreas del sitio, incluyendo redes sociales.
- De manera opcional y recomendada, que la vista se adapte a móviles.

## Tecnologías usadas
- HTML
- CSS
- JavaScript
- Bootstrap

## Prototipado simple

### Para Laptops o computadores de escritiorio

[![Diagrama-pagina-drawio.png](https://i.postimg.cc/8z3BDsqT/Diagrama-pagina-drawio.png)](https://postimg.cc/FYyJVFr6)

### Para pantallas pequeñas

[![Diagrama-pagina-cel-drawio.png](https://i.postimg.cc/FR14SWTy/Diagrama-pagina-cel-drawio.png)](https://postimg.cc/G80VwQwt)

## Solución General
Para esté proyecto decidí hacer un pagina para un negocio ficticio llamado "**Metal Mercenaries**", que se enfoca en contratar los servicios de músicos famosos de Heavy Metal para armar una banda.
Se agregó el contenido de la página en un archivo index.html, se estilizó la pagina en el archivo styles.css y se manipuló el DOM de ciertos elementos en el archivo index.js.
### Header
En la sección Header se colocó una barra de navegación la cual contiene el logo de la empresa, links de navegación los cuales algunos llevan a distintas secciones de la pagina y otros no estan en funcionamiento,  y una barra de busqueda. Para esto se utilizó Bootstrap.
Al moverse hacia abajo en la pagina, la barra queda fija en la parte superior.

[![Navbar.png](https://i.postimg.cc/8z0ss0BS/Navbar.png)](https://postimg.cc/Mn1zFtFP)

El link de músicos abre un sub-menú de músicos organizados por tipo de instrumento que tocan. Para esta ocasión, todo los links llevan a la sección de musicos destacados que se encuentra mas abajo pero la idea es que cada link lleve a una nueva pagina donde se muestre todo los musicos disponibles por cada categoria, en donde se puede ver el perfil de cada uno y el valor de sus servicios.

[![link-musicos.png](https://i.postimg.cc/5tjJQ997/link-musicos.png)](https://postimg.cc/DWVHtTXL)

Si se aprieta el boton de busqueda aparece un mensaje indicando que el botó de busqueda no está funciando. Para estó se utilizó JavaScript.

[![mensaje-btn-busqueda.png](https://i.postimg.cc/c46S64Dv/mensaje-btn-busqueda.png)](https://postimg.cc/kBrZp9PC)

Al achicarse la pantalla para dispositivos pequeños como celulares (pantallas menores a 768px), los links de navegacion y la barra de búsqueda quedan dentro de un menú desplegable que se activa con un botón que aparece a la derecha.

[![navbar-cel.png](https://i.postimg.cc/nzdWtqf0/navbar-cel.png)](https://postimg.cc/KkMfPkzM)

### Main
En el Main se colocó el logo nuevamente, un texto presentando el negocio y  una imagen al lado derecho.

[![main.png](https://i.postimg.cc/HxCMsNdL/main.png)](https://postimg.cc/JyP0pPyw)

Se aplicó un media querie para que cuando la pantalla tenga un ancho maximo de 992px, el texto quede sobre la imagen.

[![main-cel.png](https://i.postimg.cc/QMcBPq1Z/main-cel.png)](https://postimg.cc/HJss8X66)

### Products
En la sección Products se colocó una selección de músicos destacados dentro de un carrusel de imagenes creado con Bootstrap. La idea es que al clickear la imagen del músico te lleve a otra pagina con su perfil, valor de servicios, etc...pero por esta ocasión, el link no lleva a nada. A los costados de las imagenes hay 2 flechas <> que sirven para cambiar las imagenes o se puede dejar que la imagenes cambien por si solas cada cierto tiempo.

[![musicos-destacados.png](https://i.postimg.cc/3wWyrHs7/musicos-destacados.png)](https://postimg.cc/67J6zF61)

### Banner
A continuación se colocó una sección de Banner con una fotografia de la marca de guitarras Ibanez, que al selecionarla lleva a la pagina oficial de la marca.

[![banner-ibanez.png](https://i.postimg.cc/Y9gJQh53/banner-ibanez.png)](https://postimg.cc/0MkWs22M)

### Contact
Luego viene la sección Contact que contiene un formulario de contacto donde se pide al usuario el nombre, apellido, correo y un mensaje. Si alguno de los campos no se llena aparece un mensaje solicitando que se complete ese campo.

[![formulario-contacto.png](https://i.postimg.cc/DZ94YYYh/formulario-contacto.png)](https://postimg.cc/9RBfD1hg)

Si se clickea el botón enviar, aparece un mensaje indicando que el formulario no está funcionando en este momento. Esto se hizo utilizando JavaScript.

[![mensaje-btn-contacto.png](https://i.postimg.cc/hPC3zLJn/mensaje-btn-contacto.png)](https://postimg.cc/fJ9v10jq)

### Footer
Por ultimo está el Footer donde aparecen los links para seguir a la empresa en redes sociales, sobre la compañia, terminos y condiciones, y ayuda al cliente.

[![footer.png](https://i.postimg.cc/L5PL9MZh/footer.png)](https://postimg.cc/wR672Z2d)

A medida que se achica la pantalla, dependiendo del dispositivo en que se ve la pagina, los textos se van ordenando de forma responsiva.

[![footer-responsive.png](https://i.postimg.cc/R00t3tnk/footer-responsive.png)](https://postimg.cc/DSt0H866)

## Contacto
Tomás Wielandt
twielandt16@gmail.com
