function largestOfFour(arr) {
  const largest = [];
  for (let i = 0; i < arr.length; i++) {
    largest.push(Math.max(...arr[i]));
  }
  console.log(largest);
}

largestOfFour([
  [9, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 2001, 857, 1],
]);

//Solucion
// function largestOfFour(mainArray) {
//     return mainArray.map(function(subArray) {
//       return Math.max.apply(null, subArray);
//     });
//   }
//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
