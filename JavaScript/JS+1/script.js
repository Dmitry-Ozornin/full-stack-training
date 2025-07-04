// 1
// функция добавления метаданных в объект
// function addMetadata(book, metadataType, data) {
//   if (book[metadataType]) {
//     book[metadataType].push(data);
//   } else {
//     book[metadataType] = [data];
//   }
//   book[metadataType] = data;
// }

// // функция для извлечения меданных их объекта
// function getMetadata(book, metadataType) {
//   return book[metadataType];
// }

// // создание объекта книги и добавление метаданных
// const book = {
//   title: "1984",
//   author: "George Orwell",
// };

// const revievSymbol = Symbol("reviev");
// const ratingSymbol = Symbol("rating");
// const tagsSymbol = Symbol("tags");

// addMetadata(book, revievSymbol, "Отличная книга о дистопии");
// addMetadata(book, ratingSymbol, 5);
// addMetadata(book, tagsSymbol, "dystopia");

// // Вывод метаданных для книги
// console.log(getMetadata(book, revievSymbol));
// console.log(getMetadata(book, ratingSymbol));
// console.log(getMetadata(book, tagsSymbol));

// 2
// const books = [
//   {
//     title: "1984",
//     author: "George Orwell",
//   },
//   {
//     title: "Brave New World",
//     author: "Aldous Huxley",
//   },
//   {
//     title: "Farenheit 451",
//     author: "Ray Bradbury",
//   }
// ];

// books[Symbol.iterator] = function () {
//   return {
//     current: 0,
//     to: this.length,
//     next() {
//       return this.current < this.to ? { done: false, value: books[this.current++] } : { done: true };
//     },
//   };
// };

// for (const book of books) {
//   console.log(`название: ${book.title}, автор: ${book.author}`);
// }


// 3
// const divElements = Array.from(document.querySelectorAll('div'));
// // const activeDivs = divElements.filter(el => el.hasAttribute('data-active'));
// const activeDivs = divElements.filter(el => el.dataset.active);
// activeDivs.forEach(element => {
//     console.log(element);
    
// })


// 4

const lessons = new Map();
lessons.set("math", 'smirnov');
lessons.set('history', 'ivanova');

const ivanLessons = new Set().add('math').add('history');

const students = new Map();
students.set("Ivan", ivanLessons);

console.log(`преподователь по математике: ${lessons.get('math')}`);
console.log(`Уроки Ивана: ${[...students.get('Ivan')]}`);


