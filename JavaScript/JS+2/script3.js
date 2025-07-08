const buttonEl = document.querySelector(".button");
const inputEl = document.querySelector(".input");
const textEl = document.querySelector(".text");
buttonEl.addEventListener("click", function (e) {
  try {
    const whatInput = inputEl.value;
    if (isNaN(whatInput)) {
      throw new Error("Это не число");
    } else if (whatInput == "") {
      throw new Error("Вы ничего не ввели");
    }
    textEl.textContent = "вы ввели число";
  } catch (error) {
    textEl.textContent = error.message;
  }

  //   if (!isNaN(inputEl.value)) {
  //     textEl.textContent = "Введено число";
  //   } else if (inputEl.value === null){
  //     textEl.textContent = "Ничего не введено";
  //   }

  // body
});
