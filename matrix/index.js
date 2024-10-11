// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    let num = 1;
    let x = 0, y = 0;
    let direction = 'right';

    const boundaries = {
        top: 0,
        bottom: n - 1,
        left: 0,
        right: n - 1,
    };

    while (num <= n * n) {
        result[y][x] = num++;
        
        if (direction === 'right') {
            if (x < boundaries.right) {
                x++;
            } else {
                direction = 'down';
                boundaries.top++;
                y++;
            }
        } else if (direction === 'down') {
            if (y < boundaries.bottom) {
                y++;
            } else {
                direction = 'left';
                boundaries.right--;
                x--;
            }
        } else if (direction === 'left') {
            if (x > boundaries.left) {
                x--;
            } else {
                direction = 'up';
                boundaries.bottom--;
                y--;
            }
        } else if (direction === 'up') {
            if (y > boundaries.top) {
                y--;
            } else {
                direction = 'right';
                boundaries.left++;
                x++;
            }
        }
    }

    return result;
}
console.log(matrix(2));
module.exports = matrix;
