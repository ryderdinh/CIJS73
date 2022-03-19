// Wrong: multiple rest operator
const sum1 = (...first, ...second) => {console.log(first, second)}

// Wrong: rest operator cannot be the first params
const sum2 = (...first, second, third) => {console.log(first, second,third)}

// Correct
const sum3 = (first, second, ...third) => {console.log(first, second,third)}