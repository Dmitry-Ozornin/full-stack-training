window.addEventListener("DOMContentLoaded", () => {
  async function randomPhoto() {
    const key = "dcqm5H7BmLgu82jb3CA7D-VT1EigmbfBKWIn_td0A1g";
    try {
      const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${key}`);
      const photo = await response.json();
      return photo;
    } catch (error) {
      console.error("Ошибка ", error);
      return {};
    }
  }

  async function photoRender() {
    const photo = await randomPhoto();
    if (photo) {
      const boxEl = document.querySelector(".box");
      const imgEl = document.querySelector(".photo");
      const likeCount = document.querySelector(".like__count");
      const namePhotographerEl = document.querySelector(".namePhotographer");
      imgEl.src = photo.urls.small;
      imgEl.alt = photo.alt_description;
      namePhotographerEl.textContent = `${photo.user.name}`;
      likeCount.textContent = `${photo.likes}`;
    } else {
      console.log("cбой");
    }
  }

  const buttonLikes = document.querySelector(".like__button");
  buttonLikes.addEventListener("click", function (e) {
    click();
    // body
  });

  function click() {
    if (buttonLikes.value !== "true") {
      const likeCount = document.querySelector(".like__count");
      const namePhotographerEl = document.querySelector(".namePhotographer");
      const name = namePhotographerEl.textContent;
      const currentLikes = parseInt(likeCount.textContent, 10);
      likeCount.textContent = currentLikes + 1;
      buttonLikes.setAttribute("value", "true");
      localStorage.setItem(`${name}`, JSON.stringify("лайк"));
    } else {
      const likeCount = document.querySelector(".like__count");
      const namePhotographerEl = document.querySelector(".namePhotographer");
      const name = namePhotographerEl.textContent;
      const currentLikes = parseInt(likeCount.textContent, 10);
      likeCount.textContent = currentLikes - 1;
      buttonLikes.setAttribute("value", "false");
      localStorage.removeItem(`${name}`);
    }
  }
  photoRender();
  // body
});
