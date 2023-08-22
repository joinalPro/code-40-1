function getFactorial(number){
    let factorialNum = 1;
    for(let i = 1; i <= number; i++){
        factorialNum = factorialNum * i;
        
    }
    return factorialNum;
}
const factorial = getFactorial(5)
console.log(factorial)