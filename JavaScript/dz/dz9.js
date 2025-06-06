window.addEventListener("DOMContentLoaded", function () {
  console.log("Все теги подгрузились");
});
window.addEventListener("load", function () {
  console.log("Страница загрузилась");
});

const el = document.querySelector("body");
el.addEventListener("click", (e) => {
  const tap = e.target;
  const nameTag = tap.tagName.toLowerCase();
  const className = tap.classList.contains("super_element");
  if (className) {
    console.log(`класс есть в элементе ${nameTag}`);
  } else {
    console.log(`класса нет в элементе ${nameTag}`);
  }
});

const textAr = el.querySelector("textarea");
textAr.addEventListener("mouseover", function (element) {
  console.log("вы навели на textarea");
});

const ulEl = el.querySelector("ul");
ulEl.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log(e.target.textContent);
  }
});

// Событие клика 5 задания происходитт раньше 3 , так как 5 обрабатывается быстрее чем третье.

const liEl = ulEl.querySelectorAll("li");
liEl.forEach((e, i) => {
  if (i % 2 === 1) {
    e.style.backgroundColor = "red";
  }
});
