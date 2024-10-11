// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let arr = [...str];
    arr[0] = arr[0].toUpperCase()
    for (let i=1; i < arr.length; i++){
        if (arr[i] == ' ' && i < arr.length){
            arr[i+1] = arr[i+1].toUpperCase();       
        }
    }
    return arr.join('')
}
console.log(capitalize('a lazy fox'));
module.exports = capitalize;
