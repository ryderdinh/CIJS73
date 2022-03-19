// // Function expression, hoisting supported
// function sum(a, b) {
//   console.log('sum 2 numbers');
//   console.log(this);
//   return a + b;
// }

// // Anonymous function, no hoisting supported
// const sum = function (a, b) {
//   console.log('sum 2 numbers');
//   return a + b;
// };

// Arrow function, no hoisting supported
const sum = (a, b) => {
  console.log('sum 2 numbers');
  console.log(this);
  return a + b;
};

console.log(sum(1, 2));
