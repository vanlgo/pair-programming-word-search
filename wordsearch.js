// Check to find the word horizontally and vertically
// Return true if the word is found, and return false if the word is not found

// start by editing the code in wordsearch.js to allow the tests to pass.
//  What if the word is written vertically, not horizontally? 
// What about the case where the word matrix is an empty array? 
// you might also have to modify the wordSearch function to make those new tests pass.

const wordSearch = (letters, word) => { 
    if (!word) {
      return undefined;
    } else if (!letters || letters.length === 0) {
      return undefined;
    }
  
    let verticalArray = [];
  
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let i = 0; i < horizontalJoin.length; i++) {
  
      if (horizontalJoin[i] === word) {
          return true;
      } 
    }
    
    for (let j = 0; j < letters[0].length; j++) {
      let tempArray = [];
      for (let k = 0; k < letters.length; k++) {
        tempArray.push(letters[k][j]);
      }
      verticalArray.push(tempArray);
    }
  
    const verticalJoin = verticalArray.map(ls => ls.join(''))
    for (let i = 0; i < verticalJoin.length; i++) {
  
      if (verticalJoin[i] === word) {
          return true;
      } 
    }
  
    return false;
  }
  
  wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'FRANK')
  
  module.exports = wordSearch