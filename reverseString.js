function reverseString(str) {
  const strArray = str.split("");
  const reversedString = [];
  for (let i = strArray.length - 1; i >= 0; i--) {
    reversedString.push(strArray[i]);
  }
  console.log(reversedString.join(""));
}

reverseString("elephant");

//Solucion
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// reverseString("hello");
