// const p1 = document.querySelector("#block p:first-child");
// console.log(p1);

// const p2 = document.querySelector(".www:first-child");
// console.log(p2);

// const a = document.querySelector(".link");
// a.textContent = "link text js";
// a.href = "https://developer.mozilla.org/ru/";

// const photo = document.querySelector(".photo");
// photo.src = "https://i.pinimg.com/originals/72/fa/97/72fa97f2aa13a64d7575b3f50cf54557.jpg";

// const contentEl = document.querySelector(".content");
// const textEl = document.createElement("p");
// textEl.textContent = "Новый текстовый элемент";
// contentEl.appendChild(textEl);
// contentEl.removeChild(textEl);
// const buttonEl = document.createElement("button");
// buttonEl.textContent = "кнопака";
// contentEl.appendChild(buttonEl);
// let countClick = 0;
// buttonEl.onclick = function () {
//   console.log(++countClick);
// };

const contentEl = document.querySelector(".content");
const buttonEl = document.createElement("button");
buttonEl.textContent = "Отправить";
contentEl.appendChild(buttonEl);
let countClick = 0;
buttonEl.onclick = function () {
    ++countClick;
    if (countClick === 1){
        buttonEl.textContent = "Текст отправлен";
    }
};
