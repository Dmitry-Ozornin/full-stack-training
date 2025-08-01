

const url = "js/indexJson.json";
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
  const list = document.querySelector(".catalog");
  data.forEach((element) => {
    list.insertAdjacentHTML(
      "beforeend",
      `
      <article class="products" id="${element.id}">
            <div class="dark_add_cart" >
              <img src="${element.image}" alt="product" style="display: block" class="img_cart" />
              <span class="mask">
                <button class="button_add_cart">
                  <svg width="26.004950" height="23.974243" viewBox="0 0 26.0049 23.9742" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      d="M21.4 22.97L21.29 22.97C20.68 22.97 20.17 22.47 20.13 21.83C20.08 21.16 20.57 20.58 21.22 20.54C21.24 20.54 21.27 20.53 21.29 20.53C21.91 20.53 22.43 21.02 22.47 21.65C22.48 21.9 22.44 22.25 22.19 22.55L22.18 22.55L22.18 22.56C21.98 22.79 21.71 22.93 21.4 22.97ZM7.67 22.96C7.02 22.96 6.49 22.42 6.49 21.75C6.49 21.09 7.02 20.54 7.67 20.54C8.32 20.54 8.85 21.09 8.85 21.75C8.85 22.42 8.32 22.96 7.67 22.96Z"
                      fill="#FFFFFF"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      d="M21.33 21.97C21.37 21.96 21.39 21.94 21.41 21.92C21.42 21.91 21.43 21.9 21.44 21.89C21.47 21.85 21.48 21.76 21.47 21.71C21.46 21.61 21.37 21.53 21.29 21.53C21.29 21.53 21.29 21.53 21.28 21.53C21.21 21.54 21.12 21.64 21.12 21.77C21.13 21.88 21.22 21.97 21.29 21.97L21.33 21.97ZM7.67 21.96C7.77 21.96 7.85 21.87 7.85 21.75C7.85 21.64 7.77 21.54 7.67 21.54C7.57 21.54 7.49 21.64 7.49 21.75C7.49 21.87 7.57 21.96 7.67 21.96ZM21.45 23.97C21.4 23.97 21.34 23.97 21.29 23.97C20.15 23.97 19.21 23.06 19.13 21.9C19.05 20.7 19.95 19.62 21.15 19.54C21.2 19.54 21.24 19.53 21.29 19.53C22.43 19.53 23.39 20.44 23.47 21.59C23.5 22.19 23.33 22.76 22.94 23.2C22.56 23.66 22.03 23.92 21.45 23.97ZM7.67 23.96C6.47 23.96 5.49 22.97 5.49 21.75C5.49 20.53 6.47 19.54 7.67 19.54C8.88 19.54 9.85 20.53 9.85 21.75C9.85 22.97 8.88 23.96 7.67 23.96ZM20.65 17.1L8.59 17.1C8.15 17.1 7.77 16.8 7.66 16.38L3.73 1.95L0.97 1.95C0.45 1.95 0.01 1.51 0.01 0.97C0.01 0.44 0.45 0 0.97 0L4.45 0C4.88 0 5.27 0.29 5.38 0.71L9.31 15.14L20.01 15.14L23.57 6.84L11.71 6.84C11.18 6.84 10.75 6.4 10.75 5.86C10.75 5.32 11.18 4.88 11.71 4.88L25.04 4.88C25.36 4.88 25.67 5.04 25.84 5.32C26.02 5.6 26.05 5.94 25.92 6.25L21.53 16.51C21.37 16.87 21.03 17.1 20.65 17.1Z"
                      fill="#FFFFFF"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                    <path
                      d="M21.33 21.97C21.37 21.96 21.39 21.94 21.41 21.92C21.42 21.91 21.43 21.9 21.44 21.89C21.47 21.85 21.48 21.76 21.47 21.71C21.46 21.61 21.37 21.53 21.29 21.53C21.29 21.53 21.29 21.53 21.28 21.53C21.21 21.54 21.12 21.64 21.12 21.77C21.13 21.88 21.22 21.97 21.29 21.97L21.33 21.97ZM7.67 21.96C7.77 21.96 7.85 21.87 7.85 21.75C7.85 21.64 7.77 21.54 7.67 21.54C7.57 21.54 7.49 21.64 7.49 21.75C7.49 21.87 7.57 21.96 7.67 21.96ZM21.45 23.97C21.4 23.97 21.34 23.97 21.29 23.97C20.15 23.97 19.21 23.06 19.13 21.9C19.05 20.7 19.95 19.62 21.15 19.54C21.2 19.54 21.24 19.53 21.29 19.53C22.43 19.53 23.39 20.44 23.47 21.59C23.5 22.19 23.33 22.76 22.94 23.2C22.56 23.66 22.03 23.92 21.45 23.97ZM7.67 23.96C6.47 23.96 5.49 22.97 5.49 21.75C5.49 20.53 6.47 19.54 7.67 19.54C8.88 19.54 9.85 20.53 9.85 21.75C9.85 22.97 8.88 23.96 7.67 23.96ZM20.65 17.1L8.59 17.1C8.15 17.1 7.77 16.8 7.66 16.38L3.73 1.95L0.97 1.95C0.45 1.95 0.01 1.51 0.01 0.97C0.01 0.44 0.45 0 0.97 0L4.45 0C4.88 0 5.27 0.29 5.38 0.71L9.31 15.14L20.01 15.14L23.57 6.84L11.71 6.84C11.18 6.84 10.75 6.4 10.75 5.86C10.75 5.32 11.18 4.88 11.71 4.88L25.04 4.88C25.36 4.88 25.67 5.04 25.84 5.32C26.02 5.6 26.05 5.94 25.92 6.25L21.53 16.51C21.37 16.87 21.03 17.1 20.65 17.1Z"
                      fill="#FFFFFF"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <span class="mask_button">Add to Cart</span>
                </button>
              </span>
            </div>

            <a href="#" class="product_description">
              <h2 class="header_desperation">${element.title}</h2>
              <p class="text_desperation">${element.text}</p>
              <p class="cost_desperation">$${element.price}</p>
            </a>
          </article>
      `,
    );
  });

  list.addEventListener("click", function (e) {
    if (e.target.closest(".button_add_cart")) {
      let cartObj = {};
      const addId = e.target.closest(".products");
      const id = addId.id;
      const addTitle = addId.querySelector(".header_desperation");
      const title = addTitle.textContent;
      console.log(title);
      const addImg = addId.querySelector(".img_cart");
      const img = addImg.src;
      const addSize = addId.querySelector(".img_cart");
      const addColor = addId.querySelector(".img_cart");
      const addPrice = addId.querySelector(".cost_desperation");
      const price = addPrice.textContent;
      const color = addPrice.textContent;
      const size = addPrice.textContent;

      


      cartObj = { id, title, img,price,size,color };
      const jSon = JSON.stringify(cartObj);
      
      fs.writeFileSync("js/ShopingCart.json", jSon);
      console.log(jSon);
      
    }
    // body
  });

  // body
});

//  
//     "price": 300,

//     "color": "red",
//     "size": "XL",
//     
