import { error } from "console";
import { writeFile, readFile } from "fs";

// Crear clase a partir de la palabra class
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;   // this hace referencia al objeto que se está creando
        this.apellido = apellido;
        this.email = "";    // Se puede inicializar con un valor por defecto
    };

    mostrarNombre = function () {   // Se puede definir una función dentro de la clase
        return `${this.nombre} ${this.apellido}`;
    };
}

// Crear un objeto a partir de la clase
const javier = new Persona("Javier", "Barceló");
javier.email = "javier.barcelo@murciaeduca.es"; // Se puede modificar un atributo del objeto

console.log(javier);

// Crear una clase que herede de otra
class Estudiante extends Persona {
    constructor(nombre, apellido, estudios) {
        super(nombre, apellido);    // Llamar al constructor de la clase padre
        this.estudios = estudios;   // Añadir atributos propios de la clase hija
    }

    // método concreto de esta clase
    estudiar = function () {
        console.log(`Estoy estudiando`);
    }
}

// Crear un objeto de la clase hija
const estudiante1 = new Estudiante("German", "Campaña", "DAW en el ISEN");

// Acceder a los métodos de la clase padre y de la hija
console.log(estudiante1.mostrarNombre());
estudiante1.estudiar();


//////////////// AGREGADOS

class Curso {
    constructor(nombre, year) {
        this.nombre = nombre;
        this.year = year;
    }
}

// Crear una clase que contiene un array de objetos de otra clase
class Profesor extends Persona {
    constructor(nombre, apellido, cursos) {
        super(nombre, apellido);
        this.cursos = cursos;
    }

    listarCursos = function () {    
        console.log("El profesor da los siguientes cursos:");
        this.cursos.forEach(curso => {  // Recorrer el array de cursos con forEach
            console.log(` - ${curso.nombre}`);
        });
    }
}

const curso1 = new Curso("DAW", 2024);
const curso2 = new Curso("DAM", 2025);
// Crear un objeto de la clase Profesor con un array de cursos
const prof = new Profesor("Juan", "Gómez", [curso1, curso2]);

prof.listarCursos();


//////////////////////////////
console.log(javier);
console.log(prof);

// Modificar el prototipo de una clase para añadir un método a todas las instancias de la clase
Persona.prototype.saludar = function () {
    console.log("Hola, soy " + this.mostrarNombre());
};
// Aunque el método se añade después de crear el objeto, se puede utilizar igualmente
javier.saludar();
prof.saludar();

// Modificar el prototipo de una clase propia del lenguaje para añadir o modificar métodos
String.prototype.toLowerCase = function () {
    console.log("Esto no deberias hacerlo");
}

let str = "CADENA DE TEXTO";
console.log(str.toLowerCase());     // Se ejecuta el método modificado en vez del original


/////////////////////
// JSON

class Coche {
    constructor(modelo, color) {
        this.modelo = modelo;
        this.color = color;
    }
}

class Concesionario {
    constructor(nombre) {
        this.nombre = nombre;
        this.coches = [];
    }

    agregarCoches = function (coche) {
        this.coches.push(coche);
    }
    // Convertir un array de objetos a un string JSON
    cochesAJSON = function () {
        return JSON.stringify(this.coches);
    }
    // Convertir un string JSON a un array de objetos
    jsonACoches = function (jsonString) {
        const cochesData = JSON.parse(jsonString);
        this.coches = cochesData.map(coche => new Coche(coche.modelo, coche.color));    // Crea objetos Coche a partir de los datos, si no crearía objetos genéricos Object
    }
}

const concesionario = new Concesionario("Concesionario de la media sala");
concesionario.agregarCoches(new Coche("Audi RS3", "Verde"));
concesionario.agregarCoches(new Coche("BMW M2", "Azul"));

console.log(concesionario);

const cochesString = concesionario.cochesAJSON();

console.log(cochesString);

// Guardar el string JSON en un fichero
writeFile("./coches.json", cochesString, (error) => {
    if (error) {
        console.error("Algo ha fallado", error);
    } else {
        console.log("Se ha guardado el fichero.")
    }
});

const nuevoConcesionario = new Concesionario("Otro concesionario");
nuevoConcesionario.jsonACoches(cochesString);
console.log(nuevoConcesionario);

// Leer el contenido de un fichero JSON
readFile("./clase.json", (error, data) => {
    if (error) {
        console.log("Error", error);
    } else {
        const datos = JSON.parse(data);
        console.log(datos);
    }
});