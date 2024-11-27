function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const mid = Math.floor(array.length / 2)
    const leftSorted = mergeSort(array.slice(0, mid)) 
    const rightSorted = mergeSort(array.slice(mid)) 
    return merge(leftSorted, rightSorted)
}

function merge(leftArray, rightArray) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            result.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(leftArray.slice(leftIndex), rightArray.slice(rightIndex));
}

console.log(mergeSort([1, 5, 2, 7, 6, 0, 3, 4]));