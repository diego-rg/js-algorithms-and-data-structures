function factorialize(num) {
  const numbers = [];
  for (let i = num; i >= 1; i--) {
    numbers.push(i);
  }
  const initialValue = 1;
  const mutiplyArrayItems = numbers.reduce(
    (previousValue, currentValue) => previousValue * currentValue,
    initialValue
  );
  console.log(mutiplyArrayItems);
}

factorialize(6);

// Solucion
// function factorialize(num) {
//   if (num === 0 || num === 1)
//     return 1;
//   for (var i = num - 1; i >= 1; i--) {
//     num *= i;
//   }
//   return num;
// }
// factorialize(5);
