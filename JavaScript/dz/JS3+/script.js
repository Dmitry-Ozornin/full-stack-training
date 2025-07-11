document.addEventListener("DOMContentLoaded", function (e) {
  const inputName = document.querySelector(".inputName");
  const inputText = document.querySelector(".inputText");
  const addLits = document.querySelector(".addLits");
  const loadProduct = document.querySelector(".loadProduct");
  const box = document.querySelector(".box");

  addLits.addEventListener("click", function (e) {
    if (inputName.value !== "") {
      if (localStorage.getItem(inputName.value.toLowerCase()) != null) {
        let lowerCase = inputName.value.toLowerCase();
        localStorage.setItem(lowerCase, localStorage.getItem(lowerCase) + "|" + inputText.value);
        inputText.value = "";
        inputName.value = "";
        box.textContent = "";
      } else {
        localStorage.setItem(inputName.value.toLowerCase(), inputText.value);
        inputText.value = "";
        inputName.value = "";
        box.textContent = "";
      }
    }
    newClick();
    Otziv();

    // body
  });

  loadProduct.addEventListener("click", function (e) {
    seeProducts();
    Otziv();
  });

  function seeProducts() {
    box.textContent = " Для просмотра отзывов нажмите на названия продукта";
    if (localStorage.length === 0) {
      box.textContent = " Нет продуктов, на которые был оставлен отзыв";
    } else {
      for (let i = 0; i < localStorage.length; i++) {
        const item = document.createElement("li");
        const del = document.createElement("button");
        const divEl = document.createElement("div");
        item.className = `${localStorage.key(i)}`;
        divEl.className = `${localStorage.key(i)}`;
        del.className = `${localStorage.key(i)}`;
        del.setAttribute("id", "dellAll");
        del.textContent = `удалить продукт ${localStorage.key(i)}`;
        item.textContent = `${localStorage.key(i)}          `;
        divEl.appendChild(item);
        divEl.appendChild(del);
        box.appendChild(divEl);
      }
      newClick();
    }
  }

  function newClick() {
    const delAll = document.querySelectorAll("#dellAll");

    delAll.forEach((element) => {
      element.addEventListener("click", (e) => {
        const classDel = e.target.className;
        localStorage.removeItem(classDel);
        const deldiv = document.querySelector(`.${classDel}`);
        box.removeChild(deldiv);
        seeProducts();

        // body
      });
    });
  }

  function Otziv() {
    const liEl = box.querySelectorAll("div > li");
    liEl.forEach((element) => {
      element.addEventListener(
        "click",
        (e) => {
          box.textContent = "";
          if (e.target) {
            seeOtziv(e.target);
          }
        },
        { once: true },
      );
    });
  }

  function seeOtziv(e) {
    classTarget = e.className;
    const otzivi = String(localStorage.getItem(classTarget));
    if (otzivi !== "") {
      let arr = otzivi.split("|");
      const title = document.createElement("h2");
      title.textContent = classTarget;
      box.appendChild(title);
      for (let i = 0; i < arr.length; i++) {
        const del = document.createElement("button");
        del.setAttribute("id", `${i}`);
        del.className = "dellOtziv";
        del.textContent = "удалить отзыв";
        const textotziv = document.createElement("p");
        textotziv.textContent = `${arr[i]}     `;
        textotziv.className = `${classTarget}`;
        textotziv.appendChild(del);
        box.appendChild(textotziv);
      }
      delOtziv(e);
    } else {
      const title = document.createElement("h2");
      title.textContent = classTarget;
      const text = document.createElement("p");
      text.textContent = `Отызывы по данному продукту не найдены или же были удалены, вы можете оставить свой отзыв`;
      box.appendChild(title);
      box.appendChild(text)
    }
  }

  function delOtziv(e) {
    const classTarger = e.className;
    const delOtzivi = document.querySelectorAll(".dellOtziv");
    delOtzivi.forEach((element) => {
      element.addEventListener(
        "click",
        (e) => {
          if (e.target) {
            console.log(element.parentElement);
            const target = e.target;
            const classOtziv = e.target.id;
            //   console.log(classOtziv);

            box.removeChild(element.parentNode);
            //   console.log(classTarger);
            const finddel = String(localStorage.getItem(classTarger));
            let arr = finddel.split("|");
            console.log(arr);
            const newArr = [];
            for (let i = 0; i < arr.length; i++) {
              if (i !== Number(classOtziv)) {
                newArr.push(arr[i]);
                // localStorage.setItem(classTarger,newArr)
              }
            }
            const newData = newArr.join("|");
            console.log(newData);
            localStorage.setItem(classTarger, newData);
            seeOtziv(e);
          }
          // body
        },
        { once: true },
      );
    });
  }

  // body
});
