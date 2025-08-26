const N = 7;
let staff = [10, 3, 21, 23, 6, 3, 8];
const K = 4;
let x = 0;
let number = 0;
let sum = 0;
let count = 0;
while (count < K) {
  number = Math.max(...staff);
  console.log(number);
  sum = sum + number;
  staff.splice(staff.indexOf(number), 1);

  count++;
}
x = sum;
console.log(x);
//  x = Math.max(...staff);
//  console.log(x);
