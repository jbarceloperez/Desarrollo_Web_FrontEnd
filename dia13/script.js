
/*
En JavaScript, el código generalmente se ejecuta de forma secuencial y bloqueante.
Esto significa que si una tarea toma mucho tiempo, el código posterior no se ejecuta hasta que esa tarea termina.
A continuación, mostramos un ejemplo de una función bloqueante.
*/

function funcionBloqueante() {
    const inicio = Date.now();
    let tiempo = 0;
    while (tiempo < 3000) { // Bucle que "bloquea" durante 3 segundos
        tiempo = Date.now() - inicio;
    }
    console.log("La función bloqueante ha terminado.");
}

console.log("Inicio del código.");
funcionBloqueante();
console.log("Esto no se muestra hasta que la función bloqueante termina.");

/*
En el ejemplo anterior, la función bloqueante detiene el flujo del programa,
evita que el usuario interactúe y no permite que otras tareas continúen hasta que finaliza.
Esto es ineficiente y debe evitarse.
*/

// ========================================
// SOLUCIÓN: USO DE setTimeout PARA ASINCRONÍA
// ========================================

/*
En lugar de bloquear el código, podemos usar funciones asíncronas, como `setTimeout`,
para ejecutar tareas después de un periodo de tiempo sin bloquear la ejecución.
*/

function funcionAsincrona() {
    setTimeout(() => {
        console.log("La función asíncrona ha terminado.");
    }, 3000); // Ejecuta el código después de 3 segundos
}

console.log("Inicio del código.");
funcionAsincrona();
console.log("Esto se muestra inmediatamente, sin esperar los 3 segundos.");

/*
En este caso, `setTimeout` permite continuar con la ejecución del código principal,
mientras la tarea de 3 segundos se ejecuta en segundo plano.
*/

// ============================
// USO DE CALLBACKS
// ============================

/*
Los callbacks son funciones que se pasan como parámetros a otras funciones y se ejecutan
cuando una tarea asíncrona ha finalizado.
*/

function realizarTarea(tiempo, callback) {
    setTimeout(() => {
        console.log(`Tarea realizada en ${tiempo} ms`);
        callback(); // Llamada al callback una vez que la tarea ha terminado
    }, tiempo);
}

console.log("Inicio de tareas");
realizarTarea(1000, () => {
    console.log("Primera tarea completada");
    realizarTarea(2000, () => {
        console.log("Segunda tarea completada");
    });
});

/*
Este patrón permite manejar tareas asíncronas de manera secuencial.
Cuando la primera tarea termina, se ejecuta el callback para la segunda tarea.
*/

// =============================
// CALLBACK HELL (Infierno de Callbacks)
// =============================

/*
El "callback hell" ocurre cuando hay demasiados callbacks anidados,
lo que hace que el código sea difícil de leer y mantener.
*/

console.log("Inicio de tareas anidadas");
realizarTarea(1000, () => {
    console.log("Primera tarea completada");
    realizarTarea(1000, () => {
        console.log("Segunda tarea completada");
        realizarTarea(1000, () => {
            console.log("Tercera tarea completada");
            realizarTarea(1000, () => {
                console.log("Cuarta tarea completada");
            });
        });
    });
});

/*
Este código es difícil de leer y propenso a errores.
Para resolver este problema, se introdujeron las Promesas y posteriormente async/await.
Pero primero es importante entender por qué los callbacks pueden ser problemáticos.
*/

// Nuevo concepto: PROMESAS

/*
Una **Promesa (Promise)** en JavaScript representa una operación que aún no se ha completado,
pero se espera que lo haga en el futuro. Una promesa tiene tres posibles estados:
- `pending` (pendiente)
- `fulfilled` (cumplida)
- `rejected` (rechazada)
*/

console.log(new Promise(() => {})); // Promise pendiente

// ===============================
// CREACIÓN BÁSICA DE UNA PROMESA
// ===============================

/*
Creamos una Promesa que imita el comportamiento del callback hell del ejemplo anterior.
Una promesa recibe una función con dos argumentos: `resolve` y `reject`.
- `resolve` se llama cuando la operación es exitosa.
- `reject` se llama cuando hay un error.
*/

function tareaAsincrona(tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Tarea completada en ${tiempo} ms`);
            resolve(); // Llamamos a `resolve` cuando la tarea termina
        }, tiempo);
    });
}

// ===============================
// USO DE PROMESAS PARA EVITAR CALLBACK HELL
// ===============================

console.log("Inicio de tareas con promesas");

tareaAsincrona(1000)
    .then(() => tareaAsincrona(1000))
    .then(() => tareaAsincrona(1000))
    .then(() => tareaAsincrona(1000))
    .then(() => console.log("Todas las tareas completadas"))
    .catch((error) => console.error("Error:", error));

/*
En este ejemplo, cada tarea se encadena usando `then()`, lo que permite
una estructura de código mucho más legible y mantenible.
Si ocurre algún error, `catch()` lo captura.
*/
