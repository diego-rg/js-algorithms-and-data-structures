function mutation(arr) {
  const firstItemCharacters = arr[0].toLowerCase().split("");
  const secondItemCharacters = arr[1].toLowerCase().split("");
  let checkItemsResults = [];
  for (let i = 0; i < secondItemCharacters.length; i++) {
    checkItemsResults.push(
      firstItemCharacters.includes(secondItemCharacters[i])
    );
  }
  console.log(checkItemsResults.includes(false) ? false : true);
}

mutation(["hello", "hey"]);

//Solucion
// function mutation(arr) {
//     let test = arr[1].toLowerCase();
//     let target = arr[0].toLowerCase();
//     for (let i = 0; i < test.length; i++) {
//       if (target.indexOf(test[i]) < 0) return false;
//     }
//     return true;
//   }
