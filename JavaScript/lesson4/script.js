// 1.1
// const arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// // 1.2
// const arr = [1, 2, 3];
// console.log(arr.length);

// 1.3
// const arr = ["a", "b", "c"];
// for (let i = 0; i < arr.length; i++) {
//   if (i === 0) {
//     arr[i] = 1;
//   } else if (i === 2) {
//     arr[i] = -2;
//   } else {
//     arr[i] = -3;
//   }
// }
// console.log(arr);

// 2.1
// const arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = ++arr[i];
//   console.log(arr[i]);
// }

// 2.2
// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length );

// 2.3
// const arr = [1,2,3];
// arr.push(4);
// arr.push(5);
// console.log(arr);

// 2.4
// const arr = [1, 2, 3, 4, 5];
// arr.pop();
// arr.shift();
// console.log(arr);
// console.log(arr.length);

// // 3.1
// for (let i = 0; i < 100; i++) {
//   if (i >= 11 && i <= 33) {
//     console.log(i);
//   }
// }

// 3.2
// for (let i = 1; i < 99; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   } else {
//     continue;
//   }
// }

// 3.3
// for (let i = 100; i >= 0; i--) {
//   console.log(i);
// }

// 3.4
// let num = 2;
// for (let i = 0; i < 99; i++) {
//   num = num * 3;
//   if (num > 1000) {
//     console.log(num /3);
//     console.log(i--);
//     break
//   } else{
//     continue
//   }
// }

// 4.1
// const arr = [2, 5, 9, 15, 1, 4];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     console.log(arr[i]);
//   } else {
//     continue;
//   }
// }

// 4.2
// let num = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     num = num + i;
//   } else {
//     continue;
//   }
// }
// console.log(num);

// 4.3
// let sum = 0;
// const arr = [2, 5, 9, 3, 1, 4];
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// console.log(sum);

// 4.4
// let string = "-";
// for (let i = 0; i <= 9; i++) {
//   string += i + "-";
// }
// console.log(string);

// 4.5;
// const arr = [2,5,9,0,3,1,4];
// for (let i = 0; i < arr.length; i++) {
//     if ( arr[i] !== 0){
//         console.log(arr[i]);

//     } else {
//         break
//     }

// }
