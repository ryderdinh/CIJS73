// Assignment separated from declaration
let x, y;
[x, y] = [1, 2];
// // Default value
// const [a = 2, b = 3] = [1]; // a = 1, b = 3

// // Ignore some value
// const [a, , b] = [1, 2, 3]; // a = 1, b = 3

// // Use with rest
// const [a, ...b] = [1, 2, 3]; // a = 1, b = [2, 3]

// // Nested object
// const person = {
//   name: 'MindX',
//   address: { city: 'Hanoi', street: 'Nguyen Chi Thanh' }
// };
// const {
//   name,
//   address: { city, street }
// } = person;
// // name = "MindX", city = "Hanoi", street = "Nguyen Chi Thanh"

// // Destrucring on params
// const sayHello = ({ name }) => {
//   console.log(`Hello, my name is ${name}`);
// };

// sayHello({ name: 'MindX', age: 7 });

// Advance deep array
let [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];
