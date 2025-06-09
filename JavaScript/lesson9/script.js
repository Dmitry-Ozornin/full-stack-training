// 1
const formEl = document.querySelector(".checkForm");
const checkboxEl = formEl.querySelector(".checkbox");
const btnEl = document.querySelector(".buttonForm");
const h2El = document.createElement("h2");
h2El.textContent = "Подтвердите согласие";
btnEl.addEventListener("click", function (e) {
  if (!checkboxEl.checked) {
    formEl.insertBefore(h2El, btnEl);
    e.preventDefault();
  } else {
    formEl.removeChild(h2El);
  }
});

const formTSEl = document.querySelector(".formTC");
const radioEl = document.querySelectorAll(".radio");
const bntEL = document.querySelector(".bnt");
const textEl = document.createElement("h2");
// bntEL.addEventListener("click", function (e) { //первый способ
//   for (let i = 0; i < radioEl.length; i++) {
//     if (radioEl[i].checked) {
//       if (radioEl[i].id === "tea") {
//         textEl.textContent = "чай закончился";
//         formTSEl.appendChild(textEl);
//         e.preventDefault();
//       } else  {
//         textEl.textContent = "кофе закончился";
//         formTSEl.appendChild(textEl);
//         e.preventDefault();
//       }
//     }
//   }
// });

// bntEL.addEventListener("click", function (e) { // второй способ
//   radioEl.forEach((element) => {
//     if (element.checked) {
//       textEl.textContent = `${element.nextElementSibling.textContent} закончился`;
//       formTSEl.appendChild(textEl);
//       e.preventDefault();
//     }
//   });
// });

const passFormEl = document.querySelector(".passForm");
const passEl = passFormEl.querySelector(".pass");
const btnPassEl = passFormEl.querySelector(".btnPass");
const h2PassEl = document.createElement("h2");
btnPassEl.addEventListener("click", function (e) {
  if (passEl.value === "пароль") {
    passEl.style.background = "#ccffcc";
    e.preventDefault();
  } else {
    passEl.style.border = "2px solid red";
    passEl.getAttribute;
  }
  // body
});

const inputTextEl = document.querySelector(".inputText");
const h1El = document.querySelector(".text");
inputTextEl.addEventListener("input", function (e) {
  if (!inputTextEl.value) {
    h1El.textContent = "Заголовок";
  } else {
    h1El.textContent = inputTextEl.value;
  }

  // body
});
