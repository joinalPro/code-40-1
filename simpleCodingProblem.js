//Find out smallelst number in Array

// const myNumbers = [12, 32, 11, 55, 1, 3];
// const smallNum = Math.min(myNumbers);
// console.log(smallNum)


const myNumbers = [12, 32, 11, 55, 1, 3];

let result = myNumbers[0];
for(let i = 0; i < myNumbers.length; i++){
    if(myNumbers[i] < result){
        result = myNumbers[i];
    }
}
console.log(result);