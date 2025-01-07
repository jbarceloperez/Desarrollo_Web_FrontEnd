// document.write("Código escrito desde el fichero mi_codigo.js");

console.log("Probando a loggear...");

// Comentario de línea única

/*
    Comentario
    de varias
    líneas
*/

//      VARIABLES

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
// console.log(miLet);

// realmente var no es una variable global, simplemente pertenece


// Modificar el valor de la variable

miVar = "Valor modificado";
console.log(miVar);


// También se pueden declarar constantes con const

const MI_CONSTANTE = "Esto es una constante";
console.log(MI_CONSTANTE);

// MI_CONSTANTE = "Ya no es constante?";


/*
    TIPOS DE VARIABLES
*/

let a = 2;

console.log(a>>1);
console.log(a<<1);


