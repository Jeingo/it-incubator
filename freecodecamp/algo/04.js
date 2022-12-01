function findLongestWordLength(str) {
    let longestWord = ''
    let arr = str.split(' ')
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > longestWord.length) {
            longestWord = arr[i]
        }
    }
    return longestWord.length
}

let  res = findLongestWordLength("The quick brown fox jumped over the lazy dog");

console.log(res)