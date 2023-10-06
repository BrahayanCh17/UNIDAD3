//callback
//Es una funcion que llama a otra funcion con parametros.

const obtenerNombre = nombre => nombre; //Ejecuta el paarametro de nombre.

const saludar = (nombre) => {
    return `Hola ${nombre}`    //Retorna el nombre.
}
console.log(saludar(obtenerNombre("Luis"))); //Imprimir una funcion en otra funcion.

const calificaciones = [100, 88, 75, 74, 68, 85] //Utilizacion de un arreglo.

calificaciones.forEach((valor, index, arr) =>{ //El forEach utiliza el valor, el indice y el arreglo donde se encuentra.
    console.log("valor", valor, "Index", index, "arr", arr);
});

console.log(calificaciones.filter((calificacion) => calificacion <=70)); //Recibe un predicado, el indice y el arreglo, nos retorna los elemento en un callback.

//Objecto global de javascript en el navegador: Window. o en la terminal global.

