function sumAll(arr) {
    let sum = 0
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    sum = max + min
    for(let i = 1; i < max - min; i++) {
        const tmp = max - i
        sum += tmp
    }
    return sum
}

console.log(sumAll([5, 10]));