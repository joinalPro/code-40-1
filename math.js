const num1 = 25;
const num2 = 35;
const gap = Math.abs(num1 - num2);

console.log(gap)
if(gap < 5){
    console.log('YES');
}
else {
    console.log('No');
}
const number = 12.41232;
const fullNumber = Math.round(number);
console.log (fullNumber);

const fullCeil = Math.ceil(number);
console.log(fullCeil);
const random = Math.round(Math.random() * 2);
console.log(random);

for (let i = 0; i < 20; i++){
    const random = Math.round(Math.random() * 6);
    console.log(random);
}