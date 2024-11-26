function fibs(number) {
    let array = [];
    for (i = 0; i < number; i++) {
        if (i === 0) {
            array.push(first);
        } else if (i === 1) {
            array.push(second);
        } else {
            array.push(array[i - 1] + array[i - 2])
        }
    }
    return array;
}

function fibsRec(number) {
    if (number <= 0) return 'Please Enter a Positive Number'
    if (number === 1) return [0, 1];
    const fibsArray = fibsRec(number - 1);
    fibsArray.push(fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2])
    return fibsArray;
}







function fibonacciRecursive(number) {
    if (number <= 0) return 'Please Enter Number';
    if (number === 1) return [0, 1];
    const fibArray = fibonacciRecursive(number - 1);
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    return fibArray;
}

console.log(fibonacciRecursive(2));