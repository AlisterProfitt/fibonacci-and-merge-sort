function fibs(number) {
    let first = 0;
    let second = 1;
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