function getIndexToIns(arr, num) {
  const fullArray = [...arr, num];
  const orderedArray = fullArray.sort((a, b) => a - b);
  const index = orderedArray.indexOf(num);
  console.log(index);
}

getIndexToIns([2, 20, 10], 19);

//Solución
// function getIndexToIns(arr, num) {
//   arr.sort((a, b) => a - b);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= num)
//       return i;
//   }

//   return arr.length;
// }
