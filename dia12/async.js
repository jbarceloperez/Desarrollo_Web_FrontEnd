let palabras = document.querySelectorAll(".palabra");
let animarPalabras = (animar) => {
    setTimeout(() => {
        animar(palabras[0]);
        setTimeout(() => {
            animar(palabras[1]);
            setTimeout(() => {
                animar(palabras[2]);
            }, 1000);
        }, 1000);
    }, 1000);
}
let animar = (palabra) => {
   palabra.classList.add("animar");
}
animarPalabras(animar);