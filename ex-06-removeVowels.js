/**
 * removeVowels()
 *
 * Write a function called `removeVowels()`.
 * It should accept a string as input,
 * and it should return a new string without the vowels.
 *
*/

function removeVowels(string){
	let word= "";
	for(i = 0; i < string.length; i++){
		if (string[i] != "a" &&
	    if (string[i] != "e" &&
        if (string[i] != "i" &&
        if (string[i] != "o" &&
        if (string[i] != "u" &&
        if (string[i] != "A" &&
        if (string[i] != "E" &&
        if (string[i] != "I" &&
        if (string[i] != "O" &&
        if (string[i] != "U" ) {
        	word += string[i];
        }
	}
  return word;
}







//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert( removeVowels('milk') === 'mlk' );
console.assert( removeVowels('christmas') === 'chrstms' )
console.assert( removeVowels('moo shoo pork') === 'm sh prk' )

//should handle capital letters
console.assert( removeVowels('Out of Order') === 't f rdr' )
console.assert( removeVowels('Estados Unidos') === 'stds nds' )
