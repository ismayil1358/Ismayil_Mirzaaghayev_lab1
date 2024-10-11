// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const totcol = 2 * n - 1;

    for (let row = 1; row <= n; row++) {
        const numofhash = 2 * row - 1;
        const numofspace = (totcol - numofhash) / 2;

        const level = ' '.repeat(numofspace) + '#'.repeat(numofhash) + ' '.repeat(numofspace);
        console.log(level);
    }
}
console.log(pyramid(3));
module.exports = pyramid;
