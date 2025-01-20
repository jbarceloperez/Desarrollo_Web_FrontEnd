// **Explicación de Expresiones Regulares en JavaScript**
// Las expresiones regulares son patrones que se utilizan para buscar coincidencias en cadenas de texto.

// Crear una expresión regular
// Para crear una expresión regular en JavaScript, se puede utilizar el constructor `RegExp` o la notación literal `/patrón/`.
let regex = new RegExp("Hola"); // Constructor RegExp
let regexLiteral = /Hola/; // Notación literal

// Para buscar coincidencias en una cadena de texto, se pueden utilizar los métodos `test()` y `exec()`.
let txt = "Hola mundo";
let res = regex.test(txt); // Devuelve true si encuentra una coincidencia
console.log(res); // true


// **1. Modificador `i`: Búsqueda sin diferenciar entre mayúsculas y minúsculas**
console.log("=== Modificador i ===");
let regexI = /hola/i; // Coincidirá con "hola", "Hola", "HOLA", etc.
console.log(regexI.test("Hola")); // true
console.log(regexI.test("hOLa")); // true
console.log(regexI.test("Adiós")); // false

// **2. Modificador `^`: Coincidir al inicio de la cadena**
console.log("\n=== Modificador ^ ===");
let regexStart = /^hola/; // Coincide si "hola" está al inicio de la cadena
console.log(regexStart.test("hola mundo")); // true
console.log(regexStart.test("mundo hola")); // false

// **3. Modificador `$`: Coincidir al final de la cadena**
console.log("\n=== Modificador $ ===");
let regexEnd = /mundo$/; // Coincide si "mundo" está al final de la cadena
console.log(regexEnd.test("hola mundo")); // true
console.log(regexEnd.test("mundo hola")); // false

// **4. Modificador `.`: Coincide con cualquier carácter (excepto nueva línea)**
console.log("\n=== Modificador . ===");
let regexDot = /h.l./; // Coincide con cualquier palabra que tenga 4 caracteres, donde el segundo y cuarto pueden ser cualquier cosa
console.log(regexDot.test("hola")); // true
console.log(regexDot.test("hilo")); // true
console.log(regexDot.test("haol")); // false

// **5. Modificador `[]`: Coincidir con cualquier carácter dentro del conjunto**
console.log("\n=== Modificador [] ===");
let regexSet = /h[aeiou]la/; // Coincide con "hala", "hela", "hila", etc.
console.log(regexSet.test("hola")); // true
console.log(regexSet.test("hula")); // true
console.log(regexSet.test("hala")); // true
console.log(regexSet.test("hpla")); // false

// **6. Modificador `[^expresion]`: Coincidir con cualquier carácter que NO esté en el conjunto**
console.log("\n=== Modificador [^expresion] ===");
let regexNegatedSet = /h[^aeiou]la/; // Coincide con "hla", "hpla", etc. (no hay vocal después de "h")
console.log(regexNegatedSet.test("hola")); // false
console.log(regexNegatedSet.test("hpla")); // true

// **7. Modificadores de Cardinalidad: `*`, `+`, `?` y {}**
console.log("\n=== Modificadores de cardinalidad ===");

// `*`: Coincide 0 o más veces
console.log("\n Modificador * ");
let regexAsterisk = /ho*/; // Coincide con "h", "ho", "hoo", etc.
console.log(regexAsterisk.test("h")); // true
console.log(regexAsterisk.test("hoooola")); // true
console.log(regexAsterisk.test("hola")); // true

// `+`: Coincide 1 o más veces
console.log("\n Modificador + ");
let regexPlus = /ho+/; // Coincide con "ho", "hoo", etc.
console.log(regexPlus.test("h")); // false
console.log(regexPlus.test("hoooola")); // true

// `?`: Coincide 0 o 1 vez
console.log("\n Modificador ? ");
let regexQuestion = /ho?/; // Coincide con "h" o "ho"
console.log(regexQuestion.test("hola")); // true
console.log(regexQuestion.test("h")); // true
console.log(regexQuestion.test("hooo")); // true (solo se toma la primera coincidencia)

// `{}`: Coincide un número determinado de veces
console.log("\n Modificador {} ");
let regexExacto = /a{2}/;   // Coincide con exactamente 2 apariciones de a
let regexAlMenos = /a{2,}/; // Coincide con al menos 2 apariciones de a
let regexEntre = /a{2,4}/;  // Coincide con al menos 2 y máximo 4 apariciones de a

console.log(regexExacto.test("Hola"));      // false
console.log(regexExacto.test("Holaaaaa"));  // true
console.log(regexAlMenos.test("Hola"));     // false
console.log(regexEntre.test("Holaa"));     // true

// **8. Paréntesis `()`: Agrupar partes de una expresión**
console.log("\n=== Modificador () ===");
let regexGroup = /(hola)+ mundo/; // Coincide con una o más repeticiones de "hola" seguidas de " mundo"
console.log(regexGroup.test("hola mundo")); // true
console.log(regexGroup.test("holaholahola mundo")); // true

// **9. Operador OR `|`: Coincidir con una u otra opción**
console.log("\n=== Operador | ===");
let regexOr = /gato|perro/; // Coincide con "gato" o "perro"
console.log(regexOr.test("Me gusta el gato")); // true
console.log(regexOr.test("Me gusta el perro")); // true
console.log(regexOr.test("Me gusta el pez")); // false

// **10. Método exec(): Buscar coincidencias**
console.log("\n=== Método exec() ===");
let regexExec = /hola/;
let texto = "Hola mundo, hola JavaScript.";
let resultado = regexExec.exec(texto); // Busca la primera coincidencia
console.log(resultado); // Devuelve un objeto con información sobre la coincidencia
// resultado.index: Posición donde comienza la coincidencia
// resultado.input: Texto original

// **Resumen del uso del método exec**
if (resultado) {
    console.log(`Se encontró "${resultado[0]}" en la posición ${resultado.index}`);
} else {
    console.log("No se encontró ninguna coincidencia.");
}

