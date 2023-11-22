document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("order-form");
    const orderSummary = document.getElementById("order-summary");
    const totalPrice = document.getElementById("total-price");

    let total = 0;

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    document.getElementById("add-to-order").addEventListener("click", function () {
        const dish = document.getElementById("select-dish").value;
        const dishQuantity = parseInt(document.getElementById("dish-quantity").value);
        const drink = document.getElementById("select-drink").value;
        const drinkQuantity = parseInt(document.getElementById("drink-quantity").value);

        const dishPrice = calculateDishPrice(dish) * dishQuantity;
        const drinkPrice = calculateDrinkPrice(drink) * drinkQuantity;
        const subtotal = dishPrice + drinkPrice;

        const orderItem = document.createElement("li"); 
        orderItem.classList.add("order-item");
        orderItem.innerHTML = `Plato: ${dish} (x${dishQuantity}), Bebida: ${drink} (x${drinkQuantity})`;

        orderSummary.appendChild(orderItem);

        total += subtotal;
        totalPrice.textContent = total.toFixed();
    });

    function calculateDishPrice(dish) {
        // Define los precios
        let comidaRapida = 20000;
        let platoCorriente = 13000;
        let paltoEspecial = 15000;
        let postres = 7000;


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
                return 0; 
        }
    }

    function calculateDrinkPrice(drink) {
    
        let agua = 2500;
        let refresco = 3500;
        let cerveza = 5000;
        let aguardienteTapaRoja = 35000;





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
                return 0; 
        }
    }
});
