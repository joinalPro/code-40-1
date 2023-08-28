const phones = [
    {name: 'samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    {name: 'walton', camera: 12, storage: '32gb', price: 24000, color: 'silver' },
    {name: 'iphone', camera: 12, storage: '32gb', price: 80000, color: 'silver' },
    {name: 'Oppo', camera: 12, storage: '32gb', price: 30000, color: 'silver' },
    {name: 'Nokia', camera: 12, storage: '32gb', price: 12000, color: 'silver' },
    {name: 'Htc', camera: 12, storage: '32gb', price: 19000, color: 'silver' }
]

function cheapestPrice (phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPrice(phones)
console.log(mySelection)