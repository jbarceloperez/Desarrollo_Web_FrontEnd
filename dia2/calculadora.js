
function calculadora() {
    // Pedimos al usuario el primer número
    let numero1 = prompt("Introduce el primer número:");
    if (typeof(numero1) != "Number") {
        alert("El valor introducido no es un número válido.");
        return;
    }

    // Pedimos al usuario el símbolo de la operación
    let operacion = prompt("Introduce la operación que deseas realizar (+, -, *, /, ^, %):");

    // Validamos que se haya ingresado una operación válida
    if (!["+", "-", "*", "/", "^", "%"].includes(operacion)) {
        alert("Operación inválida. Por favor ingresa uno de los siguientes símbolos: +, -, *, /, ^, %.");
        return;
    }

    // Pedimos al usuario el segundo número
    let numero2 = prompt("Introduce el segundo número:");
    if (typeof(numero1) != "Number") {
        alert("El valor introducido no es un número válido.");
        return;
    }

    // Procesamos la operación seleccionada
    let resultado;
    switch (operacion) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            if (numero2 === 0) {
                alert("Error: No se puede dividir entre 0.");
                return;
            }
            resultado = numero1 / numero2;
            break;
        case "^":
            resultado = numero1 ** numero2;
            break;
        case "%":
            resultado = numero1 % numero2;
            break;
        default:
            alert("Ha ocurrido un error inesperado.");
            return;
    }

    // Mostramos el resultado en un mensaje de alerta
    alert(`El resultado de ${numero1} ${operacion} ${numero2} es: ${resultado}`);
}

// Ejecutamos la calculadora
calculadora();
