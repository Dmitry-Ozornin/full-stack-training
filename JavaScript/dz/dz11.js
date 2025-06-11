const dataJson = JSON.parse(data);
console.log(data);

function addProduct(element) {
  const listProd = document.querySelector("#product-list");
  element.forEach((el) => {
    const liEl = document.createElement("li");
    const imgEl = document.createElement("img");
    imgEl.src = el.image;
    imgEl.alt = el.title;
    imgEl.width = 200;
    imgEl.height = 200;

    const h2El = document.createElement("h2");
    h2El.textContent = el.title;

    const deskEl = document.createElement("p");
    deskEl.textContent = el.description;

    const price = document.createElement("p");
    price.textContent = el.price.toFixed(2);

    const buttonEl = document.createElement("button");
    buttonEl.className = "add-to-cart";
    buttonEl.setAttribute("data-id", element.id);
    buttonEl.textContent = "Add to Cart";

    liEl.append(imgEl, h2El, deskEl, price, buttonEl);
    listProd.append(liEl);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  addProduct(dataJson);
});
