function truncateString(str, num) {
    if (str.length <= num) {
        return str
    } else {
        let res  = str.split("").splice(0,num)
        res.push('.','.','.')
        return res.join('')
    }
}

const res = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)

console.log(res)