function factorialize(num) {
    if (num === 0) {
        return 1
    }
    let res = num
    for (let i = num; i > 1;) {
        i--
        res = res * i
    }
    return res;
}

let res = factorialize(5);

console.log(res)