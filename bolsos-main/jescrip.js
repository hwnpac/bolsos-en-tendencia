// Creamos un array para almacenar los productos en el carrito
let carrito = [];

// Función para actualizar la vista del carrito
function actualizarCarrito() {
    const listaCarrito = document.getElementById("carrito-lista");
    const totalElement = document.getElementById("total");
    listaCarrito.innerHTML = ""; // Limpiamos el carrito antes de actualizarlo
    let total = 0;

    // Recorrer los productos en el carrito y mostrarlos
    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(li);
        total += item.precio;
    });

    // Mostrar el total
    totalElement.textContent = total;
}

// Función para agregar productos al carrito
const botonesAgregar = document.querySelectorAll(".agregar");

botonesAgregar.forEach(boton => {
    boton.addEventListener("click", () => {
        const idProducto = boton.getAttribute("data-id");
        const nombreProducto = boton.getAttribute("data-nombre");
        const precioProducto = parseInt(boton.getAttribute("data-precio"));

        // Crear un objeto para el producto y agregarlo al carrito
        const producto = { id: idProducto, nombre: nombreProducto, precio: precioProducto };
        carrito.push(producto);

        // Actualizamos el carrito en la interfaz
        actualizarCarrito();
    });
});

// Función para manejar el proceso de compra
document.getElementById("comprar").addEventListener("click", () => {
    if (carrito.length > 0) {
        alert("¡Gracias por tu compra! En breve nos pondremos en contacto.");
        carrito = []; // Limpiamos el carrito después de la compra
        actualizarCarrito(); // Actualizamos la vista del carrito
    } else {
        alert("Tu carrito está vacío.");
    return;}
});
alert(`Compra realizada con éxito. Total pagado: $${total}`);

  // Reiniciar carrito
  carrito = [];
  total = 0;
  listaCarrito.innerHTML = "";
  totalElemento.textContent = total;
  
  
  