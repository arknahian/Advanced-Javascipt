const numbers = [2,3,4,5,32,43,543];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];                              //normal way 
//     if (element > 5) {
//         console.log(element)
//     }
// }

const bigger = numbers.filter(x => x > 5);       // with filter
console.log(bigger);