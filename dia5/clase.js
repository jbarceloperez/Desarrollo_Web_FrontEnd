import { error } from "console";
import { writeFile, readFile } from "fs";

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = "";
    };

    mostrarNombre = function () {
        return `${this.nombre} ${this.apellido}`;
    };
}

const javier = new Persona("Javier", "Barceló");
javier.email = "javier.barcelo@murciaeduca.es";

console.log(javier);

class Estudiante extends Persona {
    constructor(nombre, apellido, estudios) {
        super(nombre, apellido);
        this.estudios = estudios;
    }

    // método concreto de esta clase
    estudiar = function () {
        console.log(`Estoy estudiando`);
    }
}

const estudiante1 = new Estudiante("German", "Campaña", "DAW en el ISEN");

console.log(estudiante1.mostrarNombre());
estudiante1.estudiar();


//////////////// AGREGADOS

class Curso {
    constructor(nombre, year) {
        this.nombre = nombre;
        this.year = year;
    }
}

class Profesor extends Persona {
    constructor(nombre, apellido, cursos) {
        super(nombre, apellido);
        this.cursos = cursos;
    }

    listarCursos = function () {
        console.log("El profesor da los siguientes cursos:");
        this.cursos.forEach(curso => {
            console.log(` - ${curso.nombre}`);
        });
    }
}

const curso1 = new Curso("DAW", 2024);
const curso2 = new Curso("DAM", 2025);

const prof = new Profesor("Juan", "Gómez", [curso1, curso2]);

prof.listarCursos();


//////////////////////////////
console.log(javier);
console.log(prof);

Persona.prototype.saludar = function () {
    console.log("Hola, soy " + this.mostrarNombre());
};

javier.saludar();
prof.saludar();

String.prototype.toLowerCase = function () {
    console.log("Esto no deberias hacerlo");
}

let str = "CADENA DE TEXTO";

console.log(str.toLowerCase());


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

    cochesAJSON = function () {
        return JSON.stringify(this.coches);
    }

    JsonaCoches = function (jsonString) {
        const cochesData = JSON.parse(jsonString);
        this.coches = cochesData.map(coche => new Coche(coche.modelo, coche.color));
    }
}

const concesionario = new Concesionario("Concesionario de la media sala");

concesionario.agregarCoches(new Coche("Audi RS3", "Verde"));
concesionario.agregarCoches(new Coche("BMW M2", "Azul"));

console.log(concesionario);

const cochesString = concesionario.cochesAJSON();

console.log(cochesString);

writeFile("./coches.json", cochesString, (error) => {
    if (error) {
        console.error("Algo ha fallado", error);
    } else {
        console.log("Se ha guardado el fichero.")
    }
});

const nuevoConcesionario = new Concesionario("Otro concesionario");
nuevoConcesionario.JsonaCoches(cochesString);
console.log(nuevoConcesionario);

readFile("./clase.json", (error, data) => {
    if (error) {
        console.log("Error", error);
    } else {
        const datos = JSON.parse(data);
        console.log(datos);
    }
});