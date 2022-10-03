function bouncer(arr) {
  const newArr = arr.filter((num) => (num ? num : ""));
  console.log(newArr);
}

bouncer([7, "ate", "", false, 9]);

//Solucion
// function bouncer(arr) {
//     return arr.filter(Boolean);
//   }
