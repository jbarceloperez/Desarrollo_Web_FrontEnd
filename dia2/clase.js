// ==============================
// 1. TRABAJANDO CON ARRAYS
// ==============================

// Creación de un array
console.log("=== ARRAYS ===");
let arrayEjemplo = [1, 2, 3, 4, 5]; // Creamos un array con valores iniciales
console.log("Array inicial:", arrayEjemplo);

// Agregar elementos al array
arrayEjemplo.push(6); // Agregamos un elemento al final
arrayEjemplo.unshift(0); // Agregamos un elemento al inicio
console.log("Array después de agregar elementos:", arrayEjemplo);

// Modificar elementos
arrayEjemplo[2] = 10; // Modificamos el tercer elemento (índice 2)
console.log("Array después de modificar un elemento:", arrayEjemplo);

// Eliminar elementos
arrayEjemplo.pop(); // Elimina el último elemento
arrayEjemplo.shift(); // Elimina el primer elemento
console.log("Array después de eliminar elementos:", arrayEjemplo);

// Recorrer un array
console.log("Recorriendo el array:");
arrayEjemplo.forEach((valor, indice) => {
    console.log(`Índice ${indice}: ${valor}`);
});

// Convertir el array a un Set
let setDesdeArray = new Set(arrayEjemplo);
console.log("Set creado desde el array:", setDesdeArray);

console.log("\n");

// ==============================
// 2. TRABAJANDO CON SETS
// ==============================

console.log("=== SETS ===");
// Creación de un Set
let setEjemplo = new Set([1, 2, 3, 4, 5]); // Creamos un Set con valores iniciales
console.log("Set inicial:", setEjemplo);

// Agregar elementos al Set
setEjemplo.add(6); // Agregamos un nuevo elemento
setEjemplo.add(3); // Intentamos agregar un elemento duplicado (no se añadirá)
console.log("Set después de agregar elementos:", setEjemplo);

// Eliminar elementos del Set
setEjemplo.delete(4); // Eliminamos un elemento
console.log("Set después de eliminar un elemento:", setEjemplo);

// Comprobar si un elemento existe en el Set
console.log("¿El Set contiene el número 2?", setEjemplo.has(2));
console.log("¿El Set contiene el número 4?", setEjemplo.has(4));

// Recorrer un Set
console.log("Recorriendo el Set:");
setEjemplo.forEach((valor) => {
    console.log(`Valor: ${valor}`);
});

// Convertir el Set a un Array
let arrayDesdeSet = [...setEjemplo];
console.log("Array creado desde el Set:", arrayDesdeSet);

console.log("\n");

// ==============================
// 3. TRABAJANDO CON MAPS
// ==============================

console.log("=== MAPS ===");
// Creación de un Map
let mapEjemplo = new Map([
    ["nombre", "Juan"],
    ["edad", 30],
    ["pais", "España"]
]); // Creamos un Map con pares clave-valor
console.log("Map inicial:", mapEjemplo);

// Agregar elementos al Map
mapEjemplo.set("profesion", "Desarrollador"); // Agregamos una nueva clave-valor
console.log("Map después de agregar un elemento:", mapEjemplo);

// Modificar elementos en el Map
mapEjemplo.set("edad", 31); // Actualizamos el valor de una clave existente
console.log("Map después de modificar un elemento:", mapEjemplo);

// Eliminar elementos del Map
mapEjemplo.delete("pais"); // Eliminamos una clave-valor
console.log("Map después de eliminar un elemento:", mapEjemplo);

// Comprobar si una clave existe en el Map
console.log("¿El Map contiene la clave 'nombre'?", mapEjemplo.has("nombre"));
console.log("¿El Map contiene la clave 'pais'?", mapEjemplo.has("pais"));

// Recorrer un Map
console.log("Recorriendo el Map:");
mapEjemplo.forEach((valor, clave) => {
    console.log(`Clave: ${clave}, Valor: ${valor}`);
});

// Convertir un Map a un Array
let arrayDesdeMap = Array.from(mapEjemplo);
console.log("Array creado desde el Map:", arrayDesdeMap);

console.log("\n");

// ==============================
// CONVERSIONES ENTRE ESTRUCTURAS
// ==============================

console.log("=== CONVERSIONES ===");
// Array a Set
const nuevoSet = new Set([1, 2, 3, 4, 4, 5]); // Duplicados serán eliminados
console.log("Set desde un Array con duplicados:", nuevoSet);

// Set a Array
const nuevoArray = Array.from(nuevoSet);
console.log("Array desde un Set:", nuevoArray);

// Array a Map
const nuevoMap = new Map([
    [1, "uno"],
    [2, "dos"],
    [3, "tres"]
]);
console.log("Map creado desde un array de pares clave-valor:", nuevoMap);

// Map a Array
const arrayDesdeNuevoMap = Array.from(nuevoMap);
console.log("Array desde un Map:", arrayDesdeNuevoMap);

console.log("\n=== FIN ===");
