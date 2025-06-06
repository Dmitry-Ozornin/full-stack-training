// 1
function ready() {
  console.log("страница загрузилась");
}
document.addEventListener("DOMContentLoaded", ready); // вариант 2

const bodyEl = document.querySelector("body"); // второй вариант
bodyEl.onload = function () {
  console.log("загрузился");
};

window.addEventListener("load", function (event) {
  // вариант 3 наилучший
  console.log("все загрузилось");
  console.log("событие addEventListener");
});

const click = document.querySelector(".btn");
function clicked() {
  console.log("событие onclick");
}

const btn2 = document.querySelectorAll(".btn2");
btn2.forEach((element) => {
  element.addEventListener("click", function (e) {
    const targer = e.target;
    console.log(targer);
  });
});

const btn4El = document.querySelector(".btn4");
let count = 0;
btn4El.addEventListener("click", function () {
  count++;
  console.log(count);
});

const btn5El = document.querySelector(".btn5");
btn5El.addEventListener("click", function () {
  btn5El.textContent = "вы нажали эту кнопку";
});

const addEl = document.querySelector(".add");
const removeEl = document.querySelector(".remove");
addEl.addEventListener("click", function () {
  const h2 = document.createElement("h1");
  h2.textContent = "Новый заголовок";
  h2.classList = "h2El";
  addEl.insertAdjacentElement("afterend", h2);
  // body
});
removeEl.addEventListener("click", function () {
  const h2el = document.querySelector(".h2El");
  if (h2el !== null) {
    h2el.remove();
  }
});

const listenEl = document.querySelector(".listen");
listenEl.addEventListener("mouseover", function (e) {
  console.log("навели ");
});
listenEl.addEventListener("mouseout", function (e) {
  console.log("убрал ");
});

const buttonListEl = document.querySelector(".buttonList");
buttonListEl.addEventListener("click", function () {
  const list = document.querySelector(".list");
  const newList = document.createElement("li");
  newList.textContent = "Новый элемент списка";
  list.appendChild(newList);
});

const buttonRemoveEl = document.querySelector(".buttonListRemove");
buttonRemoveEl.addEventListener("click", function () {
  const list = document.querySelector(".list");
  list.childNodes[0].remove();
});

