// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let arr=[...str];
    arr=arr.reverse();
    let r='';
    for(let el of arr){
        r+=el;
    }
    return r;
}
console.log(reverse('abcd'));
module.exports = reverse;
