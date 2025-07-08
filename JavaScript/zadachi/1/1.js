// // 1 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
// const number = -5;
// if (number < 0) {
//   console.log("число отрицательное");
// } else {
//   console.log("число положительное");
// }

// // 2 Дана строка. Выведите в консоль длину этой строки.

// const string = "fefefe";
// console.log(string.length);

// // 3 Дана строка. Выведите в консоль последний символ строки.

// const string = "fefefe";
// console.log(string[string.length - 1]);

// // 4 Дано число. Проверьте, четное оно или нет.
// const number = 4;
// if (number % 2 === 1) {
//   console.log(`${number} нечетное `);
// } else {
//   console.log(`${number} четное `);
// }

// // 5 Даны два слова. Проверьте, что первые буквы этих слов совпадают.

// const a = "Frfefef";
// const b = "fsdsda";

// if (a[0].toLocaleLowerCase() === b[0].toLocaleLowerCase()) {
//   console.log("первые буквы одинаковые");
// } else {
//   console.log("первые буквы не одинаковые");
// }

// 6 Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

const string = "ававаf";

if (string[string.length - 1].toLocaleLowerCase() === "ь") {
  console.log(string[string.length - 2]);
} else {
  console.log(string[string.length - 1]);
}
