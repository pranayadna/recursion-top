// with for loop
function fibs(num) {
    let fibArr = [];

    for (let i = 0; i < num; i++) {
        if (i < 2) {
            fibArr.push(i);
        } 
        else {
            fibArr[i] - 1 + fibArr[i] - 2;   
        }
        
    }

    return fibArr;
}

console.log(fibs(3));

// function fibsRec(count) {
//     let fibArr = [];
//     let num = count - 1;

//     if (count === 0) {
//         return [];
//     }

//     if (num < 2) {
//         return num;
//     } else {
//         return fibsRec(num - 1) + fibsRec(num - 2);
//     }
// }
