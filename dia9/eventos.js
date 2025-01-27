
// ========================
// Introducción a Eventos
// ========================

// Escuchar un evento y propagación de eventos
const clicks = document.getElementById("contador");
let count = 0;
clicks.addEventListener("click", (event) => {
    count++;
    document.getElementById("contador").textContent = count;
    console.log("Click número: ", count);
    // if (count >= 4) {   
    //     event.stopPropagation();   // al llegar a 4 clicks, detiene la propagación de eventos
    // }

}); // añadir true como ultimo argumento tras la función

let miSection = document.getElementsByTagName("section")[0];
let miP = document.getElementsByTagName("p")[1];
// contador es el elemento span, en la variable clicks

miSection.addEventListener("click", () => {
    console.log("Click en <section>");
}); // añadir true como ultimo argumento tras la función
miP.addEventListener("click", () => {
    console.log("Click en <p>");
}); // añadir true como ultimo argumento tras la función

// Aunque haya definido primero el evento del span, luego el del section y luego el del p,
// el evento del span se ejecuta primero, luego el del p y luego el del section. Esto es
// porque se ejecutan desde dentro hacia fuera, desde el elemento más interno al más externo.

// Usando true como siguiente argumento invierto el orden de ejecución de los eventos.
// Con stopPropagation se detiene la propagación de eventos.


// stopPropagation también funciona de fuera hacia adentro
const contenedor = document.getElementById("contenedor");
const innerElement = document.getElementById("inner-element");
innerElement.addEventListener("click", (event) => {
  console.log("Evento en el elemento interno.");
  event.stopPropagation(); // Detener propagación del evento
});
contenedor.addEventListener("click", () => {
  console.log("Evento en el contenedor.");
});

// Event: Detalles del evento
innerElement.addEventListener("click", (event) => {
  console.log("Detalles del evento:");
  console.log("Tipo de evento: ", event.type);
  console.log("Elemento objetivo: ", event.target);
  console.log("Elemento actual: ", event.currentTarget);
});

// removeEventListener: Quitar un evento
const logEvento = () => console.log("Evento registrado.");
innerElement.addEventListener("click", logEvento);  // creamos un listener sencillito

const eliminarEvento = () => {
    innerElement.removeEventListener("click", logEvento);
    console.log("Listener eliminado del elemento interno.");
  };
setTimeout(eliminarEvento, 5000); // quitar el listener después de 5 segundos

// ========================
// Lanzar Eventos
// ========================
const botonLanzarEvento = document.getElementById("lanzar-evento");

// Crear un evento personalizado
const eventoPersonalizado = new Event("miEvento");

botonLanzarEvento.addEventListener("miEvento", () => {
  console.log("¡Evento personalizado lanzado!");
});

botonLanzarEvento.addEventListener("click", () => {
  // Lanzar el evento personalizado
  botonLanzarEvento.dispatchEvent(eventoPersonalizado);
});

