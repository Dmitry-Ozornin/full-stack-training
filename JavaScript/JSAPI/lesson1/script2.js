document.addEventListener("DOMContentLoaded", function (e) {
  const add = document.querySelector(".add");
  const del = document.querySelector(".del");
  const clone = document.querySelector(".clone");
  const boxes = document.querySelector(".boxes");

  add.addEventListener("click", (e) => {
    if (boxes.childElementCount !== 0) {
      const newEl = document.createElement("div");
      newEl.className = "box";
      const count = boxes.childElementCount;
      newEl.textContent = count +1

      boxes.appendChild(newEl);

      // body
    } else {
      const newEl = document.createElement("div");
      newEl.className = "box";
      const count = boxes.childElementCount;
      newEl.textContent = 1;
      boxes.appendChild(newEl);
    }
  });

  clone.addEventListener("click", (e) => {
    if (boxes.childElementCount !== 0) {
      const lastEl = boxes.lastElementChild;
      const clone = lastEl.cloneNode(true);
      boxes.appendChild(clone);
    }

    // body
  });

  del.addEventListener("click", function (e) {
    if (boxes.childElementCount > 0) {
      const last = boxes.lastElementChild;
      boxes.removeChild(last);
    }
    // body
  });
  // body
});
