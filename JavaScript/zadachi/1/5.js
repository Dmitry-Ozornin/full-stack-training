// // 1 Найдите сумму всех целых чисел от 1 до 100.
// let sum =  0;
// let i = 0;
// while(i < 100){
//     sum = sum + i;
//     i++
// }
// console.log(sum);

// // 2 Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

// let sum = 0;
// let i = 1;
// while (i < 100) {
//   if (i % 2 === 1) {
//     i++;
//   } else {
//     // console.log(i);
//     sum = sum + i;
//     i++;
//   }
// }
// console.log(sum);

// 3 Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
// let sum = 0;
// let i = 1;
// while (i < 100) {
//   if (i % 2 !== 1) {
//     i++;
//   } else {
//     // console.log(i);
//     sum = sum + i;
//     i++;
//   }
// }
// console.log(sum);

// 4 Даны два целых числа. Найдите остаток от деления первого числа на второе.
// const num1 =  12
// const num2 = 5
// console.log(num1%num2);

// 5 Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

const string = "fegfewff";
for (let i = 0; i < string.length; i++) {
  console.log(string[string.length - i]);
}
