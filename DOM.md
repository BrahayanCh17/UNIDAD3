Las siglas **DOM** significan **Document Object Model**, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina, árbol DOM.
En Javascript, cuando nos referimos al **DOM** nos referimos a esta estructura de árbol, mediante la cuál podemos acceder a ella y modificar los elementos del HTML desde Javascript, añadiendo nuevas etiquetas, modificando o eliminando otras, cambiando sus atributos HTML, añadiendo clases, cambiando el contenido de texto, etc...

**FUNCIONES PARA MODIFICAR EL DOM**

## Modificar atributos

Puedes establecer un atributo en un elemento al establecer la propiedad con el mismo nombre. Por ejemplo, para cambiar el `src` de una `<img>`:

```
imgEl.src = "http://www.dogs.com/dog.gif";
```

Adicionalmente, también puedes utilizar el método [`setAttribute`], así:

```
imgEl.setAttribute("src", "http://www.dogs.com/dog.gif");
```

Si quieres quitar un atributo, debes hacerlo con [`removeAttribute`], como para quitar el atributo `disabled` de un botón, habilitándolo:

```
imgEl.removeAttribute("disabled");
```

### Modificar estilos

Puedes cambiar estilos igual que como cambias los atributos, al acceder a la propiedad `style` del elemento, y establecr la propiedad correspondiente. Por ejemplo, para cambiar el color:

```
headingEl.style.color = "hotpink";
```

Recuerda usar notación "camelCase" en los nombres de las propiedades de CSS de varias palabras, puesto que los guiones no son nombres de propiedad válidos en JS:

```
headingEl.style.backgroundColor = "salmon";
```

### Modificar nombres de clases

Para agregar una clase a un elemento, puedes establecer la propiedad `className`:

```
mainEl.className = "warning";
```

Eso anulará las otras clases existentes, así que debes hacer esto en su lugar si solo quieres añadir a la lista de clases:

```
mainEl.className += " warning";
```

En [los navegadores más recientes], puedes utilizar la funcionalidad de [`classList`] en su lugar:

```
mainEl.classList.add("warning");
```

### Modificar HTML interno o texto

Para reemplazar por completo el contenido de un elemento con una cadena arbitraria de HTML, utiliza [`innerHTML`]:

```
mainEl.innerHTML = "los gatos son <strong>los más lindos</strong>";
```

Si no necesitas pasar etiquetas HTML, debes utilizar [textContent] en su lugar:

```
mainEl.textContent = "los gatos son los más lindos";
```

En general, debes tener cuidado al utilizar cualquiera de estas 2 propiedades, porque también eliminarán los detectores de eventos (los cuales enseñamos en la siguiente lección).

## Crear elementos desde cero

Hay todo un conjunto de funciones que puedes utilizar para crear elementos completamente nuevos y agregarlos a la página.

Para crear un nuevo elemento, utiliza el acertadamente llamado [`createElement`]:

```
var imgEl = document.createElement("img");
```

Para anexarlo a la página, llama [`appendChild`] en el elemento padre de destino:

```
document.body.appendChild(imgEl);
```

Del mismo modo, también puedes utilizar [`insertBefore`], [`replaceChild`], [`removeChild`] e [`insertAdjacentHTML`].

## `parentNode`

Por medio de `parentNode` podemos seleccionar el elemento padre de otro elemento. Por ejemplo, si tenemos el siguiente código:

```

    <div>
        <p id="introduccion">Párrafo introductorio.</p>
    </div>
            
```

la siguiente línea de _script_:

```

    document.getElementById('introduccion').parentNode;
            
```

selecciona el elemento padre del elemento identificado como `introduccion`, en este caso el `div`.

## `firstChild`

Con `firstChild` lo que seleccionamos es el primer hijo de un elemento. Por desgracia, hay discrepancias entre los diversos navegadores sobre qué debe considerarse o no hijo de un nodo, por lo que esta propiedad en ocasiones complica demasiado un _script_.

Supongamos el siguiente fragmento de código:

```

    <div id="contenido">
        <p>Un párrafo.</p>
        <p>Otro párrafo.</p>
    </div>
            
```

Parece, al menos intuitivamente, que `document.getElementById('contenido').firstChild` debería seleccionarnos el primer párrafo. Sin embargo, sólo ocurre así en Internet Explorer. El problema es que navegadores como Opera o Firefox interpretan también como hijos de un elemento los posibles espacios en blanco y saltos de línea que el elemento pueda contener. Estos, por tanto considerarían que el salto de línea entre el cierre del `div` y la apertura del primer `p` es el primer hijo.

