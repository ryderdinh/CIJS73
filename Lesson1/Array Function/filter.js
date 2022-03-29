/* 
Function này được sử dụng với mục đích để lọc các phần tử trong mảng theo một điều kiện 
nhất định mà không làm thay đổi giá trị của mảng ban đầu.
*/

const arr = [1, 2, 3];

const arr2 = arr.filter((item) => {
  return item % 2 === 0; // Get all even number
});

// console.log(arr2);
// console.log(arr);
