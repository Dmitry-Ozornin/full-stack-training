// 1
// const news = [
//     {
//         text: "fefefewfwefewfwefewfewfewfewfewfewf"
//     },

// ]

// const buttonEl = document.querySelector('.button');
// const newsEl = document.querySelector('.news')

// function fetchNews(news) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(Math.random() > 0.1){
//                 resolve(news)
//             }else{
//                 reject('Ошибка загрузки')
//             }

//         }, 1000);
//      })
// }
// buttonEl.addEventListener('click', function (e) {
//    fetchNews()
//    .then((result) => {
//     news.forEach(list => {
//         const newP = document.createElement('p');
//         newP.textContent = list.text;
//         newsEl.appendChild(newP)

//     });

//    }).catch(err => {
//     newsEl.textContent = `ошибка': ${err}`;

//    });
//     // body
// });

// 2
const add = document.querySelector(".addLits");
const load = document.querySelector(".load");
const update = document.querySelector(".updateList");
const clear = document.querySelector(".clear");
const list = document.querySelector(".list");
const inputEl = document.querySelector(".input");
const boxEl = document.querySelector(".box");
const deleteItemEl = document.querySelector('.deleteItem')

add.addEventListener("click", function (e) {
  if (inputEl.value !== "") {
    localStorage.setItem(localStorage.length + 1, inputEl.value);
  }
  inputEl.value = "";
  // body
  console.log(localStorage.length);
});

load.addEventListener("click", function (e) {
  for (let i = 0; i < localStorage.length; i++) {
    const li = document.createElement("li");
    li.textContent = localStorage.getItem(String(i + 1));
    list.appendChild(li);
  }
  // body
});

update.addEventListener("click", function (e) {
  list.textContent = "";
  for (let i = 0; i < localStorage.length; i++) {
    const li = document.createElement("li");
    li.textContent = localStorage.getItem(String(i + 1));
    list.appendChild(li);
  }
});
const ClearFalse = true;
clear.addEventListener("click", function (e) {
  localStorage.clear();
  list.textContent = "";
  if (list.textContent === "") {
    const text = document.createElement("h2");
    text.textContent = "Список отчищен";
    list.appendChild(text);
  }
});


deleteItemEl.addEventListener('click', function (e) {
 for (let i = 0; i < localStorage.length; i++) {
    if(localStorage[i].getItem(i) === inputEl.value){
        localStorage.removeItem(localStorage[i])
    }
    
    
 }
    // body
});

