function fibbIterative(num) {
    const arrFibb = [];
    const arr = []
    let firstNum = 0;
    let secondNum = 0;
    let total = 0;

    for (let i = 0; i <= num ; i++) {
        if (i === 0) {
            arrFibb.push(0);
            arr.push(0)
        } else if (i === 1) {
            arrFibb.push(1);
            arr.push(1)

        } 
        
        else {
            firstNum = arr[i - 2];
            secondNum = arr[i - 1];
            console.log(firstNum, secondNum);
            total = firstNum + secondNum;
            arr.push(total)
        }
    }

    arr.pop();
    return arr;
}

console.log(fibbIterative(16));
