function chunkArrayInGroups(arr, size) {
    let res = []

    for(let i = 0; i < arr.length; i+=size) {
        let tmp = arr.slice(i,i+size)
        res.push(tmp)
    }
    return res
}

let res = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)

console.log(res)