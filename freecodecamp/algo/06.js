function confirmEnding(str, target) {
    let helper = str.slice(-target.length)
    if (helper === target) {
        return true
    } else {
        return false
    }
}

confirmEnding("Bastian", "n");