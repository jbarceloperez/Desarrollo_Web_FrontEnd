// document.write("Hola");

{
    let miLet = "Soy una variable let";
    var miVar = "Soy una variable var";
}

const MI_CONSTANTE = 27;



// console.log(miLet);
console.log(miVar);

let miCadena = "Cadena de ejemplo";
let miCadena2 = "muy guay";

console.log(miCadena + " " + miCadena2);

let miNumero = "19";

console.log(5 + Number("5"));

console.log(typeof(miNumero));

let miBooleano = true;

let miNula = null;

console.log(miCadena + " " + miNumero);


let mensaje = "Alerta!!!!";
alert(mensaje);



let miVariable = 5;
miVariable %= 4;

console.log(miVariable);


let checkearTipo = (5 !== "5");
console.log(checkearTipo);


miBooleano = false;

if (!miBooleano) {
    console.log("Se cumple la condición");
}
else {
    console.log("No se cumple la condición");
}

miVariable = 8;

switch (miVariable) {
    case 5:
        console.log("Mi variable vale 5!");
        break;

    case 8:
        console.log("Mi variable vale 8!");
        break;

    default:
        console.log("Mi variable vale ni idea");
        break;
}

let miIndice = 0;

do {
    miIndice++;
    console.log(miIndice);
} while(miIndice < 10)

miIndice = 0;

for (miIndice = 0; miIndice < 10; miIndice++)
{
    if (miIndice%2 != 0) continue;
    console.log(miIndice);
    if(miIndice == 7) break;
}






