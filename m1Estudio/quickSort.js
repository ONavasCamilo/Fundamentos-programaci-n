function quickSort(array) {
    if (array.length < 1) {
        return []
    }
    let left = []
    let right = []
    let pivot = array[0]

    for(let i = 1; i < array.length; i++) {
        if (array[i] < pivot) left.push(array[i])
        else right.push(array[i])
    }
    return [].concat(quickSort(left), pivot, quickSort(right))

}

console.log(quickSort([4, 9, 2, 1, 6, 3, 5, 8]));
