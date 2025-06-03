// 1
const superLink = document.getElementById("super_link");
console.log(superLink);
// 2
const cardLink = document.querySelectorAll(".card-link");
cardLink.forEach((element) => {
  element.textContent = "ссылка";
});
// 3
const cardBody = document.querySelectorAll(".card-body .card-link");
console.log(cardBody);
// 5
const data50 = document.querySelector('[data-number="50"]');
console.log(data50);
const titleTag = document.querySelector(".title");
// if(titleTag === null){
//     console.log("не найден");

// } else{
//     console.log(titleTag.textContent);

// }
console.log(titleTag ? titleTag.textContent : "не найден");
// 5
const card = document.querySelector(".card");
console.log(card.parentNode);
// 6
const p = document.createElement("p");
p.textContent = "Привет";
card.insertBefore(p, card.firstChild);
// 7
const h6 = document.querySelector('h6');
if(h6){
    h6.remove();
}
