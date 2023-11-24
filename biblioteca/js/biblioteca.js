// Escucha el evento cuando se carga completamente el contenido de la página
document.addEventListener("DOMContentLoaded", function () {
    // Obtiene referencias a elementos que se crearon
    const formularioPedido = document.getElementById("formularioPedido");
    const listaPedido = document.getElementById("listaPedido");
    const precioTotal = document.getElementById("precioTotal");
    const reiniciarPedidoBtn = document.getElementById("reiniciarPedido");
    let total = 0; // Variable para rastrear el total del pedido

    // Evita que el formulario se envíe cuando se presiona Enter
    formularioPedido.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    // Escucha el clic en el botón "Hacer Pedido"
    document.getElementById("agregarPedido").addEventListener("click", function () {
        // Obtiene los valores seleccionados y calcula el precio del libro
        const categoria = document.getElementById("seleccionarCategoria").value;
        const cantidadLibros = parseInt(document.getElementById("cantidadLibros").value);
        const precioLibro = calcularPrecioLibro(categoria) * cantidadLibros;
        const subtotal = precioLibro;

        // Crea un nuevo elemento de lista y lo agrega a la lista de pedidos
        const itemPedido = document.createElement("li");
        itemPedido.classList.add("itemPedido");
        itemPedido.innerHTML = `Categoría: ${categoria}, y la Cantidad fue de: ${cantidadLibros} libros`;

        listaPedido.appendChild(itemPedido);

        // Actualiza el total y muestra el precio total formateado
        total += subtotal;
        precioTotal.textContent = formatearPrecio(total);
    });

    // Escucha el clic en el botón "Hacer Otro Pedido"
    reiniciarPedidoBtn.addEventListener("click", function () {
        // Reinicia el pedido eliminando los elementos de la lista y restableciendo el total
        reiniciarPedido();
    });

    // Función para reiniciar el pedido
    function reiniciarPedido() {
        listaPedido.innerHTML = ""; // Elimina todos los elementos de la lista
        total = 0; // Reinicia el total
        precioTotal.textContent = formatearPrecio(total); // Actualiza el precio total en el DOM
    }

    // Función para calcular el precio del libro según la categoría
    function calcularPrecioLibro(categoria) {
        // Precios por categoría
        let precioTerror = 15000;
        let precioComedia = 12500;
        let precioFiccion = 18000;
        let precioAnime = 20000;
        let precioMisterio = 16500;

        // Utiliza un switch para devolver el precio según la categoría seleccionada
        switch (categoria) {
            case "terror":
                return precioTerror;
            case "comedia":
                return precioComedia;
            case "ficcion":
                return precioFiccion;
            case "anime":
                return precioAnime;
            case "misterio":
                return precioMisterio;
            default:
                throw new Error("Categoria no valida"); // Lanza un error si la categoría no es válida
        }
    }

    // Función para formatear el precio a la moneda colombiana
    function formatearPrecio(precio) {
        const precioFormateado = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(precio);
        return precioFormateado.replace('COP', ''); // Elimina la etiqueta de la moneda para mostrar solo el número formateado
    }
});
