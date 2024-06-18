function fibRecursive(numArr) {
    let arr = [];

    if (numArr <= 0) {
        return arr;
    } 
   
    if (numArr === 1) {
        arr = [0];
        const arrCopy = arr.slice();
        return arrCopy;
    }

    if (numArr === 2) {
        arr = [0, 1]
        const arrCopy = arr.slice();
        return arrCopy;
    }
   
   
   
    // else if (numArr === 1) {
    //     // arr = [0];
    //     return arr.concat(fibRecursive(0));
    // } 
    // else if (num === 2) {
    //     // arr = [fibRecursive(num - 1), 1];
    //     return arr.concat(fibRecursive(num - 1));
    // }

    

    // if (num === 0) {
    //     arr.push(0)
    //     return arr;
    // } else if (num === 1) {
    //     arr.push(1);
    //     return arr;
    // } 
    // else {
    //     arr.push()
    //     return fibRecursive(num - 1) + fibRecursive(num - 2);
    // }
}

console.log(fibRecursive(0));
console.log(fibRecursive(1));
console.log(fibRecursive(2));
// console.log(fibRecursive(3));
// console.log(fibRecursive(4));
// console.log(fibRecursive(5));
// console.log(fibRecursive(6));
// console.log(fibRecursive(7));

const arr = [0];
const arr2 = [];
arr.concat(arr2.push(1))
// console.log(arr);
// console.log(arr.concat([1]));
// console.log(arr);
