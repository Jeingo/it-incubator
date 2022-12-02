function repeatStringNumTimes(str, num) {
    let res = ""
    if(num > 0) {
        for (let i = 0; i < num; i++) {
            res = res + str
        }
        return res
    } else {
        return res
    }
}

let res = repeatStringNumTimes("abc", 3);

console.log(res)