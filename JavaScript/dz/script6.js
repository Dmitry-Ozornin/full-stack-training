// Задание 1
const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7,
};
for (const el in numbers) {
  if (numbers[el] >= 3) {
    console.log(numbers[el]);
  }
}

// Задание 2
const post = {
  author: "John",
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2,
      },
    },
    {
      userId: 5,
      userName: "Jane",
      text: "lorem ipsum 2",
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Задание 3
const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

products.forEach((el) => {
  el.price = el.price * 0.85;
  console.log(`после уменьшения на 15% цена id:${el.id} = ${el.price}`);
});

// задание 4
const products1 = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg , 2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

const withPhoto = products1.filter((products1) => products1.photos && products1.photos.length > 0);
console.log("C фото ", withPhoto);

const sortPrice = products1.slice().sort((a, b) => a.price - b.price);
console.log(sortPrice);

// задание 5
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const week = {};
if (en.length === ru.length) {
  for (let i = 0; i < en.length; i++) {
    week[en[i]] = ru[i];
  }
} else{
    console.log("массивы не равны");
    
}

console.log(week);

