function booWho(bool) {
  console.log((bool === true) | (bool === false) ? true : false);
}

booWho(123);

//solucion
//   function booWho(bool) {
//     return typeof(bool) === "boolean"
//   }

//   booWho(null);
