const bodyEl = document.querySelector("body");
const divEl = document.createElement("div");
bodyEl.appendChild(divEl);
const dataEl = JSON.parse(data);
console.log(dataEl);
dataEl.message.forEach((element) => {
  bodyEl.insertAdjacentHTML("beforeend", `<img src=${element}>`);
});
