//user input
let a = prompt('enter a number');
let b = prompt('enter the second number');

let temp;
temp = a;
a = b;
b = temp;

console.log('the valu a after swapping: ${a}');
console.log('the valu b after swapping:${b}');