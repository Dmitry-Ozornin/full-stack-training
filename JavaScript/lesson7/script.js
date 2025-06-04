// 1
// const block = document.querySelector('.block');
// const itemEl = document.createElement('div');
// itemEl.classList.add('item');
// itemEl.textContent = "text in item";
// itemEl.style.color = "blue";
// itemEl.style.border = '1px solid black';
// itemEl.style.backgroundColor = '#f8f8f8f';
// itemEl.style.padding = '16px';
// itemEl.setAttribute('class', 'item item_1')
// block.appendChild(itemEl);

// 2
// const textEl = document.querySelector('.text');

// console.log(textEl.previousElementSibling); //предыдущие элемент
// const parantEl = textEl.parentElement;
// console.log(parantEl);

// console.log(parantEl.previousElementSibling);
// const imgEl = parantEl.previousElementSibling;
// console.log(imgEl.parentElement);

// 3
// let itemEl = document.querySelector(".subtitle");

// while (itemEl.parentElement) {
//   itemEl = itemEl.parentElement;
//   console.log(itemEl);
// }

// 4
const formEl = document.querySelector(".form");
const but = formEl.querySelector(".btn");
const inputEL = formEl.querySelector(".input__form");
const h2El = document.createElement('h2');
h2El.textContent = "вы не заполнили поле ввода";

but.onclick = function () {
  if (inputEL.value) {
   h2El.remove();
   inputEL.style.border = '1px solid black';
 
  } else {
    formEl.appendChild(h2El);
    inputEL.style.border = '1px solid red';
  }

};
