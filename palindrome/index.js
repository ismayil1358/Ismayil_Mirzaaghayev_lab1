// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let arr1 = [...str];
    let arr2 = [...str].reverse();
    let bool = false;
    for (let i = 0; i < arr1.length; i ++) {
        if (arr1[i] == arr2[i]) {
            bool = true;
        }
        else {
            bool = false;
        }
    }
    return bool;
}
console.log(palindrome('abc'));
module.exports = palindrome;
