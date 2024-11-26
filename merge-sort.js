function mergeSort(array) {
    if (array.length === 0) return 'Please Enter An Array With At Least 1 Item';
    if (!Array.isArray(array)) return 'Please Enter An Array Of Numbers';
    if (array.length === 1) return array;
    const arrayMidpoint = array.length / 2
    const leftArray = array.slice(0, arrayMidpoint);
    const rightArray = array.slice(arrayMidpoint);
    const newLeftArray = mergeSort(leftArray);
    const newRightArray = mergeSort(rightArray);
    const sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    for (i = 0; i < (newLeftArray.length + newRightArray.length); i++) {
        if (typeof newLeftArray[leftIndex] === 'undefined') {
            sortedArray.push(newRightArray[rightIndex++])
        } else if (typeof newRightArray[rightIndex] === 'undefined') {
            sortedArray.push(newLeftArray[leftIndex++])
        } else if (newLeftArray[leftIndex] <= newRightArray[rightIndex]) {
            sortedArray.push(newLeftArray[leftIndex++]);
        } else if (newRightArray[rightIndex] <= newLeftArray[leftIndex]) {
            sortedArray.push(newRightArray[rightIndex++])
        }
    }
    return sortedArray;
}

function mergeSortRefactored(array) {
    if (array.length === 0) return "Please Enter An Array With At Least 1 Item";
    if (!Array.isArray(array)) return "Please Enter An Array Of Numbers";
    if (array.length === 1) return array;
    const left = mergeSort(array.slice(0, array.length / 2));
    const right = mergeSort(array.slice(array.length / 2));
    const sortedArray = [];
    for (let i = 0, lIndex = 0, rIndex = 0; i < (left.length + right.length); i++) {
        if (typeof left[lIndex] === 'undefined' || right[rIndex] <= left[lIndex]) {
            sortedArray.push(right[rIndex++])
        } else if (typeof right[rIndex] === 'undefined' || left[lIndex] <= right[rIndex]) {
            sortedArray.push(left[lIndex++])
        }
    }
    return sortedArray;
}

console.log(mergeSortRefactored([3, 2, 1, 3, 8, 5, 0, 1]));