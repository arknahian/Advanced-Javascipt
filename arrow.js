// function doubleIt(num){
//     return num * 2;                  //function expression
// }

// const doubleIt = function(num){
//     return num * 2;                     //function declaration 
// }

// const doubleIt = num => num * 2;          // arrow function


const give5 = () => 5;
const output = give5();
console.log(output)

const doubleIt = (num, num2=2) => {
    return num * num2;
}
const result = doubleIt(5);
console.log(result);