Por ello, a menos que se quiera buscar alguna solución por medio de JavaScript, suelo aconsejar no emplear `firstChild` si se puede evitar, y limitarlo además a elementos cuyos contenidos sean en línea, que por lo general no contarán con saltos de línea en su interior. Por ejemplo, si el fragmento fuera el siguiente:

```

    <p><strong>Nota:</strong> La autoconservación está destinada al fracaso.</p>
            
```

`firstChild` devolvería de forma consistente el elemento `strong` en todos los navegadores actuales.

**Actualización del 8 de septiembre de 2007:** He recogido una explicación más extensa sobre el problema y una posible solución en [`childNodes` y el problema de los nodos de texto vacíos]
## `lastChild`

La propiedad `lastChild` funciona exactamente como `firstChild`, pero se refiere el último de los hijos de un elemento. Se aplican, por tanto, las mismas indicaciones anteriores.

## `nextSibling`

Gracias a `nextSibling`, lo que podemos seleccionar es el siguiente hermano de un elemento.

Se aplican las mismas limitaciones que para las dos propiedades anteriores.

## `previousSibling`

`previousSibling` funciona igual que `nextSibling`, pero selecciona el hermano anterior de un elemento.

Igual para sus limitaciones.

## `Añadir/Eliminar clases`

En Javascript, para cada elemento del DOM existe un mecanismo muy útil y sencillo para manipular los nombres de clases CSS que pueda tener ese elemento en un momento dado.

La propiedad en cuestión se llama "classList" y cuando la usas devuelve una colección de las clases que tiene un elemento. Esa colección tiene los métodos "add" y "remove", que te permiten añadir o quitar clases determinadas.

Es importante manejar las clases del elemento con la propiedad classList del DOM, porque hay que tener en cuenta que un elemento puede tener un número de clases determinado en cada momento. Si manipulas con Javascript directamente el atributo class de la etiqueta, corres el riesgo de quitar cualquier clase de CSS que exista en la actualidad. Por eso es que el método recomendado de manipular las clases es mediante classList.

El método de añadir clases CSS lo puedes invocar con cualquier número de clases separadas por parámetro. Aunque lo común es pasarle una única clase, puedes pasarle varias a la vez si lo necesitas.

```
document.getElementById('mi_elemento').classList.add('nueva_clase');
```

El método remove también permite eliminar cualquier número de clases que se deseen, pasando las cadenas de cada class de CSS, como parámetros individuales.

```
document.getElementById('mi_elemento').classList.remove('quitar_esta_clase', 'quitar_esta_clase_tambien');
```

## `jQuery`

En jQuery, puedes utilizar varios comandos o métodos para interactuar con el DOM. Algunos de los comandos más comunes son:
``` javascript

//$()` o `jQuery()`: Estos son los selectores principales que se utilizan para seleccionar elementos del DOM. Puedes pasar un selector CSS como argumento para seleccionar uno o varios elementos. Por ejemplo:

// Seleccionar un elemento por su ID
var elemento = $('#miElemento');

// Seleccionar todos los elementos con la clase 'miClase'
var elementos = $('.miClase');

// Seleccionar todos los elementos <p>
var parrafos = $('p');

//`.html()`: Este método se utiliza para obtener o establecer el contenido HTML de un elemento seleccionado. Por ejemplo:

// Obtener el contenido HTML de un elemento
var contenido = $('#miElemento').html();

// Establecer el contenido HTML de un elemento
$('#miElemento').html('<p>Nuevo contenido</p>');

//`.text()`: Similar a `.html()`, pero se utiliza para obtener o establecer el contenido de texto de un elemento.
// Obtener el contenido de texto de un elemento
var texto = $('#miElemento').text();

// Establecer el contenido de texto de un elemento
$('#miElemento').text('Nuevo texto');

//`.addClass()` y `.removeClass()`: Estos métodos se utilizan para agregar o quitar clases CSS de un elemento seleccionado.
// Agregar una clase a un elemento
$('#miElemento').addClass('miNuevaClase');

// Quitar una clase de un elemento
$('#miElemento').removeClass('miClaseExistente');

//`.on()`: Se utiliza para vincular eventos a elementos seleccionados. Puedes especificar el tipo de evento (por ejemplo, "click" o "change") y una función que se ejecutará cuando ocurra el evento.

// Vincular un evento 'click' a un elemento
$('#miElemento').on('click', function() {
    // Hacer algo cuando se hace clic en el elemento
});