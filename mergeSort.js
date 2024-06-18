function mergeSort(arr) {
    let arrNew = [];

    if (arr.length === 1) {
        return arr;
    } 

    if (arr.length % 2 === 0) {
        const mid = Math.floor(arr.length / 2);
        const arrLeft = arr.slice(0, mid);
        const arrRight = arr.slice(mid);

        const arrNewRight = mergeSort(arrRight);
        const arrNewLeft = mergeSort(arrLeft);

        let leftIndex = 0;
        let rightIndex = 0;

        while (rightIndex < arrNewRight.length && leftIndex < arrNewLeft.length) {            
            if (arrNewLeft[leftIndex] > arrNewRight[rightIndex]) {
                arrNew.push(arrNewRight[rightIndex]);
                arrNewRight.splice(rightIndex,1);
            } else if (arrNewLeft[leftIndex] < arrNewRight[rightIndex]) {
                arrNew.push(arrNewLeft[leftIndex]);
                arrNewLeft.splice(leftIndex,1);
            } 
        }

        if (arrNewLeft.length >= 1) {
            return arrNew.concat(arrNewLeft); 
        } else if (arrNewRight.length >= 1) {
            return arrNew.concat(arrNewRight); 
        }

    } else if (arr.length % 2 !== 0) {
        const mid = Math.floor(arr.length / 2);
        const arrLeft = arr.slice(0, mid + 1);
        const arrRight = arr.slice(mid + 1);

        const arrNewRight = mergeSort(arrRight);
        const arrNewLeft = mergeSort(arrLeft);

        let leftIndex = 0;
        let rightIndex = 0;

        while (rightIndex < arrNewRight.length && leftIndex < arrNewLeft.length) {
            if (arrNewLeft[leftIndex] > arrNewRight[rightIndex]) {
                arrNew.push(arrNewRight[rightIndex]);
                arrNewRight.splice(rightIndex,1);
            } else if (arrNewLeft[leftIndex] < arrNewRight[rightIndex]) {
                arrNew.push(arrNewLeft[leftIndex]);
                arrNewLeft.splice(leftIndex,1);
            } 
        }

        if (arrNewLeft.length >= 1) {
            return arrNew.concat(arrNewLeft); 
        } else if (arrNewRight.length >= 1) {
            return arrNew.concat(arrNewRight); 
        }
    }

}

console.log(mergeSort([869,856,593,888,487,897,845,97,0,111,999]));