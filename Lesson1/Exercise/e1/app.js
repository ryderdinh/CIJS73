import { addItem, array } from './array.js';

let formApp = document.getElementById('form-app');
let result = document.getElementById('result');

formApp.addEventListener('submit', function (e) {
  e.preventDefault();

  // Thêm phần tử vàod mảng array
  addItem(formApp.elements['val-input'].value);

  // Làm trống ô input sau khi thêm vào mảng
  formApp.elements['val-input'].value = '';

  // In kết quả mới ra màn hình
  result.innerHTML = array.join(', ');
});
