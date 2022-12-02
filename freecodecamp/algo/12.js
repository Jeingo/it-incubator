function frankenSplice(arr1, arr2, n) {
    let arrCopy = arr2.slice()
    arrCopy.splice(n,0,...arr1)
    return arrCopy
}

let res = frankenSplice([1, 2, 3], [4, 5, 6], 1);

console.log(res)