// 1.1;
// let days = {
//   1: "Понедельник",
//   2: "Вторник",
//   3: "Среда",
// };
// console.log(days[2]);

// 1.2
// let user = {
// name: "Dima",
// surname: "Ivanov",
// age: "30" };
// const userArr = [];

// function exit (){
// for (const key in user) {
//   userArr.push(user[key]);
// }
// let string = "";
// for (let i = 0; i < userArr.length; i++) {
//   if (i < userArr.length - 1) {
//     string = string + userArr[i] + "-";
//   } else {
//     string = string + userArr[i];
//   }
// }
// return string;
// }
// // console.log(exit());

// // 1.3
// user.patronymic = prompt("отчество");
// console.log(user);
// console.log(exit());

// // 1.4
// delete user.surname;
// console.log(user);

// // 2.1
// const arr1 = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// let obj = {};
// for (let i = 0; i < 7; i++) {
//   obj[arr1[i]] = arr2[i];
// }
// console.log(obj);

// 2.2
// const obj = {x: 1, y: 2, z: 3};
// for (const element in obj) {
//     obj[element] =  obj[element] ** 2;

// }
// console.log(obj);

// 3.1
// const obj = {
//   key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//   },
//   key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//   },
//   key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//   },
// };
// let sum = 0;
// первый вариант
// for (const key in obj) {
//   const newObj = obj[key];
//   for (const el in newObj) {
//     sum = sum + newObj[el];
//   }
// }
// второй вариант
// for (const keyUp in obj) {
//   for (const keyIn in obj[keyUp]) {
//     sum = sum + obj[keyUp][keyIn];
//   }
// }

// второй вариант

// console.log(sum);

const riddles = {
  question: "зимой и летом одним цветом",
  answer: "елка",
  
  asQkuestion(count) {
    
    if (count > 0){
    let userAnswer = prompt(this.question);
    if (userAnswer === this.answer) {
      console.log("молодец");
      
    } else {
      console.log("вы проиграли");
      count--;
      console.log(`у вас осталось ${count} попыток`);
      
      riddles.asQkuestion(count);

    }
  }
  }
};
let count = 3;
riddles.asQkuestion(count);
