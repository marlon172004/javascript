
document.addEventListener("DOMContentLoaded", function () {

    //  Obtiene el elemento del formulario de pedidos por su ID
    const orderForm = document.getElementById("order-form");

    // Obtiene el elemento del resumen de pedido por su ID
    const orderSummary = document.getElementById("order-summary");

    // Obtiene el elemento del precio total por su ID
    const totalPrice = document.getElementById("total-price");

    // Inicializa una variable llamada 'total' con un valor de 0
    let total = 0;

    // Agrega un "escuchador de eventos" al formulario de pedidos que previene su envío
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    // Agrega un "escuchador de eventos" al botón que se ejecuta al hacer clic
    document.getElementById("add-to-order").addEventListener("click", function () {
        // Obtiene el valor seleccionado en el campo 'select-dish' (plato) y su cantidad
        const dish = document.getElementById("select-dish").value;
        const dishQuantity = parseInt(document.getElementById("dish-quantity").value);

        // Obtiene el valor seleccionado en el campo 'select-drink' (bebida) y su cantidad
        const drink = document.getElementById("select-drink").value;
        const drinkQuantity = parseInt(document.getElementById("drink-quantity").value);

        // Calcula el precio del plato y la bebida multiplicando su precio unitario por la cantidad
        const dishPrice = calculateDishPrice(dish) * dishQuantity;
        const drinkPrice = calculateDrinkPrice(drink) * drinkQuantity;

        // Calcula el subtotal sumando los precios del plato y la bebida
        const subtotal = dishPrice + drinkPrice;

        // Crea un elemento de lista para mostrar en el resumen del pedido
        const orderItem = document.createElement("li");
        orderItem.classList.add("order-item");
        orderItem.innerHTML = `Plato: ${dish} (x${dishQuantity}), Bebida: ${drink} (x${drinkQuantity})`;

        // Agrega el elemento de lista al resumen del pedido
        orderSummary.appendChild(orderItem);

        // Actualiza el total sumando el subtotal y muestra el total en la página
        total += subtotal;
        totalPrice.textContent = total.toFixed();
    });

    // Define una función para calcular el precio del plato basado en el tipo de plato
    function calculateDishPrice(dish) {
        // Define los precios para diferentes tipos de platos
        let comidaRapida = 20000;
        let platoCorriente = 13000;
        let paltoEspecial = 15000;
        let postres = 7000;

        // Usa una estructura 'switch' para determinar el precio según el tipo de plato seleccionado
        switch (dish) {
            case "comida rapida":
                return comidaRapida;
            case "plato correinte":
                return platoCorriente;
            case "plato especial":
                return paltoEspecial;
            case "postres":
                return postres;
            default:
                return 0; // Devuelve 0 si no se encuentra una coincidencia
        }
    }


    function calculateDrinkPrice(drink) {
        // Define los precios para diferentes tipos de bebidas
        let agua = 2500;
        let refresco = 3500;
        let cerveza = 5000;
        let aguardienteTapaRoja = 35000;

        // Usa una estructura 'switch' para determinar el precio según el tipo de bebida seleccionada
        switch (drink) {
            case "agua":
                return agua;
            case "refresco":
                return refresco;
            case "cerveza":
                return cerveza;
            case "aguardiente":
                return aguardienteTapaRoja;
            default:
                return 0; // Devuelve 0 si no se encuentra una coincidencia
        }
    }
});

