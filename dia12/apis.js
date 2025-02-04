// =============================================
// API Web Storage
// =============================================
/**
 * La API Web Storage permite almacenar pares clave-valor en el navegador.
 * Existen dos tipos de almacenamiento:
 * 
 * 1. `localStorage`: Almacenamiento persistente, disponible incluso si el usuario cierra el navegador.
 * 2. `sessionStorage`: Almacenamiento temporal que dura solo mientras la pestaña del navegador está abierta.
 *
 * Los objetos `localStorage` y `sessionStorage` tienen los mismos métodos:
 *
 * - `setItem(clave, valor)`: Guarda un valor asociado a una clave.
 * - `getItem(clave)`: Recupera el valor asociado a una clave.
 * - `removeItem(clave)`: Elimina una clave y su valor.
 * - `clear()`: Limpia todos los datos almacenados.
 * - `length`: Devuelve la cantidad de pares clave-valor almacenados.
 */

// =============================================
// Ejemplo 1: Guardar y leer datos con localStorage
// =============================================
console.log("===== Ejemplo 1: localStorage =====");

// Guardar datos en localStorage
localStorage.setItem('nombre', 'Juan');
localStorage.setItem('edad', '25');

// Leer datos
const nombre = localStorage.getItem('nombre');
const edad = localStorage.getItem('edad');

console.log(`Nombre: ${nombre}, Edad: ${edad}`); // Nombre: Juan, Edad: 25

// Guardar objeto como string JSON
const preferencias = {
    tema: 'oscuro',
    notificaciones: true
};

localStorage.setItem('preferencias', JSON.stringify(preferencias));

// Leer y convertir de nuevo a objeto
const prefsGuardadas = JSON.parse(localStorage.getItem('preferencias'));
console.log(`Tema: ${prefsGuardadas.tema}, Notificaciones: ${prefsGuardadas.notificaciones}`);


// =============================================
// Ejemplo 2: Eliminar elementos y limpiar
// =============================================
console.log("===== Ejemplo 2: Remover y Limpiar =====");

// Eliminar un elemento específico
localStorage.removeItem('edad');
console.log(`Edad tras eliminar: ${localStorage.getItem('edad')}`); // null

// Limpiar todo el almacenamiento
localStorage.clear();
console.log(`Número de elementos tras clear(): ${localStorage.length}`); // 0

// =============================================
// Ejemplo 3: Uso de sessionStorage
// =============================================
console.log("===== Ejemplo 3: sessionStorage =====");

// sessionStorage.setItem('usuario', 'María');
console.log(`Usuario en sesión: ${sessionStorage.getItem('usuario')}`); // María

// Si cerramos la pestaña, la información desaparece.

// =============================================
// API Geolocation
// =============================================

// Verificación de compatibilidad
if (navigator.geolocation) {    // devuelve null si no es compatible
    console.log("Geolocalización disponible en este navegador.");
  } else {
    console.log("La geolocalización no está disponible en este navegador.");
  }
  
  // Obtener posición actual en un momento
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Posición obtenida:");
      console.log("Latitud:", position.coords.latitude);
      console.log("Longitud:", position.coords.longitude);
      console.log("Precisión:", position.coords.accuracy, "metros");
    }
  );
     
  // Mostrar información del objeto Position
    /**
     * coords.latitude: Latitud de la posición (grados decimales).
     * coords.longitude: Longitud de la posición (grados decimales).
     * coords.accuracy: Precisión estimada en metros.
     * coords.altitude: Altitud del dispositivo (si está disponible).
     * coords.altitudeAccuracy: Precisión de la altitud (si está disponible).
     * coords.heading: Dirección del movimiento del dispositivo (si está disponible).
     * coords.speed: Velocidad del dispositivo en metros/segundo (si está disponible).     
     * 
     */
    function showPosition(position) {
        const { latitude, longitude, accuracy } = position.coords;
        console.log(`Latitud: ${latitude}, Longitud: ${longitude}, Precisión: ${accuracy} metros.`);
    }

  /** 
   * El segundo parámetro de getCurrentPosition recibe un objeto PositionError.
   * Errores posibles:
   * 1: PERMISSION_DENIED: El usuario denegó el acceso a la ubicación.
   * 2: POSITION_UNAVAILABLE: No se pudo determinar la ubicación.
   * 3: TIMEOUT: La solicitud de ubicación tardó demasiado tiempo.
   */
    navigator.geolocation.getCurrentPosition(
        showPosition,
        (error) => {
          switch (error.code) {
            case 1:
              console.error("Permiso denegado para la ubicación.");
              break;
            case 2:
              console.error("No se puede determinar la posición.");
              break;
            case 3:
              console.error("Tiempo de espera agotado al obtener la ubicación.");
              break;
            default:
              console.error("Error desconocido:", error);
          }
        }
      );
  
    
  // Seguimiento en tiempo real con la función watchPosition()
  const watchId = navigator.geolocation.watchPosition(
    (position) => {
      console.log(`Nueva posición: Latitud: ${position.coords.latitude}, Longitud: ${position.coords.longitude}`);
    }
  );
  
  // Detener el seguimiento
  setTimeout(() => {
    navigator.geolocation.clearWatch(watchId);
    console.log("Seguimiento de posición detenido.");
  }, 10000);
  


// =============================================
// API Notification
// =============================================

// Comprobación de compatibilidad con el navegador
if (!('Notification' in window)) {
    console.error("Las notificaciones no son compatibles con este navegador.");
  } else {
    console.log("Las notificaciones son compatibles.");
  }
  
  // Solicitud de permisos para mostrar notificaciones
  function solicitarPermiso() {
    Notification.requestPermission().then((permiso) => {
      if (permiso === "granted") {
        console.log("Permiso concedido para mostrar notificaciones.");
        mostrarNotificacion("Permiso concedido", "Ahora podemos enviarte notificaciones.");
      } else {
        console.warn("Permiso denegado o cerrado.");
      }
    });
  }
  
  // Función para mostrar una notificación básica
  function mostrarNotificacion(titulo, cuerpo) {
    if (Notification.permission === "granted") {
      const opciones = {
        body: cuerpo,
        icon: "https://via.placeholder.com/100" // Icono opcional para la notificación
      };
      const notificacion = new Notification(titulo, opciones);
  
      // Eventos asociados a la notificación
      notificacion.onclick = () => {
        console.log("La notificación fue clicada.");
      };
  
      notificacion.onclose = () => {
        console.log("La notificación se cerró.");
      };
  
      setTimeout(() => notificacion.close(), 5000); // Cierra la notificación tras 5 segundos
    } else {
      console.warn("Permiso para notificaciones no concedido.");
    }
  }
  
  // Crear y personalizar varias notificaciones
  function mostrarNotificacionesVariadas() {
    mostrarNotificacion("Bienvenido", "Gracias por visitar nuestro sitio web.");
    setTimeout(() => {
      mostrarNotificacion("Actualización", "Hay nuevas noticias disponibles.");
    }, 3000);
  }
  
  // Ejemplo: solicitar permiso y mostrar notificaciones secuenciales
  solicitarPermiso();
  mostrarNotificacionesVariadas();
  


//   // APIs externas: Google Maps

//   let latlng = new google.maps.LatLng(
//     position.coords.latitude,
//     position.coords.longitude,
//   );

//   let myOptions = {
//     zoom: 8,
//     center: latlng,
//     mapTypeId: google.maps.MapTypeId.TERRAIN,
//     disableDefaultUI: true,
//   };
  
//   let map = new google.maps.Map(document.querySelector("#map_canvas"), myOptions);




  
  

