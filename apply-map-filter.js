const student = [
    {id: 12, name: "Justin"},
    {id: 16, name: "Charlie"},
    {id: 17, name: "Ed"},
    {id: 19, name: "Harry"},
    {id: 29, name: "Shawn"},
];

// const output = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     const name = element.name;                       //ordinary version
//     output.push(name);
// }
// console.log(output);


const names = student.map(s => s.name);
const biggerId = student.filter(s => {
    const id = [];
    id.push(s.id > 16);
    return id;
});
console.log(names);
console.log(biggerId);