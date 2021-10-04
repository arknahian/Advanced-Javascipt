const numbers = [1,2,3,3,4,5];


// const output = [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);




// function square(element) {
//     return element * element;
// }                                            //first phrase of using map

// const x = numbers.map(square);
// console.log(x);




// const x = numbers.map(function(element){
//     return element * element;                       //direct function declare
// })


// const result = numbers.map(x => x * x);              //shortest



const result = numbers.map(x => {
    return x * x;                                       //multiple declaration
})

console.log(result);