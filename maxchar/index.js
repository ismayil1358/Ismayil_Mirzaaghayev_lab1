// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let arr = [...str].sort();
    let arr2 = [];
    let num = 1;

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            arr2.push([arr[i], num]);
            num = 1;
        } else {
            num++;
        }
    }
    let max = arr2[0][1];
    let maxChar = arr2[0][0];

    for (let i = 1; i < arr2.length; i++) {
        if (arr2[i][1] > max) {
            max = arr2[i][1];
            maxChar = arr2[i][0];
        }
    }

    return maxChar;
}

console.log(maxChar('aaapple'));

module.exports = maxChar;