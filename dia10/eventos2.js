// ===========================
// Eventos de Formularios
// ===========================

// Seleccionar formulario por su ID
const formulario = document.getElementById("formulario-ejemplo");

// Escuchar el evento submit para enviar el formulario
formulario.addEventListener("submit", function () {
  console.log("Formulario enviado con los siguientes datos:");
  console.log("Nombre: ", formulario.elements["nombre"].value);
  console.log("Email: ", formulario.elements["email"].value);
});

// Escuchar el evento reset para limpiar el formulario
formulario.addEventListener("reset", function () {
  console.log("Formulario reiniciado.");
});

// Cambiar valores de un campo de forma programática
formulario.elements["nombre"].value = "Valor predefinido";


// ===========================
// Propiedades y métodos de formularios
// ===========================

console.log("Action del formulario:", formulario.action);
console.log("Número de elementos:", formulario.length);
console.log("Elementos del formulario:", formulario.elements);

// ===========================
// Eventos del Ratón
// ===========================

const botonClick = document.getElementById("boton-click");

botonClick.addEventListener("click", () => console.log("Click simple detectado"));
botonClick.addEventListener("dblclick", () => console.log("Doble click detectado"));
botonClick.addEventListener("mousedown", () => console.log("Botón presionado"));
botonClick.addEventListener("mouseup", () => console.log("Botón liberado"));
botonClick.addEventListener("contextmenu", (e) => {
  e.preventDefault();   // elimina la acción del evento por defecto
  console.log("Menú contextual bloqueado.");
});
// Diferencias entre mouseover y mouseenter
botonClick.addEventListener("mouseover", () => console.log("mouseover: entra, incluye elementos hijos"));
botonClick.addEventListener("mouseout", () => console.log("mouseout: sale, incluye elementos hijos"));

const areaRaton = document.getElementById('area-raton');

areaRaton.addEventListener('mousemove', (e) => {
    areaRaton.textContent = `Posición del ratón: X=${e.offsetX}, Y=${e.offsetY}`;
});

areaRaton.addEventListener("mouseenter", () => console.log("Cursor entra en el area"));
areaRaton.addEventListener("mouseleave", () => console.log("Cursor sale del area"));
areaRaton.addEventListener("mousemove", () => console.log("Movimiento dentro del area"));

// Elementos coloreados
// TODO hacer en clase


// ===========================
// Eventos del Teclado
// ===========================

const inputTexto = document.getElementById("campo-teclado");

inputTexto.addEventListener("keypress", (evento) => console.log("Tecla presionada: ", evento.key));
inputTexto.addEventListener("keydown", (evento) => console.log("Tecla abajo: ", evento.key));
inputTexto.addEventListener("keyup", (evento) => console.log("Tecla liberada: ", evento.key));

// ===========================
// Eventos de arrastrar y soltar (drag & drop)
// ===========================

// Inicio del arrastre
const elementoDraggable = document.getElementById('elemento-draggable');
const areaDrop = document.getElementById('area-drop');

elementoDraggable.addEventListener('dragstart', () => {
    console.log("Arrastre iniciado.");
    elementoDraggable.style.opacity = '0.5';
});

elementoDraggable.addEventListener('dragend', () => {
    console.log("Arrastre finalizado.");
    elementoDraggable.style.opacity = '1';
});

areaDrop.addEventListener('dragover', (e) => {
  e.preventDefault();
  areaDrop.textContent = 'Elemento pasando por encima';
});

areaDrop.addEventListener('drop', () => {
  areaDrop.textContent = 'Elemento soltado';
});


// ===========================
// Eventos de reproducción multimedia
// ===========================
const video = document.getElementById("audio-ejemplo");

video.addEventListener("play", () => console.log("Reproducción iniciada."));
video.addEventListener("pause", () => console.log("Reproducción pausada."));
video.addEventListener("ended", () => console.log("Reproducción finalizada."));

// ===========================
// Eventos extra
// ===========================

// Evento de carga de la página
window.addEventListener("load", () => console.log("La página ha terminado de cargar."));

// Evento de scroll
window.addEventListener("scroll", () => console.log("Scroll detectado."));

// Evento de redimensionamiento
window.addEventListener("resize", () => console.log("Ventana redimensionada."));

// Evento del portapapeles
window.addEventListener("copy", () => console.log("Contenido copiado al portapapeles."));
window.addEventListener("paste", () => console.log("Contenido pegado desde el portapapeles."));
window.addEventListener("cut", () => console.log("Contenido cortado al portapapeles."));

// Ejemplo scroll
const botonScroll = document.getElementById('boton-scroll');
    botonScroll.addEventListener('click', () => {
      window.scrollTo({ top: 3000, behavior: 'smooth' });
});



// Ej1
/* 
Crea una rutina que no permita que el ratón se coloque encima de una caja 
azul de 100x100 px. Cada vez que el ratón intente colocarse 
encima, la posición de la caja debe cambiar aleatoriamente por la página.
*/
// Ej2
/*
Crea una aplicación que contenga un párrafo con mucho texto. 
Debajo del párrafo debe haber un botón por cada vocal.
Al pulsar sobre una vocal, esa vocal desaparecerá del texto.
*/