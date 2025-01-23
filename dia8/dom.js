// Selección de elementos
console.log("=== Selección de elementos ===");

// Selección por ID
const titulo = document.getElementById("titulo");
console.log("Elemento seleccionado por ID:", titulo);

// Selección por clase con querySelector
// Las clases en CSS empiezan por . (punto)
const descripcion = document.querySelector(".descripcion");
console.log("Elemento seleccionado por clase (querySelector):", descripcion);

// // Selección de múltiples elementos con querySelectorAll
const elementos = document.querySelectorAll("ul > li.elemento");
console.log("Elementos seleccionados por clase (querySelectorAll):", elementos);

const elements = document.querySelectorAll("ul > li.element");
console.log("Elementos seleccionados por clase (querySelectorAll):", elements);


// Modificación de elementos

// Cambiar el texto de un elemento
titulo.textContent = "Nuevo Título Principal";
console.log("Nuevo texto del título:", titulo.textContent);

titulo.innerHTML = "<em>Nuevo Título Principal</em>";

// Cambiar el contenido HTML de un elemento
descripcion.innerHTML = "<strong>Descripción modificada</strong>";
console.log("Nuevo contenido HTML de la descripción:", descripcion.innerHTML);

// Modificar los atributos de un elemento
const entrada = document.getElementById("entrada");
entrada.setAttribute("placeholder", "Introduce un nuevo texto...");
console.log("Nuevo atributo 'placeholder' de la entrada:", entrada.getAttribute("placeholder"));

// ============================
// Ejemplo práctico: interacción con botones
// ============================

// Botón para cambiar contenido de los elementos de la lista
document.getElementById("boton-cambiar").addEventListener("click", () => {
    elementos.forEach((elemento, index) => {
        elemento.textContent = `Elemento modificado ${index + 1}`;
    });
    console.log("Elementos de la lista modificados.");
});

// Botón para resaltar elementos
document.getElementById("boton-resaltar").addEventListener("click", () => {
    elements.forEach((elemento) => {
        elemento.classList.add("resaltado");
    });
    console.log("Se añadieron clases de resaltado a los elementos.");
});

// Mostrar el texto introducido en el campo de entrada
entrada.addEventListener("input", () => {
    const resultado = document.getElementById("resultado");
    resultado.textContent = `Has escrito: ${entrada.value}`;
    console.log("Texto actual en el input:", entrada.value);
});

// Recorrido del DOM
// Acceder a los hijos de un elemento
let lista = document.getElementById("lista");
for(let i=0; i<lista.children.length; i++) {
    console.log("Elemento hijo:", lista.children[i]);
}

console.log(lista.nextSibling);         // este recorre el arbol html completo
console.log(lista.nextElementSibling);  // este recorre solo los elementos del arbol
console.log(lista.previousElementSibling);

