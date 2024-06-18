function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } 

    const half = Math.floor(arr.length / 2);
    const left = arr.slice(0, half);
    const right = arr.slice(half);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const sortedArray = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArray.push(left.shift());
        } else {
            sortedArray.push(right.shift());
        }
    }
    return sortedArray.concat(left.slice()).concat(right.slice());
}

console.log(mergeSort([10, 2, 1, 76])); // Output should be [1, 2, 10, 76]
