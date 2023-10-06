//OBJECTO: Son cosas Abstractas de un atributo por medio de llaves.

const persona = {
    nombre: "JOSELUIS",
    edad: 21,
    sexo: "H",
    casado: false,
    telefonos: [5529179913, 5585789642, 5547996466],
    saludar: function saludar() {
        return "Hola"
    }
}
console.log(persona.edad); //21
console.log(persona.telefonos[1]); //El segundo telefono
console.log(persona.saludar()); //Para saludar en una funcion.

//Agregar un nuevo atributo.

persona.apellido = "Hernández, Garcés";
console.log(persona);

//Eliminar un atributo.

delete persona.saludar;
console.log(persona);