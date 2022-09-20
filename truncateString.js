function truncateString(str, num) {
  if (str.length > num) {
    console.log(str.slice(0, num) + "...");
  } else {
    console.log(str);
  }
}

truncateString("Hola boas", 3);

//Solucion
// function truncateString(str, num) {
//     if (str.length > num) {
//       return str.slice(0, num) + "...";
//     } else {
//       return str;
//     }
//   }
