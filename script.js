// JavaScript for managing the cart
const cartItems = [];

function addToCart(productName) {
    cartItems.push(productName);
    displayCart();
}

function displayCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = ''; // Clear the current list
    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => {
            cartItems.splice(index, 1);
            displayCart();
        };
        li.appendChild(removeButton);
        cartList.appendChild(li);
    });
}