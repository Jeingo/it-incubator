function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp]
    } else {
        return "Not Found"
    }
    // Only change code above this line
}

let res = checkObj({"one": 1, "two": 2}, "one")

console.log(res)