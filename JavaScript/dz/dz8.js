// 1
const dropdownEL = document.querySelectorAll(".dropdown-item");
dropdownEL.forEach((element) => {
  element.classList = element.classList + " super-dropdown";
});

2;
const btnEL = document.querySelector(".btn");
if (btnEL.classList.contains("btn-secondary")) {
  btnEL.classList.remove("btn-secondary");
} else {
  btnEL.classList = btnEL.classList + " btn-secondary";
}

// 3
const menuEL = document.querySelector(".menu");
menuEL.classList.remove("dropdown-menu");

// 4
const dropdownDiv = document.querySelectorAll("div");
// console.log(dropdownDiv);
dropdownDiv.forEach(element => {
  if (element.classList.contains("dropdown")) {
    console.log(element);
    element.insertAdjacentHTML('afterend', '<a href="#">link</a>');
  }
});

// 5
const dataEl = document.getElementById("dropdownMenuButton");
console.log(dataEl);
dataEl.id = 'superDropdown';

// 6
const atrEl = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
console.log(atrEl);
atrEl.setAttribute('dada-dd', '3');

// 7
const typeEl = document.querySelector(".dropdown-toggle");
typeEl.removeAttribute("type");
console.log(typeEl);





