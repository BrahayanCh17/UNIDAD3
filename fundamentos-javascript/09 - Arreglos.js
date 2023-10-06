/*Arreglos*/

let calificaciones = [100, 85, 45, 76];
let arregloDiferentesTipo = ["Hola", 10, true, [1,2,3], function getNombre(){
    return "JOSELUIS"}] //Almacena cadenas, numeros, booleanos, y arreglos dentro de una arreglos y una funcion//

let arregloNumero = new Array(5);
let arregloLetras = new Array("a", "b", "c");

console.log("calificaciones", calificaciones);
console.log("arregloDiferentesTipo", arregloDiferentesTipo);
console.log("arregloNumero", arregloNumero);
console.log("arregloLetras", arregloLetras);

console.log(arregloDiferentesTipo[2]); //(true)
console.log(arregloDiferentesTipo[4]()); //(JOSELUIS)llamar a una funcion dentro de un arreglo.
console.log(arregloDiferentesTipo[3][1]);//(2)Arreglos multidimensionales.

calificaciones.push(90);//Aguarda el nuevo arreglo al final
console.log("calificaciones", calificaciones);

calificaciones.unshift(0);//Aguarda el nuevo arreglo al principio
console.log("calificaciones", calificaciones);

calificaciones.pop();//Elimina el ultimo elemento.
console.log("calificaciones", calificaciones);

calificaciones.shift()//Elimina el primer elemento
console.log("calificaciones", calificaciones);

let arregloLetrasCopias = arregloLetras; 
arregloLetrasCopias.pop();
console.log(arregloLetras, arregloLetrasCopias);

let arregloLetrasCopias2 = arregloLetras.slice();//Hacer copias de arreglos tipo slice
arregloLetrasCopias2.pop();
console.log(arregloLetrasCopias2, arregloLetras);

let arregloLetrasCopias3 = [...arregloLetras]//Hacer copias de arreglo tipo spread, esparce los arreglos.
arregloLetrasCopias3.pop();
console.log(arregloLetrasCopias3, arregloLetras);

console.table(calificaciones)








