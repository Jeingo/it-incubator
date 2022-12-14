const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Only change code below this line
    const arrNew = arr.slice()
    return arrNew.sort((a, b) => a - b)

    // Only change code above this line
}

nonMutatingSort(globalArray);