function getIndexToIns(arr, num) {
    if(arr.length === 0) {
        return 0
    }
    let res = arr.sort((a, b) => a - b)
    for(let i = 0; i < arr.length; i++) {
        if(res[i] >= num) {
            return i
        }
    }
    return arr.length
}

let res = getIndexToIns([2, 5, 10], 50);

console.log(res)