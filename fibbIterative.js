function fibIterative(num) {
    const arr = []
    let firstNum = 0;
    let secondNum = 0;
    let total = 0;

    for (let i = 1; i <= num ; i++) {
        if (i === 1) {
            arr.push(0)
        } else if (i === 2) {
            arr.push(1)

        } else {
            firstNum = arr[i - 3];
            secondNum = arr[i - 2];
            total = firstNum + secondNum;
            arr.push(total)
        }
    }

    return arr;
}

console.log(fibIterative(0));
console.log(fibIterative(1));
console.log(fibIterative(2));
console.log(fibIterative(3));
console.log(fibIterative(8));