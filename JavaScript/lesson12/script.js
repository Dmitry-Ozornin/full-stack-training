//  function mergeArrays(mas1,mas2) {
//     return [...mas1,...mas2];

// }
const mergeArrays = (mas1, mas2) => [...mas1, ...mas2];
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// function removeDublicates(...params) {
//     return params.filter((vel, index) => params.indexOf(vel) === index)
// }

const removeDublicates = (...params) => params.filter((vel, index) => params.indexOf(vel) === index);
console.log(removeDublicates(1, 2, 3, 2, 4, 1, 5));

function getEventNumbers2(num) {
  return num.filter((item) => item % 2 === 0);
}

const getEventNumbers3 = (num) => num.filter((item) => item % 2 === 0);

console.log(getEventNumbers2([1, 3, 5, 3, 5, 32, 564, 3, 2]));
console.log(getEventNumbers3([1, 3, 5, 3, 5, 32, 564, 3, 2]));

function calculateAvarge(params) {
  let sum = 0;
  for (let i = 0; i < params.length; i++) {
    sum += params[i];
  }
  return sum / params.length;
}

const calculateAvarge2 = (num) => {
  const sum = num.reduce((acc, item) => acc + item, 0);
  return sum / num.length;
};
console.log(calculateAvarge([1, 3, 5, 3, 5, 32, 564, 3, 2]));
console.log(calculateAvarge2([1, 3, 5, 3, 6, 12, 343, 4342, 55]));

const capitalizeFirstLetter = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(capitalizeFirstLetter("hello world"));

function createCalculator(initialValue) {
  let value = initialValue;
  return {
    add: function (num) {
      value += num;
    },
    subtract: function (num) {
      value -= num;
    },
    getValue: function () {
      return value;
    },
  };
}

const calculater = createCalculator(10);
calculater.add(5);
calculater.subtract(3);
calculater.subtract(5);
console.log(calculater.getValue());

function createGreeting(getName) {
  return function () {
    console.log(`Hello ${getName}`);
  };
}

const greeting = createGreeting("John");
greeting();

function createPasswordChecker(Maxlenght) {
  return function (password) {
    return password.length <= Maxlenght;
  };
}

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid("password1")); // Ожидаемый результат: false
console.log(isPasswordValid("secret")); // Ожидаемый результат: true

function sumDigits(num) {
  if (num < 10) {
    return num;
  }

  return (num % 10) + sumDigits(Math.floor(num / 10));
}

console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)
