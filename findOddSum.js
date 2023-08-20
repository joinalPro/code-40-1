function getSum(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}
function getOddNumbers(numbers){
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++){
            const index = i;
            const element = numbers[index];
            if(element % 2 === 1){
                console.log(index, element)
                oddNumbers.push (element);
            }
    } return oddNumbers;
}   



const myNumbers = [11,23,43,17,45,53];
getSum(myNumbers);

const oddNumbers = getOddNumbers(myNumbers);

const oddNumberSum = getSum(oddNumbers);
console.log(oddNumberSum)