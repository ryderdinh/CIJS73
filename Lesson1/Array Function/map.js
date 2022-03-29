/* 
Function này được sử dụng với mục đích để “biến đổi” các phần tử trong mảng 
theo một “công thức” nhất định mà không thay đổi giá trị của mảng ban đầu
 */

const arr = [1, 2, 3];

const arr2 = arr.map((item) => {
  return item * 2; // transform every item by double it.
});

console.log(arr2);
console.log(arr);
