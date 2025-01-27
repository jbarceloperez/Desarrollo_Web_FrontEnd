// ========================
// Manipulación de Atributos
// ========================
const titulo = document.getElementById("titulo-principal");

// hasAttribute: Comprueba si el elemento tiene un atributo
console.log("¿Tiene el atributo 'data-curso'? ", titulo.hasAttribute("data-curso"));

// getAttribute: Obtiene el valor de un atributo
const dataCurso = titulo.getAttribute("data-curso");
console.log("Valor del atributo 'data-curso': ", dataCurso);

// setAttribute: Modifica o agrega un atributo
titulo.setAttribute("data-version", "1.0");
console.log("Atributo 'data-version' agregado con valor: ", titulo.getAttribute("data-version"));

// removeAttribute: Elimina un atributo
titulo.removeAttribute("data-curso");
console.log("¿Atributo 'data-curso' eliminado?: ", !titulo.hasAttribute("data-curso"));

// ========================
// Manipulación de Estilos y Propiedades CSS
// ========================
const botonEstilos = document.getElementById("boton-estilos");
botonEstilos.addEventListener("click", () => {
  // Cambiar estilo directamente
  titulo.style.fontSize = "3rem";
  titulo.style.textTransform = "uppercase";

  // Usar la lista de estilos classList y sus métodos
  if (!titulo.classList.contains("highlight")) {
    titulo.classList.add("highlight"); // Agregar una clase
    console.log("Clase 'highlight' agregada al título.");
  } else {
    titulo.classList.remove("highlight"); // Eliminar una clase
    console.log("Clase 'highlight' eliminada del título.");
  }

  console.log("Estilos CSS modificados.");
});

// ========================
// Manipulación de Cookies
// ========================

// Crear una cookie
document.cookie = "usuario=Estudiante; max-age=60; path=/";
document.cookie = "idioma=es; expires=Fri, 31 Dec 2021 23:59:59 GMT";
document.cookie = "tema=claro";

const botonCookies = document.getElementById("boton-cookies");
botonCookies.addEventListener("click", () => {
  // Modificar una cookie
  document.cookie = "usuario=Estudiante; max-age=3600; path=/";
  console.log("Cookie creada: ", document.cookie);

  // Leer las cookies actuales. Devuelve una cadena con todas las cookies separadas por ; donde cada cookie es un par clave=valor
  const cookies = document.cookie;
  console.log("Cookies actuales: ", cookies);

  // Borrar una cookie
  document.cookie = "usuario=; max-age=0; path=/";
  console.log("Cookie 'usuario' eliminada.");
});

// Ejercicio cookie count


