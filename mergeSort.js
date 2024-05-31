/**
 * an input of: 
 * [3, 2, 1, 13, 8, 5, 0, 1] should return:
 * [0, 1, 1, 2, 3, 5, 8, 13],
 * 
 * and an input of:
 * [105, 79, 100, 110] should return: 
 * [79, 100, 105, 110].
 * 
 * pseudocode:
 * - sort the left half of the array
 * - sort the right half of the array
 * - merge the two halves together
 */

function mergeSort(arr) {
    if (arr.length === 0) {
        return arr;
    } 

    const arrLeft = arr.slice(0, 2);
    const arrRight = arr.slice(2);

    console.log(arrLeft);
    console.log(arrRight);
}

console.log(mergeSort([4, 2, 6]));

/**
 * []
 * [] []
 * [4] [2] [6]
 */