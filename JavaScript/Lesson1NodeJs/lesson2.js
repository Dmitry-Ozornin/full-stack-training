const np = require("number-precision");
function calculateResultsSum(purchases, discount) {
  let total = purchases.reduce((acc, purchases) => np.plus(acc + purchases), 0);
  total = np.times(total, discount);
  return total;
}

const total = calculateResultsSum([12.1, 32.2, 43.1], 0.9);
console.log(total);
