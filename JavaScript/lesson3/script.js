// 1.1
// function hello(name, surname, age) {
//     console.log(`Привет ${name} ${surname} с возрастом ${age} лет`);

// }

// let name = prompt('Как ваше Имя?');
// let surname = prompt('Как ваша фамилия?');
// let age = prompt('Сколько вам лет?');

// hello(name,surname,age);

// // 1.2
// function square() {
//     let  num = Number(prompt("введите число"));
//     num = Math.pow(num , 2);
//     return num;

// }

// console.log(square());

// // 1.3
// function positiveNegative() {
//   let num = Number(prompt("введите число"));

//   if (num < 0) {
//     console.log("---");
//   } else if (num > 0) {
//     console.log("+++");
//   } else {
//     console.log("вы ввели 0");
//   }
// }

// positiveNegative();

// // // 2.1.2

// let a = Number(prompt("Введите первое число"));
// let b = Number(prompt("Введите второе число"));
// let c = Number(prompt("Введите третье число"));

// function plus(a, b, c) {
//   console.log(a + b + c);
// }

// function sum(a, b, c) {
//   console.log(a + b);
//   console.log(a + c);
//   console.log(c + b);
// }

// plus(a, b, c);
// sum(a,b,c);

// // 2.3
// function func(num = 5) {
//     console.log(num * num);

// }

// func(2);
// func(3);
// func();

// 3.1

// function root(num) {
//   num = Math.sqrt(num);
//   console.log(num);
// }

// num = Number(prompt("введите число"));
// root(num);

// // 3.2
// function min(a, b) {
//   if (a < b) {
//     console.log(`минимальное ${a}`);
//   } else {
//     console.log(`минимальное ${b}`);
//   }
// }

// let a = Number(prompt("Введите первое число"));
// let b = Number(prompt("Введите второе число"));
// min(a,b);

// 4.1
function dayOfWeek(day) {
  if (day === 1) {
    // console.log("Понедельник");
    return "Понедельник";
  } else if (day === 2) {
    return "Вторник";
  } else if (day === 3) {
    return "Среда";
  } else if (day === 4) {
    return "Четверг";
  } else if (day === 5) {
    return "Пятница";
  } else if (day === 6) {
    return "Суббота";
  } else {
    return "Воскрсенье";
  }
}

let day = Number(prompt("введите день недели от 1 до 7"));

console.log(dayOfWeek(day));
