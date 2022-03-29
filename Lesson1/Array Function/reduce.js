/* 
Function này được sử dụng để thực thi một function nhất định cho tất cả 
các phần tử của mảng, với một giá trị tịnh tiến và trả lại một giá trị 
duy nhất.
*/

const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((total, item) => {
  // sum item and total, then assign the value back to the total
  console.log(total);
  return total + item;
});

console.log(sum);
