const number = [2,3,4,5,6,4];
// const squaredNum = [];
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const square = element * element;
//     squaredNum.push(square);
// }

number.map(function(element, index, array) {
    // console.log(element * element);
    // console.log(index)
    // console.log(array)
})
number.forEach(function(element){
    // console.log(element)
})

number.forEach(x => {
    // console.log(x * x);
})

const arr = [1,2,3,4];
// arr.forEach(x => console.log(x*x));

const mapping = arr.map(x => {
    return x * x;
})

console.log(mapping);


