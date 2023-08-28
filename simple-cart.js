const shopppingCart = [
    {name: 'shoe',price: 2200},
    {name: 'shirt',price: 1600},
    {name: 'pant',price: 3500},
    {name: 'belt',price: 550}
];

function totalCost (products){
    let sum = 0;
    for(let i = 0; i < products.length; i++ ){
        const product = products[i];
        sum = sum + product.price;
    }
    return sum;
}

const expense = totalCost(shopppingCart);
console.log('total expense today ', expense)