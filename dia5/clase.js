import { writeFile, readFile } from "fs";

// Creación de objetos a partir de constructores

// function Persona(nombre, apellido) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.direccion = "";
//     this.email = "";
//     this.mostrarNombre = function () {
//       return this.nombre + " " + this.apellido;
//     };
// }

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = "";
        this.email = "";
    }
    mostrarNombre = function () {
        return this.nombre + " " + this.apellido;
    };
}

const javier = new Persona("Javier", "Barceló Pérez");
javier.email = "javier.barcelo@murciaeduca.es"
console.log(javier);  
const maria = new Persona("María", "González Herrero");
console.log(maria);


class Estudiante extends Persona {
    constructor(nombre, apellido, estudios) {
        super(nombre, apellido); // Llamamos al constructor de la clase base con super()
        this.estudios = estudios; // Nueva propiedad específica de Estudiante
    }

    // Método adicional
    estudiar() {
        console.log(`${this.nombre} está estudiando ${this.estudios}.`);
    }
}

// Crear instancia de la clase Estudiante
const estudiante1 = new Estudiante("Ana", "García", "Desarrollo Aplicaciones WEB");

estudiante1.mostrarNombre();    // Accede a los métodos de la clase padre
estudiante1.estudiar();         // y de la clase del objeto.

// ==============================
// 4. AGREGADOS DE OBJETOS
// ==============================
// Un objeto puede contener otros objetos como propiedades.

class Curso {
    constructor(nombre, duracion) {
        this.nombre = nombre;
        this.duracion = duracion;
    }
}

class Profesor extends Persona{
    constructor(nombre, apellidos, cursos = []) {
        super(nombre, apellidos)
        this.cursos = cursos; // Array de objetos Curso
    }

    // Método para listar los cursos que enseña el profesor
    listarCursos() {
        console.log(`El profesor ${this.nombre} enseña los siguientes cursos:`);
        this.cursos.forEach(curso => {
            console.log(`- ${curso.nombre} (${curso.duracion} horas)`);
        });
    }
}

// Crear algunos cursos
const curso1 = new Curso("JavaScript Básico", 20);
const curso2 = new Curso("Node.js", 15);

// Crear un profesor con los cursos
const profesor = new Profesor("Carlos", "Martínez", [curso1, curso2]);

profesor.listarCursos();
// El profesor Carlos enseña los siguientes cursos:
// - JavaScript Básico (20 horas)
// - Node.js (15 horas)

// ==============================
// 5. MODIFICACIÓN DEL PROTOTIPO
// ==============================
// Podemos añadir métodos al prototipo de una clase para que todas sus instancias los tengan.

Persona.prototype.despedirse = function () {
    console.log(`Adiós, mi nombre es ${this.nombre}.`);
};

javier.despedirse(); // Adiós, mi nombre es Javier.
maria.despedirse(); // Adiós, mi nombre es María.

// ==============================
// 6. CONVERSIÓN A JSON Y RESTAURACIÓN DESDE JSON
// ==============================
// Métodos para trabajar con JSON: JSON.stringify() y JSON.parse().

class Coche {
    constructor(modelo, color) {
        this.modelo = modelo;
        this.color = color;
    }
}

class Concesionario {
    constructor(nombre) {
        this.nombre = nombre;
        this.coches = []; // Array de objetos Coche
    }

    agregarCoche(coche) {
        this.coches.push(coche);
    }

    convertirAJSON() {
        return JSON.stringify(this.coches, null, 4); // Convertir a JSON
    }

    cargarDesdeJSON(jsonString) {
        const cochesData = JSON.parse(jsonString); // Parsear JSON
        this.coches = cochesData.map(coche => new Coche(coche.modelo, coche.color));
    }
}

// Crear un concesionario y agregar coches
const concesionario1 = new Concesionario("Concesionario Audi");
concesionario1.agregarCoche(new Coche("Audi Q3", "Azul"));
concesionario1.agregarCoche(new Coche("Audi A5", "Blanco"));

// Convertir a JSON
const concesJSON = concesionario1.convertirAJSON();
console.log(concesJSON);

// Cargar desde JSON
const nuevoConcesionario = new Concesionario("Nuevo Concesionario");
nuevoConcesionario.cargarDesdeJSON(concesJSON);
console.log(nuevoConcesionario);


// Guardar en un fichero JSON
writeFile("./clase.json", concesJSON, (error) => {
    if (error) {
        console.error("Error al guardar el archivo JSON:", error);
    } else {
        console.log("Archivo JSON guardado correctamente.");
    }
});


readFile('./clase.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    // Convertir el contenido JSON en un objeto de JavaScript
    const datos = JSON.parse(data);

    // Usar los datos importados
    console.log(datos);     
    console.log(datos.modelo);    
});




