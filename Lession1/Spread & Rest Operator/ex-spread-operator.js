const arr = [4, 5, 6];
const arr2 = [1, 2, 3];

// use spread for getting a list of number.
const max = Math.max(...arr); // 6

// copy all elements from arr to another array and add 7 to tail
let arrCloned = [...arr, 7]; // [4, 5, 6, 7]

// copy all elements from arr to another array and add 3 to head
arrCloned = [3, ...arr]; // [3, 4, 5, 6]

// concat 2 arrays and add a number in between
const concatedArray = [...arr, 0, ...arr2]; // [4, 5, 6, 0, 1, 2, 3]

const obj = { name: 'MindX' };

// copy all fields in object to another object and add field
const obj2 = { ...obj, address: 'Hanoi' }; // {name: "MindX", address: "Hanoi"}

// copy all fields in object to another object and overwrite field
const obj3 = { ...obj, name: 'Code Intensive' }; // {name: "Code Intensive"}
const obj4 = { name: 'Code Intensive', ...obj }; // {name: "MindX"}
