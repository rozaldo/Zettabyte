// Question
// Given a object data, return the data multiple by 3 and sort the data.
// Expected output : { j: 0, k: 9, i: 18, l: 36 }

const data = { i: 6, j: null, k: 3, l: 12 };

function result(data) {
  // write your code here
  Object.keys(data).forEach(function (key) {
    data[key] *= 3;
  });
  return Object.entries(data).sort((a, b) => a[1] - b[1]);
}

console.log(result(data));