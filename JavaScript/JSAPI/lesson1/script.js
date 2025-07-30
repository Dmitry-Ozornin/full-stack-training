// 1/1
// 1 Вевести ширину и высоту экрана
const updateSize = () => {
  const windth = window.innerWidth;
  const hight = window.innerHeight;

  const size = document.querySelectorAll(".size");

  width.textContent = windth;
  height.textContent = hight;
};

window.addEventListener("load", updateSize);
window.addEventListener("resize", updateSize);

// 2 Подтверждение закрытия станицы
window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.onbeforeunload = "text";
    // body
});


// 3 Управление истории переходов
goback.addEventListener('load', function (e) {
    window.history.back()
    // body
});

goforward.addEventListener('load', function (e) {
    window.history.forward();
    // body
});