export class DividirPor0Exception extends Error {
    constructor(mensaje) {
        super(mensaje);                      // Llama al constructor de Error
        this.name = "DividirPor0Exception";  // Personaliza el nombre del error
    }
}

export class ValidacionException extends Error {
    constructor(mensaje) {
        super(mensaje);                      
        this.name = "ValidacionException";
    }
}

