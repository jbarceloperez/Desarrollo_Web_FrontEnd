// Simular la preparación de un pedido
function prepararPedido() {
    return new Promise((resolve, reject) => {
        const tiempoPreparacion = Math.random() * 3000 + 2000; // Entre 2000 ms y 5000 ms
        
        setTimeout(() => {
            if (tiempoPreparacion > 4000) {
                reject("Error: Pedido no pudo ser preparado");
            }
            resolve("Pedido preparado en " + tiempoPreparacion.toFixed(0) + " ms");
        }, tiempoPreparacion);
    })
}

// Función principal para manejar el pedido
async function realizarPedido() {

    console.log("Pedido recibido. Preparando...");
    try {
        // Preparar el pedido
        const pedido = await prepararPedido();
        console.log(pedido);
    } catch (error) {
        console.error(error);
    }
    
}

// Llamada al flujo del pedido
realizarPedido();
