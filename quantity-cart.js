const shopppingCart = [
    {name: 'shoe',price: 2200, quantity: 2},
    {name: 'shirt',price: 1600, quantity: 5},
    {name: 'pant',price: 3500, quantity: 7},
    {name: 'belt',price: 550,quantity: 1}
];

function totalCost (products){
    let sum = 0;
    for(let i = 0; i < products.length; i++ ){
        const product = products[i];
        const productTotal = product.price * product.quantity;

        sum = sum + productTotal;
    }
    return sum;
}

const expense = totalCost(shopppingCart);
console.log('total expense today ', expense)