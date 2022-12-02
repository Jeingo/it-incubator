function bouncer(arr) {
    return arr.filter(Boolean)
}

let res = bouncer([7, "ate", "", false, 9]);

console.log(res)