// let sum = 0;
// for (let i = 0; i<=7; i++){
//     sum = sum + i;
//     console.log(i, sum);
// }

function sumOfNUmbers (number){
    let sum = 0;
    for(let i = 0; i <= number; i++){
        sum = sum + i;
        console.log(i, sum)
    }
    return sum;
}
sumOfNUmbers(5);