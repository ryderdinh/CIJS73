import { addToArray, arr } from './array.js';

const formBox = document.getElementById('form-box');
const result = document.getElementById('result');

formBox.addEventListener('submit', (event) => {
  event.preventDefault();

  let inputData = formBox.elements['input-box'].value;
  addToArray(inputData);
  formBox.elements['input-box'].value = '';

  let resultHTML = '';
  for (let i = 0; i < arr.length; i++) {
    resultHTML += `<p>${arr[i]}</p>`;
  }

  console.log(resultHTML);

  result.innerHTML = resultHTML;
});

// result.innerHTML = '1213';
