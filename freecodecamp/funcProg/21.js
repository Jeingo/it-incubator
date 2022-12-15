// Only change code below this line
function urlSlug(title) {
    const res = title.toLowerCase().split(/\W/).filter(v => v !== '').join('-')
    return res
}
// Only change code above this line
console.log(urlSlug(" Winter Is  Coming"))