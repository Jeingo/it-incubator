function mutation(arr) {
    let one = arr[0].toLowerCase()
    let two = arr[1].toLowerCase()
    let res = true
    for(let i = 0; i < two.length; i++) {
        console.log(one.indexOf(two[i]))
        if(one.indexOf(two[i]) == -1) {
            res = false
        }
    }
    return res
}

let res = mutation(["hello", "he"]);

console.log(res)