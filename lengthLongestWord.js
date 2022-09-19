function findLongestWordLength(str) {
  const wordsToArray = str.split(" ");
  const wordsLength = [];
  for (let i = 0; i < wordsToArray.length; i++) {
    wordsLength.push(wordsToArray[i].length);
  }
  const longestWordLength = Math.max(...wordsLength);
  console.log(longestWordLength);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Solucion
// function findLongestWord(str) {
//     var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
//     return longestWord[0].length;
//   }
//   findLongestWord("The quick brown fox jumped over the lazy dog");
