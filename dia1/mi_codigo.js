// document.write("Código escrito desde el fichero mi_codigo.js");

/****************************************
 *******   REPASO DE JAVASCRIPT   *******
 ****************************************/

// el punto y coma final, aunque prescindible, es recomendado
console.log("[0] Probando a loggear...")

// Comentario de línea única

/*
    Comentario
    de varias
    líneas
*/

/********************************
 ****** DECLARAR VARIABLES ******
 ********************************/
console.log("\t[1] Declarar Variables");
/*
    Se pueden declarar con let y var
      - let -> ámbito local (de bloque o función)
      - var -> ámbito "global" (el contexto de ejecución)
*/

{
    let miLet = "Esto es una variable declarada con let";
    console.log(miLet);

    var miVar = "Esto es una variable declarada con var";
    console.log(miVar);
}

console.log(miVar);
// console.log(miLet);      // DA ERROR, let queda sólo en el ambito del bloque de código

// realmente var no es una variable global, simplemente pertenece al scope en el que se declara, ya que
// podrían declararse varias variables con el mismo nombre en distintos scopes y serían distintas


// Modificar el valor de la variable

miVar = "Valor modificado";
console.log(miVar);


// También se pueden declarar constantes con const

const MI_CONSTANTE = "Esto es una constante";
console.log(MI_CONSTANTE);

// MI_CONSTANTE = "Ya no es constante?";    // DA ERROR, no se puede modificar el valor de una constante


/********************************
 ****** TIPOS DE VARIABLES ******
 ********************************/
 console.log("\t[2] Tipos de Variables");

////////  CADENAS DE CARACTERES (STRING)

let miCadena1 = "Esta cadena";
let miCadena2 = "es de ejemplo";

// los strings se pueden concatenar con el operador +
console.log(miCadena1 + " sí " + miCadena2);

// en caso de querer usar caracteres reservados por el lenguaje en una cadena, hay que usar el caracter de escape: \
let miCadena3 = "Comillas dobles \", comillas simples \', salto de línea \n, tabulación \t, y el caracter de escape también escapa con \\";
console.log(miCadena3);

////////  TIPO NUMBER

// por debajo es un punto flotante, pero representa a cualquier número entero, decimal o exponencial
let miNumero = 19;
let miDecimal = 18.5;
let velocidadLuz = 3e8;  // m/s

// esto permite que se pueda operar entre ellos sin problema
console.log(miNumero + miDecimal + velocidadLuz);

// en JavaScript, existen dos valores peculiares para un lenguaje de programación:
// infinito:
console.log(miNumero / 0);  // al dividir entre 0 se obtiene infinito en vez de error

// Not a Number (NaN)
console.log(miNumero * "cadena de texto"); // no aplica, devuelve valor NaN

////////  TIPO BOOLEANO

let miBooleano; // puede tomar valor true o false

/**
 * VALORES BOOLEANOS DE DIFERENTES TIPOS DE DATOS
 *  - Number: 0 false, otro true
 *  - String: ""(cadena vacía) false, otro true
 *  - undefined y null: false
 *  - infinity: true
 *  - NaN: false
 */

//////// TIPOS UNDEFINED Y NULL

// representan la ausencia de valor