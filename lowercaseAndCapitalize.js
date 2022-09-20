function titleCase(str) {
  const lowerCaseStr = str.toLowerCase();
  const array = lowerCaseStr.split(" ");
  const capitalizeArray = [];
  for (let i = 0; i < array.length; i++) {
    capitalizeArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
  }
  const joined = capitalizeArray.join(" ");
  console.log(joined);
}

titleCase("I'm a little tea pot");

// Solucion:
// function titleCase(str) {
//     const newTitle = str.split(" ");
//     const updatedTitle = [];
//     for (let st in newTitle) {
//       updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
//     }
//     return updatedTitle.join(" ");
//   }
