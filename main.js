const buyNow1 = document.getElementById("buy-now1");
const buyNow2 = document.getElementById("buy-now2");
const cartSpan = document.getElementById("cart-span");
const cartResult = cartSpan.innerText;

let counter = 0;

const itemPrice1 = document.getElementById('item-price-1');
const cart1BoxPrice = document.getElementById('cart-box-1-price')
const cart1BoxPriceTotal = document.getElementById('cart-box-1-totalprice')

buyNow1.addEventListener("click", function () {
    counter++;
    cartSpan.innerText = counter;

    const result = itemPrice1.innerText;
    cart1BoxPrice.innerText = result;

});

buyNow2.addEventListener("click", function () {
    counter++;
    cartSpan.innerText = counter;
});


function productCart(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productInputNumber = productInput.value;
    if (isIncreasing) {
        productInputNumber = parseInt(productInputNumber) + 1;
    }
    else if (productInputNumber > 0) {
        productInputNumber = parseInt(productInputNumber) - 1;
    }
    productInput.value = productInputNumber;

    const updateProduct = document.getElementById(product + '-total');
    updateProduct.innerText = productInputNumber * price;

    calculateTotal();
}

function productQuantity(product) {
    const quntity = document.getElementById(product + '-number');
    const productQuantity = parseInt(quntity.value);
    return productQuantity;

}
function calculateTotal() {
    const phoneTotal = productQuantity('laptop') * 500;
    const caseTotal = productQuantity('phone') * 200;

    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-ammount').innerText = tax;
    document.getElementById('total-price').innerText = total;



}



// Laptop handle
document.getElementById('laptop-plus').addEventListener('click', function () {
    productCart('laptop', 500, true)
})
document.getElementById('laptop-minus').addEventListener('click', function () {
    productCart('laptop', 500, false)
})
// Phone handle
document.getElementById('phone-plus').addEventListener('click', function () {
    productCart('phone', 200, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    productCart('phone', 200, false)
})




