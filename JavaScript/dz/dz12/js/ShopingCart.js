const url = "js/ShopingCart.json";
async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

document.addEventListener("DOMContentLoaded", async (e) => {
  const data = await getData(url);
  const list = document.querySelector(".basket__products");
  data.forEach((element) => {
    list.insertAdjacentHTML(
      "beforeend",
      `
        <article class="basket_box" id="${element.id}">
            <img src="${element.img}" alt="foto" class="basket__products_img" />
            <article class="card">
              <h2 class="card_head">
                ${element.title}
              </h2>
              <article class="card_parameters">
                <div class="card_parameters_list">
                  <p class="card_parameters_list_choice">Price: <span class="card_parameters_list_choice_price">${element.price}</span></p>
                  <p class="card_parameters_list_choice">Color: <span class="card_parameters_list_choice_text">${element.color}</span></p>
                  <p class="card_parameters_list_choice">Size: <span class="card_parameters_list_choice_text">${element.size}</span></p>
                  <p class="card_parameters_list_choice">Quantity: <input class="card_parameters_list_choice_text border" type="number" min="1" value="1"/></p>
                </div>
              </article>
            </article>
            <button class="card_remove" style="border: none; width: 18px; height: 18px; background-color: white; cursor: pointer; position: relative; ">
              <svg width="18.000000" height="18.000000" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <desc></desc>
                <defs />
                <path
                  id="Vector1"
                  d="M11.24 9L17.53 2.71C17.82 2.41 17.99 2.01 17.99 1.59C17.99 1.17 17.82 0.76 17.53 0.46C17.23 0.16 16.83 0 16.4 0C15.98 0 15.58 0.16 15.28 0.46L9 6.75L2.71 0.46C2.41 0.16 2.01 0 1.59 0C1.16 0 0.76 0.16 0.46 0.46C0.16 0.76 0 1.16 0 1.59C0 2.01 0.16 2.41 0.46 2.71L6.75 9L0.46 15.28C0.16 15.58 0 15.98 0 16.4C0 16.83 0.16 17.23 0.46 17.53C0.76 17.83 1.16 18 1.59 18C2.01 18 2.41 17.83 2.71 17.53L9 11.24L15.28 17.53C15.58 17.83 15.98 18 16.4 18C16.83 18 17.23 17.83 17.53 17.53C17.83 17.23 18 16.83 18 16.4C18 15.98 17.83 15.58 17.53 15.28L11.24 9Z"
                  fill="#575757"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </svg>
            </button>
          </article>
      
      `,
    );
  });

  list.addEventListener("click", function (e) {
    if (e.target.closest(".delete")) {
      const item = e.target.closest(".card");
      if (item) {
        item.remove();
      }
    }
    // body
  });

  // body
});
